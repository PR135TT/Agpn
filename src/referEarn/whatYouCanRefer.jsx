import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function WhatYouCanRefer(){

  const {pageData, loading, error} = useCmsPage("refer-and-earn")
      
    if (loading) {
        return <Skeleton/>
    }
          
    if (error) {
        return <p>{error}</p>
    }
        
    const acf = pageData.acf

    return (
        <section className="bg-white py-8 px-6">
                {/* What you can refer */}
            <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            
                    <Reveal animation="fade-right">
                      <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
                        {acf.what_title}
                      </h2>
            
                      <p className="mt-4 text-[#0B1020]/80">
                        {acf.what_you}
                      </p>
                      </Reveal>
            
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            
                        <Reveal animation="fade-left">
                        <div className="border border-black/10 rounded-lg p-5">
                          <p className="font-extrabold text-[#1A2B6D]">{acf.what_young_title}</p>
                          <p className="mt-2 text-[#0B1020]/80">
                            {acf.what_young_text}
                          </p>
                        </div>
                        </Reveal>
            
                        <Reveal animation="fade-right">
                        <div className="border border-black/10 rounded-lg p-5">
                          <p className="font-extrabold text-[#1A2B6D]">{acf.what_business_title}</p>
                          <p className="mt-2 text-[#0B1020]/80">
                            {acf.what_business_text}
                          </p>
                        </div>
                        </Reveal>
            
                      </div>
            
                      <Reveal animation="fade-left">
                      <div className="mt-8 bg-[#222222] text-white rounded-lg p-5">
                        <p className="font-extrabold">{acf.what_does_title}</p>
            
                        <div className="mt-3 space-y-1 text-white/90">
                          <p>• {acf.what_students}</p>
                          <p>• {acf.what_instructor}</p>
                        </div>
            
                        <p className="mt-3 text-white/90">
                          {acf.what_these}
                        </p>
                      </div>
                      </Reveal>
            
                    </div>
            
        </section>
    )
}