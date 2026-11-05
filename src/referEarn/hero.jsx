import Reveal from "../components/reveal"

export default function Hero() {

  return (
    <section className="relative min-h-[70vh] px-6 py-16 overflow-hidden w-screen">

      {/* Hero Image */}
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80"
        alt="Confident professionals reviewing payment notification"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* AGPN Blue Overlay */}
      <div className="absolute inset-0 bg-[#1F3164]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">

        {/* label */}
        <Reveal animation="fade-right">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-white/90">
          <span className="h-2 w-2 rounded-full bg-white" />
          REFER & EARN
        </div>
        </Reveal>
        {/* headline */}
        <Reveal animation="fade-left">
        <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold">
          Earn While You Contribute to Real Growth
        </h1>
        </Reveal>

        {/* description */}
        <Reveal animation="fade-right">
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90 leading-relaxed">
          AGPN is built on structure and measurable contribution. If you want to earn while helping others find the right career pathways, join our Community Contributor program.
        </p>
        </Reveal>

      </div>

    </section>
  );
}