import Reveal from "../components/reveal"
import BusinessForm from "./businessForm"
import {useState} from "react"


export default function Business(){

  const [showForm, setShowForm] = useState(false)

    return (
        <section className="bg-white py-7 px-6">
        {/* BUSINESS OWNERS */}
        <Reveal animation="fade-left">
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            BUSINESS OWNERS
          </h2>
          <p className=" text-[#0B1020]/80 mt-1">
            Move From Stagnation to Structured Growth.
          </p>

          <button onClick={() => setShowForm(true)}
           className="mt-4 bg-[#1A2B6D] text-white px-5 py-2 rounded-md font-semibold shadow-md active:scale-[0.99] transition">
            Grow Your Business
          </button>

          <div className="mt-6 space-y-4 text-[#0B1020]/80">
            <p>
             Are you struggling with stagnant sales or inconsistent marketing performance?
            </p>
            <p>
              AGPN supports business owners with structured digital growth systems built on validated frameworks from CBM Sales & Biz Solution.
            </p>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-[#1A2B6D] mb-3">Our Support Areas:</p>

            <ul className="list-disc ml-6 space-y-2 text-[#0B1020]/80">
              <li>* Comprehensive digital growth strategy</li>
              <li>Performance-focused advertising systems</li>
              <li>Conversion-optimized funnel architecture</li>
              <li>Structured revenue scaling frameworks</li>
            </ul>
          </div>

          <p className="mt-6 font-bold text-[#1A2B6D]">
           Investment Range: ₦200,000 – ₦500,000 per month
            <br/>
            Results vary based on implementation consistency and market conditions.
          </p>
        </div>
        </Reveal>
        <BusinessForm
        showForm={showForm}
        setShowForm={setShowForm}/>
        </section>
    )
}