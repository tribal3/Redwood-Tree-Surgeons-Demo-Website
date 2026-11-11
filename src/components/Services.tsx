import { ArrowUpRight, Phone } from "lucide-react";
import { business, services } from "../data/site";
import { Reveal } from "./Reveal";

type ServicesProps = {
  onSelectService: (serviceTitle: string) => void;
};

export function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="bg-white py-24 lg:py-32" aria-labelledby="services-heading">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" />
                Our Tree Surgery Services
              </p>
              <h2 id="services-heading" className="display-title mt-5 text-balance">
                Complete Tree Care <span className="italic text-forest-light">Solutions</span>
              </h2>
            </div>
            <p className="max-w-md text-pretty text-[0.95rem] leading-relaxed text-charcoal/65 lg:pb-2">
              Practical, professional tree care for homes across Maghull and the surrounding
              areas. Every job is approached with care, and every garden is left tidy.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-forest/[0.07] bg-cream/[0.55] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden bg-forest/10">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 font-display text-xs font-semibold text-forest shadow-sm backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-forest-dark/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[1.45rem] font-medium leading-tight text-forest">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed text-charcoal/65">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="mt-5 inline-flex w-fit items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-forest-light transition-colors hover:text-forest"
                    aria-label={`Learn more about ${service.title} and request a quote`}
                  >
                    Learn More
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-forest/10 bg-cream px-6 py-5 sm:flex-row sm:items-center">
            <p className="text-sm leading-relaxed text-charcoal/70">
              Not sure which service you need? Talk to the team and we will point you in the
              right direction.
            </p>
            <a
              href={business.phoneHref}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-forest-light"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
