// Featured.jsx
import { Link } from "react-router-dom";
import Reveal from "../components/reveal"

export default function Featured() {

  const featured = [
    {
      id: "digital-skills",
      heading:
        "Digital Skills & the Changing World of Work",
      preview:
        "Understanding high-demand digital capabilities and how to build a comptitive career in today's market.",
    },
    {
      id: "digital-skills-education",
      heading: "Digital Skills & Formal Education",
      preview:
        "How practical digital competencies complement academic qualifications to open up broader career paths.",
    },
    {
      id: "building-remote-career",
      heading:
        "Building a Remote Career",
      preview:
        "Key skills, portfolio positioning and practical steps to prepare for global remote opportunities.",
    },
    {
      id: "essential-steps",
      heading: "Essential Steps Before Studying Abroad",
      preview:
        "Clear realistic guidance on choosing international programs, preparing documents and planning your study journey.",
    },
    {
      id: "practical-digital-strategies",
      heading: "Practical Digital Strategies for Business Growth",
      preview:
        "How customer acquisition systems, performance marketing and digital tools help businesses exapnd revenue.",
    },
  ];

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-extrabold text-[#1A2B6D]">
             FEATURED ARTICLES
            </h2>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((post, i) => (
          <Reveal key={post.id} animation="slide-up" delay={i * 120}>
            <div
              id={post.id}
              className="bg-white border border-black/10 rounded-lg p-6 shadow-sm hover:shadow-md transition scroll-mt-32"
            >
              <h3 className="text-lg font-extrabold text-[#1A2B6D] leading-snug">
                {post.heading}
              </h3>

              <p className="mt-3 text-[#0B1020]/80 leading-relaxed">
                {post.preview}
              </p>

              <Link
                to={`/fArticle`}
                className="mt-6 inline-flex items-center font-semibold text-[#1A2B6D] hover:opacity-80 transition"
              >
                Read More
              </Link>
            </div>
          </Reveal>
        ))}

        <Reveal animation="fade-up" delay={featured.length * 120}>
          <Link
            to="/fArticle"
            className="bg-[#1A2B6D] text-center text-white font-semibold px-5 py-3 rounded-md shadow-md active:scale-[0.99] transition"
          >
            View All Articles
          </Link>
        </Reveal>
      </div>
      </div>
    </section>
  );
}