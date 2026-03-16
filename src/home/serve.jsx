import Reveal from "../components/reveal"; 
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"


export default function WhoWeServeSection() {

  const {pageData, loading, error} = useCmsPage("home-2")
      
    if (loading) {
        return <Skeleton/>
    }
          
    if (error) {
        return <p>{error}</p>
    }
        
    const acf = pageData.acf

  const items = [
    {
      title: acf.card_title,
      desc: acf.card_description,
      icon: <AbstractIcon1 />,
    },
    {
      title: acf.card_title2,
      desc: acf.card_description2,
      icon: <AbstractIcon2 />,
    },
    {
      title: acf.card_title3,
      desc: acf.card_description3,
      icon: <AbstractIcon3 />,
    },
    {
      title: acf.card_title4,
      desc: acf.card_description4,
      icon: <AbstractIcon4 />,
    },
    {
      title: acf.card_title5,
      desc: acf.card_description5,
      icon: <AbstractIcon5 />,
    },
  ];

  return (
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-6xl px-4">
          <div className="mb-8">
            <Reveal animation="slide-up">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A2B6D]">
              {acf.who_title}
            </h2>
            </Reveal>
            <Reveal animation="fade-left">
            <div className="mt-3 h-1 w-20 rounded-full bg-[#1F3164]" />
            </Reveal>
          </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <Reveal
              key={it.title}
              animation="slide-up"
              delay={idx * 100} // stagger
            >
              <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(0,0,0,0.14)]">
                {/* Top-left abstract image */}
                <div className="mb-4 flex items-start justify-start">
                  <div className="h-12 w-12 rounded-xl bg-slate-50 ring-1 ring-slate-100 flex items-center justify-center">
                    {it.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#1A2B6D]">{it.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  {it.desc}
                </p>
                <Reveal animation="fade-left">
                <div className="mt-6 h-1 w-12 rounded-full bg-[#1F3164] opacity-70 transition group-hover:w-16" />
                </Reveal>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Different abstract icons ---------- */

function AbstractIcon1() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1F3164" stopOpacity="0.95" />
          <stop offset="1" stopColor="#1A2B6D" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <circle cx="18" cy="18" r="10" fill="url(#g1)" />
      <circle cx="30" cy="30" r="8" fill="#1A2B6D" opacity="0.25" />
      <path
        d="M10 34 C 16 28, 22 40, 38 28"
        fill="none"
        stroke="#1F3164"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function AbstractIcon2() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8">
      <rect x="10" y="10" width="14" height="14" rx="4" fill="#1F3164" opacity="0.9" />
      <rect x="24" y="18" width="14" height="20" rx="5" fill="#1A2B6D" opacity="0.35" />
      <path
        d="M12 34 L 36 14"
        stroke="#1F3164"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="36" cy="14" r="3" fill="#1F3164" opacity="0.8" />
    </svg>
  );
}

function AbstractIcon3() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8">
      <path
        d="M12 30 C 16 16, 30 14, 36 20 C 40 24, 38 34, 28 36 C 18 38, 10 38, 12 30 Z"
        fill="#1F3164"
        opacity="0.22"
      />
      <path
        d="M14 28 C 18 18, 30 18, 34 22"
        fill="none"
        stroke="#1A2B6D"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M20 34 L 34 20"
        stroke="#1F3164"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <circle cx="18" cy="18" r="4" fill="#1A2B6D" opacity="0.35" />
    </svg>
  );
}

function AbstractIcon4() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8">
      <path
        d="M14 34 V16 C14 14, 16 12, 18 12 H30 C32 12, 34 14, 34 16 V34"
        fill="#1F3164"
        opacity="0.18"
      />
      <path
        d="M18 16 H30"
        stroke="#1A2B6D"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M18 22 H26"
        stroke="#1F3164"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="32" cy="28" r="6" fill="#1A2B6D" opacity="0.25" />
      <path
        d="M29 28 L31 30 L36 25"
        fill="none"
        stroke="#1F3164"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.65"
      />
    </svg>
  );
}

function AbstractIcon5() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8">
      <circle cx="18" cy="22" r="7" fill="#1F3164" opacity="0.35" />
      <circle cx="30" cy="20" r="6" fill="#1A2B6D" opacity="0.28" />
      <circle cx="26" cy="32" r="8" fill="#1F3164" opacity="0.16" />
      <path
        d="M12 34 C 16 30, 22 28, 28 28 C 34 28, 38 30, 40 34"
        fill="none"
        stroke="#1A2B6D"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}