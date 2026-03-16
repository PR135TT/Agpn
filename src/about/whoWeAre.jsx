import Reveal from "../components/reveal"
import useCmsPage from "../hooks/useCmsPage"
import Skeleton from "../components/skeleton"

export default function Content() {

      const {pageData, loading, error} = useCmsPage("about")
  
    if (loading) {
      return <Skeleton/>
    }
  
    if (error) {
      return <p>{error}</p>
    }
  
    const acf = pageData.acf

  return (
    <section className="bg-white px-4 pb-10">
      <div className="mx-auto w-full max-w-[420px] space-y-6 pt-6">
        {/* WHO WE ARE (WHITE) */}
        <Reveal animation="slide-up">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <Reveal animation="fade-left">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#1A2B6D]">
            <span className="h-[2px] w-6 bg-[#1F3164]" />
            {acf.whoweare_title}
          </div>
        </Reveal>

          <p className="mt-3 text-[14px] leading-relaxed text-[#0B1020]/80 whitespace-pre-line">
            {acf.whoweare_description}
          </p>

          <p className="mt-4 text-[14px] font-semibold text-[#1A2B6D]">
            {acf.whoweare_footer}
          </p>
        </div>
        </Reveal>
      </div>
    </section>
  );
}