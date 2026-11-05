import Reveal from "../components/reveal";

// Each arm is a title plus a list of blocks:
//   { p: "paragraph" }   normal paragraph
//   { lead: "text" }     bold navy lead-in line
//   { list: [ ... ] }    bullet list
const ARMS = [
  {
    id: "arm-one",
    animation: "slide-up",
    title: "ARM 1: DIGITAL TALENT REFINERY (INTERNAL)",
    blocks: [
      {
        p: "We equip young Africans with practical, market-relevant digital skills designed to prepare them for today’s digital economy.",
      },
      { lead: "Our training programmes include:" },
      {
        list: [
          "B2B Sales & Business Development",
          "Performance Marketing & Paid Media",
          "Virtual Assistance & Remote Work Operations",
          "Data Analysis",
          "Social Media Management",
          "AI Automation & Prompt Engineering",
          "And more.",
        ],
      },
      {
        p: "Our focus is on practical learning, hands-on experience, professional development, and building skills that solve real market problems.",
      },
    ],
  },
  {
    id: "arm-two",
    animation: "fade-left",
    title: "ARM 2: CAREER CONNECTION BRIDGE (CONNECT)",
    blocks: [
      {
        p: "We connect trained and qualified AGPN graduates to local and international career opportunities, remote jobs, and businesses seeking capable professionals.",
      },
      {
        p: "Through this arm, we create pathways for skilled talent to access opportunities across different industries and professional fields.",
      },
      {
        p: "Whether a company needs a B2B Sales professional, Performance Marketer, Social Media Manager, Virtual Assistant, Data Analyst, or other digital professional, AGPN provides a connection between businesses seeking talent and trained professionals.",
      },
    ],
  },
  {
    id: "arm-three",
    animation: "fade-right",
    title: "ARM 3: INTERNATIONAL EDUCATION & GLOBAL OPPORTUNITIES (CONNECT)",
    blocks: [
      {
        p: "We connect and guide Africans seeking international education and wider global opportunities.",
      },
      { lead: "This arm covers:" },
      {
        list: [
          "International university admissions and study-abroad pathways",
          "Scholarships and fully funded education opportunities",
          "Grants and fellowships",
          "International internships",
          "Professional certifications",
          "Other global learning and development opportunities",
        ],
      },
      {
        p: "We help individuals discover relevant opportunities and understand the pathways and requirements for accessing them across destinations such as Canada, the UK, Ireland, Poland, Cyprus, and beyond.",
      },
    ],
  },
  {
    id: "arm-four",
    animation: "fade-left",
    title: "ARM 4: BUSINESS GROWTH & INTELLIGENCE (INTERNAL)",
    blocks: [
      {
        p: "We help businesses and brands grow through strategic digital advertising and revenue-focused marketing systems.",
      },
      {
        p: "Our focus is helping businesses reach potential buyers, generate leads, attract customers, and increase sales through targeted digital advertising.",
      },
      { lead: "Our business growth services include:" },
      {
        list: [
          "Digital Advertising Strategy",
          "Meta Advertising (Facebook & Instagram)",
          "Google Advertising",
          "Audience Research and Targeting",
          "Lead Generation Campaigns",
          "Customer Acquisition",
          "Campaign Management and Performance Optimisation",
          "Sales Growth Support",
        ],
      },
      {
        p: "We apply practical, market-tested digital advertising strategies to help businesses overcome sales challenges, reach more potential customers, and scale their operations.",
      },
    ],
  },
  {
    id: "arm-five",
    animation: "fade-right",
    title: "ARM 5: SPONSORSHIP & EMPOWERMENT (CONNECT)",
    blocks: [
      {
        p: "We facilitate strategic partnerships and sponsorship opportunities that help remove financial barriers for high-potential African talent.",
      },
      {
        p: "Through this arm, we connect individuals, sponsors, organisations, and empowerment partners to support access to digital skills development, education, and other life-changing opportunities.",
      },
      {
        p: "We welcome organisations, institutions, individuals, and partners interested in sponsoring talent and supporting access to opportunities.",
      },
    ],
  },
];

function Block({ block }) {
  if (block.lead) {
    return <p className="font-semibold text-[#1A2B6D]">{block.lead}</p>;
  }
  if (block.list) {
    return (
      <ul className="list-disc ml-6 space-y-1.5">
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{block.p}</p>;
}

export default function Arms() {
  return (
    <section className="bg-white pb-16 px-6">
      <div className="max-w-5xl mx-auto grid gap-6">
        {ARMS.map((arm, idx) => (
          <Reveal key={arm.id} delay={idx * 100} animation={arm.animation}>
            <div
              id={arm.id}
              className="scroll-mt-28 bg-white border border-black/10 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-extrabold text-[#1A2B6D]">
                {arm.title}
              </h3>

              <div className="mt-4 space-y-4 text-[#0B1020]/80 leading-relaxed">
                {arm.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={500} animation="slide-up">
          <p className="pt-4 text-center text-lg font-semibold text-[#1A2B6D]">
            Bridging Untapped Talent to Global Opportunity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}