// Featured.jsx
import { Link } from "react-router-dom";
import Reveal from "../components/reveal"

export default function Featured() {

  const featured = [
    {
      id: "frameworks-100m",
      heading:
        "How Proven Frameworks Generated ₦100M+ in Revenue — And What You Can Learn",
      preview:
        "A breakdown of structured digital systems developed through CBM Sales & Biz Solution and how they produced measurable market results. Practical lessons for entrepreneurs and digital professionals.",
    },
    {
      id: "digital-skills-vs-education",
      heading: "Digital Skills vs Traditional Education: What the Market Actually Rewards",
      preview:
        "An honest look at how structured digital competence complements academic education and opens alternative income pathways for young professionals",
    },
    {
      id: "bridge-access-gap",
      heading:
        "5 Practical Ways to Bridge the Access Gap",
      preview:
        "Actionable steps to gain relevant digital skills, build positioning, and access structured opportunities through ecosystem-based growth.",
    },
    {
      id: "sponsorship-10k-impact",
      heading: "How Structured Sponsorship Drives Measurable Impact",
      preview:
        "A transparent explanation of how sponsorship enables access to skills, workforce readiness, and long-term economic participation.",
    },
    {
      id: "study-abroad-truth",
      heading: "What to Know Before Applying to Study Abroad",
      preview:
        "Realistic guidance on preparation, documentation, visa considerations, and structured planning for international education pathways.",
    },
    {
      id: "digital-marketing-training-fails",
      heading: "Why Many Digital Training Programs Fail — And How to Avoid It",
      preview:
        "The difference between certificate-focused training and structured, market-aligned competence development.",
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