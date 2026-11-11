import { ArrowUp } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";

export function BackToTop() {
  const visible = useScrolled(600);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-24 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-forest text-cream shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-light lg:bottom-8 lg:right-8 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
