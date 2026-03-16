import { Link } from "react-router-dom";
import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Content() {

        const {pageData, loading, error} = useCmsPage("certificates")
      
        if (loading) {
          return <Skeleton/>
        }
      
        if (error) {
          return <p>{error}</p>
        }
      
        const acf = pageData.acf

  return (
    <>
      {/* ABOUT (WHITE) */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal animation="fade-right">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            {acf.about_title}
          </h2>
          </Reveal>

          <Reveal animation="fade-left">
          <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
            {acf.about_description}
          </p>
          </Reveal>

          <Reveal animation="fade-right">
          <div className="mt-6 bg-white border border-black/10 rounded-lg p-6 shadow-sm space-y-2">
            <p className="font-semibold text-[#1A2B6D]">{acf.clarification_title}</p>
            <p className="text-[#0B1020]/80">•{acf.clarification_text}</p>
            <p className="text-[#0B1020]/80">•{acf.clarification_text2}</p>
            <p className="text-[#0B1020]/80">•{acf.clarification_text3}</p>
            <p className="text-[#0B1020]/80">•{acf.clarification_text4}</p>
          </div>
          </Reveal>

          <Reveal animation="slide-up">
          <p className="mt-4 text-[#0B1020]/80">
            {acf.about_foot}
          </p>
          </Reveal>
        </div>
      </section>

      {/* VALUE (WHITE) */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal animation="slide-up" delay={0}>
            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
              {acf.value_maintitle}
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: acf.value_title,
                text: acf.value_description,
              },
              {
                title: acf.value_title2,
                text: acf.value_description2,
              },
              {
                title: acf.value_title3,
                text: acf.value_description3,
              },
              {
                title: acf.value_title4,
                text: acf.value_description4,
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
            {acf.issue_main}
          </h2>
          </Reveal>

          <div className="mt-6 space-y-4 text-[#0B1020]/80">
          <Reveal animation="fade-left">
            <p>
              <span className="font-semibold text-[#1A2B6D]">{acf.issue_title}</span>{" "}
                <br/>{acf.issue_text}
            </p>
            </Reveal>
            
            <Reveal animation="fade-right">
            <p>
              <span className="font-semibold text-[#1A2B6D]">{acf.issue_title2}</span>{" "}
                <br/>{acf.issue_text2}
            </p>
            </Reveal>

            <Reveal animation="fade-left">
            <p>
              <span className="font-semibold text-[#1A2B6D]">{acf.issue_text3}</span>{" "}
            </p>
            </Reveal>
          </div>

          <Reveal animation="fade-right">
          <p className="mt-4 font-semibold text-[#1A2B6D]">
            {acf.issue_text4}
          </p>
          </Reveal>
        </div>
      </section>

      {/* OUR COMMITMENT (WHITE) */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
        <Reveal animation="fade-left">
              <h2 className="text-2xl font-extrabold text-[#1A2B6D]">{acf.commitment_main}</h2>
          </Reveal>
          <div className="mt-6 space-y-3 text-[#0B1020]/80">
          <Reveal animation="fade-right">
            <p>• <span className="font-semibold text-[#1A2B6D]">{acf.commitment_title}</span><br/>{acf.commitment_text}</p>
          </Reveal>
          <Reveal animation="fade-left">
            <p>• <span className="font-semibold text-[#1A2B6D]">{acf.commitment_title2}</span><br/>{acf.commitment_text2}</p>
          </Reveal>
          <Reveal animation="fade-right">
            <p>• <span className="font-semibold text-[#1A2B6D]">{acf.commitment_title3}</span><br/>{acf.commitment_text3}</p>
          </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO NOT PROMISE (WHITE card) */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto bg-white border border-black/10 rounded-lg p-6 shadow-sm">
          <Reveal animation="slide-up">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            {acf.promise_main}
          </h2>
          </Reveal>

          <div className="mt-4 space-y-2 text-[#0B1020]/80">
          <Reveal animation="fade-right">
            <p>• {acf.promise_text}</p>
          </Reveal>
         <Reveal animation="fade-left">
            <p>• {acf.promise_text2}</p>
          </Reveal>
          <Reveal animation="fade-right">
            <p>• {acf.promise_text3}</p>
          </Reveal>
          <Reveal animation="fade-left">
            <p>• {acf.promise_text4}</p> 
          </Reveal>
          <Reveal animation="fade-right">
            <p>• {acf.promise_text5}</p>
          </Reveal>
          </div>

          <Reveal animation="fade-left">
          <p className="mt-4 text-[#0B1020]/80">
            {acf.promise_text6}
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
            {acf.participants_main}
          </h2>
          </Reveal>

          <div className="mt-6 space-y-3 text-[#0B1020]/80">
          <Reveal animation="fade-right">
            <p>• {acf.participants_text}</p>
          </Reveal>
          <Reveal animation="fade-left">
            <p>• {acf.participants_text2}</p>
          </Reveal>
          <Reveal animation="fade-right">
            <p>• {acf.participants_text3}</p>
          </Reveal>
          <Reveal animation="fade-left">
            <p>• {acf.participants_text4}</p>
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