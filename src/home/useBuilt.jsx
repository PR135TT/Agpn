import { useEffect } from "react";

const AUDIENCES = [
  "Student",
  "Graduate",
  "Young Professional",
  "Job Seeker",
  "Entrepreneur",
  "Freelancer",
  "Career Changer",
  "Digital Professional",
];

const FONT_LINK_ID = "who-agpn-is-for-fonts";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif" };
const sans = { fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif" };

export default function WhoAgpnIsFor() {
  // Load the two Google Fonts once (Cormorant Garamond + DM Sans).
  // You can also add this <link> to public/index.html instead.
  useEffect(() => {
    if (document.getElementById(FONT_LINK_ID)) return;
    const link = document.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=DM+Sans:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <section
      aria-labelledby="who-agpn-is-for-title"
      className="border-b border-[#e3e1dc] bg-[#faf9f7] px-6 py-16 sm:py-20"
      style={sans}
    >
      <div className="mx-auto max-w-3xl">
        {/* Eyebrow */}
        <p className="text-[13px] font-medium uppercase tracking-[0.25em] text-[#b3202a]">
          Who AGPN is for
        </p>

        {/* Heading */}
        <h2
          id="who-agpn-is-for-title"
          className="mt-5 text-3xl font-semibold leading-[1.15] text-black sm:text-5xl"
          style={serif}
        >
          Built for Africans who want to compete in{" "}
          <em className="font-medium italic text-[#5b6b82]">
            the global digital economy.
          </em>
        </h2>

        {/* Audience chips */}
        <p className="mt-8 text-lg text-[#5b6b82]">Whether you are a:</p>

        <ul className="mt-5 flex flex-wrap gap-3">
          {AUDIENCES.map((audience) => (
            <li
              key={audience}
              className="border border-[#d9d8d3] px-5 py-3 text-base text-black"
            >
              {audience}
            </li>
          ))}
        </ul>

        {/* Closing copy */}
        <div className="mt-10 space-y-8 text-sm leading-[1.9] text-[#5b6b82] sm:text-xl sm:leading-[1.9]">
          <p>
            If you are ready to acquire practical skills, develop your
            capabilities, and position yourself for global opportunities — AGPN
            is for you.
          </p>
          <p>
            No prior technical experience is required. What matters is your
            discipline, commitment, and willingness to build.
          </p>
        </div>
      </div>
    </section>
  );
}