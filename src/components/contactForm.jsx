import { useState } from "react";
import Reveal from "./reveal"

export default function QuickContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "Young Talent Application",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Netlify needs FormData that includes the hidden form-name field too
      const formEl = e.target;
      const formData = new FormData(formEl);

      const res = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to submit to Netlify Forms");

      // Clear form after successful submit
      setForm({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "Young Talent Application",
        message: "",
      });

      alert("Inquiry submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Reveal animation="slide-up">
    <div className="bg-[#222222] rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] border border-white/10">
      <h2 className="text-xl font-extrabold text-white">QUICK CONTACT FORM</h2>

      <form
        name="quick-contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="mt-6 space-y-4"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="quick-contact" />

        <div>
          <label className="block text-sm font-semibold text-white">
            Full Name
          </label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            type="text"
            className="mt-2 w-full rounded-md bg-white px-4 py-3 text-[#0B1020] placeholder:text-[#0B1020]/40 focus:outline-none focus:ring-2 focus:ring-[#1A2B6D]"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-white">
            Email Address
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="mt-2 w-full rounded-md bg-white px-4 py-3 text-[#0B1020] placeholder:text-[#0B1020]/40 focus:outline-none focus:ring-2 focus:ring-[#1A2B6D]"
            placeholder="you@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-white">
            Phone / WhatsApp
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            className="mt-2 w-full rounded-md bg-white px-4 py-3 text-[#0B1020] placeholder:text-[#0B1020]/40 focus:outline-none focus:ring-2 focus:ring-[#1A2B6D]"
            placeholder="+234..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-white">
            Inquiry Type
          </label>
          <select
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
            className="mt-2 w-full rounded-md bg-white px-4 py-3 text-[#0B1020] focus:outline-none focus:ring-2 focus:ring-[#1A2B6D]"
          >
            <option>Young Talent Application</option>
            <option>Business Consultation</option>
            <option>Refer &amp; Earn Program</option>
            <option>Sponsorship</option>
            <option>Partnership</option>
            <option>General Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-white">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="mt-2 w-full rounded-md bg-white px-4 py-3 text-[#0B1020] placeholder:text-[#0B1020]/40 focus:outline-none focus:ring-2 focus:ring-[#1A2B6D]"
            placeholder="Tell us how we can help..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-[#1A2B6D] text-white font-semibold py-3 rounded-md shadow-md active:scale-[0.99] transition disabled:opacity-60"
        >
          {isSending ? "Sending..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
    </Reveal>
  );
}