import Reveal from "../components/reveal"

export default function WhyItMatters(){

    return (
        <section className="bg-white px-4 pb-10">
                    {/* WHY IT MATTERS (WHITE) */}
        <Reveal animation="slide-up">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <Reveal animation="fade-left">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
            <span className="h-[2px] w-6 bg-[#1F3164]" />
            WHY IT MATTERS
          </div>
        </Reveal>

          <p className="mt-4 text-[15px] leading-relaxed text-[#0B1020]/80">
            Millions of young people are “qualified” but disconnected.
            AGPN closes that gap by turning untapped potential into high-value assets within the global digital economy.
            By bridging talent to structured opportunity, we contribute to long-term economic impact for individuals, businesses, and communities.
          </p>
        </div>
        </Reveal>
        </section>
    )
}