import Reveal from "../components/reveal"

export default function Intro() {

      const points = [
      { text: "You are identified and tracked", animation: "fade-right" },
      { text: "Your referrals are verified", animation: "fade-left" },
      { text: "Your earnings are performance-based", animation: "fade-right" },
      { text: "You earn while contributing to real economic", animation: "fade-left" },
    ];

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Intro */}
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
          <Reveal animation="fade-right">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            AGPN COMMUNITY CONTRIBUTOR
          </h2>
          </Reveal>

          <Reveal animation="fade-left">
          <p className="mt-4 text-[#0B1020]/80 leading-relaxed whitespace-pre-line">
            Refer & Earn at AGPN is not a hustle. It is contribution.
          </p>
          </Reveal>

          <Reveal animation="fade-left">
          <div className="mt-6 space-y-1 font-semibold text-[#1A2B6D] whitespace-pre-line">
            <p>Through this pathway, individuals can register to become AGPN Community Contributors — identified participants who help connect the right people to the right opportunities and earn based on real outcomes</p>
          </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((item, i) => (
              <Reveal key={item.text} animation={item.animation} delay={i * 120}>
                <div className="bg-white border border-black/10 rounded-md p-4 font-semibold text-[#1A2B6D]">
                  {item.text}
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal animation="fade-left">
          <p className="font-bold mt-3 text-[#0B1020]/80 leading-relaxed">
            This keeps AGPN:
          </p>
          <ul className="text-[#1A2B6D]">
            <li>Structured</li>
            <li>Professional</li>
            <li>Accountable</li>
            <li>Scalable</li>
          </ul>
          </Reveal>

        </div>

      </div>
    </section>
  );
}