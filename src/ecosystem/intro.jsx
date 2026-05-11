import Reveal from "../components/reveal"


export default function Intro() {

  return (
    <Reveal>
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A2B6D]">
         THE 6 ARMS OF AGPN
        </h2>

        <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
          A Proven System. A Continental Vision.
        </p>

        <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
          AGPN operates through six strategic arms, each designed to remove a specific barrier to economic opportunity. Together, they form a complete ecosystem that enables young talent to Learn, Grow, and Earn.
        </p>

        <div className="mt-6 bg-white border border-black/10 rounded-lg p-5 shadow-sm">
          <p className="font-semibold text-[#1A2B6D]">
            The Model:
          </p>

          <p className="text-[#0B1020]/80 mt-1">
            Two arms we execute internally.
            Four arms we connect externally.
          </p>
        </div>

      </div>
    </section>
    </Reveal>
  );
}