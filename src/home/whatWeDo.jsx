import Reveal from "../components/reveal"

export default function WhatWeDoSection() {

  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4">

        {/* Reveal Wrapper */}
        <div className="reveal bg-white rounded-2xl shadow-[0_20px_55px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-500 hover:-translate-y-2">

          <div className="grid md:grid-cols-12">

            {/* Image Side */}
            <Reveal animation="slide-up">
              <div className="md:col-span-5 h-64 md:h-auto relative">
                <img
                  src="https://img.freepik.com/premium-photo/team-young-african-people-office-table-with-laptops_219728-4514.jpg"
                  alt="Digital Workforce Development"
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#1F3164]/60"></div>
              </div>
            </Reveal>

            {/* Content Side */}
            <div className="md:col-span-7 p-8 md:p-12">

            <Reveal animation="slide-up">
              <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
                WHAT WE DO
              </h2>
              </Reveal>

              <Reveal animation="slide-up">
              <p className="mt-4 text-slate-700 leading-relaxed text-lg">
                AGPN operates as a complete, structured ecosystem designed to create real economic positioning:
              </p>
              </Reveal>

              <ul className="mt-6 space-y-4 text-slate-700">
                {[
                  "Train talent in high-demand digital skills",
                  "Connect trained professionals to paid client projects and structured job pathways",
                  "Support businesses with proven digital growth systems",
                  "Guide individuals toward international education pathways",
                  "Build partnerships that expand workforce access across Africa",
                ].map((text, index) => (
                  <Reveal
                    key={index}
                    animation="slide-up"
                    delay={index * 120} // stagger delay
                  >
                    <li className="flex gap-3 text-lg">
                      <span className="text-[#1A2B6D] font-bold">•</span>
                      {text}
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal animation="slide-up">
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-sm font-semibold text-slate-800">
                 We do not guarantee outcomes.
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  We build readiness and bridge access.
                </p>
              </div>
              </Reveal>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}