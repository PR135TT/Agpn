import { Link } from "react-router-dom";
import Reveal from "../components/reveal"

export default function Content() {

  return (
    <>
      {/* ABOUT (WHITE) */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal animation="fade-right">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            ABOUT THE AGPN CERTIFICATE
          </h2>
          </Reveal>

          <Reveal animation="fade-left">
          <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
            The AGPN Certificate of Completion confirms that you have successfully completed a digital skills program and demonstrated practical competence.
          </p>
          </Reveal>

          <Reveal animation="fade-right">
          <div className="mt-6 bg-white border border-black/10 rounded-lg p-6 shadow-sm space-y-2">
            <p className="font-semibold text-[#1A2B6D]">Important Clarifications</p>
            <p className="text-[#0B1020]/80">•Issued by AGPN</p>
            <p className="text-[#0B1020]/80">•Not a university degree</p>
            <p className="text-[#0B1020]/80">•Not accredited by any academic institution</p>
            <p className="text-[#0B1020]/80">•Confirms practical, skills-based learning</p>
          </div>
          </Reveal>

          <Reveal animation="slide-up">
          <p className="mt-4 text-[#0B1020]/80">
            Your certificate signals capability, not academic status.
          </p>
          </Reveal>
        </div>
      </section>

      {/* VALUE (WHITE) */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal animation="slide-up" delay={0}>
            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
              THE VALUE OF YOUR AGPN CERTIFICATE
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Practical Validation",
                text: "Demonstrates hands-on ability in high-demand digital skills.",
              },
              {
                title: "Career Visibility",
                text: "Strengthens your CV, LinkedIn profile, and portfolio when applying for roles or opportunities.",
              },
              {
                title: "Professional Positioning",
                text: "Shows commitment to learning, growth, and skill development.",
              },
              {
                title: "Community Recognition",
                text: "Confirms your status within AGPN's alumni and talent ecosystem.",
              },
            ].map((x, idx) => (
              <Reveal key={x.title} animation="slide-up" delay={120 + idx * 120}>
                <div className="border border-black/10 rounded-lg p-6 bg-white shadow-sm">
                  <h3 className="font-bold text-[#1A2B6D]">{x.title}</h3>
                  <p className="mt-3 text-[#0B1020]/80">{x.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE ISSUE (WHITE) */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal animation="fade-right">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            WHY WE ISSUE CERTIFICATES
          </h2>
          </Reveal>

          <div className="mt-6 space-y-4 text-[#0B1020]/80">
          <Reveal animation="fade-left">
            <p>
              <span className="font-semibold text-[#1A2B6D]">We issue certificates to:</span>{" "}
                <br/>Recognize structured completion
            </p>
            </Reveal>
            
            <Reveal animation="fade-right">
            <p>
              <span className="font-semibold text-[#1A2B6D]">Validate applied competence</span>{" "}
                <br/>Support professional positioning
            </p>
            </Reveal>

            <Reveal animation="fade-left">
            <p>
              <span className="font-semibold text-[#1A2B6D]">Strengthen trust with employers and partners</span>{" "}
            </p>
            </Reveal>
          </div>

          <Reveal animation="fade-right">
          <p className="mt-4 font-semibold text-[#1A2B6D]">
            Certificates support opportunity access — they do not guarantee employment or income outcomes.
          </p>
          </Reveal>
        </div>
      </section>

      {/* OUR COMMITMENT (WHITE) */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
        <Reveal animation="fade-left">
              <h2 className="text-2xl font-extrabold text-[#1A2B6D]">OUR COMMITMENT</h2>
          </Reveal>
          <div className="mt-6 space-y-3 text-[#0B1020]/80">
          <Reveal animation="fade-right">
            <p>• <span className="font-semibold text-[#1A2B6D]">Quality Control</span><br/>Certificates are earned through active participation and demonstrated understanding of program material.</p>
          </Reveal>
          <Reveal animation="fade-left">
            <p>• <span className="font-semibold text-[#1A2B6D]">Digital Accessibility</span><br/>Issued as a professional digital PDF, suitable for printing and online sharing.</p>
          </Reveal>
          <Reveal animation="fade-right">
            <p>• <span className="font-semibold text-[#1A2B6D]">Alumni Access</span><br/>Includes continued access to AGPN alumni updates and ecosystem opportunities.</p>
          </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO NOT PROMISE (WHITE card) */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto bg-white border border-black/10 rounded-lg p-6 shadow-sm">
          <Reveal animation="slide-up">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            WHAT WE DO NOT PROMISE
          </h2>
          </Reveal>

          <div className="mt-4 space-y-2 text-[#0B1020]/80">
          <Reveal animation="fade-right">
            <p>• Academic equivalence</p>
          </Reveal>
         <Reveal animation="fade-left">
            <p>• Government accreditation</p>
          </Reveal>
          <Reveal animation="fade-right">
            <p>• Automatic employment</p>
          </Reveal>
          <Reveal animation="fade-left">
            <p>• Guaranteed income</p> 
          </Reveal>
          <Reveal animation="fade-right">
            <p>• Credit transfer into academic institutions</p>
          </Reveal>
          </div>

          <Reveal animation="fade-left">
          <p className="mt-4 text-[#0B1020]/80">
            Opportunities depend on individual effort, readiness, and market conditions.
          </p>
          </Reveal>
        </div>
      </section>

      {/* SAMPLE CERTIFICATE (WHITE) */}
      <section className="bg-white py-14 px-6">
        <Reveal animation="slide-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            SAMPLE CERTIFICATE DESIGN
          </h2>

          <div className="mt-6 bg-black/5 h-64 rounded-lg flex items-center justify-center text-[#0B1020]/60 font-semibold border border-black/10">
            AGPN Certificate Sample Placeholder
          </div>

          <p className="mt-4 text-[#0B1020]/80">
            Format: Digital PDF (print-ready and shareable)
          </p>

          <button className="mt-4 bg-[#1A2B6D] text-white px-6 py-3 rounded-md font-semibold active:scale-[0.99] transition">
            Download Sample
          </button>
        </div>
        </Reveal>
      </section>

      {/* WHAT PARTICIPANTS RECEIVE (WHITE) */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto bg-white border border-black/10 rounded-lg p-6 shadow-sm">
          <Reveal animation="slide-up">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            WHAT PARTICIPANTS RECEIVE
          </h2>
          </Reveal>

          <div className="mt-6 space-y-3 text-[#0B1020]/80">
          <Reveal animation="fade-right">
            <p>• AGPN Certificate of Completion</p>
          </Reveal>
          <Reveal animation="fade-left">
            <p>• Digital Recognition Badge</p>
          </Reveal>
          <Reveal animation="fade-right">
            <p>• Lifetime Alumni Status</p>
          </Reveal>
          <Reveal animation="fade-left">
            <p>• Continued ecosystem access</p>
          </Reveal>
          </div>
        </div>
      </section>

      {/* CTA (DARK block per brand pattern) */}
<section className="bg-white py-16 px-6">
  <div className="max-w-5xl mx-auto bg-[#222222] text-white rounded-2xl p-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
    
    {/* Header slides up */}
    <Reveal animation="slide-up" delay={0}>
      <h2 className="text-3xl font-extrabold text-white">
        READY TO EARN YOUR AGPN CERTIFICATE?
      </h2>
    </Reveal>

    <div className="mt-6 flex justify-center gap-4 flex-wrap">
      {/* Button 1 fades left */}
      <Reveal animation="fade-left" delay={150}>
        <Link
          to="/getinvolved"
          className="inline-flex items-center justify-center bg-[#1A2B6D] text-white px-6 py-3 rounded-md font-semibold shadow-md active:scale-[0.99] transition"
        >
          Join as Young Talent
        </Link>
      </Reveal>

      {/* Button 2 fades right */}
      <Reveal animation="fade-right" delay={220}>
        <Link
          to="/getinvolved"
          className="inline-flex items-center justify-center bg-white/10 border border-white/25 text-white px-6 py-3 rounded-md font-semibold active:scale-[0.99] transition"
        >
          Explore Skills
        </Link>
      </Reveal>
    </div>
  </div>
</section>
    </>
  );
}