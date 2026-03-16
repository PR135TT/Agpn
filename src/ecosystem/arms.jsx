import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Arms() {

  const {pageData, loading, error} = useCmsPage("ecosystem")

  if (loading) {
    return <Skeleton/>
  }

  if (error) {
    return <p>{error}</p>
  }

  const acf = pageData.acf

  return (
    <>
      {/* Arms */}
      <section className="bg-white pb-16 px-6">
        <div className="max-w-5xl mx-auto grid gap-6" id="arm-one">
          {/* Arm 1 */}
          <Reveal delay={0} animation="slide-up">
          <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-bold text-[#1F3164]">
              {acf.arm1_title}
            </p>

            <h3 className="text-xl font-extrabold text-[#1A2B6D] mt-2">
              {acf.arm1_subtitle}
            </h3>

            <p className="text-[#0B1020]/80 mt-3 font-semibold leading-relaxed whitespace-pre-line">
              {acf.arm1_description}
            </p>
          </div>
          </Reveal>

          {/* Arm 2 */}
          <Reveal delay={100} animation="fade-left">
          <div id="arm-two" className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-bold text-[#1F3164]">
             {acf.arm2_title}
            </p>

            <h3 className="text-xl font-extrabold text-[#1A2B6D] mt-2">
              {acf.arm2_subtitle}
            </h3>

            <p className="text-[#0B1020]/80 mt-3 font-semibold leading-relaxed whitespace-pre-line">
              {acf.arm2_description}
            </p>
          </div>
          </Reveal>

          {/* Arm 3 */}
          <Reveal delay={200} animation="fade-right">
          <div id="arm-three" className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-bold text-[#1F3164]">
              {acf.arm3_title}
            </p>

            <h3 className="text-xl font-extrabold text-[#1A2B6D] mt-2">
              {acf.arm3_subtitle}
            </h3>

            <p className="text-[#0B1020]/80 mt-3 font-semibold leading-relaxed  whitespace-pre-line">
              {acf.arm3_description}
            </p>
          </div>
          </Reveal>

          {/* Arm 4 */}
          <Reveal delay={300} animation="fade-left">
          <div id="arm-four" className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-bold text-[#1F3164]">
              {acf.arm4_title}
            </p>

            <h3 className="text-xl font-extrabold text-[#1A2B6D] mt-2">
              {acf.arm4_subtitle}
            </h3>

            <p className="text-[#0B1020]/80 mt-3 font-semibold leading-relaxed  whitespace-pre-line">
              {acf.arm4_description}
              </p>
          </div>
          </Reveal>

          {/* Arm 5 */}
          <Reveal delay={400} animation="fade-left">
          <div id="arm-five" className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-bold text-[#1F3164]">
             {acf.arm5_title}
            </p>

            <h3 className="text-xl font-extrabold text-[#1A2B6D] mt-2">
              {acf.arm5_subtitle}
            </h3>

            <p className="text-[#0B1020]/80 mt-3 font-semibold leading-relaxed  whitespace-pre-line">
              {acf.arm5_description}
            </p>
          </div>
          </Reveal>

          {/* Arm 6 */}
          <Reveal delay={500} animation="fade-right">
          <div id="arm-six" className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-bold text-[#1F3164]">
              {acf.arm6_title}
            </p>

            <h3 className="text-xl font-extrabold text-[#1A2B6D] mt-2">
              {acf.arm6_subtitle}
            </h3>

            <p className="text-[#0B1020]/80 mt-3 font-semibold leading-relaxed  whitespace-pre-line">
              {acf.arm6_description}
            </p>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}