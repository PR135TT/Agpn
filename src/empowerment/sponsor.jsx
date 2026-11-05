import Reveal from "../components/reveal";
import { useState } from "react";
import SponsorForm from "./sponsorForm";

const LEVELS = [
  { level: "Community Sponsorship", places: "10", contribution: "₦500,000" },
  { level: "Cohort Sponsorship", places: "20", contribution: "₦1,000,000" },
  { level: "Impact Sponsorship", places: "50", contribution: "₦2,500,000" },
  { level: "Strategic Sponsorship", places: "100", contribution: "₦5,000,000" },
  {
    level: "Custom Sponsorship",
    places: "More than 100",
    contribution: "Contact AGPN to discuss your preferred level of support",
  },
];

export default function Sponsor() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* WHY SPONSOR + WHAT IT SUPPORTS */}
        <Reveal animation="fade-left">
          <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
              WHY SPONSOR AGPN?
            </h2>

            <p className="mt-3 font-semibold text-[#0B1020]/80">
              Equip Talent. Expand Opportunity. Create Meaningful Impact.
            </p>

            <div className="mt-6 space-y-4 text-[#0B1020]/80 leading-relaxed">
              <p>
                Sponsorship reduces access barriers for high-potential young people
                who lack the financial resources to acquire structured digital
                skills.
              </p>

              <p className="font-semibold text-[#1A2B6D]">
                WHAT YOUR SPONSORSHIP SUPPORTS
              </p>

              <p>
                Your contribution funds digital skills development for selected
                young Africans who have the interest, potential and commitment to
                build professional capabilities but face financial barriers.
              </p>

              <p>
                Each sponsored place covers the participant’s programme fee of
                ₦50,000 and gives access to:
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>A structured AGPN digital skills programme</li>
                <li>Learning tools and guided mentorship</li>
                <li>Exposure to global career and education pathways</li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* SPONSORSHIP LEVELS */}
        <Reveal animation="fade-right">
          <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
              SPONSORSHIP LEVELS
            </h2>

            <p className="mt-3 font-semibold text-[#0B1020]/80">
              Choose How Many Young Africans You Want to Support.
            </p>

            <p className="mt-2 text-[#0B1020]/80 leading-relaxed">
              Each sponsored place costs ₦50,000. Sponsorship starts from 10
              participants.
            </p>

            <div className="mt-6 overflow-x-auto rounded-lg border border-black/10">
              <table className="w-full min-w-[34rem] text-left text-sm sm:text-base">
                <thead className="bg-[#1A2B6D] text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Level</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Places</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Contribution</th>
                  </tr>
                </thead>
                <tbody className="text-[#0B1020]/80">
                  {LEVELS.map((row) => (
                    <tr
                      key={row.level}
                      className="border-t border-black/10 even:bg-[#1A2B6D]/5"
                    >
                      <th scope="row" className="px-4 py-3 font-semibold text-[#1A2B6D]">
                        {row.level}
                      </th>
                      <td className="px-4 py-3">{row.places}</td>
                      <td className="px-4 py-3 font-medium">{row.contribution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* WHO CAN SPONSOR */}
        <Reveal animation="fade-left">
          <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
              WHO CAN SPONSOR?
            </h2>
            <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
              We welcome sponsorship from individuals and philanthropists, business
              owners and entrepreneurs, corporate organisations, foundations and
              charitable organisations, NGOs and development organisations, and
              institutions interested in supporting young African talent.
            </p>
          </div>
        </Reveal>

        {/* SPONSOR RECOGNITION */}
        <Reveal animation="fade-right">
          <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
              SPONSOR RECOGNITION
            </h2>
            <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
              AGPN recognises the individuals and organisations that help expand
              access to digital skills development. Sponsors receive recognition
              through AGPN’s communication and recognition channels.
            </p>
          </div>
        </Reveal>

        {/* VERIFIED AND REGISTERED */}
        <Reveal animation="fade-left">
          <div className="bg-white border border-black/10 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#1A2B6D]">
              VERIFIED AND REGISTERED
            </h2>
            <p className="mt-4 text-[#0B1020]/80 leading-relaxed">
              Afroglobe Prime Network Limited is a company registered in Nigeria
              with the Corporate Affairs Commission.
            </p>
            <p className="mt-3 font-semibold text-[#1A2B6D]">
              Company Registration No.: RC 9168343
            </p>
          </div>
        </Reveal>

        {/* IMPORTANT CLARIFICATION (DARK block) */}
        <Reveal animation="fade-right">
          <div className="bg-[#222222] text-white rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <h2 className="text-2xl font-extrabold text-white">
              IMPORTANT SPONSORSHIP CLARIFICATION
            </h2>

            <p className="mt-2 font-semibold text-white">
              Please Read Before Sponsoring
            </p>

            <div className="mt-4 space-y-4 text-white/90 leading-relaxed">
              <p>
                Sponsorship through Afroglobe Prime Network Limited (AGPN) is a
                contribution towards digital skills development and human capital
                advancement.
              </p>

              <p>
                It is not a financial investment, business venture, loan or
                financial product.
              </p>

              <p>
                AGPN does not promise or guarantee financial returns,
                profit-sharing, interest, dividends, monetary payback or any
                return on investment to sponsors. Sponsors should not expect
                financial gains or monetary benefits from their contributions.
              </p>

              <p>
                Although AGPN works to equip participants and connect qualified
                individuals to relevant opportunities, sponsorship does not
                guarantee employment, job placement, income, admission,
                scholarships, visas or any specific outcome for beneficiaries.
              </p>

              <p>
                By participating in an AGPN sponsorship arrangement, sponsors
                acknowledge and accept these terms.
              </p>
            </div>
          </div>
        </Reveal>

        {/* CLOSING + CTA */}
        <Reveal animation="slide-up">
          <div className="bg-[#1A2B6D] text-white rounded-2xl p-8 text-center shadow-[0_12px_40px_rgba(26,43,109,0.25)]">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Talent Should Not Be Limited by Financial Barriers.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
              There are young people across Africa with the intelligence, ambition
              and potential to contribute to the global economy. Sometimes, all
              that stands between their potential and professional development is
              access.
            </p>

            <p className="mx-auto mt-4 max-w-2xl font-semibold text-white">
              Partner with AGPN to support the next generation of digitally skilled
              African talent.
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="inline-block mt-6 bg-white text-[#1A2B6D] px-6 py-3 rounded-md font-semibold shadow-md active:scale-[0.99] transition"
            >
              Become a Sponsor
            </button>
          </div>
        </Reveal>
      </div>

      <SponsorForm showForm={showForm} setShowForm={setShowForm} />
    </section>
  );
}