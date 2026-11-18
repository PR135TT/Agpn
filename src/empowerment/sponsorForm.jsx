"use client"

import { useEffect, useRef, useState } from "react"

// Serverless function that emails the request.
// File: netlify/functions/send-partnership-form.js
const SUBMIT_URL = "/.netlify/functions/send-partnership-form"

// These fields can have several values (checkbox groups)
const ARRAY_FIELDS = ["partnershipType", "supportType"]

const APPLICANT_TYPES = [
  "Individual",
  "Organization / Company",
  "Foundation / NGO",
  "Educational Institution",
  "Government Agency",
]

const PARTNERSHIP_INTERESTS = [
  { value: "Sponsor students", label: "Sponsor AGPN students" },
  { value: "Scholarships", label: "Provide scholarships" },
  { value: "Hire graduates", label: "Hire AGPN professionals" },
  { value: "Corporate training", label: "Corporate training partnership" },
  { value: "Educational collaboration", label: "Educational collaboration" },
  { value: "Study abroad pathway", label: "Study abroad pathway" },
  { value: "Youth empowerment", label: "Youth empowerment initiative" },
  { value: "Strategic partnership", label: "Strategic partnership" },
]

const IMPACT_LEVELS = [
  "Sponsor 1–5 students",
  "Sponsor 5–10 students",
  "Sponsor 10–50 students",
  "Sponsor 50–100 students",
  "Sponsor 100+ students",
  "Provide internships or job opportunities",
  "Open to strategic partnership discussion",
]

const SUPPORT_TYPES = [
  { value: "Financial sponsorship", label: "Financial sponsorship" },
  { value: "Scholarships", label: "Scholarships" },
  { value: "Internships", label: "Internship opportunities" },
  { value: "Job placement", label: "Job placement" },
  { value: "Mentorship", label: "Mentorship" },
  { value: "Strategic collaboration", label: "Strategic collaboration" },
]

const INVESTMENT_RANGES = [
  "Below ₦500,000",
  "₦500,000 – ₦1M",
  "₦1M – ₦5M",
  "₦5M – ₦10M",
  "Above ₦10M",
  "To be discussed",
]

const inputClass =
  "w-full rounded-lg border border-[#c9d2f0] bg-white px-4 py-3 text-base text-[#162452] placeholder:text-slate-400 focus:border-[#1F3164] focus:outline-none focus:ring-2 focus:ring-[#1F3164]/30"

/* ---------- Small form building blocks ---------- */

function TextField({ label, name, type = "text", required = false, autoComplete, inputMode }) {
  const id = `partnership-${name}`
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#162452]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={inputClass}
      />
    </div>
  )
}

