import Reveal from "../components/reveal"

export default function GlobalVision() {
  const countries = [
    { flag: "🇨🇦", name: "Canada" },
    { flag: "🇬🇧", name: "United Kingdom" },
    { flag: "🇮🇪", name: "Ireland" },
    { flag: "🇵🇱", name: "Poland" },
    { flag: "🇨🇾", name: "Cyprus" },
    { flag: "🇺🇸", name: "United States" },
    { flag: "🇦🇪", name: "United Arab Emirates" },
  ];

  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto w-full max-w-[420px]">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">

          {/* Eyebrow */}
          <p className="text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
            OUR GLOBAL VISION
          </p>

          {/* Heading */}
          <h2 className="mt-2 text-[20px] font-extrabold text-[#1A2B6D] leading-snug">
            Connecting Talent to Opportunities Worldwide
          </h2>

          {/* Description */}
          <p className="mt-3 text-[13.5px] leading-relaxed text-[#0B1020]/80">
            We are building verified pathways for young talent across multiple regions:
          </p>

          {/* Countries list */}
          <div className="mt-5 grid grid-cols-1 gap-3">
            {countries.map((country, i) => (
              <Reveal key={country.name} animation="slide-up" delay={i * 90}>
                <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3">
                  <span className="text-lg">{country.flag}</span>

                  <span className="text-[13.5px] font-semibold text-[#1A2B6D]">
                    {country.name}
                  </span>
                </div>
              </Reveal>
            ))}

            {/* expanding */}
            <Reveal animation="slide-up" delay={countries.length * 90}>
              <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3">
                <span className="text-lg">🌍</span>
                <span className="text-[13.5px] font-semibold text-[#1A2B6D]">
                  And expanding globally
                </span>
              </div>
            </Reveal>
          </div>

          {/* Subtext */}
          <p className="mt-5 text-[13.5px] leading-relaxed text-[#0B1020]/80">
            Our goal is to serve as the bridge to{" "}
            <span className="font-semibold text-[#1A2B6D]">
              remote work
            </span>,{" "}
            <span className="font-semibold text-[#1A2B6D]">
              international education
            </span>, and{" "}
            <span className="font-semibold text-[#1A2B6D]">
              global career opportunities
            </span>.
          </p>

        </div>
      </div>
    </section>
  );
}