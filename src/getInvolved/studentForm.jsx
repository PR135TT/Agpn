"use client"
import { useState } from "react"

export default function TalentRefineryForm({ showForm, setShowForm }) {

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!showForm) return null

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.target)

    try {
      await fetch("https://formsubmit.co/info@agpnlimited.com", {
      method: "POST",
      body: formData
    })

      setSubmitted(true)
    } catch (error) {
      alert("Something went wrong. Please try again.")
    }
    console.log(formData)
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
            Thank you for registering your interest.
            <br /><br />
            AGPN will notify you when verified study abroad opportunities
            and academic partnerships become available.
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
            Student Form
          </h2>

          <button
            onClick={() => setShowForm(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Study Abroad Application" />

          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for registering your interest. AGPN will notify you when verified study abroad opportunities and academic partnerships become available."
          />

          {/* Full Name */}
          <div>
            <label>Full Name</label>
            <input
              name="Full Name"
              type="text"
              required
              className="w-full p-3 rounded text-black"
            />
          </div>

          {/* Email */}
          <div>
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              required
              className="w-full p-3 rounded text-black"
            />
          </div>

          {/* Phone */}
          <div>
            <label>Phone Number (WhatsApp)</label>
            <input
              name="Phone Number"
              type="tel"
              required
              className="w-full p-3 rounded text-black"
            />
          </div>

          {/* Country */}
          <div>
            <label>Country of Residence</label>
            <input
              name="Country of Residence"
              type="text"
              required
              className="w-full p-3 rounded text-black"
            />
          </div>

          {/* Education */}
          <div>
            <label>Highest Level of Education</label>
            <select
              name="Highest Level of Education"
              className="w-full p-3 rounded text-black"
            >
              <option>High School</option>
              <option>Diploma / ND</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>Other</option>
            </select>
          </div>

          {/* Study Country */}
          <div>
            <label>Preferred Country of Study</label>
            <select
              name="Preferred Country of Study"
              className="w-full p-3 rounded text-black"
            >
              <option>UK</option>
              <option>Canada</option>
              <option>USA</option>
              <option>Australia</option>
              <option>Europe</option>
              <option>Not sure yet</option>
            </select>
          </div>

          {/* Study Level */}
          <div>
            <label>Preferred Study Level</label>
            <select
              name="Preferred Study Level"
              className="w-full p-3 rounded text-black"
            >
              <option>Undergraduate</option>
              <option>Master's</option>
              <option>PhD</option>
              <option>Professional Certification</option>
              <option>Not sure yet</option>
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