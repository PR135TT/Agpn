// Netlify Function: emails a Partnership / Sponsorship request.
// Save as: netlify/functions/send-partnership-form.js
// Reachable at /.netlify/functions/send-partnership-form (no extra config needed).
//
// Environment variables (Netlify > Site configuration > Environment variables):
//   RESEND_API_KEY      your Resend API key (shared with the career function)
//   SPONSOR_FROM_EMAIL  e.g. "AGPN Partnerships <partnerships@agpnlimited.com>"
//                       falls back to CAREER_FROM_EMAIL if not set
//   SPONSOR_TO_EMAIL    where requests are delivered; separate several with commas
//                       falls back to CAREER_TO_EMAIL if not set

const FIELDS = [
  ["Full Name", "name"],
  ["Email Address", "email"],
  ["Phone Number", "phone"],
  ["Applying as", "applicantType"],
  ["Organization / Company Name", "organizationName"],
  ["Role / Position", "role"],
  ["Organization Website", "website"],
  ["Partnership Interest", "partnershipType"],
  ["Impact level", "impactLevel"],
  ["Interest in supporting AGPN", "interestDescription"],
  ["Support they can provide", "supportType"],
  ["Estimated investment", "investmentRange"],
  ["Additional comments", "comments"],
];

const json = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Keep header values (subject) on one line.
const oneLine = (value) => String(value).replace(/[\r\n]+/g, " ").trim();

// Checkbox groups arrive as arrays; everything else as strings.
const asText = (value) =>
  Array.isArray(value) ? value.join(", ") : String(value ?? "").trim();

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid request" });
  }

  // Honeypot: pretend success so bots learn nothing
  if (data.company) return json(200, { ok: true });

  if (!asText(data.name)) return json(400, { error: "Name is required" });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(asText(data.email))) {
    return json(400, { error: "A valid email address is required" });
  }

  const apiKey = process.env.RESEND_API_KEY || process.env.RESEND_ACTUAL_API_KEY;
  const from = process.env.SPONSOR_FROM_EMAIL || process.env.CAREER_FROM_EMAIL;
  const to = process.env.SPONSOR_TO_EMAIL || process.env.CAREER_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("Email environment variables are not set");
    return json(500, { error: "Email is not configured" });
  }

  const rows = FIELDS.map(([label, key]) => [label, asText(data[key])]).filter(
    ([, value]) => value
  );

  const html = `
    <h2 style="margin:0 0 12px;color:#1F3164">New Partnership / Sponsorship Request</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${rows
        .map(
          ([label, value]) => `
        <tr>
          <td style="border:1px solid #dde3f3;background:#eef1fa;font-weight:bold;vertical-align:top;width:220px">${escapeHtml(label)}</td>
          <td style="border:1px solid #dde3f3;vertical-align:top;white-space:pre-wrap">${escapeHtml(value)}</td>
        </tr>`
        )
        .join("")}
    </table>`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const organization = asText(data.organizationName);
  const subject = oneLine(
    `New partnership request: ${asText(data.name)}${organization ? ` – ${organization}` : ""}`
  );

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((address) => address.trim()),
        reply_to: asText(data.email),
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      console.error("Email provider error:", response.status, await response.text());
      return json(502, { error: "Could not send request" });
    }

    return json(200, { ok: true });
  } catch (error) {
    console.error("Send failed:", error);
    return json(502, { error: "Could not send request" });
  }
};