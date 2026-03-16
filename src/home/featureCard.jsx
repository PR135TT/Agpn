import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function FeatureCard({
  title,
  description,
  buttonText,
  link,
  bgColor = "#1F3164",
  textColor = "white",
}) {

  return (
    <section
      className="feature-card p-8 rounded-md shadow-md w-full max-w-md mb-3 transition-all"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* title */}
      <h2 className="text-xl font-bold text-center whitespace-pre-line">
        {title}
      </h2>

      {/* divider */}
      <div
        className="w-full h-[1px] my-6"
        style={{ backgroundColor: textColor }}
      />

      {/* description */}
      <p className="text-center leading-relaxed">
        {description}
      </p>

      {/* button */}
      <div className="flex justify-center mt-6">
        <Link
          to={link}
          className="flex items-center gap-2 font-semibold transition-all hover:gap-3"
        >
          {buttonText}
          <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}