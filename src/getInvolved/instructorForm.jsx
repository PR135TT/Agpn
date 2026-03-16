"use client"
import { useState } from "react"

export default function InstructorApplicationForm({ showForm, setShowForm }) {

  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      await fetch("https://formsubmit.co/info@agpnlimited.com", {
      method: "POST",
      body: formData
    })

      setSubmitted(true)
    } catch (error) {
      alert("Something went wrong. Please try again.")
    }

    setLoading(false)
  }

  if (!showForm) return null

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-6">
        <div className="bg-[#222222] text-white w-full max-w-2xl rounded-lg p-10 text-center">

          <h2 className="text-2xl font-bold mb-4">
            Application Received
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Thank you for applying to become an AGPN Instructor.
            <br /><br />
            Your application has been received and will be reviewed
            within 5–7 business days.
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

    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowForm(false)
        }
      }}
    >

      <div className="bg-[#222222] text-white w-full max-w-3xl rounded-lg shadow-xl p-8 overflow-y-auto max-h-[90vh]">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">
            AGPN Instructor Application
          </h2>

          <button
            onClick={() => setShowForm(false)}
            className="text-xl pl-5"
          >
            ✕
          </button>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 rounded text-black" />

          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} className="w-full p-3 rounded text-black" />

          <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 rounded text-black" />

          <input name="location" placeholder="Location (City, State, Country)" onChange={handleChange} className="w-full p-3 rounded text-black" />

          <input name="linkedin" placeholder="LinkedIn Profile URL" onChange={handleChange} className="w-full p-3 rounded text-black" />

          <label className="block">Area of Expertise</label>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <label><input type="checkbox" name="expertise" value="Performance Marketing" onChange={handleChange}/> Performance Marketing & Paid Advertising</label>
            <label><input type="checkbox" name="expertise" value="Social Media" onChange={handleChange}/> Social Media & Community Management</label>
            <label><input type="checkbox" name="expertise" value="Content Strategy" onChange={handleChange}/> Content & Conversion Strategy</label>
            <label><input type="checkbox" name="expertise" value="Virtual Assistance" onChange={handleChange}/> Virtual Assistance & Remote Operations</label>
            <label><input type="checkbox" name="expertise" value="Ecommerce" onChange={handleChange}/> E-Commerce Management</label>
            <label><input type="checkbox" name="expertise" value="Lead Generation" onChange={handleChange}/> Lead Generation & Sales Funnels</label>
          </div>

          <select name="experience" onChange={handleChange} className="w-full p-3 rounded text-black">
            <option>Years of Professional Experience</option>
            <option>Less than 1 year</option>
            <option>1–2 years</option>
            <option>3–5 years</option>
            <option>6–10 years</option>
            <option>10+ years</option>
          </select>

          <select name="teachingExperience" onChange={handleChange} className="w-full p-3 rounded text-black">
            <option>Have you taught or trained others before?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <textarea name="teachingDetails" placeholder="If yes, briefly describe your teaching experience" onChange={handleChange} className="w-full p-3 rounded text-black" />

          <textarea name="background" placeholder="Brief summary of your professional background and achievements" onChange={handleChange} className="w-full p-3 rounded text-black" />

          <textarea name="whyInstructor" placeholder="Why do you want to become an AGPN Instructor?" onChange={handleChange} className="w-full p-3 rounded text-black" />

          <textarea name="value" placeholder="What value can you bring to AGPN students?" onChange={handleChange} className="w-full p-3 rounded text-black" />

          <select name="availability" onChange={handleChange} className="w-full p-3 rounded text-black">
            <option>Teaching availability</option>
            <option>Yes, I am available</option>
            <option>Yes, but with limited availability</option>
            <option>No, I prefer recorded sessions</option>
          </select>

          <label className="block">Preferred Teaching Schedule</label>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <label><input type="checkbox" name="schedule" value="Weekday mornings" onChange={handleChange}/> Weekday mornings</label>
            <label><input type="checkbox" name="schedule" value="Weekday afternoons" onChange={handleChange}/> Weekday afternoons</label>
            <label><input type="checkbox" name="schedule" value="Weekday evenings" onChange={handleChange}/> Weekday evenings</label>
            <label><input type="checkbox" name="schedule" value="Weekends" onChange={handleChange}/> Weekends</label>
          </div>

          <input name="portfolio" placeholder="Portfolio / Work Samples (Paste Links)" onChange={handleChange} className="w-full p-3 rounded text-black" />

          <textarea name="comments" placeholder="Additional Comments or Questions" onChange={handleChange} className="w-full p-3 rounded text-black" />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-black font-semibold p-3 rounded flex justify-center items-center gap-3"
          >

            {loading && (
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            )}

            {loading ? "Submitting..." : "Submit Instructor Application"}

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