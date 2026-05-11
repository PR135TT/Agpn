import { Link } from "react-router-dom";
import Reveal from "../components/reveal"

export default function Hero(){

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
               Bridging Untapped Talent to Global Opportunity
              </h1>
              </Reveal>

              <Reveal animation="fade-right">
              <p className="description1 mt-3 text-center text-[15px] leading-relaxed text-white/85 whitespace-pre-line">
                AGPN bridges untapped African talent to global opportunity through digital skills, structured career pathways, business growth systems, and international education guidance — built on validated ₦100M+ frameworks from CBM Sales & Biz Solution
              </p>
              </Reveal>
               {/* mini card */}
               <Reveal animation="fade-right">
              <div className="mt-5 rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="card text-[15px] font-semibold tracking-widest text-white/80 whitespace-pre-line">
                  We are not a traditional school or training center. We are THE BRIDGE — a strategic ecosystem that transforms untapped human potential in emerging markets into high-value assets for the global digital economy.
                  AGPN equips young talent with globally competitive, high-demand digital skills, connects them to jobs and international career opportunities, facilitates access to world-class universities, and helps struggling businesses scale through proven digital systems.
                  Built on battle-tested frameworks developed by our parent company, CBM Sales & Biz Solution — where measurable revenue outcomes exceeding ₦100M were delivered across multiple sectors — our programs are designed to create economic transformation.
                  One skilled individual.
                  One thriving business.
                  One structured opportunity at a time.
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
                  Learn More
                </Link>
              </Reveal>

              {/* Apply Here – fade from left */}
              <Reveal animation="fade-left" delay={200}>
                <Link
                  to="/getinvolved"
                  className="w-full block rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-center font-semibold text-white active:scale-[0.99] transition"
                >
                 Apply Here
                </Link>
              </Reveal>

              <div className="grid grid-cols-2 gap-3">

                {/* Refer & Earn – fade from left */}
                <Reveal animation="fade-left" delay={300}>
                  <Link
                    to="/referandearn"
                    className="block rounded-xl bg-white/10 px-4 py-3 text-center font-semibold text-white active:scale-[0.99] transition"
                  >
                    Refer & Earn
                  </Link>
                </Reveal>

                {/* Sponsor – fade from right */}
                <Reveal animation="fade-right" delay={300}>
                  <Link
                    to="/empowerment"
                    className="block rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-center font-semibold text-white active:scale-[0.99] transition"
                  >
                   Become a Sponsor
                  </Link>
                </Reveal>

              </div>
            </div>
            </div>
          </section>
        </>
    )
}