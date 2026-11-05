import Content from "../careerPath/content";
import Header from "../components/header";
import Footer from "../components/footer";
import PageTitle from "../components/pageTitle";

export default function CareerPathways() {
  return (
    <section className="overflow-x-hidden">
      <PageTitle title="AGPN Career Pathways" />
      <Header />

      <main className="bg-[#f4f7fb] min-h-screen pt-20">
        <Content />
      </main>

      <Footer />
    </section>
  );
}