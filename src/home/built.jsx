import Reveal from "../components/reveal"
import {Link} from "react-router-dom"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function AGPNCardSection() {

  const {pageData, loading, error} = useCmsPage("home-2")
      
    if (loading) {
        return <Skeleton/>
    }
          
    if (error) {
        return <p>{error}</p>
    }
        
    const acf = pageData.acf

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Reveal wrapper — keep this class for your animation file */}
        <div className="reveal bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-500 hover:-translate-y-2">

          <div className="grid md:grid-cols-12">

            {/* Image */}
            <Reveal animation="slide-up">
            <div className="md:col-span-5 h-64 md:h-auto relative"> 
              <img
                src="https://cms.agpnlimited.com/wp-content/uploads/2026/03/using-same-laptop-for-the-project-group-of-african-american-business-people-working-in-office-together-free-photo.jpg"
                alt="AGPN Business Growth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1F3164]/60"/>
            </div>
            </Reveal>

            {/* Content */}
            <div className="md:col-span-7 p-8 md:p-10">

                <Reveal animation="slide-up">
              <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
                {acf.built_title}
              </h2>
              </Reveal>

              <Reveal animation="slide-up">
              <p className="mt-4 text-slate-700 leading-relaxed">
                {acf.built_description}
              </p>
              </Reveal>

              <Reveal animation="fade-left">
              <h3 className="mt-6 text-lg font-semibold tracking-widest text-[#1A2B6D]">
                {acf.built_learn}
              </h3>
              </Reveal>

              <Reveal animation="fade-right">
              <p className="mt-3 text-slate-700 leading-relaxed">
                {acf.built_at}
                <br />
                {acf.built_ready}
              </p>
              </Reveal>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Reveal animation="fade-left">
                <Link to ="getinvolved">
                <button className="bg-[#1A2B6D] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:brightness-110 transition">
                  {acf.built_apply_button}
                </button>
                </Link>
                </Reveal>

                <Reveal animation="fade-right">
                <Link to ="empowerment">
                <button className="border-2 border-[#1A2B6D] text-[#1A2B6D] px-6 py-3 rounded-full font-semibold hover:bg-[#1A2B6D] hover:text-white transition">
                  {acf.built_partner_button}
                </button>
                </Link>
                </Reveal>

                <Reveal animation="fade-left">
                <Link to="referandearn">
                <button className="border-2 border-[#1A2B6D] text-[#1A2B6D] px-6 py-3 rounded-full font-semibold hover:bg-[#1A2B6D] hover:text-white transition">
                  {acf.built_refer_button}
                </button>
                </Link>
                </Reveal>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}