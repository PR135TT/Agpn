import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../getInvolved/hero"
import Talent from  "../getInvolved/youngTalent"
import Students from "../getInvolved/students"
import Business from "../getInvolved/businessOwners"
import Instructors from "../getInvolved/instructors"
import Contact from "../components/contact"
import PageTitle from "../components/pageTitle"

export default function GetInvolved() {
  return (
    <section className="overflow-x-hidden">
    <PageTitle title="Get Involved with AGPN" />
      <Header />

      <main className="bg-[#f4f7fb] min-h-screen pt-20">
        <Hero/>
        <Talent/>
        <Students/>
        <Business/>
        <Instructors/>
        <Contact/>
      </main>

      <Footer />
    </section>
  );
}
