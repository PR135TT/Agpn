import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../referEarn/hero"
import HowItWorks from "../referEarn/howItWorks"
import PageTitle from "../components/pageTitle"

export default function ReferAndEarn() {
  return (
    <section className="overflow-x-hidden">
    <PageTitle title="AGPN Refer and Earn" />
      <Header />

      <main className="bg-[#f4f7fb] min-h-screen pt-20">
        <Hero/>
        <HowItWorks/>
      </main>

      <Footer />
    </section>
  );
}
