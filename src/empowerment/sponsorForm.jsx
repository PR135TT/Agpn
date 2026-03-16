"use client"

import { useState } from "react"

export default function PartnershipForm({ showForm, setShowForm }) {

  const [formData, setFormData] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      setFormData(prev => {
        const arr = prev[name] || []
        if (checked) return { ...prev, [name]: [...arr, value] }
        return { ...prev, [name]: arr.filter(v => v !== value) }
      })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch("/api/send-partnership-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    setSubmitted(true)
  }

  if (!showForm) return null

  return (

    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowForm(false)
      }}
    >

      <div className="bg-[#222222] text-white w-full max-w-3xl rounded-lg shadow-xl p-8 overflow-y-auto max-h-[90vh]">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            AGPN Partnership and Sponsorship
          </h2>

          <button
            onClick={() => setShowForm(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        {submitted ? (

          <div className="text-center py-12 space-y-4">

            <h3 className="text-xl font-semibold">
              Thank you for your interest in partnering with AGPN.
            </h3>

            <p className="text-gray-300">
              Our team will review your submission and contact you
              within 2–3 business days.
            </p>

          </div>

        ) : (

        <form onSubmit={handleSubmit} className="space-y-5">

          <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 rounded text-black"/>

          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} className="w-full p-3 rounded text-black"/>

          <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 rounded text-black"/>

          <select name="applicantType" onChange={handleChange} className="w-full p-3 rounded text-black">
            <option>Applying as</option>
            <option>Individual</option>
            <option>Organization / Company</option>
            <option>Foundation / NGO</option>
            <option>Educational Institution</option>
            <option>Government Agency</option>
          </select>

          <input name="organizationName" placeholder="Organization / Company Name" onChange={handleChange} className="w-full p-3 rounded text-black"/>

          <input name="role" placeholder="Your Role / Position" onChange={handleChange} className="w-full p-3 rounded text-black"/>

          <input name="website" placeholder="Organization Website" onChange={handleChange} className="w-full p-3 rounded text-black"/>

          <label className="block font-semibold">Partnership Interest</label>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <label><input type="checkbox" name="partnershipType" value="Sponsor students" onChange={handleChange}/> Sponsor AGPN students</label>
            <label><input type="checkbox" name="partnershipType" value="Scholarships" onChange={handleChange}/> Provide scholarships</label>
            <label><input type="checkbox" name="partnershipType" value="Hire graduates" onChange={handleChange}/> Hire AGPN professionals</label>
            <label><input type="checkbox" name="partnershipType" value="Corporate training" onChange={handleChange}/> Corporate training partnership</label>
            <label><input type="checkbox" name="partnershipType" value="Educational collaboration" onChange={handleChange}/> Educational collaboration</label>
            <label><input type="checkbox" name="partnershipType" value="Study abroad pathway" onChange={handleChange}/> Study abroad pathway</label>
            <label><input type="checkbox" name="partnershipType" value="Youth empowerment" onChange={handleChange}/> Youth empowerment initiative</label>
            <label><input type="checkbox" name="partnershipType" value="Strategic partnership" onChange={handleChange}/> Strategic partnership</label>
          </div>

          <select name="impactLevel" onChange={handleChange} className="w-full p-3 rounded text-black">
            <option>Impact level</option>
            <option>Sponsor 1–5 students</option>
            <option>Sponsor 5–10 students</option>
            <option>Sponsor 10–50 students</option>
            <option>Sponsor 50–100 students</option>
            <option>Sponsor 100+ students</option>
            <option>Provide internships or job opportunities</option>
            <option>Open to strategic partnership discussion</option>
          </select>

          <textarea name="interestDescription" placeholder="Describe your interest in supporting AGPN" onChange={handleChange} className="w-full p-3 rounded text-black"/>

          <label className="block font-semibold">Support You Can Provide</label>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <label><input type="checkbox" name="supportType" value="Financial sponsorship" onChange={handleChange}/> Financial sponsorship</label>
            <label><input type="checkbox" name="supportType" value="Scholarships" onChange={handleChange}/> Scholarships</label>
            <label><input type="checkbox" name="supportType" value="Internships" onChange={handleChange}/> Internship opportunities</label>
            <label><input type="checkbox" name="supportType" value="Job placement" onChange={handleChange}/> Job placement</label>
            <label><input type="checkbox" name="supportType" value="Mentorship" onChange={handleChange}/> Mentorship</label>
            <label><input type="checkbox" name="supportType" value="Strategic collaboration" onChange={handleChange}/> Strategic collaboration</label>
          </div>

          <select name="investmentRange" onChange={handleChange} className="w-full p-3 rounded text-black">
            <option>Estimated Investment</option>
            <option>Below ₦500,000</option>
            <option>₦500,000 – ₦1M</option>
            <option>₦1M – ₦5M</option>
            <option>₦5M – ₦10M</option>
            <option>Above ₦10M</option>
            <option>To be discussed</option>
          </select>

          <textarea name="comments" placeholder="Additional comments or questions" onChange={handleChange} className="w-full p-3 rounded text-black"/>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold p-3 rounded"
          >
            Submit Partnership Request
          </button>

        </form>

        )}

        <div className="text-center mt-3">
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