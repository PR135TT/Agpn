import {useState} from "react"
import MarqueeForm from "./marqueeForm"

export default function MarqueeSection() {
  const text = "Apply for First Cohort";
  const items = Array.from({ length: 20 });
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="bg-slate-900 overflow-hidden py-4 pt-20">
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">

          {/* original */}
          {items.map((_, i) => (
            <div
              key={`1-${i}`}
              className="flex items-center mx-10 gap-4"
            >
              <span className="text-yellow-300 text-sm sm:text-xl font-bold uppercase tracking-wide">
                {text}
              </span>

              <button onClick={() => setShowForm(true)}
              className="bg-[#1A2B6D] mt-1 text-yellow-300 px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-md hover:bg-[#142158] transition">
                Click Now
              </button>
            </div>
          ))}

          {/* duplicate for seamless loop */}
          {items.map((_, i) => (
            <div
              key={`2-${i}`}
              className="flex items-center mx-10 gap-4"
            >
              <span className="text-white text-sm sm:text-xl font-bold uppercase tracking-wide">
                {text}
              </span>

              <button onClick={() => setShowForm(true)}
               className="bg-[#1A2B6D] text-white px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-md hover:bg-[#142158] transition">
                Click Now
              </button>
            </div>
          ))}

        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    <MarqueeForm
    showForm={showForm}
    setShowForm={setShowForm}/>
    </section>
  );
}