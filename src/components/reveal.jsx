import { useInView } from "./useInView";

export default function Reveal({ 
  children, 
  delay = 0, 
  animation = "slide-up" 
}) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const animations = {
    "slide-up": inView
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-12",

    "slide-down": inView
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-12",

    "fade-left": inView
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-12",

    "fade-right": inView
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-12",

    "zoom-in": inView
      ? "opacity-100 scale-100"
      : "opacity-0 scale-90",

    "rotate-in": inView
      ? "opacity-100 rotate-0"
      : "opacity-0 rotate-6",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transform transition-all duration-1000 ease-out
        ${animations[animation]}
      `}
    >
      {children}
    </div>
  );
}