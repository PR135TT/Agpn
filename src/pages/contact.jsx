import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../contact/hero"
import Content from "../contact/content"
import PageTitle from "../components/pageTitle"

export default function Contact() {
  return (
    <section className="overflow-x-hidden">
    <PageTitle title="Contact AGPN" />
      <Header />

      <main className="bg-[#f4f7fb] min-h-screen pt-20">
       <Hero/>
       <Content/>
      </main>

      <Footer />
    </section>
  );
}
