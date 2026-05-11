import Reveal from "../components/reveal"

export default function WhereFrom(){

    return (
        <section className="bg-white px-4 pb-10">
            {/* WHERE WE COME FROM (WHITE) */}
            <Reveal animation="fade-up">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <Reveal animation="fade-left">
                <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
                <span className="h-[2px] w-6 bg-[#1F3164]" />
                    WHERE WE COME FROM
                </div>
            </Reveal>
    
                <p className="mt-4 text-[14px] leading-relaxed text-[#0B1020]/80 whitespace-pre-line">
                    We are not built on theory. AGPN is powered by the validated digital frameworks of our parent company, CBM Sales & Biz Solution.
                    Through CBM Sales & Biz Solution, measurable revenue outcomes exceeding ₦100M were delivered across multiple sectors using disciplined digital marketing and performance-based execution systems.
                    Those battle-tested systems are now being applied to structured human capital development.
                    We are taking what works in real markets and putting it into the hands of young talent.
                </p>
            </div>
            </Reveal>
        </section>
    )
}