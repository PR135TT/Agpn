import { Link } from "react-router-dom";
import Reveal from "../components/reveal";

// Where the "Request for Trained Talent" button goes.
// Use a route ("/talent-request") or a full link to your form ("https://...").
const TALENT_REQUEST_URL = "/talent-request";

const PILLARS = [
  {
    title: "Market-Validated Skills",
    text: "Practical training built on real revenue generation and market experience.",
  },
  {
    title: "Radical Transparency",
    text: "We don’t create jobs. We connect you to real opportunities.",
  },
  {
    title: "Complete Ecosystem",
    text: "Skills, career pathways, international education, and business growth under one roof.",
  },
];

const LEARN_SKILLS = [
  "B2B Sales & Business Development",
  "Performance Marketing & Paid Media",
  "Virtual Assistance & Remote Work Operations",
  "Data Analysis",
  "Social Media Management",
  "AI Automation & Prompt Engineering",
];

const WHO_NEEDS_TALENT = [
  "A company needs a trained Sales & Business Development professional.",
  "Another business needs a Performance Marketer.",
  "An organisation needs a Social Media Manager.",
  "A company needs a Virtual Assistant or Data Analyst.",
];

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest ${
        light ? "text-white/90" : "text-[#1A2B6D]"
      }`}
    >
      <span className={`h-[2px] w-6 ${light ? "bg-white/70" : "bg-[#1F3164]"}`} />
      {children}
    </div>
  );
}

// Internal route -> <Link>, full URL -> normal link in a new tab.
function CtaLink({ to, className, children }) {
  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default function WhatWeDoSection() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {/* WHY AGPN WORKS (image + content card) */}
        <Reveal animation="slide-up">
          <div className="reveal bg-white rounded-2xl shadow-[0_20px_55px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-500 hover:-translate-y-2">
            <div className="grid md:grid-cols-12">
              {/* Image Side */}
              <div className="md:col-span-5 h-64 md:h-auto relative">
                <img
                  src="https://img.freepik.com/premium-photo/team-young-african-people-office-table-with-laptops_219728-4514.jpg"
                  alt="Team of young African professionals working together on laptops"
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#1F3164]/60"></div>
              </div>

              {/* Content Side */}
              <div className="md:col-span-7 p-8 md:p-12">
                <Reveal animation="slide-up">
                  <SectionLabel>WHY AGPN WORKS</SectionLabel>
                  <h2 className="mt-3 text-2xl font-extrabold text-[#1A2B6D]">
                    Built on Proven Execution
                  </h2>
                </Reveal>

                <Reveal animation="slide-up" delay={100}>
                  <p className="mt-4 text-slate-700 leading-relaxed text-lg">
                    Every framework we teach is backed by real market results
                    through our parent company, CBM Sales & Biz Solution, where
                    disciplined digital execution drove significant revenue growth
                    across multiple sectors.
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#1A2B6D]">
                    We don’t teach theory; we teach what works.
                  </p>
                </Reveal>

                <h3 className="mt-8 text-sm font-bold tracking-widest text-[#1F3164]">
                  THREE PILLARS
                </h3>

                <ol className="mt-4 space-y-4">
                  {PILLARS.map((pillar, index) => (
                    <Reveal key={pillar.title} animation="slide-up" delay={index * 120}>
                      <li className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1A2B6D] text-sm font-bold text-white"
                        >
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-bold text-[#1A2B6D]">{pillar.title}</p>
                          <p className="mt-1 text-slate-700 leading-relaxed">
                            {pillar.text}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>

        {/* WHAT WE DO (three core pillars) */}
        <div>
          <Reveal animation="slide-up">
            <SectionLabel>WHAT WE DO</SectionLabel>
            <h2 className="mt-3 text-2xl font-extrabold text-[#1A2B6D]">
              The Three Core Pillars
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Reveal animation="fade-right" delay={0}>
              <div className="h-full rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-extrabold tracking-wide text-[#1A2B6D]">
                  LEARN
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Master high-demand digital skills, including:
                </p>
                <ul className="mt-3 space-y-2 text-slate-700">
                  {LEARN_SKILLS.map((skill) => (
                    <li key={skill} className="flex gap-3">
                      <span className="font-bold text-[#1A2B6D]">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal animation="slide-up" delay={120}>
              <div className="h-full rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-extrabold tracking-wide text-[#1A2B6D]">
                  GROW
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Build a real portfolio, sharpen your professional brand, and gain
                  hands-on project experience.
                </p>
              </div>
            </Reveal>

            <Reveal animation="fade-left" delay={240}>
              <div className="h-full rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-extrabold tracking-wide text-[#1A2B6D]">
                  EARN
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Access referral earnings, local client projects, and global remote
                  opportunities.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* CONNECTING TALENT TO BUSINESSES */}
        <Reveal animation="slide-up">
          <div className="rounded-2xl bg-[#1F3164] p-8 text-white shadow-[0_20px_55px_rgba(0,0,0,0.18)] md:p-12">
            <SectionLabel light>CONNECTING TALENT TO BUSINESSES</SectionLabel>

            <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight md:text-3xl">
              Connecting Skilled African Talent to Businesses That Need Them.
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/90">
              AGPN does not stop at training. We build a pipeline of skilled and
              professionally prepared talent and connect qualified graduates to
              businesses, companies and organisations seeking capable professionals.
            </p>

            <h3 className="mt-8 text-lg font-bold">Who Needs Our Talent?</h3>
            <ul className="mt-3 space-y-2 text-white/90">
              {WHO_NEEDS_TALENT.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-3xl leading-relaxed text-white/90">
              AGPN builds the talent pipeline and connects qualified graduates to
              these organisations and employment opportunities.
            </p>

            <div className="mt-8 border-t border-white/20 pt-6">
              <p className="text-lg font-semibold">
                Are you a business or organisation looking for capable, trained
                professionals?
              </p>

              <CtaLink
                to={TALENT_REQUEST_URL}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-[#1F3164] shadow-md transition hover:bg-[#eef1fa] active:scale-[0.99]"
              >
                Request for Trained Talent Here
              </CtaLink>
            </div>
          </div>
        </Reveal>

        <Reveal animation="fade-up">
          <p className="text-center text-lg font-semibold text-[#1A2B6D]">
            Bridging Untapped Talent to Global Opportunity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}