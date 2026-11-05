import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/contact"
import Hero from "../about/hero"
import WhereFrom from "../about/whereFrom"
import PageTitle from "../components/pageTitle";

export default function About() {
  return (
    <section className="overflow-x-hidden">
      <PageTitle title="About AGPN" />
      <Header />

      <main className="bg-[#f4f7fb] min-h-screen pt-20">
        <Hero/>
        <WhereFrom/>
        <Contact/>
      </main>

      <Footer />
    </section>
  );
}