function SelectField({ label, name, options }) {
  const id = `partnership-${name}`
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#162452]">
        {label}
      </label>
      <select id={id} name={name} defaultValue="" className={inputClass}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

function CheckboxGroup({ legend, name, options }) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold text-[#162452]">{legend}</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#dde3f3] px-4 py-3 text-base text-[#162452] hover:bg-[#eef1fa]"
          >
            <input
              type="checkbox"
              name={name}
              value={option.value}
              className="h-5 w-5 shrink-0 accent-[#1F3164]"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function SectionTitle({ children }) {
  return (
    <h3 className="mb-4 border-b border-[#dde3f3] pb-2 text-sm font-extrabold tracking-wide text-[#1F3164]">
      {children}
    </h3>
  )
}

/* ---------- The modal ---------- */

export default function PartnershipForm({ showForm, setShowForm }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  const dialogRef = useRef(null)
  const closeRef = useRef(() => {})
  closeRef.current = () => setShowForm(false)

  // Reset the screen each time the form is closed
  useEffect(() => {
    if (!showForm) {
      setSubmitted(false)
      setError("")
    }
  }, [showForm])

  // Focus handling, Escape to close, scroll lock (only while open)
  useEffect(() => {
    if (!showForm) return

    const previouslyFocused = document.activeElement
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    dialogRef.current?.focus()

    function onKeyDown(event) {
      if (event.key === "Escape") {
        closeRef.current()
        return
      }
      if (event.key !== "Tab" || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = originalOverflow
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus()
    }
  }, [showForm])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSubmitting(true)

    // Read values straight from the form, so browser autofill is always included
    const formValues = new FormData(e.currentTarget)
    const data = {}
    for (const key of new Set(formValues.keys())) {
      data[key] = ARRAY_FIELDS.includes(key) ? formValues.getAll(key) : formValues.get(key)
    }

    try {
      if (process.env.NODE_ENV !== "production") {
        // The function only exists on the deployed site, so locally we just log it.
        console.info("Partnership request (development only, not sent):", data)
      } else {
        const response = await fetch(SUBMIT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      }

      // Only show the thank-you screen when the request really worked
      setSubmitted(true)
    } catch (err) {
      setError("We couldn’t send your request. Please check your connection and try again.")
    } finally {
      setSubmitting(false)
    }
  }

  if (!showForm) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 sm:items-center sm:p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) setShowForm(false)
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="partnership-title"
        tabIndex={-1}
        className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl focus:outline-none sm:rounded-3xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 bg-[#1F3164] px-5 py-4 text-white">
          <h2 id="partnership-title" className="text-lg font-extrabold">
            AGPN Partnership and Sponsorship
          </h2>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            aria-label="Close partnership form"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-5 py-6 sm:px-8">
          {submitted ? (
            <div role="status" className="py-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eef1fa] text-[#1F3164]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div className="mt-6 space-y-3 text-base leading-relaxed text-slate-700">
                <p className="font-semibold text-[#162452]">
                  Thank you for your interest in partnering with AGPN.
                </p>
                <p>
                  Our team will review your submission and contact you within 2–3
                  business days.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="mt-8 rounded-full bg-[#1F3164] px-10 py-3 text-base font-semibold text-white transition-colors hover:bg-[#162452] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3164] focus-visible:ring-offset-2"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot: real people never see this, bots usually fill it */}
              <p className="hidden" aria-hidden="true">
                <label>
                  Don’t fill this out: <input name="company" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              {/* YOUR DETAILS */}
              <section>
                <SectionTitle>YOUR DETAILS</SectionTitle>
                <div className="space-y-4">
                  <TextField label="Full Name" name="name" required autoComplete="name" />
                  <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                  <TextField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </div>
              </section>

              {/* ORGANIZATION */}
              <section>
                <SectionTitle>ORGANIZATION</SectionTitle>
                <div className="space-y-4">
                  <SelectField label="Applying as" name="applicantType" options={APPLICANT_TYPES} />
                  <TextField
                    label="Organization / Company Name"
                    name="organizationName"
                    autoComplete="organization"
                  />
                  <TextField
                    label="Your Role / Position"
                    name="role"
                    autoComplete="organization-title"
                  />
                  <TextField
                    label="Organization Website"
                    name="website"
                    type="url"
                    inputMode="url"
                    autoComplete="url"
                  />
                </div>
              </section>

              {/* PARTNERSHIP INTEREST */}
              <section>
                <SectionTitle>PARTNERSHIP INTEREST</SectionTitle>
                <div className="space-y-6">
                  <CheckboxGroup
                    legend="Partnership Interest"
                    name="partnershipType"
                    options={PARTNERSHIP_INTERESTS}
                  />
                  <SelectField label="Impact level" name="impactLevel" options={IMPACT_LEVELS} />
                  <div>
                    <label
                      htmlFor="partnership-interestDescription"
                      className="mb-1.5 block text-sm font-semibold text-[#162452]"
                    >
                      Describe your interest in supporting AGPN
                    </label>
                    <textarea
                      id="partnership-interestDescription"
                      name="interestDescription"
                      rows={4}
                      className={inputClass}
                    />
                  </div>
                </div>
              </section>

              {/* SUPPORT YOU CAN PROVIDE */}
              <section>
                <SectionTitle>SUPPORT YOU CAN PROVIDE</SectionTitle>
                <div className="space-y-6">
                  <CheckboxGroup
                    legend="Support You Can Provide"
                    name="supportType"
                    options={SUPPORT_TYPES}
                  />
                  <SelectField
                    label="Estimated Investment"
                    name="investmentRange"
                    options={INVESTMENT_RANGES}
                  />
                </div>
              </section>

              {/* ADDITIONAL COMMENTS */}
              <section>
                <SectionTitle>ADDITIONAL COMMENTS</SectionTitle>
                <label
                  htmlFor="partnership-comments"
                  className="mb-1.5 block text-sm font-semibold text-[#162452]"
                >
                  Additional comments or questions
                </label>
                <textarea
                  id="partnership-comments"
                  name="comments"
                  rows={4}
                  className={inputClass}
                />
              </section>

              {error && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-base text-red-800"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-[#1F3164] px-6 py-4 text-base font-bold tracking-wide text-white transition-colors hover:bg-[#162452] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3164] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Submit Partnership Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}