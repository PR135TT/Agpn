import Reveal from "../components/reveal"

export default function Info() {

  const items = [
    {
      title: "REVENUE GENERATION",
      text: "Through CBM Sales & Biz Solution, these frameworks have generated measurable revenue across multiple sectors — delivering real market results, not just theory.",
    },
    {
      title: "STRATEGIC BUSINESS GROWTH",
      text: "Using these same proprietary systems, previously stagnant retail and service-based businesses were restructured and scaled into multi-million-naira operations through disciplined digital execution and reinvestment strategies.",
    },
    {
      title: "TESTED SYSTEMS",
      text: "Every framework offered by AGPN has been validated in real market conditions through CBM Sales & Biz Solution. We equip young talent with what already works.",
    },
    {
      title: "PROVEN FOUNDATIONS",
      text: "AGPN is built on execution experience and practical systems proven through its parent company.",
    },
  ];

  return (
    <section className="mt-8 h-auto">
      
      <Reveal animation="slide-up">
        <h2 className="text-[18px] font-extrabold text-[#1A2B6D]">
          Built on Measurable Results
        </h2>
      </Reveal>

      <Reveal animation="slide-up" delay={80}>
        <p className="mt-2 text-[15px] leading-relaxed text-[#1A2B6D]">
            AGPN is built on frameworks that work. These frameworks were developed and validated through our parent company, CBM Sales & Biz Solution, where they delivered measurable revenue outcomes exceeding ₦100M across multiple sectors. The same systems now power AGPN’s human capital development mission.
        </p>
      </Reveal>

      <div className="mt-4 grid gap-3">
        {items.map((item, i) => (
          <Reveal key={item.title} animation="slide-up" delay={i * 120}>
            <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
              <p className="text-[14px] font-bold tracking-wide text-[#1A2B6D]">
                {item.title}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-[#0B1020]/80">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}