import {Link} from "react-router-dom"
import Reveal from "../components/reveal"

export default function Goals(){

    return (
        <section className="mt-8">
            <Reveal animation="slide-up">
            <div className="rounded-2xl bg-[#222222] p-6 text-white">
              <h2 className="text-[18px] font-extrabold text-white">
                OUR YEAR 1 GOALS
              </h2>

              <div className="mt-4 grid gap-2 text-[13px] text-white/85">
                <p>➡️ 500+ young talents to be equipped with high-demand digital skills</p>
                <p>➡️ Structured career pathway connections for qualified graduates</p>
                <p>➡️ 50+ young talents to receive verified international education guidance</p>
                <p>➡️ Measurable revenue growth to be driven for business owners through strategic digital execution</p>
                <p className="mt-2">
                  These numbers represent lives to be impacted, families to be strengthened and economic value to be created.
                </p>
              </div>

              <Link
                to="/getinvolved"
                className="mt-5 inline-block w-full rounded-xl bg-[#1A2B6D] px-4 py-3 text-center font-semibold text-white shadow-md active:scale-[0.99] transition"
              >
                Apply Now
              </Link>
            </div>
            </Reveal>
          </section>
    )
}