import Reveal from "../components/reveal"
import StudentForm from "./studentForm"
import {useState} from "react"

export default function Students(){

    const [showForm, setShowForm] = useState(false)

    return (
        <section className="bg-white py-7 px-6">
        {/* STUDENTS */}
        <Reveal animation="fade-right">
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            STUDENTS - INTERNATIONAL EDUCATION
            </h2>
            <p className=" text-[#0B1020]/80 mt-1">
            Structured guidance for international study pathways.
            </p>
            <button onClick={() => setShowForm(true)}
            className="mt-4 bg-[#1A2B6D] text-white px-5 py-2 rounded-md font-semibold shadow-md active:scale-[0.99] transition">
            Register Your Interest
            </button>

            <div className="mt-6 space-y-4 text-[#0B1020]/80">
            <p>Dreaming of studying abroad but unsure how to begin?</p>
            </div>

            <div className="mt-6">
            <p className="font-semibold text-[#1A2B6D] mb-3">
                We provide structured support to help you navigate:
            </p>

            <ul className="list-disc ml-6 space-y-2 text-[#0B1020]/80">
                <li>University selection aligned with your academic profile</li>
                <li>Application documentation guidance</li>
                <li>Interview preparation support</li>
            </ul>
            </div>

            <p className="mt-4 font-semibold text-[#1A2B6D]">Countries Covered:</p>
            <p className="text-[#0B1020]/80 mt-1">Canada | UK | Ireland | Poland | Cyprus</p>
            <p className="font-semibold text-[#1A2B6D] mt-3">
                We provide verified guidance and structured support.
                We do not guarantee admission or visa outcomes.
            </p>
        </div>
        </Reveal>
        <StudentForm
        showForm={showForm}
        setShowForm={setShowForm}/>
        </section>
    )
}