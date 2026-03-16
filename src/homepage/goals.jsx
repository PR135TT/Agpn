import {Link} from "react-router-dom"
import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Goals(){

const {pageData, loading, error} = useCmsPage("main-home")
          
    if (loading) {
        return <Skeleton/>
    }
          
    if (error) {
        return <p>{error}</p>
    }
        
    const acf = pageData.acf


    return (
        <section className="mt-8">
            <Reveal animation="slide-up">
            <div className="rounded-2xl bg-[#222222] p-6 text-white">
              <h2 className="text-[18px] font-extrabold text-white">
                {acf.goals_title}
              </h2>

              <div className="mt-4 grid gap-2 text-[13px] text-white/85">
                <p>➡️ {acf.goals_text1}</p>
                <p>➡️ {acf.goals_text2}</p>
                <p>➡️ {acf.goals_text3}</p>
                <p>➡️ {acf.goals_text4}</p>
                <p className="mt-2">
                  {acf.goals_final_text}
                </p>
              </div>

              <Link
                to="/getinvolved"
                className="mt-5 inline-block w-full rounded-xl bg-[#1A2B6D] px-4 py-3 text-center font-semibold text-white shadow-md active:scale-[0.99] transition"
              >
                Apply Now
              </Link>
            </div>
            </Reveal>
          </section>
    )
}