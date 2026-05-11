import Reveal from "../components/reveal"
import {useState} from "react"
import SponsorForm from "./sponsorForm"

export default function Sponsor() {

   const [showForm, setShowForm] = useState(false)

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto">

        {/* main content card */}
        <Reveal animation="fade-left">
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">

          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            WHY SPONSOR AGPN
          </h2>

          <p className="mt-3 font-semibold text-[#0B1020]/80">
           Equip Talent. Expand Opportunity. Create Measurable Impact.
          </p>

          <div className="mt-6 space-y-4 text-[#0B1020]/80 leading-relaxed">

            <p>
             Sponsor support at AGPN is used to reduce access barriers for high-potential young talents who lack financial resources to acquire structured digital skills.
            </p>

            <p className="font-semibold text-[#1A2B6D]">
              Sponsorship enables:
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Access to structured digital skills programs</li>
              <li>* Learning tools and guided mentorship</li>
              <li>Exposure to verified global pathways</li>
            </ul>

            <p className="font-semibold text-[#1A2B6D]">
              Once equipped, individuals become:
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Globally competitive professionals</li>
              <li>Remote contributors and digital specialists</li>
              <li>Productive economic participants</li>
            </ul>

            <p>
              This strengthens communities and builds workforce capacity.
            </p>

          </div>

        </div>
        </Reveal>

        {/* emphasis / conversion block */}
        <Reveal animation="fade-right">
        <div className="mt-8 bg-[#222222] text-white rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">

          <p className="font-semibold text-white">
            Important Clarification
          </p>

          <p className="mt-2 text-white/90 leading-relaxed">
            AGPN does not offer financial returns, profit-sharing, or monetary payback to sponsors.
            All outcomes represent human capital development and measurable impact, not cash investment returns.
          </p>

          <div className="mt-6 h-[2px] w-14 bg-[#1F3164]" />

          <button
             onClick={() => setShowForm(true)}
            className="inline-block mt-6 bg-[#1A2B6D] text-white px-6 py-3 rounded-md font-semibold shadow-md active:scale-[0.99] transition"
          >
            Become a Sponsor
          </button>

        </div>
        </Reveal>

      </div>
      <SponsorForm
      showForm={showForm}
      setShowForm={setShowForm}/>
    </section>
  );
}