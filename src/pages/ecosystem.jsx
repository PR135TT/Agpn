import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/contact"
import Hero from "../ecosystem/hero"
import Intro from "../ecosystem/intro"
import Arms from "../ecosystem/arms"
import PageTitle from "../components/pageTitle"
import Scroll from "../ecosystem/scrollToHash"

export default function Ecosystem() {
    const location = useLocation();

    useEffect(() => {
      if (!location.hash) return;

      const id = location.hash.slice(1);

      // wait a bit so Featured component renders its cards
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 80);

      return () => clearTimeout(timer);
    }, [location.hash]);
  
  return (
    <section className="overflow-x-hidden bg-[#f4f7fb] min-h-screen pt-20">
    <PageTitle title = "AGPN Ecosystem"/>
      <Header />

      <main>
        <Hero/>
        <Intro/>
        <Scroll/>
        <Arms/>
        <Contact/>
      </main>

      <Footer />
    </section>
  );
}
