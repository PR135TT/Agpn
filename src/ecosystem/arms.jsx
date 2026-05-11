import Reveal from "../components/reveal"

export default function Arms() {

  return (
    <>
      {/* Arms */}
      <section className="bg-white pb-16 px-6">
        <div className="max-w-5xl mx-auto grid gap-6" id="arm-one">
          {/* Arm 1 */}
          <Reveal delay={0} animation="slide-up">
          <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-bold text-[#1F3164]">
              ARM 1: DIGITAL TALENT REFINERY (OWNED)
            </p>

            <h3 className="text-xl font-extrabold text-[#1A2B6D] mt-2">
              Equipping Talent with High-Demand Skills.
            </h3>

            <p className="text-[#0B1020]/80 mt-3 font-semibold leading-relaxed whitespace-pre-line">
              This is our core service. We refine untapped potential using market-tested frameworks built on a ₦100M+ foundation.
              Focus: Mastery in Digital Marketing, Virtual Assistance, Content Strategy, and E-commerce, and many more.
              Structure: 6-8 week intensive programs focused on practical mastery, not theory.
            </p>
          </div>
          </Reveal>

          {/* Arm 2 */}
          <Reveal delay={100} animation="fade-left">
          <div id="arm-two" className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-bold text-[#1F3164]">
             ARM 2: CAREER CONNECTION BRIDGE (CONNECT)
            </p>

            <h3 className="text-xl font-extrabold text-[#1A2B6D] mt-2">
             Linking Skilled Talent to Opportunities.
            </h3>

            <p className="text-[#0B1020]/80 mt-3 font-semibold leading-relaxed whitespace-pre-line">
             We serve as the bridge between our trained professionals and structured career pathways.
            We support portfolio positioning, professional branding, and pathway visibility for both local and international opportunities.
            We do not create jobs.
            We bridge talent to opportunity.
            </p>
          </div>
          </Reveal>

          {/* Arm 3 */}
          <Reveal delay={200} animation="fade-right">
          <div id="arm-three" className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-bold text-[#1F3164]">
              ARM 3: INTERNATIONAL EDUCATION PATHWAYS (CONNECT)
            </p>

            <h3 className="text-xl font-extrabold text-[#1A2B6D] mt-2">
              Guiding Talent to Global Universities.
            </h3>

            <p className="text-[#0B1020]/80 mt-3 font-semibold leading-relaxed  whitespace-pre-line">
              We provide verified guidance and structured support for students seeking international education opportunities in:
              Canada 🇨🇦 
              United Kingdom 🇬🇧 
              Ireland 🇮🇪 
              Poland 🇵🇱 
              Cyprus 🇨🇾 
              and expanding regions.
              We provide structured guidance.
              We do not guarantee admission or visa outcomes.

            </p>
          </div>
          </Reveal>

          {/* Arm 4 */}
          <Reveal delay={300} animation="fade-left">
          <div id="arm-four" className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-bold text-[#1F3164]">
              ARM 4: GLOBAL OPPORTUNITIES ACCESS HUB (CONNECT)
            </p>

            <h3 className="text-xl font-extrabold text-[#1A2B6D] mt-2">
              Curating Scholarships, Grants & Professional Pathways.
            </h3>

            <p className="text-[#0B1020]/80 mt-3 font-semibold leading-relaxed  whitespace-pre-line">
              This arm connects young professionals to structured global development opportunities, including:
              Scholarships
              Grants
              Fellowships
              Professional certifications
              Internships
              We provide verified access guidance and information pathways.

              </p>
          </div>
          </Reveal>

          {/* Arm 5 */}
          <Reveal delay={400} animation="fade-left">
          <div id="arm-five" className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-bold text-[#1F3164]">
             ARM 5: BUSINESS GROWTH & INTELLIGENCE (INTERNAL EXECUTION)
            </p>

            <h3 className="text-xl font-extrabold text-[#1A2B6D] mt-2">
              Scaling Brands with Proven Systems.
            </h3>

            <p className="text-[#0B1020]/80 mt-3 font-semibold leading-relaxed  whitespace-pre-line">
              This arm applies revenue-focused digital marketing systems to help businesses move from stagnation to structured growth.
              These systems are built on proprietary strategies that have delivered measurable market outcomes through CBM Sales & Biz Solution.
              We execute.
              We deliver structured growth systems.
            </p>
          </div>
          </Reveal>

          {/* Arm 6 */}
          <Reveal delay={500} animation="fade-right">
          <div id="arm-six" className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <p className="text-sm font-bold text-[#1F3164]">
              ARM 6: SPONSORSHIP & EMPOWERMENT (CONNECT)
            </p>

            <h3 className="text-xl font-extrabold text-[#1A2B6D] mt-2">
              Partnering for Sustainable Impact.
            </h3>

            <p className="text-[#0B1020]/80 mt-3 font-semibold leading-relaxed  whitespace-pre-line">
              We facilitate structured sponsorships and strategic partnerships to support talent development.
              This ensures financial barriers do not limit high-potential individuals.
              Sponsors enable access.
              Talent gains structure.
              Communities gain economic value.
            </p>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}