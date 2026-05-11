import Reveal from "../components/reveal"

export default function WhatYouCanRefer(){

    return (
        <section className="bg-white py-8 px-6">
                {/* What you can refer */}
            <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            
                    <Reveal animation="fade-right">
                      <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
                        WHAT YOU CAN REFER (COMMISSION-BASED)
                      </h2>
            
                      <p className="mt-4 text-[#0B1020]/80">
                        You earn commission when you refer people into paid AGPN offerings:
                      </p>
                      </Reveal>
            
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            
                        <Reveal animation="fade-left">
                        <div className="border border-black/10 rounded-lg p-5">
                          <p className="font-extrabold text-[#1A2B6D]">✅ YOUNG TALENT</p>
                          <p className="mt-2 text-[#0B1020]/80">
                            Individuals who enroll in AGPN's paid digital skills programs.
                          </p>
                        </div>
                        </Reveal>
            
                        <Reveal animation="fade-right">
                        <div className="border border-black/10 rounded-lg p-5">
                          <p className="font-extrabold text-[#1A2B6D]">✅ BUSINESS OWNERS</p>
                          <p className="mt-2 text-[#0B1020]/80">
                            Business owners who subscribe to AGPN's paid sales and business growth services.
                          </p>
                        </div>
                        </Reveal>
            
                      </div>
            
                      <Reveal animation="fade-left">
                      <div className="mt-8 bg-[#222222] text-white rounded-lg p-5">
                        <p className="font-extrabold">❌ WHAT DOES NOT ATTRACT COMMISSION</p>
            
                        <div className="mt-3 space-y-1 text-white/90">
                          <p>• Students seeking study-abroad guidance</p>
                          <p>• Instructors joining to facilitate programs</p>
                        </div>
            
                        <p className="mt-3 text-white/90">
                          These pathways are free to join and do not attract referral commission.
                        </p>
                      </div>
                      </Reveal>
            
                    </div>
            
        </section>
    )
}