import Reveal from "../components/reveal"
import BusinessForm from "./businessForm"
import {useState} from "react"
import Skeleton from "../components/skeleton"
import useCmsPage from "../hooks/useCmsPage"


export default function Business(){

  const [showForm, setShowForm] = useState(false)
  const {pageData, loading, error} = useCmsPage("get-involved")
      
    if (loading) {
        return <Skeleton/>
    }
          
    if (error) {
        return <p>{error}</p>
    }
        
    const acf = pageData.acf

    return (
        <section className="bg-white py-7 px-6">
        {/* BUSINESS OWNERS */}
        <Reveal animation="fade-left">
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            {acf.business_title}
          </h2>
          <p className=" text-[#0B1020]/80 mt-1">
            {acf.business_description}
          </p>

          <button onClick={() => setShowForm(true)}
           className="mt-4 bg-[#1A2B6D] text-white px-5 py-2 rounded-md font-semibold shadow-md active:scale-[0.99] transition">
            {acf.business_button_text}
          </button>

          <div className="mt-6 space-y-4 text-[#0B1020]/80">
            <p>
             {acf.business_are}
            </p>
            <p>
              {acf.business_agpn}
            </p>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-[#1A2B6D] mb-3">{acf.business_our}</p>

            <ul className="list-disc ml-6 space-y-2 text-[#0B1020]/80">
              <li>{acf.business_comp}</li>
              <li>{acf.business_perform}</li>
              <li>{acf.business_conversion}</li>
              <li>{acf.business_struc}</li>
            </ul>
          </div>

          <p className="mt-6 font-bold text-[#1A2B6D]">
            {acf.business_investment}
            <br/>
            {acf.business_results}
          </p>
        </div>
        </Reveal>
        <BusinessForm
        showForm={showForm}
        setShowForm={setShowForm}/>
        </section>
    )
}