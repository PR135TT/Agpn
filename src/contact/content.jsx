import ContactForm from "../components/contactForm";
import Reveal from "../components/reveal"

export default function Content() {

  return (
    <>
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: contact channels (WHITE blocks) */}
          <div className="space-y-6">
            {[
              {
                title: "GENERAL INQUIRIES",
                desc: "For questions about AGPN, our ecosystem, or how to get involved.",
                lines: [
                  "Email: info@agpnlimited.com",
                  "Phone: +2349107647503 (Call / WhatsApp)",
                ],
              },
              {
                title: "SPONSORSHIPS & EMPOWERMENT",
                desc: "For organizations and individuals interested in supporting talent development and human capital empowerment.",
                email: "Email: sponsorship@agpnlimited.com"
              },
              {
                title: "PARTNERSHIPS & UNIVERSITY COLLABORATIONS",
                desc: "For institutional partnerships, education pathways, and employer collaborations.",
                email: "Email: partnerships@agpnlimited.com"
              },
              {
                title: "FOUNDER DIRECT",
                desc: "For strategic conversations and high-level engagements.",
                email: "Email: claudius@agpnlimited.com"
              },
              {
                title: "CAREERS & TEAM OPPORTUNITIES",
                desc: "Join AGPN as an instructor, advisor, or operations contributor. Roles are commission-based and impact-driven.",
                email: "Email: careers@agpnlimited.com"
              },
            ].map((card, i) => (
              <Reveal key={card.title} animation="slide-up" delay={i * 120}>
                <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm  whitespace-pre-line">

                  <h2 className="text-xl font-extrabold text-[#1A2B6D]">
                    {card.title}
                  </h2>

                  <p className="text-[#0B1020]/80 mt-2">
                    {card.desc}<br/>
                    {card.email}
                  </p>

                  <div className="mt-4 space-y-1 text-[#0B1020]/80">
                    {Array.isArray(card.lines) ? (
                      card.lines.map((line, j) => (
                        <p key={`${card.title}-${j}`}>
                          {Array.isArray(line) ? (
                            <>
                              <span className="font-semibold text-[#1A2B6D]">
                                {line[0]}
                              </span>{" "}
                              {line[1]}
                            </>
                          ) : (
                            line
                          )}
                        </p>
                      ))
                    ) : (
                      <p>{card.lines}</p>
                    )}
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: form + socials + promise */}
          <div className="space-y-6">
            <ContactForm />

            {/* SOCIAL MEDIA (WHITE) */}
            <Reveal animation="slide-up">
            <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-[#1A2B6D]">
                SOCIAL MEDIA
              </h2>
              <p className="text-[#0B1020]/80 mt-2">
                Stay connected for updates, insights, and opportunities.
              </p>

              <div className="mt-4 space-y-2 text-[#0B1020]/80">
                <a href="https://www.linkedin.com/company/afroglobe-prime-network-ltd">
                  <span className="font-semibold text-[#1A2B6D]">LinkedIn:</span>{" "}
                  Afroglobe Prime Network Limited
                </a><br/>
                <a href="https://www.instagram.com/agpnlimited">
                  <span className="font-semibold text-[#1A2B6D]">
                    Instagram:
                  </span>{" "}
                  @agpnlimited
                </a><br/>
                <a href="https://x.com/agpnlimited">
                  <span className="font-semibold text-[#1A2B6D]">
                    Twitter/X:
                  </span>{" "}
                  @agpnlimited
                </a><br/>
                <a href="www.tiktok.com/@agpnlimited1">
                  <span className="font-semibold text-[#1A2B6D]">TikTok:</span>{" "}
                  @agpnlimited
                </a><br/>
                <a href="https://www.facebook.com/share/1Cwyw3ibZo/?mibextid=wwXIfr">
                  <span className="font-semibold text-[#1A2B6D]">
                    Facebook:
                  </span>{" "}
                  Afroglobe Prime Network Limited
                </a>
              </div>
            </div>
            </Reveal>

            {/* CONTACT PROMISE (WHITE, brand heading color) */}
            <Reveal animation="slide-up">
            <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-[#1A2B6D]">
                OUR CONTACT PROMISE
              </h2>
              <p className="mt-3 text-[#0B1020]/80 leading-relaxed">
                We respect your time and intent. Every inquiry receives clear
                communication, transparency, and professional guidance.
              </p>

              <div className="mt-5 h-[2px] w-14 bg-[#1F3164]" />
            </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}