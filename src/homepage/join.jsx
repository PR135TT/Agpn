import { Link } from "react-router-dom";
import Reveal from "../components/reveal";

export default function JoinFirstCohort() {

  const points = [
    {
      title: "Master Practical Digital Skills",
      text: "Learn the frameworks that translate directly into market value.",
    },
    {
      title: "Build Globally Relevant Expertise",
      text: "Develop expertise that commands respect in any economy.",
    },
    {
      title: "Access Strategic Pathways",
      text: "Connect to verified international education and professional opportunities.",
    },
    {
      title: "Join a Purpose Driven Community",
      text: "Be part of the most trusted human capital infrastructure in Nigeria.",
    },
  ];

  return (
    <section className="bg-white px-4 py-12 overflow-x-hidden">
      <div className="mx-auto w-full max-w-[420px]">
        <div className="rounded-2xl border border-black/10 bg-[#1F3164] p-6 shadow-md">
          
          {/* Eyebrow */}
          <Reveal animation="fade-left">
            <p className="text-[11px] font-semibold tracking-widest text-white/80">
              JOIN OUR FIRST COHORT
            </p>
          </Reveal>

          {/* Heading */}
          <Reveal animation="fade-right" delay={80}>
            <h2 className="mt-2 text-[22px] font-extrabold text-white leading-snug">
              Be part of Something Historic
            </h2>
          </Reveal>

          {/* Points (alternate fade left/right) */}
          <div className="mt-5 space-y-4">
            {points.map((point, i) => (
              <Reveal
                key={point.title}
                animation={i % 2 === 0 ? "fade-left" : "fade-right"}
                delay={120 + i * 90}
              >
                <div>
                  <p className="text-[13.5px] font-semibold text-white">
                    {point.title}
                  </p>
                  <p className="text-[13px] text-white/85 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA buttons (slide up) */}
          <div className="mt-6 grid grid-cols-1 gap-3">
            <Reveal animation="slide-up" delay={120 + points.length * 90}>
              <Link
                to="/getinvolved"
                className="w-full block text-center bg-white text-[#1A2B6D] font-semibold px-4 py-3 rounded-md hover:bg-gray-100 transition"
              >
                Get Involved
              </Link>
            </Reveal>

            <Reveal animation="slide-up" delay={120 + points.length * 90 + 120}>
              <Link
                to="/ecosystem"
                className="w-full block text-center border border-white text-white font-semibold px-4 py-3 rounded-md hover:bg-white hover:text-[#1A2B6D] transition"
              >
                Our Ecosystem
              </Link>
            </Reveal>

            <Reveal animation="slide-up" delay={120 + points.length * 90 + 240}>
              <Link
                to="/referandearn"
                className="w-full block text-center bg-[#222222] text-white font-semibold px-4 py-3 rounded-md hover:bg-black transition"
              >
                Refer and Earn
              </Link>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}