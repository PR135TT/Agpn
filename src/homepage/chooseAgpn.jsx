import Reveal from "../components/reveal";

export default function WhyChooseAGPN() {

  const items = [
    {
      no: "01",
      title: "MARKET-VALIDATED SKILLS",
      text: "We equip young talent with frameworks that have delivered measurable revenue outcomes through our parent company, CBM Sales & Biz Solution. Every skill is grounded in real market execution",
    },
    {
      no: "02",
      title: "RADICAL HONESTY",
      text: "We are honest about what we can and cannot do. We do not create jobs — we bridge talent to opportunity. We do not guarantee outcomes — we provide structured tools and pathways.",
    },
    {
      no: "03",
      title: "COMPLETE ECOSYSTEM",
      text: "We do not just equip young talent with digital skills — we connect them to structured career pathways, international education guidance, business growth systems, and sponsorship opportunities within one ecosystem.",
    },
    {
      no: "04",
      title: "GLOBAL ACCESS DEVELOPMENT",
      text: "We are building structured relationships with universities, employers, and sponsors worldwide to create verified pathways from Nigeria to global opportunities.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal animation="slide-up">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
            <span className="h-[2px] w-8 bg-[#1F3164]" />
            WHAT MAKES AGPN DIFFERENT
          </div>

          <h2 className="mt-3 text-3xl font-extrabold text-[#1A2B6D]">
            Why Choose AGPN
          </h2>

        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <Reveal key={item.no} animation="slide-up" delay={i * 140}>
              <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-extrabold text-[#1F3164]">
                    {item.title}
                  </p>

                  <span className="text-xs font-extrabold text-[#1A2B6D]/70 bg-[#1A2B6D]/5 border border-black/10 rounded-full px-3 py-1">
                    {item.no}
                  </span>
                </div>

                <div className="mt-4 h-[2px] w-14 bg-[#1F3164]" />

                <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}