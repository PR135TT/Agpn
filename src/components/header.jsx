import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { LuChevronsRight } from "react-icons/lu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <section className="fixed top-0 left-0 w-full bg-[#1F3164] h-20 flex items-center px-4 shadow-sm z-40">

      {/* Logo + Text */}
      <div className="flex-1 flex items-center justify-center gap-2 pl-2">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          {/* Logo from public folder */}
          <img
            src="/main.logo.png"
            alt="AGPN Logo"
            className="absolute top-[-6px] left-0 h-24 w-auto object-contain"
          />

          {/* Text */}
          <div className="leading-tight text-left max-w-[260px] ml-8">
            <h1 className="text-sm font-extrabold text-center tracking-wide text-white hover:opacity-90 transition">
              AFROGLOBE PRIME NETWORK LIMITED
            </h1>

            <p className="ml-5 mt-1 text-[10px] font-semibold tracking-wide text-white/85 leading-snug">
              Bridging Untapped Talent to Global Opportunity
            </p>
          </div>
        </Link>
      </div>

      {/* Hamburger */}
      <div className="w-12 flex items-center justify-end">
        <button
          className="p-2 relative w-8 h-8 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <GiHamburgerMenu
            className={`absolute text-2xl text-white transition-all duration-300 ${
              open
                ? "opacity-0 rotate-90 scale-75"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />

          <FiX
            className={`absolute text-2xl text-white transition-all duration-300 ${
              open
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </button>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-20 right-1 w-56 bg-[#1F3164] shadow-lg rounded-md border border-white/15 overflow-hidden z-50">
          {[
            { to: "/homepage", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/ecosystem", label: "Our Ecosystem" },
            { to: "/careerPathways", label: "Career Pathways"},
            { to: "/referandearn", label: "Refer & Earn" },
            { to: "/empowerment", label: "Partner With Us" },
            { to: "/certificates", label: "Certificates" },
            { to: "/insights", label: "Insights" },
            { to: "/contact", label: "Contact Us" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-3 hover:bg-white/10 font-medium text-white"
            >
              {item.label}
              <LuChevronsRight className="text-white/80" />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}