import Reveal from "../components/reveal"
import {useState} from "react"
import SponsorForm from "./sponsorForm"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"


export default function Partner() {

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
      <Reveal animation="fade-left">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">

          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            {acf.partner_title}
          </h2>

          <p className="mt-3 font-semibold text-[#0B1020]/80">
            {acf.partner_access}
          </p>
          <p>
            {acf.partner_agpn}
          </p>
          <div className="mt-6 space-y-4 text-[#0B1020]/80">
          <p>{acf.partner_benefit}</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>{acf.partner_early}</li>
              <li>{acf.partner_reduced}</li>
              <li>{acf.partner_align}</li>
              <li>{acf.partner_brand}</li>
            </ul>

            <p className="font-semibold text-[#1A2B6D]">
              {acf.partner_build}<br/>
              {acf.partner_partner}
            </p>

          </div>

          <button
            onClick={() => setShowForm(true)}
            className="inline-block mt-6 bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold shadow-md active:scale-[0.99] transition"
          >
            Become a Partner
          </button>

        </div>

      </div>
      </Reveal>
      <SponsorForm
      showForm={showForm}
      setShowForm={setShowForm}/>
    </section>
  );
}