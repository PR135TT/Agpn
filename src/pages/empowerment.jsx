import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../empowerment/hero"
import Intro from "../empowerment/intro"
import Partner from "../empowerment/partner"
import Sponsor from "../empowerment/sponsor"
import Contact from "../components/contact"
import Right from "../empowerment/right"
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
        <Partner/>
        <Right/>
        <Contact/>
      </main>

      <Footer />
    </section>
  );
}
