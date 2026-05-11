import Reveal from "../components/reveal"

export default function CommunityContributorEligibility() {

  const items = [
    {text: "✅ Students" , animation:"slide-up"},
    {text: "✅ Young talents", animation:"slide-up"},
    {text: "✅ Business owners", animation:"slide-up"},
    {text: "✅ Professionals", animation:"slide-up"},
    {text: "✅ Anyone willing to contribute responsibly", animation:"slide-up"},
  ];

  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto w-full max-w-[420px]">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          
          {/* Eyebrow */}
          <p className="text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
            COMMUNITY CONTRIBUTOR
          </p>

          {/* Heading */}
          <h2 className="mt-2 text-[20px] font-extrabold text-[#1A2B6D] leading-snug">
            WHO CAN BECOME A COMMUNITY CONTRIBUTOR?
          </h2>

          {/* Grid list */}
          <div className="mt-5 grid grid-cols-1 gap-3">
            {items.map((item, i) => (
              <Reveal key={item.text} animation={item.animation} delay={i * 120}>
              <div
                key={item}
                className="rounded-xl border border-black/10 bg-white p-4 flex items-center gap-3"
              >
                <span className="text-[#1A2B6D] font-extrabold text-[16px]">
                  ✓
                </span>
                <span className="text-[13.5px] font-semibold text-[#0B1020]/90">
                  {item.text}
                </span>
              </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom statement */}
          <Reveal animation="slide-up">
          <div className="mt-5 rounded-xl bg-[#222222] p-5">
            <p className="text-white text-[13.5px] leading-relaxed font-semibold">
             Enrollment in an AGPN program is not required to participate.
            </p>
          </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}