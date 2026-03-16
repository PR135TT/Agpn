"use client"
import { useState } from "react"

export default function TalentRefineryForm({ showForm, setShowForm }) {

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (!showForm) return null

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.target)

    try {
      await fetch("https://formsubmit.co/ajax/info@agpnlimited.com", {
        method: "POST",
        body: formData
      })

      setSubmitted(true)
    } catch (error) {
      alert("Something went wrong. Please try again.")
    }

    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-6">
        <div className="bg-[#222222] text-white w-full max-w-2xl rounded-lg p-10 text-center">

          <h2 className="text-2xl font-bold mb-4">
            Thank You
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Thank you for applying to the AGPN Talent Refinery.
            <br /><br />
            Your application has been received successfully.
            <br /><br />
            Our team will review your submission and contact you
            with the next steps shortly.
          </p>

          <button
            onClick={() => setShowForm(false)}
            className="mt-6 bg-[#1A2B6D] px-6 py-3 rounded font-semibold"
          >
            Close
          </button>

        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-6">

      <div className="bg-[#222222] text-white w-full max-w-3xl rounded-lg shadow-xl p-8 overflow-y-auto max-h-[90vh]">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            AGPN Talent Refinery Application
          </h2>

          <button
            onClick={() => setShowForm(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Talent Refinery Application"/>

          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for applying to the AGPN Talent Refinery. Your application has been received successfully and our team will contact you with next steps."
          />

          {/* Full Name */}
          <div>
            <label>Full Name</label>
            <input name="Full Name" type="text" required className="w-full p-3 rounded text-black"/>
          </div>

          {/* Email */}
          <div>
            <label>Email Address</label>
            <input name="email" type="email" required className="w-full p-3 rounded text-black"/>
          </div>

          {/* Phone */}
          <div>
            <label>Phone Number</label>
            <input name="Phone" type="tel" className="w-full p-3 rounded text-black"/>
          </div>

          {/* Country */}
          <div>
            <label>Country</label>
            <select name="Country" className="w-full p-3 rounded text-black">
              <option>Nigeria</option>
              <option>Ghana</option>
              <option>Kenya</option>
              <option>South Africa</option>
              <option>Other</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label>State / City</label>
            <input name="State / City" type="text" className="w-full p-3 rounded text-black"/>
          </div>

          {/* Education */}
          <div>
            <label>Highest Level of Education</label>
            <select name="Education Level" className="w-full p-3 rounded text-black">
              <option>Secondary School</option>
              <option>Diploma / Certificate</option>
              <option>Undergraduate Student</option>
              <option>Bachelor’s Degree</option>
              <option>Master’s Degree</option>
              <option>Other</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label>Current Status</label>
            <select name="Current Status" className="w-full p-3 rounded text-black">
              <option>Student</option>
              <option>Unemployed</option>
              <option>Self-employed</option>
              <option>Employed (Full-time)</option>
              <option>Employed (Part-time)</option>
            </select>
          </div>

          {/* Reason */}
          <div>
            <label>Why do you want to join AGPN?</label>
            <textarea name="Reason for Joining" rows="4" className="w-full p-3 rounded text-black"/>
          </div>

          {/* Skills */}
          <div>
            <label>Which skills are you most interested in learning?</label>
            <div className="grid gap-2 mt-2">
              <label><input type="checkbox" name="Skills" value="Performance Marketing"/> Performance Marketing & Paid Advertising</label>
              <label><input type="checkbox" name="Skills" value="Social Media"/> Social Media & Digital Strategy</label>
              <label><input type="checkbox" name="Skills" value="Growth Marketing"/> Customer Acquisition & Growth Marketing</label>
              <label><input type="checkbox" name="Skills" value="Lead Generation"/> Lead Generation & Sales Funnel Systems</label>
              <label><input type="checkbox" name="Skills" value="Virtual Assistance"/> Virtual Assistance & Remote Operations</label>
              <label><input type="checkbox" name="Skills" value="Ecommerce"/> E-commerce Management</label>
            </div>
          </div>

          {/* Laptop */}
          <div>
            <label>Do you have access to a laptop?</label>
            <div className="flex gap-6 mt-2">
              <label><input type="radio" name="Laptop Access" value="Yes"/> Yes</label>
              <label><input type="radio" name="Laptop Access" value="No"/> No (Smartphone)</label>
            </div>
          </div>

          {/* Goal */}
          <div>
            <label>Primary Goal After Joining</label>
            <select name="Primary Goal" className="w-full p-3 rounded text-black">
              <option>Get a remote job</option>
              <option>Become a freelancer</option>
              <option>Start a digital business</option>
              <option>Improve career opportunities</option>
              <option>Learn valuable digital skills</option>
            </select>
          </div>

          {/* Income */}
          <div>
            <label>Current Income Level</label>
            <select name="Income Level" className="w-full p-3 rounded text-black">
              <option>No income currently</option>
              <option>Below ₦50,000 monthly</option>
              <option>₦50,000 – ₦150,000 monthly</option>
              <option>₦150,000 – ₦300,000 monthly</option>
              <option>Above ₦300,000 monthly</option>
            </select>
          </div>

          {/* Investment */}
          <div>
            <label>Are you ready to invest in your digital career?</label>
            <div className="flex flex-col gap-2 mt-2">
              <label><input type="radio" name="Investment Readiness" value="Ready"/> Yes — I am ready to join the First Cohort</label>
              <label><input type="radio" name="Investment Readiness" value="Interested"/> I am interested but would like more information</label>
              <label><input type="radio" name="Investment Readiness" value="Exploring"/> I am still exploring options</label>
            </div>
          </div>

          {/* Referral */}
          <div>
            <label>How did you hear about AGPN?</label>
            <select name="How did you hear about AGPN" className="w-full p-3 rounded text-black">
              <option>LinkedIn</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>Referral</option>
              <option>Google Search</option>
              <option>Event / Conference</option>
              <option>Other</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1A2B6D] py-3 rounded font-semibold text-white flex justify-center items-center gap-3"
          >

            {loading && (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}

            {loading ? "Submitting..." : "Submit Application"}

          </button>

        </form>
        <div className="text-center align-center">
              <button
            onClick={() => setShowForm(false)}
            className="text-xl">
            ✕
            </button>
        </div>

      </div>
    </div>
  )
}