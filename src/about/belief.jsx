import Reveal from "../components/reveal"
import {Link} from "react-router-dom"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Belief(){

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
        {/* DARK BLOCK (required high-contrast section): OUR BELIEF */}
        <Reveal animation="slide-up">
          <div className="rounded-2xl bg-[#222222] p-6 text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-white/90">
            <span className="h-[2px] w-6 bg-white/80" />
            {acf.belief_title}
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-white/95">
           {acf.belief_text}
            <br />
            {acf.belief_text2}
            <br />
            <span className="font-semibold">{acf.belief_text3}</span>
          </p>

          <Link
            to="/get-involved"
            className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-yellow-500 px-4 py-3 text-[13px] font-semibold text-white shadow-md active:scale-[0.99] transition"
          >
            Apply Now
          </Link>
        </div>
        </Reveal>
        </section>
    )
}