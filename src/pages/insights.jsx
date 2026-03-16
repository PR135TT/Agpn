import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../insights/hero";
import Featured from "../insights/featured";
import Blog from "../insights/blog";
import Contact from "../components/contact";
import PageTitle from "../components/pageTitle";
import Scroll from "../insights/scrollToHash"

export default function Insights() {
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
    <section className="overflow-x-hidden">
    <PageTitle title="AGPN Insights" />
      <Header />

      <main className="bg-[#f4f7fb] min-h-screen pt-20">
        <Hero />
        <Scroll/>
        <Featured />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </section>
  );
}