import { Link } from "react-router-dom";

// The #ids match the section ids on the Career Pathways page.
const PATHS = [
  { label: "B2B Sales & Business Development", to: "/careerPathways#b2b-sales" },
  { label: "Performance Marketing & Paid Media", to: "/careerPathways#performance-marketing" },
  { label: "Virtual Assistance & Remote Work Operations", to: "/careerPathways#virtual-assistance" },
  { label: "Social Media Management", to: "/careerPathways#social-media" },
  { label: "Data Analysis", to: "/careerPathways#data-analysis" },
  { label: "AI Prompt Engineering & Automation", to: "/careerPathways#ai-prompt-engineering" },
  { label: "& More…", to: "/careerPathways" },
];

export default function ChooseCareerPath() {
  return (
    <section
      aria-labelledby="choose-career-path"
      className="bg-white px-4 py-16"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(31,49,100,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,49,100,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <h2
        id="choose-career-path"
        className="text-center text-4xl font-extrabold leading-tight text-[#0b1226] sm:text-5xl"
      >
        Choose Your
        <br />
        <span className="text-[#1F3164]">Career Path</span>
      </h2>

      {/* Button stack with the outlined bracket frame behind it */}
      <div className="relative mx-auto mt-10 max-w-md">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-7 top-7 rounded-2xl border border-[#2f5fd0]"
        />
        <ul className="relative mx-5 space-y-3">
          {PATHS.map((path) => (
            <li key={path.label}>
              <Link
                to={path.to}
                className="flex min-h-[3.5rem] items-center justify-center rounded-xl bg-[#1F3164] px-4 py-4 text-center text-base font-bold leading-snug text-white shadow-lg shadow-[#1F3164]/20 transition-colors hover:bg-[#162452] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5fd0] focus-visible:ring-offset-2"
              >
                {path.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-10 flex w-fit max-w-full items-center gap-3 rounded-full bg-[#0b1226] px-6 py-3 text-sm font-medium text-white">
        <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#3b6fe0]" />
        Multiple Pathways. Global Opportunities.
      </p>

      <div className="mx-auto mt-8 max-w-md rounded-2xl border border-[#2f5fd0] bg-white p-5 text-center">
        <Link
          to="/careerPathways"
          className="inline-block rounded-full bg-[#1F3164] px-10 py-3 text-sm font-bold tracking-[0.2em] text-white transition-colors hover:bg-[#162452] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5fd0] focus-visible:ring-offset-2"
        >
          APPLY NOW
        </Link>
      </div>
    </section>
  );
}