import Reveal from "../components/reveal"

export default function Hero() {

  return (
    <section className="relative min-h-[70vh] px-6 py-16 overflow-hidden">

      {/* Hero Image (background layer) */}
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
        alt="Professionals analyzing data and working on digital strategy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* AGPN Blue Overlay */}
      <div className="absolute inset-0 bg-[#1F3164]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">

        {/* label */}
        <Reveal animation="fade-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-white/90">
          <span className="h-2 w-2 rounded-full bg-white" />
          INSIGHTS
        </div>
        </Reveal>

        {/* headline */}
        <Reveal animation="fade-right">
        <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold">
          Knowledge. Guidance. Opportunities.
        </h1>
        </Reveal>

        {/* description */}
        <Reveal animation="fade-left">
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90 leading-relaxed">
          Stay ahead with practical information, industry guidance and official updates from Afroglobe Prime Network Limited.
          <br></br>
          AGPN insights provides clear, real-world knowledge to help you build valuable skills, navigate remote careers, plan international education pathways and make informed choices.
        </p>
        </Reveal>

      </div>

    </section>
  );
}