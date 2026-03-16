"use client"

import { useState } from "react"

export default function TalentRefineryForm({ showForm, setShowForm }) {

  const [submitted, setSubmitted] = useState(false)

  if (!showForm) return null

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    await fetch("https://formsubmit.co/info@agpnlimited.com", {
      method: "POST",
      body: formData
    })

    setSubmitted(true)
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

        {submitted ? (

          <div className="text-center py-12 space-y-4">

            <h3 className="text-xl font-semibold">
              Thank you for registering your interest.
            </h3>

            <p className="text-gray-300">
              AGPN will notify you when verified study abroad opportunities
              and academic partnerships become available.
            </p>

          </div>

        ) : (

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Talent Refinery Application"/>
          <input type="hidden" name="_autoresponse" value="Thank you for submitting your application to AGPN. We have received your details and will notify you when new opportunities become available."/>

          {/*full name*/}
          <div>
            <label>Full Name</label>
            <input name="Full Name" type="text" required className="w-full p-3 rounded text-black"/>
          </div>

          {/*email*/}
          <div>
            <label>Email Address</label>
            <input name="Email" type="email" required className="w-full p-3 rounded text-black"/>
          </div>

          {/*phone*/}
          <div>
            <label>Phone Number</label>
            <input name="Phone" type="tel" className="w-full p-3 rounded text-black"/>
          </div>

          {/*country*/}
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

          {/*age*/}
          <div>
            <label>Age</label>
            <input type="number" name="Age" className="w-full p-3 rounded text-black"/>
          </div>

          {/*status*/}
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

          {/*skills*/}
          <div>
            <label>Skills?</label>
            <div className="grid gap-2 mt-2">

              <label><input type="checkbox" name="Skills" value="Performance Marketing"/> Performance Marketing & Paid Advertising</label>

              <label><input type="checkbox" name="Skills" value="Social Media"/> Social Media & Digital Strategy</label>

              <label><input type="checkbox" name="Skills" value="Growth Marketing"/> Customer Acquisition & Growth Marketing</label>

              <label><input type="checkbox" name="Skills" value="Lead Generation"/> Lead Generation & Sales Funnel Systems</label>

              <label><input type="checkbox" name="Skills" value="Virtual Assistance"/> Virtual Assistance & Remote Operations</label>

              <label><input type="checkbox" name="Skills" value="Ecommerce"/> E-commerce Management</label>

              <label><input type="checkbox" name="Skills" value="Other"/> Other</label>

            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1A2B6D] py-3 rounded font-semibold text-white"
          >
            Submit Application
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