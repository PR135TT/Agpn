import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const slides = [
    {
      image:
        "slide1.jpeg",
      title: "Bridging Untapped Talent to Global Opportunity. We are excited to have you be a part of AGPN",
      button: "Discover More",
      link: "/about",
    },
    {
      image:
        "slide2.jpeg",
      title: "Secure Your Future with Real-World, High Demand Digital Skills",
      button: "Get Started",
      link: "/empowerment",
    },
    {
      image:
        "slide3.jpeg",
      title: "Get Connected to Global Career Pathways",
      button: "Explore",
      link: "/ecosystem",
    },
    {
      image:
        "slide4.jpeg",
      title: "Get Connected to Remote & Full-Time Jobs With Top Companies",
      button: "Learn More",
      link: "/getinvolved",
    },
    {
      image:
        "slide5.jpeg",
      title: "Want to Study Abroad? Now is the Time. Top Universities await you.",
      button: "See How",
      link: "/getinvolved",
    },
    {
      image:
        "slide6.jpeg",
      title: "Learn. Grow. Earn - All in One Global Ecosystem. Explore your chances now.",
      button: "Join Now",
      link: "/certificates",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full min-h-[520px] bg-center bg-cover transition-opacity duration-5000 ease-in-out"
      style={{ backgroundImage: `url('${slide.image}')` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* content */}
      <div className="relative z-10 h-full w-full px-5 sm:px-8">
        <div className="min-h-[520px] flex flex-col justify-center max-w-2xl">
          <h1 key={current} className="text-white font-abold leading-tight text-3xl sm:text-5xl animate-fadeInUp">
            {slide.title}
            <br />
            <span className="font-light">{slide.highlight}</span>
          </h1>

          <div className="mt-8">
            <Link
              to={slide.link}
              className="inline-block bg-yellow-500 hover:bg-[#142457] text-white font-semibold px-8 py-4 rounded-md shadow-md animate-fadeInUp transition-all"
            >
              {slide.button}
            </Link>
          </div>
        </div>
      </div>
      <style>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fadeInUp {
        animation: fadeInUp 700ms ease-out;
      }
    `}</style>
    </section>
  );
}
