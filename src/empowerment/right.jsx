import Reveal from "../components/reveal"

export default function Right() {

  const lines = [
    {text: "We build infrastructure that scales people.", animation:"slide-up"},
    {text: "Sponsors enable access.", animation:"slide-up"},
    {text: "Partners connect to talent.", animation:"slide-up"},
    {text: "Young people gain skills and reach.", animation:"slide-up"},
  ];
  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto w-full max-w-[420px]">

        {/* Main card */}
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">

        <Reveal animation="slide-up">
          {/* Eyebrow */}
          <p className="text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
            EMPOWERMENT, DONE RIGHT
          </p>

          {/* Heading */}
          <h2 className="mt-2 text-[22px] font-extrabold text-[#1A2B6D] leading-snug">
            AGPN does not build programs in isolation.
          </h2>
          </Reveal>

          {/* Statement lines */}
          <div className="mt-5 space-y-3">
            {lines.map((line, i) => (
              <Reveal key={line.text} animation={line.animation} delay={i * 120}>
              <div
                key={i}
                className="rounded-xl border border-black/10 bg-white px-4 py-3"
              >
                <p className="text-[13.5px] font-semibold text-[#0B1020]/90 leading-relaxed">
                  {line.text}
                </p>
              </div>
              </Reveal>
            ))}
          </div>

          {/* Highlight infrastructure statement */}
          <Reveal animation="slide-up">
          <div className="mt-6 rounded-xl bg-[#222222] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
            <p className="text-white text-[14px] font-extrabold leading-relaxed">
              AGPN - Bridging Untapped Talent to Global Opportunity.
            </p>
          </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}