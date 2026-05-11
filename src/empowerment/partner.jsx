import Reveal from "../components/reveal"
import {useState} from "react"
import SponsorForm from "./sponsorForm"

export default function Partner() {

const [showForm, setShowForm] = useState(false)

  return (
    <section className="bg-white py-14 px-6">
      <Reveal animation="fade-left">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">

          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            WHY PARTNER WITH US
          </h2>

          <p className="mt-3 font-semibold text-[#0B1020]/80">
            Access Skilled Talent. Strengthen the Workforce.
          </p>
          <p>
            AGPN partners with organizations that need skilled, work-ready digital talent.
          </p>
          <div className="mt-6 space-y-4 text-[#0B1020]/80">
          <p>Partnership benefits include:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Early access to pre-trained talent</li>
              <li>Reduced hiring and onboarding time</li>
              <li>Alignment with youth empowerment goals</li>
              <li>Brand visibility and impact recognition</li>
            </ul>

            <p className="font-semibold text-[#1A2B6D]">
              We develop capacity.<br/>
              Partners access talent.
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