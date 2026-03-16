import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Hero() {

    const {pageData, loading, error} = useCmsPage("ecosystem")
  
    if (loading) {
      return <Skeleton/>
    }
  
    if (error) {
      return <p>{error}</p>
    }
  
    const acf = pageData.acf
    const imageUrl = acf?.ecosystem_hero_image

  return (
    <section className="relative w-screen min-h-[70vh] py-16 px-6 overflow-hidden">

      {/* Hero Image */}
      <img
        src={imageUrl || "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"}
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
          {acf.hero_headline}
        </h1>

        {/* description */}
        <p className="text-white/90 text-lg leading-relaxed max-w-4xl">
          {acf.hero_description}
        </p>
        </Reveal>

      </div>

    </section>
  );
}