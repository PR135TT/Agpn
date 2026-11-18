// Netlify Function: emails a Career Pathways application.
// Save as: netlify/functions/send-career-application.js
// It is reachable at /.netlify/functions/send-career-application with no extra config.
//
// Environment variables (Netlify > Site configuration > Environment variables):
//   RESEND_API_KEY       your Resend API key
//   CAREER_FROM_EMAIL    e.g. "AGPN Applications <applications@agpnlimited.com>"
//                        (must be an address on a domain you verified in Resend)
//   CAREER_TO_EMAIL      where applications are delivered; separate several with commas

const FIELDS = [
  ["Full Name", "fullName"],
  ["Email Address", "email"],
  ["WhatsApp Phone Number", "whatsapp"],
  ["Country of Residence", "country"],
  ["State", "state"],
  ["City", "city"],
  ["Programme", "programme"],
  ["Other programme (specified)", "otherProgramme"],
  ["Highest level of education", "education"],
  ["Employment status", "employment"],
  ["Has laptop or desktop", "hasComputer"],
  ["Has reliable internet", "hasInternet"],
  ["Hours per week", "hoursPerWeek"],
  ["Reason for applying", "reason"],
  ["How they heard about AGPN", "heardFrom"],
  ["Confirmed information is accurate", "declarationAccurate"],
  ["Understands admission is not guaranteed", "declarationNoGuarantee"],
  ["Consents to email / WhatsApp contact", "declarationContact"],
];

const REQUIRED = ["fullName", "email", "whatsapp", "programme", "reason"];

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

  const missing = REQUIRED.filter((key) => !String(data[key] || "").trim());
  if (missing.length) {
    return json(400, { error: `Missing: ${missing.join(", ")}` });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
    return json(400, { error: "Invalid email address" });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY || process.env.RESEND_ACTUAL_API_KEY;
  const { CAREER_FROM_EMAIL, CAREER_TO_EMAIL } = process.env;
  const missingVars = [
    ["RESEND_API_KEY", RESEND_API_KEY],
    ["CAREER_FROM_EMAIL", CAREER_FROM_EMAIL],
    ["CAREER_TO_EMAIL", CAREER_TO_EMAIL],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missingVars.length) {
    console.error("Missing environment variables:", missingVars.join(", "));
    // Names only, never values. Safe to keep; remove `missing` later if you prefer.
    return json(500, { error: "Email is not configured", missing: missingVars });
  }

  const rows = FIELDS.filter(([, key]) => String(data[key] || "").trim()).map(
    ([label, key]) => [label, String(data[key]).trim()]
  );

  const html = `
    <h2 style="margin:0 0 12px;color:#1F3164">New Career Pathways Application</h2>
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

  const programme =
    data.programme === "Other" && data.otherProgramme
      ? `Other: ${data.otherProgramme}`
      : data.programme;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CAREER_FROM_EMAIL,
        to: CAREER_TO_EMAIL.split(",").map((address) => address.trim()),
        reply_to: String(data.email).trim(),
        subject: oneLine(`New application: ${data.fullName} – ${programme}`),
        html,
        text,
      }),
    });

    if (!response.ok) {
      const providerMessage = await response.text();
      console.error("Email provider error:", response.status, providerMessage);
      return json(502, {
        error: "Could not send application",
        provider: { status: response.status, message: providerMessage.slice(0, 300) },
      });
    }

    return json(200, { ok: true });
  } catch (error) {
    console.error("Send failed:", error);
    return json(502, { error: "Could not send application" });
  }
};