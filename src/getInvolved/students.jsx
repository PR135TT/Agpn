import Reveal from "../components/reveal"
import StudentForm from "./studentForm"
import {useState} from "react"
import Skeleton from "../components/skeleton"
import useCmsPage from "../hooks/useCmsPage"

export default function Students(){

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
        {/* STUDENTS */}
        <Reveal animation="fade-right">
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            {acf.student_title}
            </h2>
            <p className=" text-[#0B1020]/80 mt-1">
            {acf.student_description}
            </p>
            <button onClick={() => setShowForm(true)}
            className="mt-4 bg-[#1A2B6D] text-white px-5 py-2 rounded-md font-semibold shadow-md active:scale-[0.99] transition">
            {acf.student_button_text}
            </button>

            <div className="mt-6 space-y-4 text-[#0B1020]/80">
            <p>{acf.student_dream}</p>
            </div>

            <div className="mt-6">
            <p className="font-semibold text-[#1A2B6D] mb-3">
                {acf.student_we}
            </p>

            <ul className="list-disc ml-6 space-y-2 text-[#0B1020]/80">
                <li>{acf.student_uni}</li>
                <li>{acf.student_app}</li>
                <li>{acf.student_interview}</li>
            </ul>
            </div>

            <p className="mt-4 font-semibold text-[#1A2B6D]">{acf.student_countries_covered}</p>
            <p className="text-[#0B1020]/80 mt-1">{acf.student_countries}</p>
        </div>
        </Reveal>
        <StudentForm
        showForm={showForm}
        setShowForm={setShowForm}/>
        </section>
    )
}