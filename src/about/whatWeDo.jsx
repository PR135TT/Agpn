import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function WhatWeDo(){

            const {pageData, loading, error} = useCmsPage("about")
          
            if (loading) {
              return <Skeleton/>
            }
          
            if (error) {
              return <p>{error}</p>
            }
          
            const acf = pageData.acf

    return (
        <section className="bg-white px-4 pb-10">
            {/* WHAT WE DO (WHITE + inner cards) */}
            <Reveal animation="slide-up">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <Reveal animation="fade-left">
                <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
                <span className="h-[2px] w-6 bg-[#1F3164]" />
                    {acf.whatwedo_maintitle}
                </div>
            </Reveal>
    
                <div className="mt-5 space-y-4">
                {[
                    {
                    k: acf.whatwedo_title,
                    v: acf.whatwedo_description,
                    },
                    {
                    k: acf.whatwedo_title2,
                    v: acf.whatwedo_description2,
                    },
                    {
                    k: acf.whatwedo_title3,
                    v: acf.whatwedo_description3,
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
                    {acf.whatwedo_text}<br/>
                    {acf.whatwedo_text2}<br/>
                    {acf.whatwedo_text3}
                </p>
                </Reveal>
            </div>
            </Reveal>
        </section>
    )
}