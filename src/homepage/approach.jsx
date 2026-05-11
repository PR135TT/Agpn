import Reveal from "../components/reveal"

export default function OurApproach() {

  const items = [
    {
      title: "LEARN",
      text: "Master high-value digital skills using proven frameworks from our parent company that have generated measurable revenue outcomes in real markets.",
    },
    {
      title: "GROW",
      text: "Build your portfolio with real projects. Develop your professional brand. Access our global network of opportunities and partners.",
    },
    {
      title: "EARN",
      text: "Start earning while you learn through our structured referral system. Then connect to income-generating opportunities locally and globally.",
    },
  ];

  return (
    <section className="bg-white px-4 py-12 overflow-x-hidden">
      <div className="mx-auto w-full max-w-[420px]">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">

          {/* Eyebrow */}
          <Reveal animation="slide-up">
            <p className="text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
              OUR APPROACH
            </p>
          </Reveal>

          {/* Heading */}
          <Reveal animation="slide-up" delay={80}>
            <h2 className="mt-2 text-[20px] font-extrabold text-[#1A2B6D] leading-snug">
              Learn - Grow - Earn
            </h2>
          </Reveal>

          {/* Cards */}
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.title} animation="slide-up" delay={i * 120}>
                <div className="rounded-xl border border-black/10 bg-white p-4">
                  <p className="text-[12px] font-extrabold tracking-wide text-[#1A2B6D]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#0B1020]/80">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Highlighted text */}
          <Reveal animation="slide-up" delay={items.length * 120}>
            <div className="mt-5 rounded-xl bg-[#222222] p-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
              <p className="text-[13.5px] font-semibold leading-relaxed text-white/95">
                This is why AGPN was created: to create immediate economic impact while equipping young talent for long-term global success
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}