import Reveal from "../components/reveal"

export default function Hero() {

  return (
    <section className="relative w-screen min-h-[70vh] px-6 py-16 overflow-hidden">

      {/* Hero Image */}
      <img
        src= "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80"
        alt="Professional receiving certificate in a modern learning environment"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* AGPN Blue Overlay */}
      <div className="absolute inset-0 bg-[#1F3164]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-white">

        {/* label */}
        <Reveal animation="fade-right">
        <div className="inline-flex gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-white/90">
          <span className="h-2 w-2 rounded-full bg-white" />
          CERTIFICATES
        </div>
        </Reveal>

        {/* headline */}
        <Reveal animation="fade-left">
        <h1 className="mt-4 text-center text-4xl font-extrabold sm:text-5xl">
          AGPN CERTIFICATES & RECOGNITION
        </h1>
        </Reveal>

        {/* tagline */}
        <Reveal animation="fade-right">
        <p className="mt-4 text-center text-lg font-semibold text-white/95">
          Proof of Skill. Proof of Readiness.
        </p>
        </Reveal>

        {/* description */}
        <Reveal animation="fade-left">
        <p className="text-center mt-6 max-w-3xl leading-relaxed text-white/90">
          At AGPN, certificates are not academic titles.
          They are evidence of structured, practical skill development.
          <br/>
          Our certificates exist to confirm that a participant has completed a defined training program and demonstrated applied understanding of relevant digital competencies.
        </p>
        </Reveal>

      </div>

    </section>
  );
}