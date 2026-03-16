import Reveal from "../components/reveal"

export default function Blog() {
  const categories = [
    { name: "All Posts", id: "all-posts" },
    { name: "Digital Skills", id: "digital-skills" },
    { name: "Jobs & Careers", id: "jobs-careers" },
    { name: "Remote Work", id: "remote-work" },
    { name: "Study Abroad", id: "study-abroad" },
    { name: "Business Growth", id: "business-growth" },
    { name: "Opportunities", id: "opportunities" },
    { name: "AGPN Updates", id: "agpn-updates" },
  ];

  return (
    <section className="bg-white pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* CATEGORY BUTTONS */}
        <Reveal animation="fade-right">
        <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
          Blog Categories
        </h2>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.id}
              animation={i % 2 === 0 ? "zoom-in" : "zoom-in"}
              delay={i * 80}
            >
              <a
                href={`#${cat.id}`}
                className={`
                  px-4 py-2 rounded-full font-semibold transition inline-block
                  border border-black/10
                  ${
                    i === 0
                      ? "bg-[#1A2B6D] text-white"
                      : "bg-white text-[#1A2B6D] hover:bg-[#1A2B6D] hover:text-white"
                  }
                `}
              >
                {cat.name}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
