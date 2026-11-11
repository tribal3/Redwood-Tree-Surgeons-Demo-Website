import { ArrowRight, Check, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const highlights = [
  "Friendly local team",
  "Professional workmanship",
  "Respect for your property",
  "Thorough cleanup",
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -bottom-5 -left-5 h-[72%] w-[72%] rounded-[2rem] bg-sage/35"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] shadow-card">
                <img
                  src="/images/about-arborist.jpg"
                  alt="Tree surgeon wearing protective equipment cutting a tree trunk in a garden"
                  className="aspect-[4/5] w-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-6 right-3 flex items-center gap-3.5 rounded-2xl border border-forest/5 bg-white p-4 shadow-card sm:-right-5 sm:p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-cream">
                  <Star className="h-5 w-5 fill-current" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-xl font-semibold leading-none text-forest">
                    4.9 / 5
                  </span>
                  <span className="mt-1.5 block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-forest/55">
                    30 Google reviews
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              About Redwood
            </p>
            <h2 id="about-heading" className="display-title mt-5 text-balance">
              Local Expertise.
              <span className="block italic text-forest-light">Professional Tree Care.</span>
            </h2>

            <div className="mt-7 space-y-5 text-[0.98rem] leading-relaxed text-charcoal/70">
              <p>
                Redwood Tree Surgeons is a local, family-run team providing professional tree
                care across Maghull and the surrounding Liverpool area.
              </p>
              <p>
                We are known for a friendly, approachable service and careful workmanship.
                Whether it is a single tree, an overgrown hedge or a full garden clearance, we
                take the time to understand what you need and treat your property with respect.
              </p>
              <p>
                From the first cut to the final sweep-up, our aim is simple: professional tree
                care, reliable service and a spotless finish.
              </p>
            </div>

            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/35 text-forest">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-charcoal/80">{highlight}</span>
                </li>
              ))}
            </ul>

            <a href="#why" className="btn-outline group mt-9">
              Get to Know Us
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
