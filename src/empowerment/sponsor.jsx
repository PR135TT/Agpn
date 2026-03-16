import Reveal from "../components/reveal"
import {useState} from "react"
import SponsorForm from "./sponsorForm"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Sponsor() {

   const [showForm, setShowForm] = useState(false)
   const {pageData, loading, error} = useCmsPage("empowerment")
      
if (loading) {
    return <Skeleton/>
}
      
if (error) {
     return <p>{error}</p>
}
    
const acf = pageData.acf

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto">

        {/* main content card */}
        <Reveal animation="fade-left">
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">

          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            {acf.sponsor_title}
          </h2>

          <p className="mt-3 font-semibold text-[#0B1020]/80">
            {acf.sponsor_subtitle}
          </p>

          <div className="mt-6 space-y-4 text-[#0B1020]/80 leading-relaxed">

            <p>
             {acf.sponsor_support}
            </p>

            <p className="font-semibold text-[#1A2B6D]">
              {acf.sponsor_enable}
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>{acf.sponsor_access}</li>
              <li>{acf.sponsor_learning}</li>
              <li>{acf.sponsor_exposure}</li>
            </ul>

            <p className="font-semibold text-[#1A2B6D]">
              {acf.sponsor_equip}
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>{acf.sponsor_global}</li>
              <li>{acf.sponsor_remote}</li>
              <li>{acf.sponsor_productive}</li>
            </ul>

            <p>
              {acf.sponsor_strength}
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