import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"


export default function Intro() {

      const {pageData, loading, error} = useCmsPage("refer-and-earn")
      
      if (loading) {
          return <Skeleton/>
      }
            
      if (error) {
          return <p>{error}</p>
      }
          
      const acf = pageData.acf

      const points = [
      { text: acf.intro_you, animation: "fade-right" },
      { text: acf.intro_your_ref, animation: "fade-left" },
      { text: acf.intro_your_earn, animation: "fade-right" },
      { text: acf.intro_you_earn, animation: "fade-left" },
    ];

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Intro */}
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
          <Reveal animation="fade-right">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            {acf.intro_title}
          </h2>
          </Reveal>

          <Reveal animation="fade-left">
          <p className="mt-4 text-[#0B1020]/80 leading-relaxed whitespace-pre-line">
            {acf.intro_refer}
          </p>
          </Reveal>

          <Reveal animation="fade-left">
          <div className="mt-6 space-y-1 font-semibold text-[#1A2B6D] whitespace-pre-line">
            <p>{acf.intro_we}</p>
          </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((item, i) => (
              <Reveal key={item.text} animation={item.animation} delay={i * 120}>
                <div className="bg-white border border-black/10 rounded-md p-4 font-semibold text-[#1A2B6D]">
                  {item.text}
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal animation="fade-left">
          <p className="font-bold mt-3 text-[#0B1020]/80 leading-relaxed">
            {acf.intro_this}
          </p>
          <ul className="text-[#1A2B6D]">
            <li>{acf.intro_struc}</li>
            <li>{acf.intro_professional}</li>
            <li>{acf.intro_accountable}</li>
            <li>{acf.intro_scalable}</li>
          </ul>
          </Reveal>

        </div>

      </div>
    </section>
  );
}