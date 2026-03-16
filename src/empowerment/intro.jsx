import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Intro() {

const {pageData, loading, error} = useCmsPage("empowerment")
      
if (loading) {
    return <Skeleton/>
}
      
if (error) {
     return <p>{error}</p>
}
     
const acf = pageData.acf

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto">

        <Reveal animation="fade-right">
        <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
          {acf.intro_title}
        </h2>
        </Reveal>

        
        <div className="mt-6 space-y-4 text-[#0B1020]/80 leading-relaxed">
        <Reveal animation="fade-left">
          <p>
            {acf.intro_build}
          </p>

          <p>
            {acf.intro_challenge}
          </p>

          <p>
            {acf.intro_limit}
          </p>

          <p className="font-semibold text-[#1A2B6D]">
            {acf.intro_exist}
          </p>
          </Reveal>

          <Reveal animation="fade-left">
          <p>
            {acf.intro_equip}
          </p>
          </Reveal>

          <Reveal animation="fade-right">
          <div className="bg-white border border-black/10 rounded-lg p-5 shadow-sm">

            <p className="mt-2">
              {acf.intro_text}
              <br/>
              {acf.intro_text2}
            </p>

            <p className="mt-1">
              {acf.intro_text3}
            </p>
          </div>
          </Reveal>

          <Reveal animation="slide-up">
          <p className="font-semibold text-[#1A2B6D]">
            {acf.intro_hows}
          </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}