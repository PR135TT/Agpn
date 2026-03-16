import { Link } from "react-router-dom";
import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Hero(){

  const {pageData, loading, error} = useCmsPage("main-home")
      
    if (loading) {
        return <Skeleton/>
    }
          
    if (error) {
        return <p>{error}</p>
    }
        
    const acf = pageData.acf

    return (
        <>
                  {/* HERO: Higher Blue Accent background with centered tagline in white */}
          <section className="pt-6 min-h-[70vh]">
            <div className="rounded-2xl bg-[#1F3164] p-6 text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
              <Reveal animation="fade-right">
              <div className="title inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-white/90">
                <span className="h-2 w-2 rounded-full bg-white" />
                  WELCOME TO Afroglobe Prime Network Limited (AGPN)
              </div>
              </Reveal>

              <Reveal animation="fade-left">
              <h1 className="subtitle mt-4 text-center text-[28px] leading-[1.15] font-extrabold">
               {acf.bridge_title}
              </h1>
              </Reveal>

              <Reveal animation="fade-right">
              <p className="description1 mt-3 text-center text-[15px] leading-relaxed text-white/85 whitespace-pre-line">
                {acf.hero_description}
              </p>
              </Reveal>
               {/* mini card */}
               <Reveal animation="fade-right">
              <div className="mt-5 rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="card text-[15px] font-semibold tracking-widest text-white/80 whitespace-pre-line">
                  {acf.box_description}
                </p>
              </div>
              </Reveal>

             <div className="mt-5 grid gap-3">
              {/* Learn More – fade from right */}
              <Reveal animation="fade-right" delay={100}>
                <Link
                  to="/ecosystem"
                  className="w-full block rounded-xl bg-[#1A2B6D] px-4 py-3 text-center font-semibold shadow-md active:scale-[0.99] transition"
                >
                  {acf.learn_button}
                </Link>
              </Reveal>

              {/* Apply Here – fade from left */}
              <Reveal animation="fade-left" delay={200}>
                <Link
                  to="/getinvolved"
                  className="w-full block rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-center font-semibold text-white active:scale-[0.99] transition"
                >
                 {acf.apply_button}
                </Link>
              </Reveal>

              <div className="grid grid-cols-2 gap-3">

                {/* Refer & Earn – fade from left */}
                <Reveal animation="fade-left" delay={300}>
                  <Link
                    to="/referandearn"
                    className="block rounded-xl bg-white/10 px-4 py-3 text-center font-semibold text-white active:scale-[0.99] transition"
                  >
                    {acf.refer_button}
                  </Link>
                </Reveal>

                {/* Sponsor – fade from right */}
                <Reveal animation="fade-right" delay={300}>
                  <Link
                    to="/empowerment"
                    className="block rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-center font-semibold text-white active:scale-[0.99] transition"
                  >
                   {acf.sponsor_button}
                  </Link>
                </Reveal>

              </div>
            </div>
            </div>
          </section>
        </>
    )
}