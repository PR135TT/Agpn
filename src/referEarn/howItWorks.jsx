import Reveal from "../components/reveal"

export default function HowItWorks(){

    return (
        <section className="bg-white py-14 px-6">
        {/* How it works */}
        <Reveal animation="fade-right">
        <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">

            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
            HOW IT WORKS
            </h2>

            <div className="mt-6 space-y-3 font-semibold text-[#0B1020]/80">
            <p>1️⃣ Register as an AGPN Community Contributor (Free).</p>
            <p>2️⃣ Get your unique tracking link.</p>
            <p>3️⃣ Refer young talents to our paid digital skills programs or business owners to our growth services.</p>
            <p>4️⃣ Earn up to 40% commission upon confirmed enrollment or onboarding.</p>
            </div>

            <p className="mt-6 font-extrabold text-[#1A2B6D]">
                Transparent. Structured. Performance-based.
            </p>

        </div>
        </Reveal>
        </section>
    )
}