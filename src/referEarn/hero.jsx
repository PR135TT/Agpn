import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"


export default function Hero() {

  const {pageData, loading, error} = useCmsPage("refer-and-earn")
      
    if (loading) {
        return <Skeleton/>
    }
          
    if (error) {
        return <p>{error}</p>
    }
        
    const acf = pageData.acf

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
          {acf.refer_hero_title}
        </h1>
        </Reveal>

        {/* description */}
        <Reveal animation="fade-right">
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90 leading-relaxed">
          {acf.refer_hero_subtitle} <br/>
          {acf.refer_hero_subtitle2}<br/>
          {acf.refer_hero_subtitle3}
        </p>
        </Reveal>

      </div>

    </section>
  );
}