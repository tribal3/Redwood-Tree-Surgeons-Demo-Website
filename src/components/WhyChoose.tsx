import {
  ArrowRight,
  Clock3,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";
import { benefits, type Benefit } from "../data/site";
import { Reveal } from "./Reveal";

const iconMap: Record<Benefit["icon"], LucideIcon> = {
  clock: Clock3,
  leaf: Leaf,
  heart: HeartHandshake,
  shield: ShieldCheck,
  sparkles: Sparkles,
  star: Star,
};

type WhyChooseProps = {
  onQuoteClick: () => void;
};

export function WhyChoose({ onQuoteClick }: WhyChooseProps) {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-forest py-24 text-cream lg:py-32"
      aria-labelledby="why-heading"
    >
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full border border-cream/[0.06]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-56 -left-32 h-[34rem] w-[34rem] rounded-full border border-cream/[0.05]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="/images/why-arborist.jpg"
                  alt="Arborist wearing high-visibility clothing and a helmet working on tree branches in the UK"
                  className="aspect-[4/5] w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-cream/15 bg-forest-dark/80 p-5 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                <div className="flex items-center gap-2 text-sage-light">
                  <Leaf className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span className="text-[0.64rem] font-semibold uppercase tracking-[0.2em]">
                    Our approach
                  </span>
                </div>
                <p className="mt-2 font-display text-lg leading-snug text-cream">
                  Careful work. Clear communication. A garden left clean and tidy.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow !text-sage-light">
              <span className="eyebrow-line !bg-sage" aria-hidden="true" />
              Why Choose Redwood
            </p>
            <h2 id="why-heading" className="display-title mt-5 text-balance !text-cream">
              More Than Just <span className="italic text-sage-light">Tree Cutting</span>
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-[0.96rem] leading-relaxed text-cream/65">
              The details matter. From arriving on time to clearing every last branch, our
              customers value a service that is professional, friendly and genuinely tidy.
            </p>

            <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = iconMap[benefit.icon];

                return (
                  <li key={benefit.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cream/10 bg-cream/[0.06] text-sage-light">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[0.92rem] font-semibold text-cream">
                        {benefit.title}
                      </span>
                      <span className="mt-1.5 block text-[0.82rem] leading-relaxed text-cream/55">
                        {benefit.description}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <button type="button" onClick={onQuoteClick} className="btn-light group mt-10">
              Request a Free Quote
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
