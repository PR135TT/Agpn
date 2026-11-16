import { useEffect, useRef, useState } from "react";

// Must match the form name in public/netlify-form.html
const FORM_NAME = "career-application";

const PROGRAMMES = [
  "B2B Sales & Business Development",
  "Performance Marketing & Paid Media",
  "Virtual Assistance & Remote Work Operations",
  "Social Media Management",
  "Data Analysis",
  "AI Prompt Engineering & Automation",
  "Other",
];

const EDUCATION = [
  "Secondary School Certificate",
  "Diploma",
  "Undergraduate Degree",
  "Postgraduate Degree",
  "Other",
];

const EMPLOYMENT = [
  "Student",
  "Employed",
  "Self-employed",
  "Unemployed",
  "Business Owner",
  "Freelancer",
];

const YES_NO = ["Yes", "No"];

const HOURS = ["1–5 hours", "6–10 hours", "11–15 hours", "16–20 hours", "More than 20 hours"];

const HEARD_FROM = [
  "AGPN Website",
  "Facebook",
  "Instagram",
  "TikTok",
  "LinkedIn",
  "WhatsApp",
  "Referral",
  "Other",
];

const DECLARATIONS = [
  {
    name: "declarationAccurate",
    text: "I confirm that the information provided in this application is correct and accurate.",
  },
  {
    name: "declarationNoGuarantee",
    text: "I understand that submitting this application does not automatically guarantee admission into the programme.",
  },
  {
    name: "declarationContact",
    text: "I consent to AGPN contacting me via email or WhatsApp regarding my application and programme updates.",
  },
];

const inputClass =
  "w-full rounded-lg border border-[#c9d2f0] bg-white px-4 py-3 text-base text-[#162452] placeholder:text-slate-400 focus:border-[#1F3164] focus:outline-none focus:ring-2 focus:ring-[#1F3164]/30";

/* ---------- Small form building blocks ---------- */

function TextField({ label, name, type = "text", autoComplete, inputMode }) {
  const id = `application-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#162452]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required
        className={inputClass}
      />
    </div>
  );
}

function RadioGroup({ legend, name, options, value, onChange, columns = 1, srOnlyLegend = false }) {
  // Pass value + onChange to control the group; otherwise it is uncontrolled.
  const controlled = typeof onChange === "function";

  return (
    <fieldset>
      <legend
        className={
          srOnlyLegend ? "sr-only" : "mb-2 text-sm font-semibold text-[#162452]"
        }
      >
        {legend}
      </legend>
      <div className={`grid gap-2 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#dde3f3] px-4 py-3 text-base text-[#162452] hover:bg-[#eef1fa]"
          >
            <input
              type="radio"
              name={name}
              value={option}
              required
              {...(controlled
                ? { checked: value === option, onChange: () => onChange(option) }
                : {})}
              className="h-4 w-4 shrink-0 accent-[#1F3164]"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="mb-4 border-b border-[#dde3f3] pb-2 text-sm font-extrabold tracking-wide text-[#1F3164]">
      {children}
    </h3>
  );
}

/* ---------- The modal ---------- */

