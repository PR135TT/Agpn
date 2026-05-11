import Reveal from "../components/reveal"
import { Link } from "react-router-dom";

export default function ReadyToParticipate() {

  return (
    <Reveal animation="slide-up">
    <section className="bg-white px-4 py-12">
      <div className="mx-auto w-full max-w-[420px]">
        
        {/* Main CTA card */}
        <div className="rounded-2xl border border-black/10 bg-[#1F3164] p-6 shadow-md text-center">
          
          {/* Eyebrow */}
          <p className="text-[11px] font-semibold tracking-widest text-white/80">
            READY TO PARTICIPATE?
          </p>

          {/* Description */}
          <p className="mt-3 text-[13.5px] text-white/90 leading-relaxed">
            If you want to contribute to AGPN's growth and earn based on results start here.
          </p>

          {/* CTA Button */}
          <Link
            to="/getinvolved"
            className="mt-6 inline-block w-full bg-white text-[#1A2B6D] font-semibold px-5 py-3 rounded-md hover:bg-gray-100 transition shadow-sm"
          >
            👉Become an AGPN Community Contributor
          </Link>

          {/* Subtext */}
          <p className="mt-3 text-[12px] text-white/75">
            (Free registration. Approval required.)
          </p>

        </div>

      </div>
    </section>
    </Reveal>
  );
}