import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, TreePine, X } from "lucide-react";
import { business, navLinks } from "../data/site";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import { useScrolled } from "../hooks/useScrolled";

type NavbarProps = {
  onQuoteClick: () => void;
};

export function Navbar({ onQuoteClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(18);
  const solid = scrolled || mobileOpen;

  useLockBodyScroll(mobileOpen);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleQuoteClick = () => {
    setMobileOpen(false);
    onQuoteClick();
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-forest/10 bg-cream/95 shadow-[0_12px_40px_-28px_rgba(23,59,45,0.55)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-[4.75rem] items-center justify-between gap-4 lg:h-[5.25rem]">
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-3"
          aria-label="Redwood Tree Surgeons — back to top"
          onClick={() => setMobileOpen(false)}
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${
              solid
                ? "bg-forest text-sage-light"
                : "border border-cream/25 bg-white/10 text-sage-light backdrop-blur-sm"
            }`}
          >
            <TreePine className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-[1.45rem] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                solid ? "text-forest" : "text-cream"
              }`}
            >
              Redwood
            </span>
            <span
              className={`mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.3em] transition-colors duration-300 ${
                solid ? "text-forest/60" : "text-cream/70"
              }`}
            >
              Tree Surgeons
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${
                solid
                  ? "nav-link"
                  : "text-[0.82rem] font-medium tracking-wide text-cream/80 transition-colors duration-200 hover:text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={business.phoneHref}
            className={`hidden items-center gap-2 text-[0.8rem] font-medium transition-colors xl:flex ${
              solid ? "text-forest/70 hover:text-forest" : "text-cream/75 hover:text-cream"
            }`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={onQuoteClick}
            className={`${
              solid ? "btn-primary" : "btn-light"
            } !px-5 !py-3 text-[0.78rem]`}
          >
            Request a Free Quote
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
            solid
              ? "border-forest/15 bg-white text-forest"
              : "border-cream/25 bg-white/10 text-cream backdrop-blur-sm"
          }`}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100svh-4.75rem)] overflow-y-auto overscroll-contain border-t border-forest/10 bg-cream text-forest lg:hidden"
        >
          <nav className="container-page flex flex-col pb-24 pt-5" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center justify-between border-b border-forest/10 py-3.5 text-[0.95rem] font-medium text-forest/85 transition-colors last:border-0 hover:text-forest"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 text-forest/35" aria-hidden="true" />
              </a>
            ))}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a href={business.phoneHref} className="btn-outline w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Our Team
              </a>
              <button type="button" className="btn-primary w-full" onClick={handleQuoteClick}>
                Request a Free Quote
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-5 text-center text-xs text-forest/50">
              Family-run tree surgery · Maghull, Liverpool
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
