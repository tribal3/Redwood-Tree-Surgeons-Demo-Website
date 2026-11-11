import { ArrowUpRight, Facebook, MapPin, Phone, Star, TreePine } from "lucide-react";
import { business, navLinks, services } from "../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream/60">
      <div className="container-page pb-32 pt-16 lg:pb-16 lg:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_0.95fr_1.1fr] lg:gap-12">
          <div>
            <a href="#home" className="inline-flex items-center gap-3" aria-label="Redwood Tree Surgeons — back to top">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream/10 text-sage-light">
                <TreePine className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl font-semibold tracking-[-0.01em] text-cream">
                  Redwood
                </span>
                <span className="mt-1 text-[0.52rem] font-semibold uppercase tracking-[0.3em] text-cream/55">
                  Tree Surgeons
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[0.85rem] leading-relaxed text-cream/55">
              Local, family-run tree surgery covering Maghull, Liverpool and the surrounding
              areas. Professional tree care, reliable service and a spotless finish.
            </p>
            <div className="mt-5 flex items-center gap-2 text-[0.72rem] font-medium text-cream/65">
              <Star className="h-3.5 w-3.5 fill-sage-light text-sage-light" aria-hidden="true" />
              4.9 Google rating
              <span className="text-cream/20" aria-hidden="true">
                ·
              </span>
              5.0 Yell rating
            </div>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-sage/50 hover:text-cream"
              aria-label="Redwood Tree Surgeons on Facebook"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div>
            <h2 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-sage-light">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.84rem] text-cream/55 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-sage-light">
              Our Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-[0.84rem] text-cream/55 transition-colors hover:text-cream"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-sage-light">
              Contact Information
            </h2>
            <div className="mt-5 space-y-4">
              <a
                href={business.phoneHref}
                className="flex items-start gap-3 text-[0.84rem] text-cream/65 transition-colors hover:text-cream"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage-light" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
              <a
                href={business.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-[0.84rem] leading-relaxed text-cream/55 transition-colors hover:text-cream"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-light" aria-hidden="true" />
                <span>
                  {business.address.line1}
                  <br />
                  {business.address.line2}
                  <br />
                  {business.address.line3}
                  <br />
                  {business.address.country}
                  <span className="mt-1 flex items-center gap-1 text-[0.72rem] font-medium text-sage-light">
                    View on Google Maps
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.72rem] text-cream/40">
            © {year} Redwood Tree Surgeons. All rights reserved.
          </p>
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-cream/40">
            Professional Tree Care | Maghull &amp; Surrounding Areas
          </p>
        </div>
        <p className="mt-3 text-[0.62rem] leading-relaxed text-cream/25">
          Website concept demonstration. Photography is illustrative and not presented as
          completed Redwood Tree Surgeons projects.
        </p>
      </div>
    </footer>
  );
}
