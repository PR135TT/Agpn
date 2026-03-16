import Reveal from "../components/reveal"
import { Link } from "react-router-dom";
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function WhoWeServe() {

  const {pageData, loading, error} = useCmsPage("main-home")
      
    if (loading) {
        return <Skeleton/>
    }
          
    if (error) {
        return <p>{error}</p>
    }
        
    const acf = pageData.acf

  const cards = [
    {
      title: acf.serve_title1,
      text: acf.serve_description1,
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      button: "Join First Cohort",
      link: "/getinvolved#young-talent",
    },
    {
    title: acf.serve_title2,
    text: acf.serve_description2,
    image:
            "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    button: "Explore Study Abroad",
    link: "/getinvolved#students",
    },
    {
      title: acf.serve_title3,
      text: acf.serve_description3,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      button: "Book Consultation",
      link: "/getinvolved#business",
    },
    {
      title: acf.serve_title4,
      text: acf.serve_description4,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
      button: "Partner With Us",
      link: "/empowerment",
    },
  ];

  return (
    <section className="bg-white px-4 py-10">
      <div className="mx-auto w-full max-w-[420px]">
        {/* Header */}
        <p className="text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
          {acf.serve_title}
        </p>

        <h2 className="mt-2 text-[20px] font-extrabold text-[#1A2B6D]">
          {acf.serve_subtitle}
        </h2>

        {/* Cards */}
          <div className="mt-5 grid grid-cols-1 gap-4">
            {cards.map((card, i) => (
              <Reveal
                key={card.title}
                animation={i % 2 === 0 ? "fade-left" : "fade-right"}
                delay={i * 120}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  {/* Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[220px] object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#1F3164]/80 flex flex-col justify-end p-5">
                    <h3 className="text-white text-[16px] font-extrabold">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-white/90 text-[13px] leading-relaxed">
                      {card.text}
                    </p>

                    <Link
                      to={card.link}
                      className="mt-4 inline-block bg-white text-[#1A2B6D] font-semibold text-[13px] px-4 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                      {card.button}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        {/* Highlight */}
        <Reveal animaton="fade-left">
        <div className="mt-6 rounded-xl bg-[#222222] p-5">
          <p className="text-white font-semibold text-[13.5px] leading-relaxed">
            {acf.serve_agpn}
          </p>
        </div>
        </Reveal>
      </div>
    </section>
  );
}