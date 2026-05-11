import Reveal from "../components/reveal"

export default function Content() {

  return (
    <section className="bg-white px-4 pb-10">
      <div className="mx-auto w-full max-w-[420px] space-y-6 pt-6">
        {/* WHO WE ARE (WHITE) */}
        <Reveal animation="slide-up">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <Reveal animation="fade-left">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
            <span className="h-[2px] w-6 bg-[#1F3164]" />
            WHO WE ARE
          </div>
        </Reveal>

          <p className="mt-3 text-[14px] leading-relaxed text-[#0B1020]/80 whitespace-pre-line">
            Afroglobe Prime Network Limited (AGPN) exists to solve one critical problem: The Access Gap.
            Across Africa and emerging markets, millions of educated, capable young talents remain disconnected from the global economy. They do not lack intelligence or ambition — they lack structured access, verified information, strategic guidance, and real pathways into opportunity.
          </p>

          <p className="mt-4 text-[14px] font-semibold text-[#1A2B6D]">
            AGPN was created to serve as that bridge.
          </p>
        </div>
        </Reveal>
      </div>
    </section>
  );
}