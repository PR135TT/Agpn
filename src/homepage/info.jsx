import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Info() {
  
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
      title: acf.info_card1_title,
      text:
        acf.info_card1_description,
    },
    {
      title: acf.info_card2_title,
      text:
        acf.info_card2_description,
    },
    {
      title: acf.info_card3_title,
      text:
        acf.info_card3_description,
    },
    {
      title: acf.info_card4_title,
      text:
        acf.info_card4_description,
    },
  ];

  return (
    <section className="mt-8 h-auto">
      
      <Reveal animation="slide-up">
        <h2 className="text-[18px] font-extrabold text-[#1A2B6D]">
          {acf.info_built}
        </h2>
      </Reveal>

      <Reveal animation="slide-up" delay={80}>
        <p className="mt-2 text-[15px] leading-relaxed text-[#1A2B6D]">
            {acf.info_description}
        </p>
      </Reveal>

      <div className="mt-4 grid gap-3">
        {items.map((item, i) => (
          <Reveal key={item.title} animation="slide-up" delay={i * 120}>
            <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
              <p className="text-[14px] font-bold tracking-wide text-[#1A2B6D]">
                {item.title}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-[#0B1020]/80">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}