import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../empowerment/hero"
import Intro from "../empowerment/intro"
import Sponsor from "../empowerment/sponsor"
import Contact from "../components/contact"
import PageTitle from "../components/pageTitle";

export default function Empowerment() {
  return (
    <section className="overflow-x-hidden">
    <PageTitle title="AGPN Empowerment" />
      <Header />

      <main className="bg-[#f4f7fb] min-h-screen pt-20">
        <Hero/>
        <Intro/>
        <Sponsor/>
        <Contact/>
      </main>

      <Footer />
    </section>
  );
}
