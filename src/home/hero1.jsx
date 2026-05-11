import Reveal from "../components/reveal";
import { Link } from "react-router-dom";

export default function AGPNHeroCard() {

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-0 sm:px-4 py-0 sm:py-10">
        
        <div className="relative overflow-hidden rounded-none sm:rounded-2xl shadow-[0_22px_60px_rgba(0,0,0,0.12)] min-h-[600px]">

          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
            alt="AGPN global digital careers"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#1F3164]/80" />

          {/* Content */}
          <div className="relative z-10 px-6 pt-24 pb-16 sm:px-12">

            <Reveal animation="fade-left">
              <p className="text-sm font-semibold text-white/90">
                Afroglobe Prime Network Limited (AGPN)
              </p>
            </Reveal>

            <Reveal animation="slide-up" delay={100}>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight text-white">
                Bridging Untapped African Talent to Global Opportunity
              </h1>
            </Reveal>

            <Reveal animation="fade-right" delay={200}>
              <p className="mt-6 text-lg font-semibold text-white/90 max-w-[36ch]">
                Welcome to AGPN — Africa’s Launchpad for Global Digital Careers.
              </p>
            </Reveal>

            <Reveal animation="fade-left" delay={300}>
              <p className="mt-4 text-white/80 leading-relaxed max-w-[50ch]">
                AGPN is Africa’s structured workforce ecosystem. We equip ambitious young Africans with practical, high-income digital skills, provide real client experience, and connect them directly to paid opportunities and global career pathways.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Reveal animation="fade-right" delay={400}>
                <Link
                  to="/ecosystem"
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#1A2B6D] px-7 py-3 font-semibold shadow-md transition hover:brightness-110 active:scale-[0.99]"
                >
                  Explore Our Ecosystem
                </Link>
              </Reveal>

              <Reveal animation="fade-left" delay={480}>
                <Link
                  to="/getinvolved"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#1A2B6D]"
                >
                  Join the First Cohort
                </Link>
              </Reveal>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}