import ContactForm from "../components/contactForm";
import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Content() {

      const {pageData, loading, error} = useCmsPage("contact")
    
      if (loading) {
        return <Skeleton/>
      }
    
      if (error) {
        return <p>{error}</p>
      }
    
      const acf = pageData.acf

  return (
    <>
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: contact channels (WHITE blocks) */}
          <div className="space-y-6">
            {[
              {
                title: acf.card_title,
                desc: acf.card_desc,
                lines: [
                  acf.card_line,
                  acf.card_linetwo,
                ],
              },
              {
                title: acf.card_title2,
                desc: acf.card_desc2,
              },
              {
                title: acf.card_title3,
                desc: acf.card_desc3,
              },
              {
                title: acf.card_title4,
                desc: acf.card_desc4,
              },
              {
                title: acf.card_title5,
                desc: acf.card_desc5,
              },
              {
                title: acf.card_title6,
                desc: acf.card_desc6,
              },
            ].map((card, i) => (
              <Reveal key={card.title} animation="slide-up" delay={i * 120}>
                <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm  whitespace-pre-line">

                  <h2 className="text-xl font-extrabold text-[#1A2B6D]">
                    {card.title}
                  </h2>

                  <p className="text-[#0B1020]/80 mt-2">
                    {card.desc}
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