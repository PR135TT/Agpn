import { Link } from "react-router-dom";
import Reveal from "../components/reveal";

// Small helper so every bullet gets the same hanging indent.
function Bullet({ children }) {
  return (
    <p className="flex gap-3">
      <span aria-hidden="true">•</span>
      <span>{children}</span>
    </p>
  );
}

export default function Content() {
  return (
    <>
      {/* WHAT THE CERTIFICATE REPRESENTS (WHITE) */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal animation="fade-right">
            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
              WHAT THE CERTIFICATE REPRESENTS
            </h2>
          </Reveal>

          <Reveal animation="fade-left">
            <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
              Your AGPN Certificate of Completion:
            </p>
          </Reveal>

          <div className="mt-6 bg-white border border-black/10 rounded-lg p-6 shadow-sm space-y-3 text-[#0B1020]/80">
            <Reveal animation="fade-right">
              <Bullet>Confirms successful completion of a structured AGPN program.</Bullet>
            </Reveal>
            <Reveal animation="fade-left">
              <Bullet>Validates your practical understanding and hands-on skill.</Bullet>
            </Reveal>
            <Reveal animation="fade-right">
              <Bullet>Strengthens your CV, LinkedIn profile, and professional portfolio.</Bullet>
            </Reveal>
            <Reveal animation="fade-left">
              <Bullet>Signals your readiness for job and remote work opportunities.</Bullet>
            </Reveal>
          </div>

          <Reveal animation="slide-up">
            <div className="mt-6 rounded-lg border-l-4 border-[#1A2B6D] bg-[#1A2B6D]/5 p-5 text-[#0B1020]/80 leading-relaxed">
              <span className="font-semibold text-[#1A2B6D]">Note: </span>
              AGPN certificates validate practical, skills-based training. They are
              professional completion certificates designed for career development,
              not university degrees or academic diplomas.
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW TO EARN YOUR CERTIFICATE (WHITE) */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal animation="fade-left">
            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
              HOW TO EARN YOUR CERTIFICATE
            </h2>
          </Reveal>

          <Reveal animation="fade-right">
            <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
              To earn your certificate, you will:
            </p>
          </Reveal>

          <div className="mt-6 space-y-3">
            {[
              "Complete all program modules and practical sessions.",
              "Deliver assigned client-style projects and assessments.",
              "Pass the final program evaluation.",
            ].map((step, idx) => (
              <Reveal
                key={step}
                animation={idx % 2 === 0 ? "fade-right" : "fade-left"}
                delay={idx * 100}
              >
                <div className="flex items-center gap-4 rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1A2B6D] font-bold text-white"
                  >
                    {idx + 1}
                  </span>
                  <p className="text-[#0B1020]/80">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal animation="slide-up">
            <p className="mt-6 font-semibold text-[#1A2B6D]">
              Certificates are awarded only to participants who meet all completion
              standards.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SAMPLE CERTIFICATE (WHITE) */}
      <section className="bg-white py-14 px-6">
        <Reveal animation="slide-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
              SAMPLE CERTIFICATE
            </h2>

            <div className="mt-6 bg-black/5 h-64 rounded-lg flex items-center justify-center text-[#0B1020]/60 font-semibold border border-black/10">
              AGPN Certificate Sample Placeholder
            </div>

            <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
              Every certificate features the participant’s full name, program title,
              date of issue, and a unique verification reference number.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA (DARK block per brand pattern) */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto bg-[#222222] text-white rounded-2xl p-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
          <Reveal animation="slide-up" delay={0}>
            <h2 className="text-3xl font-extrabold text-white">
              READY TO BUILD YOUR SKILLS?
            </h2>
          </Reveal>

          <Reveal animation="slide-up" delay={80}>
            <p className="mx-auto mt-4 max-w-xl text-white/80 leading-relaxed">
              Equip yourself with practical digital competencies and earn your AGPN
              Certificate of Completion.
            </p>
          </Reveal>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Reveal animation="fade-left" delay={150}>
              <Link
                to="/careerPathway"
                className="inline-flex items-center justify-center bg-[#1A2B6D] text-white px-6 py-3 rounded-md font-semibold shadow-md active:scale-[0.99] transition"
              >
                Apply for Next Cohort
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
