import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../referEarn/hero"
import Intro from "../referEarn/intro"
import WhatYouCanRefer from "../referEarn/whatYouCanRefer"
import HowItWorks from "../referEarn/howItWorks"
import Earnings from "../referEarn/earnings"
import Contact from "../components/contact"
import Eligible from "../referEarn/eligible"
import Notes from "../referEarn/notes"
import Participate from "../referEarn/participate"
import PageTitle from "../components/pageTitle"

export default function ReferAndEarn() {
  return (
    <section className="overflow-x-hidden">
    <PageTitle title="AGPN Refer and Earn" />
      <Header />

      <main className="bg-[#f4f7fb] min-h-screen pt-20">
        <Hero/>
        <Intro/>
        <WhatYouCanRefer/>
        <HowItWorks/>
        <Earnings/>
        <Eligible/>
        <Notes/>
        <Participate/>
        <Contact/>
      </main>

      <Footer />
    </section>
  );
}
