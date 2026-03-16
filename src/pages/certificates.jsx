import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../certificates/hero"
import Content from "../certificates/content"
import Contact from "../components/contact"
import PageTitle from "../components/pageTitle";

export default function Certificates() {
  return (
    <section className="overflow-x-hidden">
      <PageTitle title="AGPN Certificates" />
      <Header />

      <main className="bg-[#f4f7fb] min-h-screen pt-20">
        <Hero/>
        <Content/>
        <Contact/>
      </main>

      <Footer />
    </section>
  );
}
