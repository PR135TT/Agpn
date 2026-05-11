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
            <p>1️⃣ Register as an AGPN Community Contributor</p>
            <p>2️⃣ Receive your unique referral identification</p>
            <p>3️⃣ Refer a young talent or business owner</p>
            <p>4️⃣ They complete payment and onboarding</p>
            <p>5️⃣ You earn your commission</p>
            </div>

            <p className="mt-6 font-extrabold text-[#1A2B6D]">
                Transparent. Structured. Performance-based.
            </p>

        </div>
        </Reveal>
        </section>
    )
}