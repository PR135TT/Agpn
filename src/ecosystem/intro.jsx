import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Intro() {

    const {pageData, loading, error} = useCmsPage("ecosystem")
  
    if (loading) {
      return <Skeleton/>
    }
  
    if (error) {
      return <p>{error}</p>
    }
  
    const acf = pageData.acf

  return (
    <Reveal>
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A2B6D]">
          {acf.intro_title}
        </h2>

        <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
          <span className="font-semibold text-[#1A2B6D]">
            {acf.intro_subtitle}
          </span>
        </p>

        <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
          {acf.intro_description}
        </p>

        <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
          {acf.intro_description2}
        </p>

        <div className="mt-6 bg-white border border-black/10 rounded-lg p-5 shadow-sm">
          <p className="font-semibold text-[#1A2B6D]">
            {acf.intro_model}
          </p>

          <p className="text-[#0B1020]/80 mt-1">
            {acf.intro_two_arms}
            {acf.intro_four_arms}
          </p>
        </div>

      </div>
    </section>
    </Reveal>
  );
}