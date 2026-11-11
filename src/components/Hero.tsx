import {
  ArrowRight,
  BadgeCheck,
  Leaf,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { business } from "../data/site";
import { Reveal } from "./Reveal";

type HeroProps = {
  onQuoteClick: () => void;
};

const trustIndicators = [
  { icon: Star, label: "4.9 Google Rating", filled: true },
  { icon: MessageSquareText, label: "30 Customer Reviews" },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: BadgeCheck, label: "NPTC Qualified Arborists" },
];

export function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-forest-dark"
      aria-labelledby="hero-heading"
    >
      <picture className="absolute inset-0 block" aria-hidden="true">
        <source media="(max-width: 639px)" srcSet="/images/service-crown-reduction.jpg" />
        <img
          src="/images/gallery-01.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
      </picture>
      <div className="absolute inset-0 bg-forest-dark/50" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(100deg,rgba(15,42,32,0.92)_0%,rgba(15,42,32,0.7)_45%,rgba(15,42,32,0.2)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-forest-dark/70 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 pb-14 pt-32 sm:pb-16 lg:pb-20 lg:pt-36">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-7 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-sage-light">
              <Leaf className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              Family-run tree surgery · Maghull, Liverpool
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-heading"
              className="text-balance font-display text-[2.9rem] font-medium leading-[1.03] tracking-[-0.02em] text-cream sm:text-6xl lg:text-[4.7rem]"
            >
              Professional Tree Care
              <span className="mt-1 block italic text-sage-light">You Can Rely On</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-cream/75 sm:text-lg">
              From tree removal and pruning to stump grinding and hedge maintenance, Redwood
              Tree Surgeons delivers professional tree care with a friendly local service and a
              spotless finish.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="button" onClick={onQuoteClick} className="btn-light group">
                Request a Free Quote
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
              <a href={business.phoneHref} className="btn-outline-light group">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Our Team
                <span className="sr-only"> on {business.phoneDisplay}</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <div className="mt-14 border-t border-cream/20 pt-7 sm:mt-16 lg:mt-20">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-x-10">
              {trustIndicators.map((item) => (
                <li key={item.label} className="flex items-center gap-2.5 text-cream/85">
                  <item.icon
                    className={`h-[1.05rem] w-[1.05rem] shrink-0 text-sage-light ${
                      item.filled ? "fill-sage-light" : ""
                    }`}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-[0.78rem] font-medium tracking-wide sm:text-[0.82rem]">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
