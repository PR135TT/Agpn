import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Hero() {

  const {pageData, loading, error} = useCmsPage("empowerment")

  if (loading) {
    return <Skeleton/>
  }

  if (error) {
    return <p>{error}</p>
  }

  const acf = pageData.acf
  const imageUrl = acf?.empowerment_hero_image

  return (
    <section className="relative min-h-[70vh] px-6 py-16 overflow-hidden">

      {/* Hero Image */}
      <img
        src={imageUrl || "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80"}
        alt="Confident African professionals collaborating with laptops"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* AGPN brand overlay */}
      <div className="absolute inset-0 bg-[#1F3164]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">

        {/* label */}
        <Reveal animation="fade-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-white/90">
          <span className="h-2 w-2 rounded-full bg-white" />
          EMPOWERMENT
        </div>
        </Reveal>

        {/* headline */}
        <Reveal animation="fade-right">
        <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold">
          {acf.hero_title}
        </h1>
        </Reveal>

        {/* tagline */}
        <Reveal animation="fade-left">
        <p className="mt-4 text-lg font-semibold text-white/95">
          {acf.hero_subtitle}
        </p>
        </Reveal>

        {/* description */}
        <Reveal animation="fade-right">
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90 leading-relaxed">
          {acf.hero_description}
        </p>
        </Reveal>

      </div>

    </section>
  );
}