import { Link } from "react-router-dom";
import Reveal from "../components/reveal";

// Button destinations. Make sure both routes exist in App.js.
const CAREER_PATHS_URL = "/careerPathways";
const SPONSOR_URL = "/empowerment";

const FOCUS = [
  {
    title: "Clarity",
    text: "Straight paths. No confusion. You know exactly what you are learning and where it leads.",
  },
  {
    title: "Competence",
    text: "Practical skills that solve real problems, not boring theory.",
  },
  {
    title: "Global Relevance",
    text: "Getting you ready to compete and earn anywhere in the world.",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
      <span className="h-[2px] w-6 bg-[#1F3164]" />
      {children}
    </div>
  );
}

export default function WhereFrom() {
  return (
    <section className="bg-white px-4 pb-10">
      <div className="mx-auto max-w-5xl space-y-5">
        {/* WHERE WE COME FROM (WHITE) */}
        <Reveal animation="fade-up">
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <Reveal animation="fade-left">
              <SectionLabel>WHERE WE COME FROM</SectionLabel>
            </Reveal>

            <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-[#0B1020]/80">
              <p>
                We are not building on guesswork. AGPN is backed by our parent
                company, CBM Sales & Biz Solution.
              </p>
              <p>
                Through CBM, we built and tested real digital systems that
                generated over ₦150M (approximately US$111,659) in actual
                business revenue across multiple sectors.
              </p>
              <p>
                We took those exact field-tested systems and put them into AGPN to
                equip young talent with skills the market actually pays for.
              </p>
            </div>
          </div>
        </Reveal>

        {/* OUR FOCUS IS SIMPLE (WHITE) */}
        <Reveal animation="fade-up">
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <Reveal animation="fade-left">
              <SectionLabel>OUR FOCUS IS SIMPLE</SectionLabel>
            </Reveal>

            <div className="mt-4 space-y-4">
              {FOCUS.map((item, idx) => (
                <Reveal
                  key={item.title}
                  animation={idx % 2 === 0 ? "fade-right" : "fade-left"}
                  delay={idx * 100}
                >
                  <div className="border-l-4 border-[#1A2B6D] pl-4">
                    <h3 className="text-base font-extrabold text-[#1A2B6D]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-[#0B1020]/80">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* FOUNDER'S NOTE (WHITE) */}
        <Reveal animation="fade-up">
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <Reveal animation="fade-left">
              <SectionLabel>FOUNDER’S NOTE</SectionLabel>
            </Reveal>

            <figure className="mt-4">
              <blockquote className="rounded-lg bg-[#1A2B6D]/5 p-4 text-[14px] italic leading-relaxed text-[#0B1020]/80">
                “I started CBM because businesses needed real sales solutions to
                grow. Along the way, I saw the same problem with talented people:
                they are capable, but they don’t have a clear bridge to the
                opportunities waiting for them. AGPN is how we close that gap for
                good.”
              </blockquote>

              <figcaption className="mt-4">
                <p className="font-extrabold text-[#1A2B6D]">Claudius Belenuwo</p>
                <p className="text-[13px] text-[#0B1020]/70">
                  Founder, AGPN & CBM Sales & Biz Solution
                </p>
              </figcaption>
            </figure>
          </div>
        </Reveal>

        {/* READY TO TAKE ACTION (DARK block per brand pattern) */}
        <Reveal animation="slide-up">
          <div className="rounded-2xl bg-[#222222] p-6 text-center text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <h2 className="text-2xl font-extrabold text-white">
              READY TO TAKE ACTION?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-white/85">
              Take the next step towards developing your skills and accessing
              opportunities through AGPN.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to={CAREER_PATHS_URL}
                className="inline-flex items-center justify-center rounded-md bg-[#1A2B6D] px-6 py-3 font-semibold text-white shadow-md transition active:scale-[0.99]"
              >
                Apply for the Next Cohort
              </Link>

              <Link
                to={SPONSOR_URL}
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition active:scale-[0.99]"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal animation="fade-up">
          <p className="pt-2 text-center text-[15px] font-semibold text-[#1A2B6D]">
            Bridging Untapped Talent to Global Opportunity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}