import Reveal from "../components/reveal"
import TalentForm from "./youngTalentForm"
import {useState} from "react"


export default function Content() {
   const [showForm, setShowForm] = useState(false)

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* YOUNG TALENT */}
        <Reveal animation="fade-right">
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
           YOUNG TALENT
          </h2>
          <p className=" text-[#0B1020]/80 mt-1">
            Gain practical digital skills and become globally competitive using validated execution frameworks.
          </p>
          <button onClick={() => setShowForm(true)}
           className="mt-4 bg-[#1A2B6D] text-white px-5 py-2 rounded-md font-semibold shadow-md active:scale-[0.99] transition">
            Join as Young Talent
          </button>
          <div className="mt-6 space-y-4 text-[#0B1020]/80 leading-relaxed">
            <p>
              Are you a graduate lacking the high-demand skills required to compete in today's digital economy?
            </p>
            <p>
              Education alone does not always translate into economic mobility. Many individuals remain qualified yet disconnected from structured opportunity.
            </p>
            <p className="font-semibold text-[#1A2B6D]">
              That disconnect is the Access Gap — and it is not your fault.
            </p>

            <p>
              AGPN equips you with practical, real-world digital competencies aligned with current market demand.
            </p>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-[#1A2B6D] mb-3">
              High-Demand Skills We Teach:
            </p>

            <ul className="list-disc ml-6 space-y-2 text-[#0B1020]/80">
              <li>✅Digital Marketing — Performance Marketing & Paid Media Advertising</li>
              <li>✅Social Media & Community Management</li>
              <li>✅Content Strategy & Conversion Copywriting</li>
              <li>✅Lead Generation & Sales Funnel Systems</li>
              <li>✅E-Commerce Marketing & Digital Sales Systems</li>
              <li>✅Virtual Assistance & Remote Operations</li>
              <li>✅Business Growth Strategy & Digital Positioning</li>
              <li>✅CRM & Client Success Management</li>
              <li>✅Analytics, Reporting & Performance Optimization</li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-[#1A2B6D] mb-3">WHAT YOU WILL RECEIVE</p>

            <ul className="list-disc ml-6 space-y-2 text-[#0B1020]/80">
              <li>First-class training delivered directly by the Founder and experienced instructors.</li>
              <li>6–8 weeks intensive structured training</li>
              <li>Work on real client projects</li>
              <li>Get paid for client project delivery</li>
              <li>Refer & Earn (Double income opportunity)</li>
              <li>Portfolio building & personal branding</li>
              <li>Interview & job preparation support</li>
              <li>Direct access to employers & international opportunities</li>
              <li>Official AGPN Certificate of Completion</li>
              <li>Lifetime alumni access</li>
            </ul>
          </div>

          <p className="mt-6 font-bold text-[#1A2B6D]">Investment: ₦250,000</p>

          <p className="text-sm text-[#0B1020]/60 mt-1">
            Results depend on individual effort, consistency, and market conditions.
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