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
          REFER AND EARN WITH AGPN
        </h1>
        </Reveal>

        {/* description */}
        <Reveal animation="fade-right">
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90 leading-relaxed">
          AGPN is not built on hype. It is built on structure, participation, and measurable contribution. <br/>
          We believe people should not only learn and grow — they should also have structured opportunities to earn within a professional ecosystem.
          <br/>
          That is what Refer & Earn represents.
        </p>
        </Reveal>

      </div>

    </section>
  );
}