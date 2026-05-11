import Reveal from "../components/reveal"

export default function Earnings(){

    return (
        <section className="bg-white py-8 px-6">
        {/* Earnings highlight */}
        <Reveal animation="fade-left">
        <div className="bg-[#222222] text-white rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">

          <h2 className="text-2xl font-extrabold text-white">
            HOW MUCH YOU EARN
          </h2>

          <p className="mt-4 text-white/90 font-semibold">
            You earn up to 40% commission per successful referral
            (depending on the program or service category).
          </p>

          <div className="mt-5 h-[2px] w-14 bg-[#1F3164]" />
          <p className="text-white/90">Example:</p>
          <div className="mt-4 space-y-1">
            <p>Program Fee: ₦200,000</p>
            <p>Commission: Up to ₦80,000</p>
          </div>

          <div className="mt-4 space-y-1 font-semibold">
            <p>Refer: 1 person → Up to ₦80,000</p>
            <p>3 people → Up to ₦240,000</p>
            <p>5 people → Up to ₦400,000</p>
          </div>

          <p className="mt-4 font-extrabold text-white">
            There is no fixed earning cap.<br/>
           Earnings depend on referral success and verification.
          </p>

        </div>
        </Reveal>
        </section>
    )
}