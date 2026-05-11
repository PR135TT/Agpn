import Reveal from "../components/reveal"
import InstructorForm from "./instructorForm"
import {useState} from "react"

export default function Instructors(){

    const [showForm, setShowForm] = useState(false)
    
    return (
        <section className="bg-white py-7 px-6">
     {/* INSTRUCTORS */}
        <Reveal animation="fade-right">
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
           INSTRUCTORS
          </h2>
          <p className=" text-[#0B1020]/80 mt-1">
            Facilitate structured programs and expand your professional reach.
          </p>
          <button onClick={() => setShowForm(true)} 
          className="mt-4 bg-[#1A2B6D] text-white px-5 py-2 rounded-md font-semibold shadow-md active:scale-[0.99] transition">
            Apply as Instructor
          </button>

          <div className="mt-6 space-y-4 text-[#0B1020]/80">
            <p>Are you an expert limited by your current visibility?</p>
            <p className="font-semibold text-[#1A2B6D] mb-3">
              Join AGPN to:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[#0B1020]/80">
              <li>Facilitate structured programs</li>
              <li>Earn from your expertise</li>
              <li>Expand your professional footprint</li>
              <li>Contribute to workforce development</li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-[#1A2B6D] mb-3">Areas of Interest:</p>

            <ul className="list-disc ml-6 space-y-2 text-[#0B1020]/80">
              <li>Digital Marketing & Performance Systems</li>
              <li>Virtual Assistance & Digital Operations</li>
              <li>Content, Media & E-commerce</li>
              <li>Business Strategy</li>
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