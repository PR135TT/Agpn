import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../homepage/hero"
import Info from "../homepage/info"
import Choose from "../homepage/chooseAgpn"
import Goals from "../homepage/goals"
import Contact from "../components/contact"
import Approach from "../homepage/approach"
import Serve from "../homepage/serve"
import Join from "../homepage/join"
import Vision from "../homepage/vision"
import PageTitle from "../components/pageTitle"

export default function Home() {
  return (
    <section className="overflow-x-hidden">
    <PageTitle title="AGPN HomePage" />
      <Header />
      <main className="bg-white text-[#0B1020] pt-20">
        <div className="mx-auto w-full max-w-[420px] px-4 pb-10">
          <Hero/>
          <Info/>
          <Choose/>
          <Goals/>
          <Vision/>
          <Approach/>
          <Serve/>
          <Join/>
          <Contact/>
        </div>
      </main>

      <Footer />
    </section>
  );
}