import { LuChevronsRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import Reveal from "../components/reveal"; 
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Pathways() {

  const {pageData, loading, error} = useCmsPage("home-2")
      
  if (loading) {
      return <Skeleton/>
  }
        
  if (error) {
      return <p>{error}</p>
  }
      
  const acf = pageData.acf

  const links = [
    { to: "/getinvolved", label:acf.pathways_text1},
    { to: "/ecosystem#arm-two", label:acf.pathways_text2},
    { to: "/ecosystem#arm-three", label:acf.pathways_text3},
    { to: "/ecosytem#arm-five", label:acf.pathways_text4},
    { to: "/empowerment", label:acf.pathways_text5},
    { to: "/referandearn", label:acf.pathways_text6},
    { to: "/certificates", label:acf.pathways_text7},
  ];

  return (
    <section className="path w-full bg-[#eaf1fb]">
      {/* Header can reveal too (optional) */}
      <Reveal animation="slide-up" delay={0}>
        <h1 className="border-b border-black px-5 pt-2 text-left text-2xl font-semibold text-[#1A2B6D]">
          {acf.pathways_title}
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