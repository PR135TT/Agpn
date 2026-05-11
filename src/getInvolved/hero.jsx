import Reveal from "../components/reveal"

export default function Hero() {

  return (
    <section className="relative px-6 py-16 overflow-hidden">
      
      {/* Background Image */}
      <img
        src= "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
        alt="AGPN collaboration"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blue Overlay (brand color with transparency) */}
      <div className="absolute inset-0 bg-[#1F3164]/85" />

      {/* Content */}
      <Reveal animation="fade-left">
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">

        {/* label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-white/90">
          <span className="h-2 w-2 rounded-full bg-white" />
          GET INVOLVED
        </div>

        {/* headline */}
        <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold">
          Get Involved with AGPN
        </h1>

        {/* description */}
        <p className="mt-4 max-w-3xl mx-auto text-white/90 leading-relaxed">
          From Stagnation to Structured Global Opportunity — AGPN Is the Bridge.
          This page is for those ready to take action: gain structured digital skills, access career pathways, explore international education options, grow a business, or contribute as an instructor.
        </p>

        <p className="mt-4 font-semibold text-white/95">
          Scroll and choose your pathway.
        </p>

      </div>
      </Reveal>

    </section>
  );
}