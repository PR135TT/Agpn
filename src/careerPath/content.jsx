import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

// Change this to your real application link or route.
const APPLY_URL = "#apply";

const META_DESCRIPTION =
  "Explore AGPN Career Pathways and gain practical, market-relevant skills in B2B Sales, Performance Marketing, Virtual Assistance, Social Media Management, Data Analysis, and AI Prompt Engineering & Automation. Build professional capabilities and connect to career opportunities.";

// Every programme currently runs for the same duration.
const DURATION = "8 Weeks";
const DURATION_NOTE =
  "The programme includes structured lessons, practical learning activities, hands-on projects, assessments and a final examination.";

// Set `image` to a path or URL (e.g. "/images/b2b-sales.jpg").
// While it is null, or if it fails to load, the default image is shown.
const PATHWAYS = [
  {
    id: "b2b-sales",
    number: "01",
    title: "B2B Sales & Business Development",
    image: null,
    imageAlt: "Two business professionals in a sales meeting",
    overview:
      "This course teaches you how to find and acquire business clients, generate leads, close deals, manage client relationships, identify business opportunities, and support organizational growth through practical sales and business development strategies.",
    skills: [
      "Sales Pipeline Management",
      "Sales Communication & Presentation",
      "Sales Negotiation",
      "Deal Closing Techniques",
      "CRM & Sales Management",
      "Client Retention Strategies",
      "Business Opportunity Identification",
      "Market Research & Analysis",
      "Business Growth Strategies",
      "Strategic Partnerships",
      "Networking & Relationship Building",
      "Client Relationship Management",
      "Business Proposal Development",
      "Partnership Development",
      "Business Development Planning",
    ],
    fee: "₦50,000",
    closing:
      "This is not just a skill. It is a professional capability that positions you for relevant opportunities with leading employers and organizations.",
  },
  {
    id: "performance-marketing",
    number: "02",
    title: "Performance Marketing & Paid Media",
    image: null,
    imageAlt: "Marketer reviewing advertising dashboards on multiple screens",
    overview:
      "This course equips you with the professional skills to plan, execute, manage and optimize data-driven digital advertising campaigns. You will learn how to develop paid media strategies, manage advertising budgets, improve campaign conversions and measure advertising performance to deliver measurable results.",
    skills: [
      "Performance Marketing Strategy & Planning",
      "Digital Media Buying & Planning",
      "Paid Advertising Strategy",
      "Audience Research & Market Segmentation",
      "Media Budget Allocation",
      "Campaign Development & Execution",
      "Advertising Copy & Creative Strategy",
      "Lead Generation Campaigns",
      "Conversion Rate Optimization",
      "Landing Page Performance",
      "Conversion Tracking & Attribution",
      "Campaign Performance Monitoring",
      "Marketing Analytics & Reporting",
      "Return on Advertising Spend (ROAS)",
      "Campaign Scaling & Optimization",
    ],
    fee: "₦50,000",
    closing:
      "This is not just a skill. It is a professional capability that positions you to manage advertising investments, improve campaign performance and deliver measurable results for businesses.",
  },
  {
    id: "virtual-assistance",
    number: "03",
    title: "Virtual Assistance & Remote Work Operations",
    image: null,
    imageAlt: "Remote worker managing tasks on a laptop",
    overview:
      "This course prepares you to provide professional administrative, communication, and operational support to businesses, entrepreneurs, and executives remotely. You will learn how to manage daily business tasks, organize workflows, handle client communication, and support smooth business operations from anywhere.",
    skills: [
      "Introduction to Virtual Assistance",
      "Roles & Responsibilities of a Virtual Assistant",
      "Professional Email Management",
      "Calendar & Appointment Management",
      "Customer Support & Communication",
      "Data Entry & Records Management",
      "Internet Research",
      "Document Preparation & Management",
      "Meeting Coordination & Scheduling",
      "Task & Project Management",
      "File Organization & Cloud Storage",
      "Client Onboarding & Relationship Management",
      "Business Communication & Professional Etiquette",
      "Productivity Tools & Digital Workspaces",
      "Remote Work Tools & Collaboration",
      "Standard Operating Procedures (SOPs)",
      "Time Management & Task Prioritization",
    ],
    fee: "₦50,000",
    closing:
      "This is not just a skill. It is a professional capability that prepares you to support businesses, executives, and global teams in remote administrative and operational roles.",
  },
  {
    id: "social-media",
    number: "04",
    title: "Social Media Management",
    image: null,
    imageAlt: "Social media manager planning content",
    overview:
      "This course teaches you how to manage and develop the social media presence of businesses, brands and organizations. You will learn how to plan content, maintain brand consistency, manage online communities, grow organic audiences and build effective social media strategies that support brand objectives.",
    skills: [
      "Social Media Management Fundamentals",
      "Social Media Strategy Development",
      "Social Media Platform Management",
      "Content Strategy & Planning",
      "Content Calendar Development",
      "Content Creation & Publishing",
      "Social Media Copywriting",
      "Brand Voice & Digital Positioning",
      "Organic Audience Growth",
      "Community Management",
      "Audience Engagement Strategies",
      "Social Media Campaign Coordination",
      "Brand Reputation Management",
      "Competitor & Trend Analysis",
      "Social Media Performance Analytics",
      "Social Media Reporting & Account Management",
    ],
    fee: "₦50,000",
    closing:
      "This is not just a skill. It is a professional capability that positions you to manage brand communities, strengthen digital presence and build meaningful audience relationships for businesses.",
  },
  {
    id: "data-analysis",
    number: "05",
    title: "Data Analysis",
    image: null,
    imageAlt: "Analyst working with charts and spreadsheets",
    overview:
      "This course introduces you to the practical skills required to collect, organize, analyze, and interpret data for informed business decisions. You will learn how to work with data, identify patterns, create reports, and present insights that help organizations understand performance and make better decisions.",
    skills: [
      "Introduction to Data Analysis",
      "Data Types & Data Collection",
      "Data Cleaning & Preparation",
      "Microsoft Excel for Data Analysis",
      "Spreadsheet Management",
      "Formulas & Functions",
      "Data Sorting & Filtering",
      "Pivot Tables & Data Summarization",
      "Data Visualization",
      "Charts, Graphs & Dashboards",
      "Descriptive Statistics",
      "Data Interpretation & Reporting",
      "Business Performance Analysis",
      "Introduction to SQL",
      "Introduction to Power BI",
      "Practical Data Analysis Projects",
    ],
    fee: "₦50,000",
    closing:
      "This is not just a skill. It is a professional capability that positions you to turn raw information into meaningful insights that support business decisions and organizational performance.",
  },
  {
    id: "ai-prompt-engineering",
    number: "06",
    title: "AI Prompt Engineering & Automation",
    image: null,
    imageAlt: "Professional using AI tools to automate work",
    overview:
      "This course equips you with practical skills to use artificial intelligence tools effectively, create precise prompts, automate repetitive tasks, and improve productivity across different professional and business environments. You will learn how to apply AI to real-world tasks and build more efficient digital workflows.",
    skills: [
      "Introduction to Artificial Intelligence",
      "Understanding Generative AI",
      "Introduction to Prompt Engineering",
      "Writing Effective AI Prompts",
      "Advanced Prompting Techniques",
      "AI for Research & Information Gathering",
      "AI for Content Creation & Copywriting",
      "AI for Business Communication",
      "AI for Data Organization & Analysis",
      "AI-Powered Productivity Tools",
      "Workflow Design & Process Automation",
      "Introduction to No-Code Automation",
      "AI Tools for Business Operations",
      "Automating Repetitive Tasks",
      "AI-Assisted Customer Support",
      "AI-Assisted Decision Support",
      "AI Workflow Integration",
      "Building Practical AI Workflows",
      "Responsible & Ethical Use of AI",
    ],
    fee: "₦50,000",
    closing:
      "This is not just a skill. It is a professional capability that positions you to work smarter, improve productivity, and help businesses use AI and automation to achieve better results.",
  },
];

