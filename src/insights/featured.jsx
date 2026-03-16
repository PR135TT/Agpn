// Featured.jsx
import { Link } from "react-router-dom";
import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"


export default function Featured() {

  const {pageData, loading, error} = useCmsPage("insights")
      
    if (loading) {
        return <Skeleton/>
    }
          
    if (error) {
        return <p>{error}</p>
    }
        
    const acf = pageData.acf

  const featured = [
    {
      id: "frameworks-100m",
      heading:
        acf.card1_title,
      preview:
        acf.card1_description,
    },
    {
      id: "digital-skills-vs-education",
      heading: acf.card1_title,
      preview:
        acf.card1_description,
    },
    {
      id: "bridge-access-gap",
      heading:
        acf.card1_title,
      preview:
        acf.card1_description,
    },
    {
      id: "sponsorship-10k-impact",
      heading: acf.card1_title,
      preview:
        acf.card1_description,
    },
    {
      id: "study-abroad-truth",
      heading: acf.card1_title,
      preview:
        acf.card1_description,
    },
    {
      id: "digital-marketing-training-fails",
      heading: acf.card1_title,
      preview:
        acf.card1_description,
    },
  ];

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-extrabold text-[#1A2B6D]">
             {acf.featured_articles}
            </h2>
            <p className="mt-2 text-[#0B1020]/70">
              {acf.article_jump}
            </p>
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