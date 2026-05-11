import Reveal from "../components/reveal"

export default function ImportantNotes() {

  const notes = [
    {text: "Commissions apply only to paid programs and services", animation:"slide-up"},
    {text: "Payment is made after successful enrollment or onboarding", animation:"slide-up"},
    {text: "Earnings depend on individual effort and reach", animation:"slide-up"},
    {text: "This is not employment", animation:"slide-up"},
    {text: "No guaranteed income", animation:"slide-up"},
  ];

  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto w-full max-w-[420px]">
        {/* Card */}
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          
          {/* Eyebrow */}
          <p className="text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
           IMPORTANT NOTES
          </p>

          {/* Heading */}
          <h2 className="mt-2 text-[20px] font-extrabold text-[#1A2B6D] leading-snug">
            CLEAR & TRANSPARENT
          </h2>

          {/* Notes list */}
          <div className="mt-5 space-y-3">
            {notes.map((note, i) => (
              <Reveal key={note.text} animation={note.animation} delay={i*120}>
              <div
                key={note}
                className="rounded-xl border border-black/10 bg-white p-4 flex items-start gap-3"
              >
                <span className="text-[#1A2B6D] font-extrabold text-[16px] mt-[1px]">
                  •
                </span>
                <span className="text-[13.5px] text-[#0B1020]/85 leading-relaxed font-semibold">
                  {note.text}
                </span>
              </div>
              </Reveal>
            ))}
          </div>

          {/* Highlight statement */}
          <Reveal animation="slide-up">
          <div className="mt-6 rounded-xl bg-[#222222] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
            <p className="text-white text-[14px] font-extrabold leading-relaxed">
              AGPN rewards contribution — not entitlement.
            </p>
          </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}