/* ---------- Default image (shown when no image is set or it fails to load) ---------- */

function DefaultImage() {
  return (
    <div
      role="img"
      aria-label="Default pathway image"
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#dde3f3] via-[#eef1fa] to-[#dde3f3]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-14 w-14 text-[#9aa7d6]"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="1.75" />
        <path d="m21 16-5-5-8 8" />
      </svg>
    </div>
  );
}

function PathwayImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl bg-[#eef1fa]">
      {src && !failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <DefaultImage />
      )}
    </div>
  );
}

/* ---------- One pathway section ---------- */

function PathwaySection({ pathway }) {
  const { id, number, title, image, imageAlt, overview, skills, fee, closing } =
    pathway;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-t border-[#dde3f3] py-10 first:border-t-0 first:pt-0"
    >
      <h2
        id={`${id}-title`}
        className="mb-5 text-xl font-bold leading-snug text-[#162452]"
      >
        {number} | {title}
      </h2>

      <PathwayImage src={image} alt={imageAlt} />

      <h3 className="mt-6 text-sm font-semibold text-[#2f3f94]">Course overview</h3>
      <p className="mt-2 text-base leading-relaxed text-slate-700">{overview}</p>

      <h3 className="mt-8 text-base font-semibold text-[#2f3f94]">
        Program duration
      </h3>
      <p className="mt-2 text-lg font-bold text-[#162452]">{DURATION}</p>
      <p className="mt-1 text-base leading-relaxed text-slate-700">
        {DURATION_NOTE}
      </p>

      <h3 className="mt-8 text-base font-semibold text-[#2f3f94]">
        What you will learn
      </h3>
      <ul className="mt-3 grid gap-x-8 gap-y-2 text-base text-[#162452] sm:grid-cols-2">
        {skills.map((skill) => (
          <li key={skill} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F3164]"
            />
            <span>{skill}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-baseline justify-between gap-4 rounded-2xl border border-[#dde3f3] bg-[#eef1fa] px-5 py-4">
        <span className="text-base text-slate-600">Program fee</span>
        <span className="text-right text-lg font-semibold text-[#1F3164]">
          {fee}
          <span className="ml-2 text-sm font-normal text-slate-600">
            one-time program fee
          </span>
        </span>
      </div>

      <div className="mt-6 rounded-2xl bg-[#1F3164] p-5 text-white">
        <h3 className="text-lg font-semibold">More than just skills</h3>
        <p className="mt-2 text-base leading-relaxed text-[#e3e8f8]">{closing}</p>
        <p className="mt-4 text-base text-[#c9d2f0]">Ready to:</p>
        <ul className="mt-2 space-y-1 text-base font-medium">
          <li>Get Trained?</li>
          <li>Get Positioned?</li>
          <li>Get Hired?</li>
        </ul>
      </div>

      <a
        href={APPLY_URL}
        className="mt-6 block w-full rounded-full bg-[#1F3164] px-6 py-4 text-center text-base font-medium text-white transition-colors hover:bg-[#162452] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3164] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        Apply Now
      </a>
    </section>
  );
}

/* ---------- Page ---------- */

export default function CareerPathways() {
  const { hash } = useLocation();

  // Scroll to the programme named in the link, e.g. /careerPathways#data-analysis
  useEffect(() => {
    if (!hash) return;
    const timer = setTimeout(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(timer);
  }, [hash]);

  // Page meta description
  useEffect(() => {
    let tag = document.querySelector('meta[name="description"]');
    const previous = tag ? tag.getAttribute("content") : null;
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", META_DESCRIPTION);
    return () => {
      if (previous !== null) tag.setAttribute("content", previous);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#eef1fa] px-4 pb-10 pt-28 text-[#162452] sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#dde3f3] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-10 rounded-2xl bg-[#1F3164] px-6 py-10 text-center">
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              AGPN CAREER PATHWAYS
            </h1>
          </div>

          {PATHWAYS.map((pathway) => (
            <PathwaySection key={pathway.id} pathway={pathway} />
          ))}

          <section
            aria-labelledby="journey-title"
            className="mt-4 rounded-2xl bg-[#1F3164] p-6 text-center text-white sm:p-8"
          >
            <h2
              id="journey-title"
              className="text-2xl font-extrabold leading-tight sm:text-3xl"
            >
              YOUR CAREER JOURNEY STARTS HERE
            </h2>

            <div className="mx-auto mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-[#e3e8f8]">
              <p>
                The global digital economy is creating opportunities for people
                with the right skills, practical experience and professional
                capabilities.
              </p>
              <p>
                At AGPN, we are committed to helping you develop relevant digital
                skills and connect to pathways that can expand your career
                opportunities.
              </p>
              <p>
                Whether you are starting your professional journey, changing
                careers, upgrading your skills or preparing for remote work,
                there is a pathway for you.
              </p>
              <p className="font-semibold text-white">
                Take the first step today. Choose your preferred programme and
                apply to join the next AGPN cohort.
              </p>
            </div>

            <a
              href={APPLY_URL}
              className="mt-6 inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-[#1F3164] transition-colors hover:bg-[#eef1fa] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F3164]"
            >
              APPLY FOR THE NEXT COHORT
            </a>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#c9d2f0]">
              Visit our application page to complete your registration and take
              the next step towards building your professional future.
            </p>

            <div className="mt-8 border-t border-white/20 pt-5">
              <p className="font-semibold">Afroglobe Prime Network Limited (AGPN)</p>
              <p className="mt-1 text-sm text-[#c9d2f0]">
                Bridging Untapped Talent to Global Opportunity.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}