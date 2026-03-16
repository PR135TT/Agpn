import Reveal from "../components/reveal"
import TalentForm from "./youngTalentForm"
import {useState} from "react"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"


export default function Content() {
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
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* YOUNG TALENT */}
        <Reveal animation="fade-right">
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
           {acf.young_talent_title}
          </h2>
          <p className=" text-[#0B1020]/80 mt-1">
            {acf.young_talent_description}
          </p>
          <button onClick={() => setShowForm(true)}
           className="mt-4 bg-[#1A2B6D] text-white px-5 py-2 rounded-md font-semibold shadow-md active:scale-[0.99] transition">
            {acf.young_talent_button_text}
          </button>
          <div className="mt-6 space-y-4 text-[#0B1020]/80 leading-relaxed">
            <p>
              {acf.young_talent_question}
            </p>
            <p>
              {acf.young_talent_edu}
            </p>
            <p className="font-semibold text-[#1A2B6D]">
              {acf.young_talent_disconnect}
            </p>

            <p>
              {acf.young_talent_equip}
            </p>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-[#1A2B6D] mb-3">
              {acf.young_talent_skill_title}
            </p>

            <ul className="list-disc ml-6 space-y-2 text-[#0B1020]/80">
              <li>{acf.young_talent_digital}</li>
              <li>{acf.young_talent_social_media}</li>
              <li>{acf.young_talent_content}</li>
              <li>{acf.young_talent_lead}</li>
              <li>{acf.young_talent_commerce}</li>
              <li>{acf.young_talent_virtual}</li>
              <li>{acf.young_talent_business}</li>
              <li>{acf.young_talent_crm}</li>
              <li>{acf.young_talent_analytics}</li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-[#1A2B6D] mb-3">{acf.young_talent_what_title}</p>

            <ul className="list-disc ml-6 space-y-2 text-[#0B1020]/80">
              <li>{acf.young_talent_first}</li>
              <li>{acf.young_talent_6}</li>
              <li>{acf.young_talent_work}</li>
              <li>{acf.young_talent_get}</li>
              <li>{acf.young_talent_refer}</li>
              <li>{acf.young_talent_port}</li>
              <li>{acf.young_talent_interview}</li>
              <li>{acf.young_talent_direct}</li>
              <li>{acf.young_talent_official}</li>
              <li>{acf.young_talent_lifetime}</li>
            </ul>
          </div>

          <p className="mt-6 font-bold text-[#1A2B6D]">{acf.young_talent_investment}</p>

          <p className="text-sm text-[#0B1020]/60 mt-1">
            {acf.young_talent_result}
          </p>
        </div>
        </Reveal>
      </div>
      <TalentForm
      showForm={showForm}
      setShowForm={setShowForm}/>
    </section>
  );
}