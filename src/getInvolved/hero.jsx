import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Hero() {

  const {pageData, loading, error} = useCmsPage("get-involved")
      
    if (loading) {
        return <Skeleton/>
    }
          
    if (error) {
        return <p>{error}</p>
    }
        
    const acf = pageData.acf
    const imageUrl = acf?.ecosystem_hero_image

  return (
    <section className="relative px-6 py-16 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={imageUrl || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"}
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
          {acf.hero_title}
        </h1>

        {/* description */}
        <p className="mt-4 max-w-3xl mx-auto text-white/90 leading-relaxed">
          {acf.hero_description}
        </p>

        <p className="mt-4 font-semibold text-white/95">
          {acf.hero_scroll}
        </p>

      </div>
      </Reveal>

    </section>
  );
}