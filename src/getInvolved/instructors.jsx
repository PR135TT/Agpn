import Reveal from "../components/reveal"
import InstructorForm from "./instructorForm"
import {useState} from "react"
import Skeleton from "../components/skeleton"
import useCmsPage from "../hooks/useCmsPage"

export default function Instructors(){

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
     {/* INSTRUCTORS */}
        <Reveal animation="fade-right">
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            {acf.instructor_title}
          </h2>
          <p className=" text-[#0B1020]/80 mt-1">
            {acf.instructor_description}
          </p>
          <button onClick={() => setShowForm(true)} 
          className="mt-4 bg-[#1A2B6D] text-white px-5 py-2 rounded-md font-semibold shadow-md active:scale-[0.99] transition">
            {acf.instructor_button_text}
          </button>

          <div className="mt-6 space-y-4 text-[#0B1020]/80">
            <p>{acf.instructor_are}</p>
            <p className="font-semibold text-[#1A2B6D] mb-3">
              {acf.instructor_join}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[#0B1020]/80">
              <li>{acf.instructor_facilitate}</li>
              <li>{acf.instructor_earn}</li>
              <li>{acf.instructor_expand}</li>
              <li>{acf.instructor_contribute}</li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-[#1A2B6D] mb-3">{acf.instructor_areas}</p>

            <ul className="list-disc ml-6 space-y-2 text-[#0B1020]/80">
              <li>{acf.instructor_digital}</li>
              <li>{acf.instructor_virtual}</li>
              <li>{acf.instructor_content}</li>
              <li>{acf.instructor_business}</li>
            </ul>
          </div>
        </div>
        </Reveal>
        <InstructorForm
        showForm={showForm}
        setShowForm={setShowForm}/>
        </section>
    )
}