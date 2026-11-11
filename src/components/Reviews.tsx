import {
  ArrowUpRight,
  Clock3,
  Leaf,
  MapPin,
  MessageSquareText,
  Sparkles,
  Star,
  TreePine,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { business, ratings, reviewThemes } from "../data/site";
import { Reveal } from "./Reveal";

const themeIcons: LucideIcon[] = [
  UsersRound,
  Clock3,
  TreePine,
  Sparkles,
  Leaf,
  MapPin,
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-white py-24 lg:py-32" aria-labelledby="reviews-heading">
      <div className="container-page">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" />
                Customer Feedback
              </p>
              <h2 id="reviews-heading" className="display-title mt-5 text-balance">
                What Our <span className="italic text-forest-light">Customers Say</span>
              </h2>
            </div>
            <p className="max-w-md text-pretty text-[0.95rem] leading-relaxed text-charcoal/65 lg:pb-2">
              A strong local reputation built on friendly service, reliable work and gardens
              that are left clean and tidy.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ratings.map((rating, index) => (
            <Reveal key={rating.source} delay={index * 90}>
              <a
                href={rating.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-5 rounded-2xl border border-forest/10 bg-cream p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/20 hover:shadow-soft sm:p-7"
              >
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-forest/45">
                    {rating.source} rating
                  </p>
                  <div className="mt-2 flex items-end gap-3">
                    <span className="font-display text-[2.7rem] font-semibold leading-none text-forest">
                      {rating.score}
                    </span>
                    <span className="pb-1 text-sm font-medium text-forest/45">/ 5</span>
                  </div>
                  <div className="mt-2.5 flex items-center gap-1 text-[#B08D3F]" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2 text-xs font-medium text-charcoal/55">{rating.count}</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forest/10 bg-white text-forest/55 transition-colors group-hover:border-forest/20 group-hover:text-forest">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviewThemes.map((theme, index) => {
            const Icon = themeIcons[index % themeIcons.length];

            return (
              <Reveal key={theme.title} delay={(index % 3) * 70}>
                <article className="group h-full rounded-2xl border border-forest/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/20 hover:shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage/25 text-forest">
                      <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <MessageSquareText
                      className="h-4 w-4 text-forest/15"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-forest">
                    {theme.title}
                  </h3>
                  <p className="mt-2.5 text-[0.85rem] leading-relaxed text-charcoal/65">
                    {theme.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-9 flex flex-col gap-3 rounded-2xl border border-forest/10 bg-cream px-6 py-5 text-sm text-charcoal/65 sm:flex-row sm:items-center sm:justify-between">
            <p className="leading-relaxed">
              Individual review text and customer names are not reproduced here. Read the latest
              verified feedback directly on Google.
            </p>
            <a
              href={business.reviewsSearch}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-forest transition-colors hover:text-forest-light"
            >
              Read reviews on Google
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
