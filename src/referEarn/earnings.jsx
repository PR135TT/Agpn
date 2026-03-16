import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Earnings(){

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
        {/* Earnings highlight */}
        <Reveal animation="fade-left">
        <div className="bg-[#222222] text-white rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">

          <h2 className="text-2xl font-extrabold text-white">
            {acf.earn_title}
          </h2>

          <p className="mt-4 text-white/90 font-semibold">
            {acf.earn_subtitle}
          </p>

          <div className="mt-5 h-[2px] w-14 bg-[#1F3164]" />
          <p className="text-white/90">{acf.earn_example}</p>
          <div className="mt-4 space-y-1">
            <p>{acf.earn_program}</p>
            <p>{acf.earn_your}</p>
          </div>

          <div className="mt-4 space-y-1 font-semibold">
            <p>{acf.earn_refer1}</p>
            <p>{acf.earn_refer2}</p>
            <p>{acf.earn_refer3}</p>
          </div>

          <p className="mt-4 font-extrabold text-white">
            {acf.earn_there}<br/>
            {acf.earn_earnings}
          </p>

        </div>
        </Reveal>
        </section>
    )
}