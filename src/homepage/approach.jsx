import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function OurApproach() {

  const {pageData, loading, error} = useCmsPage("main-home")
      
    if (loading) {
        return <Skeleton/>
    }
          
    if (error) {
        return <p>{error}</p>
    }
        
    const acf = pageData.acf

  const items = [
    {
      title: acf.approach_learn_title,
      text:
        acf.approach_learn_description,
    },
    {
      title: acf.approach_grow_title,
      text:
        acf.approach_grow_description,
    },
    {
      title: acf.approach_earn_title,
      text:
        acf.approach_earn_description,
    },
  ];

  return (
    <section className="bg-white px-4 py-12 overflow-x-hidden">
      <div className="mx-auto w-full max-w-[420px]">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">

          {/* Eyebrow */}
          <Reveal animation="slide-up">
            <p className="text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
              {acf.approach_title}
            </p>
          </Reveal>

          {/* Heading */}
          <Reveal animation="slide-up" delay={80}>
            <h2 className="mt-2 text-[20px] font-extrabold text-[#1A2B6D] leading-snug">
              {acf.approach_subtitle}
            </h2>
          </Reveal>

          {/* Cards */}
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.title} animation="slide-up" delay={i * 120}>
                <div className="rounded-xl border border-black/10 bg-white p-4">
                  <p className="text-[12px] font-extrabold tracking-wide text-[#1A2B6D]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#0B1020]/80">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Highlighted text */}
          <Reveal animation="slide-up" delay={items.length * 120}>
            <div className="mt-5 rounded-xl bg-[#222222] p-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
              <p className="text-[13.5px] font-semibold leading-relaxed text-white/95">
                {acf.approach_why}
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}