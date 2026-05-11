import Reveal from "../components/reveal"

export default function Intro() {

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto">

        <Reveal animation="fade-right">
        <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
          EMPOWERMENT AT AGPN
        </h2>
        </Reveal>

        
        <div className="mt-6 space-y-4 text-[#0B1020]/80 leading-relaxed">
        <Reveal animation="fade-left">
          <p>
            AGPN is building one of Africa's most critical assets: human capital infrastructure.
          </p>

          <p>
            The challenge facing Africa is not intelligence or ambition — it is access.
          </p>

          <p>
            Many young talents are limited by lack of digital skills, information, exposure, and pathways into the global economy.
          </p>

          <p className="font-semibold text-[#1A2B6D]">
            AGPN exists to bridge this gap.
          </p>
          </Reveal>

          <Reveal animation="fade-left">
          <p>
            We equip young talent with relevant digital skills and access, enabling them to compete globally — regardless of location.
          </p>
          </Reveal>

          <Reveal animation="fade-right">
          <div className="bg-white border border-black/10 rounded-lg p-5 shadow-sm">

            <p className="mt-2">
              We do not assign jobs.
              <br/>
              We do not guarantee employment.
            </p>

            <p className="mt-1">
              We expand capacity so opportunities can open naturally.
            </p>
          </div>
          </Reveal>

          <Reveal animation="slide-up">
          <p className="font-semibold text-[#1A2B6D]">
            This is how economies grow.
            This is how relevance is built.
          </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}