import Reveal from "../components/reveal"

export default function WhatWeDo(){

    return (
        <section className="bg-white px-4 pb-10">
            {/* WHAT WE DO (WHITE + inner cards) */}
            <Reveal animation="slide-up">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <Reveal animation="fade-left">
                <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
                <span className="h-[2px] w-6 bg-[#1F3164]" />
                    WHAT WE DO
                </div>
            </Reveal>
    
                <div className="mt-5 space-y-4">
                {[
                    {
                    k: "LEARN",
                    v: "Master high-demand digital skills through frameworks that have delivered ₦100M+ in real-market results.",
                    },
                    {
                    k: "GROW",
                    v: "Build professional competence through guidance, portfolio development, and global exposure.",
                    },
                    {
                    k: "EARN",
                    v: "Access structured income participation through our referral system and bridge toward local and international professional pathways.",
                    },
                ].map((x, index) => (
                    <Reveal
                    key={x.k}
                    animation="slide-up"
                    delay={index * 150} // slight stagger
                    >
                    <div className="rounded-xl border border-black/10 bg-white p-4">
                        <p className="text-[12px] font-extrabold tracking-wide text-[#1A2B6D]">
                        {x.k}
                        </p>
                        <p className="mt-2 text-[15px] leading-relaxed text-[#0B1020]/80">
                        {x.v}
                        </p>
                    </div>
                    </Reveal>
                ))}
                </div>
    
                <Reveal animation="slide-up">
                <p className="mt-5 text-[14px] font-semibold text-[#1A2B6D]">
                    Our Focus is Simple:<br/>
                    Clarity<br/>
                    Competence<br/>
                    Global Relevance
                </p>
                </Reveal>
            </div>
            </Reveal>
        </section>
    )
}