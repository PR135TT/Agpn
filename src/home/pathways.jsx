import { LuChevronsRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import Reveal from "../components/reveal"; 

export default function Pathways() {

  const links = [
    { to: "/getinvolved", label: "Build In-Demand Digital Capability"},
    { to: "/ecosystem#arm-two", label: "Access Jobs & Remote Career Opportunities"},
    { to: "/ecosystem#arm-three", label: "Explore Global Study & Scholarship Pathways"},
    { to: "/ecosytem#arm-five", label: "Scale & Strengthen Your Business"},
    { to: "/empowerment", label: "Earn Through Strategic Referrals"},
    { to: "/referandearn", label: "Access Empowerment & Sponsorship Support"},
    { to: "/certificates", label: "Earn Recognized Certifications & Credentials"},
  ];

  return (
    <section className="path w-full bg-[#eaf1fb]">
      {/* Header can reveal too (optional) */}
      <Reveal animation="slide-up" delay={0}>
        <h1 className="border-b border-black px-5 pt-2 text-left text-2xl font-semibold text-[#1A2B6D]">
          CHOOSE YOUR GROWTH PATHWAY
        </h1>
      </Reveal>

      {/* Each item slides up individually with a slight stagger */}
      {links.map((item, index) => (
        <Reveal key={item.to} animation="slide-up" delay={120 + index * 90}>
          <Link
            to={item.to}
            className="flex items-center justify-between border-b border-gray-300 px-6 py-5 transition-all hover:bg-white/60"
          >
            <span className="font-semibold tracking-wide uppercase text-[#1A2B6D]">
              {item.label}
            </span>
            <LuChevronsRight className="text-lg text-gray-700" />
          </Link>
        </Reveal>
      ))}
    </section>
  );
}