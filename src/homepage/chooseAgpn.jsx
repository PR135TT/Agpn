import Reveal from "../components/reveal";
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function WhyChooseAGPN() {

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
      no: "01",
      title: acf.choose_card1_title,
      text:
        acf.choose_card1_description,
    },
    {
      no: "02",
      title: acf.choose_card2_title,
      text:
        acf.choose_card1_description,
    },
    {
      no: "03",
      title: acf.choose_card3_title,
      text:
        acf.choose_card1_description,
    },
    {
      no: "04",
      title: acf.choose_card4_title,
      text:
        acf.choose_card1_description,
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal animation="slide-up">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
            <span className="h-[2px] w-8 bg-[#1F3164]" />
            {acf.choose_heading}
          </div>

          <h2 className="mt-3 text-3xl font-extrabold text-[#1A2B6D]">
            {acf.choose_title}
          </h2>

          <p className="mt-3 text-[#0B1020]/70 max-w-2xl leading-relaxed">
            {acf.choose_description}
          </p>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <Reveal key={item.no} animation="slide-up" delay={i * 140}>
              <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-extrabold text-[#1F3164]">
                    {item.title}
                  </p>

                  <span className="text-xs font-extrabold text-[#1A2B6D]/70 bg-[#1A2B6D]/5 border border-black/10 rounded-full px-3 py-1">
                    {item.no}
                  </span>
                </div>

                <div className="mt-4 h-[2px] w-14 bg-[#1F3164]" />

                <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}