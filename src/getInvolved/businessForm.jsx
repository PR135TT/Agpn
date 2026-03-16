"use client"

import { useState } from "react"

export default function BusinessGrowthForm({ showForm, setShowForm }) {

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

    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowForm(false)
      }}
    >

      <div className="bg-[#222222] text-white w-full max-w-3xl rounded-lg shadow-xl p-8 overflow-y-auto max-h-[90vh]">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold">
            Business Growth Consultation
          </h2>

          <button
            onClick={() => setShowForm(false)}
            className="text-xl"
          >
            ✕
          </button>

        </div>

        {/* SUCCESS MESSAGE */}

        {submitted ? (

          <div className="text-center py-12 space-y-4">

            <h3 className="text-xl font-semibold">
              Thank you for your request.
            </h3>

            <p className="text-gray-300">
              Your consultation request has been received.
            </p>

            <p className="text-gray-300">
              Our team will review your business details and contact you shortly
              with the next steps to help grow your sales.
            </p>

          </div>

        ) : (

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_subject" value="Business Growth Consultation Request"/>

            {/* 1 */}
            <div>
              <label>Business / Brand Name</label>
              <input name="Business Name" type="text" required className="w-full p-3 rounded text-black"/>
            </div>

            {/* 2 */}
            <div>
              <label>Your Full Name</label>
              <input name="Full Name" type="text" required className="w-full p-3 rounded text-black"/>
            </div>

            {/* 3 */}
            <div>
              <label>Phone Number</label>
              <input name="Phone Number" type="tel" className="w-full p-3 rounded text-black"/>
            </div>

            {/* 4 */}
            <div>
              <label>Email Address</label>
              <input name="Email Address" type="email" required className="w-full p-3 rounded text-black"/>
            </div>

            {/* 5 */}
            <div>
              <label>What type of business do you run?</label>

              <select name="Business Type" className="w-full p-3 rounded text-black">
                <option>E-commerce / Online Store</option>
                <option>Retail Business</option>
                <option>Service-Based Business</option>
                <option>Digital Products</option>
                <option>Other</option>
              </select>
            </div>

            {/* 6 */}
            <div>

              <label>What is your biggest sales challenge right now?</label>

              <div className="grid gap-2 mt-2">

                <label><input type="checkbox" name="Sales Challenge" value="Not enough customers"/> I am not getting enough customers</label>

                <label><input type="checkbox" name="Sales Challenge" value="Products not selling"/> My products are not selling</label>

                <label><input type="checkbox" name="Sales Challenge" value="Ads not working"/> My ads are not bringing results</label>

                <label><input type="checkbox" name="Sales Challenge" value="Need more buyers"/> I need more buyers for my products</label>

                <label><input type="checkbox" name="Sales Challenge" value="Scale sales"/> I want to scale my business sales</label>

                <label><input type="checkbox" name="Sales Challenge" value="International customers"/> I need international customers</label>

              </div>

            </div>

            {/* 7 */}
            <div>

              <label>Which service are you interested in?</label>

              <div className="grid gap-2 mt-2">

                <label><input type="checkbox" name="Services Interested In" value="Facebook Ads"/> Facebook / Instagram Ads for Sales</label>

                <label><input type="checkbox" name="Services Interested In" value="Customer Acquisition"/> Customer Acquisition Strategy</label>

                <label><input type="checkbox" name="Services Interested In" value="Sales Funnel"/> Sales Funnel Setup</label>

                <label><input type="checkbox" name="Services Interested In" value="Ecommerce Growth"/> E-commerce Sales Growth</label>

                <label><input type="checkbox" name="Services Interested In" value="Consultation"/> Business Sales Consultation</label>

              </div>

            </div>

            {/* 8 */}
            <div>
              <label>Current monthly sales range</label>

              <select name="Monthly Sales Range" className="w-full p-3 rounded text-black">

                <option>No sales yet</option>
                <option>Below ₦1M</option>
                <option>₦1M – ₦5M</option>
                <option>₦5M – ₦20M</option>
                <option>Above ₦20M</option>

              </select>
            </div>

            {/* 9 */}
            <div>

              <label>What budget have you set aside to increase your sales?</label>

              <select name="Marketing Budget" className="w-full p-3 rounded text-black">

                <option>Below ₦100,000</option>
                <option>₦100,000 – ₦300,000</option>
                <option>₦300,000 – ₦700,000</option>
                <option>₦700,000 – ₦1,500,000</option>
                <option>Above ₦1,500,000</option>
                <option>Need consultation</option>

              </select>

            </div>

            {/* 10 */}
            <div>
              <label>Tell us briefly about your business and what you want to achieve</label>

              <textarea
                name="Business Goals"
                rows="4"
                className="w-full p-3 rounded text-black"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-[#1A2B6D] py-3 rounded font-semibold text-white"
            >
              Request Sales Growth Consultation
            </button>

          </form>

        )}
        
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