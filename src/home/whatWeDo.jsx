import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function WhatWeDoSection() {

  const {pageData, loading, error} = useCmsPage("home-2")
          
    if (loading) {
        return <Skeleton/>
    }
          
    if (error) {
        return <p>{error}</p>
    }

    const acf = pageData.acf
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
                  src="https://cms.agpnlimited.com/wp-content/uploads/2026/03/team-young-african-people-office-table-with-laptop_219728-4554.avif"
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
                {acf.wwd_title}
              </h2>
              </Reveal>

              <Reveal animation="slide-up">
              <p className="mt-4 text-slate-700 leading-relaxed text-lg">
                {acf.wwd_description}
              </p>
              </Reveal>

              <ul className="mt-6 space-y-4 text-slate-700">
                {[
                  acf.wwd_train,
                  acf.wwd_connect,
                  acf.wwd_support,
                  acf.wwd_guide,
                  acf.wwd_build,
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
                 {acf.wwd_guarantee}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  {acf.wwd_we}
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