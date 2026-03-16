import Reveal from "./reveal"

export default function Contact() {

  const whatsappMessage =
    "Hello AGPN, I would like to make an inquiry about your programs and opportunities.";

  const emailSubject =
    "Inquiry about AGPN Programs and Opportunities";

  const emailBody =
    "Hello AGPN,%0D%0A%0D%0AI would like to learn more about your programs, global opportunities, and how I can get involved.%0D%0A%0D%0AThank you.";

  return (
    <Reveal>
    <section className="bg-white pb-16 px-6">
      <div className="max-w-6xl mx-auto bg-[#222222] text-white rounded-2xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">

        <h2 className="text-2xl font-extrabold text-white">
          Stay Connected
        </h2>

        <div className="mt-4 space-y-3 text-white/90">

          {/* Email */}
          <a
            href={`mailto:info@agpnlimited.com?subject=${emailSubject}&body=${emailBody}`}
            className="block hover:text-white transition"
          >
            <span className="font-semibold">📧 Email:</span>{" "}
            info@agpnlimited.com
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/2348107647503?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-white transition"
          >
            <span className="font-semibold">📱 Phone/WhatsApp:</span>{" "}
            +2348107647503
          </a>

        </div>

        <div className="mt-5 h-[2px] w-14 bg-[#1F3164]" />

        <p className="mt-6 font-semibold text-white">
          AGPN: Bridging Untapped Talent to Global Opportunity
        </p>

      </div>
    </section>
    </Reveal>
  );
}