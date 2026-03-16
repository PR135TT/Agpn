import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ArticlePage() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      setProgress((scrollPosition / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goBackToInsights = () => {
    navigate("/insights");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#f9fafc] min-h-screen flex flex-col items-center justify-center px-6">

      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[4px] bg-[#1A2B6D] z-50"
        style={{ width: `${progress}%` }}
      />

      {/* Placeholder Content */}
      <div className="text-center max-w-lg">
        <h1 className="text-5xl font-extrabold text-[#1A2B6D]">
          No Articles Posted Yet
        </h1>

        <p className="mt-4 text-[#0B1020]/70 text-lg">
          We haven’t published any articles here yet. Check back later for updates, insights, and resources on global digital careers.
        </p>

        <p className="mt-6 text-[#1A2B6D]/80 italic">
          In the meantime, explore our opportunity pathways to grow your digital skills and career.
        </p>

        {/* Back to Insights Button */}
        <button
          onClick={goBackToInsights}
          className="mt-8 px-6 py-3 bg-[#1A2B6D] text-white font-semibold rounded-md shadow-md hover:bg-[#16275a] transition"
        >
          Back to Insights
        </button>
      </div>

    </div>
  );
}