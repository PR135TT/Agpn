import Reveal from "../components/reveal"

export default function Hero() {

  return (
    <section className="relative w-screen min-h-[70vh] py-16 px-6 overflow-hidden">

      {/* Hero Image */}
      <img
        src= "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"
        alt="Professionals collaborating in a modern digital workspace"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* AGPN Blue Overlay */}
      <div className="absolute inset-0 bg-[#1F3164]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-white">

        {/* label */}
        <Reveal animation="fade-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-white/90">
          <span className="h-2 w-2 rounded-full bg-white" />
          ECOSYSTEM
        </div>
        </Reveal>

        <Reveal animation="fade-right">
        {/* headline */}
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold mb-4">
          The 5 Arms of AGPN
        </h1>

        {/* description */}
        <p className="text-white/90 text-lg leading-relaxed max-w-4xl">
          AGPN operates through a structured ecosystem designed to bridge the gap between untapped African talent, global opportunities and business growth.
          <br/>
          Our ecosystem consists of two arms we execute internally and three arms through which we connect individuals and businesses to opportunities, resources and strategic partnerships.
        </p>
        </Reveal>

      </div>

    </section>
  );
}