export default function ApplicationForm({ initialProgramme = "", onClose }) {
  const [programme, setProgramme] = useState(
    PROGRAMMES.includes(initialProgramme) ? initialProgramme : ""
  );
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Focus handling, Escape to close, scroll lock
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function onKeyDown(event) {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    };
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    const body = new URLSearchParams(new FormData(event.currentTarget)).toString();

    try {
      if (process.env.NODE_ENV !== "production") {
        // Netlify Forms only work on the deployed site, so locally we just log it.
        console.info(
          "Application (development only, not sent):",
          Object.fromEntries(new URLSearchParams(body))
        );
      } else {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
        });
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        "We couldn’t submit your application. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 sm:items-center sm:p-4">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="application-title"
        tabIndex={-1}
        className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl focus:outline-none sm:rounded-3xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 bg-[#1F3164] px-5 py-4 text-white">
          <h2 id="application-title" className="text-lg font-extrabold">
            {submitted ? "APPLICATION RECEIVED" : "Career Pathways Application"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close application form"
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
                  Thank you for applying to AGPN Career Pathways.
                </p>
                <p>
                  Your application has been successfully received. Our team will
                  review your information and contact you through the email address
                  or WhatsApp number provided.
                </p>
                <p>
                  We appreciate your interest in AGPN and look forward to connecting
                  with you.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="mt-8 rounded-full bg-[#1F3164] px-10 py-3 text-base font-semibold text-white transition-colors hover:bg-[#162452] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3164] focus-visible:ring-offset-2"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <p className="text-base leading-relaxed text-slate-700">
                Thank you for your interest in AGPN Career Pathways. Please complete
                the application form below and provide accurate information. Our team
                will review your application and contact you with further details.
              </p>

              {/* 1. PERSONAL INFORMATION */}
              <section>
                <SectionTitle>1. PERSONAL INFORMATION</SectionTitle>
                <div className="space-y-4">
                  <TextField label="Full Name" name="fullName" autoComplete="name" />
                  <TextField label="Email Address" name="email" type="email" autoComplete="email" />
                  <TextField
                    label="WhatsApp Phone Number"
                    name="whatsapp"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                  <TextField label="Country of Residence" name="country" autoComplete="country-name" />
                  <TextField label="State" name="state" autoComplete="address-level1" />
                  <TextField label="City" name="city" autoComplete="address-level2" />
                </div>
              </section>

              {/* 2. PROGRAMME SELECTION */}
              <section>
                <SectionTitle>2. PROGRAMME SELECTION</SectionTitle>
                <div className="space-y-4">
                  <RadioGroup
                    legend="Which programme are you applying for?"
                    name="programme"
                    options={PROGRAMMES}
                    value={programme}
                    onChange={setProgramme}
                  />
                  {programme === "Other" && (
                    <TextField
                      label="If you selected Other, please specify:"
                      name="otherProgramme"
                    />
                  )}
                </div>
              </section>

              {/* 3. EDUCATIONAL AND EMPLOYMENT INFORMATION */}
              <section>
                <SectionTitle>3. EDUCATIONAL AND EMPLOYMENT INFORMATION</SectionTitle>
                <div className="space-y-6">
                  <RadioGroup
                    legend="What is your highest level of education?"
                    name="education"
                    options={EDUCATION}
                  />
                  <RadioGroup
                    legend="What is your current employment status?"
                    name="employment"
                    options={EMPLOYMENT}
                  />
                </div>
              </section>

              {/* 4. LEARNING READINESS */}
              <section>
                <SectionTitle>4. LEARNING READINESS</SectionTitle>
                <div className="space-y-6">
                  <RadioGroup
                    legend="Do you have access to a laptop or desktop computer?"
                    name="hasComputer"
                    options={YES_NO}
                    columns={2}
                  />
                  <RadioGroup
                    legend="Do you have access to a reliable internet connection?"
                    name="hasInternet"
                    options={YES_NO}
                    columns={2}
                  />
                  <RadioGroup
                    legend="How many hours can you dedicate to learning each week?"
                    name="hoursPerWeek"
                    options={HOURS}
                  />
                </div>
              </section>

              {/* 5. REASON FOR APPLYING */}
              <section>
                <SectionTitle>5. REASON FOR APPLYING</SectionTitle>
                <label
                  htmlFor="application-reason"
                  className="mb-1 block text-sm font-semibold text-[#162452]"
                >
                  Why do you want to enrol in this programme?
                </label>
                <p id="application-reason-hint" className="mb-2 text-sm text-slate-600">
                  Please briefly tell us about your goals and what you hope to achieve
                  from this programme.
                </p>
                <textarea
                  id="application-reason"
                  name="reason"
                  rows={5}
                  required
                  aria-describedby="application-reason-hint"
                  className={inputClass}
                />
              </section>

              {/* 6. HOW DID YOU HEAR ABOUT AGPN? */}
              <section>
                <SectionTitle>6. HOW DID YOU HEAR ABOUT AGPN?</SectionTitle>
                <RadioGroup
                  legend="How did you hear about AGPN?"
                  srOnlyLegend
                  name="heardFrom"
                  options={HEARD_FROM}
                  columns={2}
                />
              </section>

              {/* 7. DECLARATION */}
              <section>
                <SectionTitle>7. DECLARATION</SectionTitle>
                <p className="mb-3 text-base text-slate-700">
                  Please read and confirm the following statements before submitting
                  your application.
                </p>
                <div className="space-y-3">
                  {DECLARATIONS.map((item) => (
                    <label
                      key={item.name}
                      className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#dde3f3] px-4 py-3 text-base text-[#162452] hover:bg-[#eef1fa]"
                    >
                      <input
                        type="checkbox"
                        name={item.name}
                        value="Yes"
                        required
                        className="mt-1 h-5 w-5 shrink-0 accent-[#1F3164]"
                      />
                      <span>{item.text}</span>
                    </label>
                  ))}
                </div>
              </section>

              {error && (
                <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-base text-red-800">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-[#1F3164] px-6 py-4 text-base font-bold tracking-wide text-white transition-colors hover:bg-[#162452] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3164] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "SUBMITTING…" : "SUBMIT APPLICATION"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}