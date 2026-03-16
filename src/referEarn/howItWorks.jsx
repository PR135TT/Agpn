import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function HowItWorks(){

    const {pageData, loading, error} = useCmsPage("refer-and-earn")
      
    if (loading) {
        return <Skeleton/>
    }
        
    if (error) {
        return <p>{error}</p>
    }
        
    const acf = pageData.acf

    return (
        <section className="bg-white py-14 px-6">
        {/* How it works */}
        <Reveal animation="fade-right">
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">

            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            {acf.how_title}
            </h2>

            <div className="mt-6 space-y-3 font-semibold text-[#0B1020]/80">
            <p>1️⃣ {acf.how_text}</p>
            <p>2️⃣ {acf.how_text2}</p>
            <p>3️⃣ {acf.how_text3}</p>
            <p>4️⃣ {acf.how_text4}</p>
            <p>5️⃣ {acf.how_text5}</p>
            </div>

            <p className="mt-6 font-extrabold text-[#1A2B6D]">
                {acf.how_trans}
            </p>

        </div>
        </Reveal>
        </section>
    )
}