import Reveal from "../components/reveal"

export default function Hero() {

  return (
    <section className="relative px-4 pt-6 pb-6 overflow-hidden">

      {/* Hero Image */}
      <img
        src= "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
        alt="Confident professionals collaborating in a modern global workspace"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* AGPN Blue Overlay */}
      <div className="absolute inset-0 bg-[#1F3164]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[420px]">

        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-[2px]">

          {/* label */}
          <Reveal animation="fade-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-white/90">
            <span className="h-2 w-2 rounded-full bg-white" />
            OUR STORY
          </div>
          </Reveal>

          {/* headline */}
          <Reveal animation="fade-left">
          <h1 className="mt-4 text-[28px] leading-[1.15] font-extrabold text-white">
            ABOUT US
          </h1>
          </Reveal>

          {/* description */}
          <Reveal animation="fade-right">
          <p className="mt-3 text-[15px] leading-relaxed text-white/85">
            Afroglobe Prime Network Limited (AGPN) bridges the Access Gap by equipping ambitious African talent with market-validated digital skills and structured pathways to global opportunity, powered by proven frameworks from CBM Sales & Biz Solution.
          </p>
          </Reveal>

          {/* button */}
          <Reveal animation="fade-left">
          <button className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#1A2B6D] px-4 py-3 text-[13px] font-semibold shadow-md hover:bg-[#16245a] active:scale-[0.99] transition">
            Our Journey
          </button>
          </Reveal>

        </div>

      </div>

    </section>
  );
}