import { ArrowRight, Phone } from "lucide-react";
import { business } from "../data/site";
import { Reveal } from "./Reveal";

type CallToActionProps = {
  onQuoteClick: () => void;
};

export function CallToAction({ onQuoteClick }: CallToActionProps) {
  return (
    <section
      id="quote"
      className="relative isolate overflow-hidden bg-forest-dark py-24 lg:py-28"
      aria-labelledby="cta-heading"
    >
      <img
        src="/images/cta-background.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-forest-dark/85" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,59,45,0.2),rgba(15,42,32,0.75))]" aria-hidden="true" />

      <div className="container-page relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center !text-sage-light">
              <span className="eyebrow-line !bg-sage" aria-hidden="true" />
              Ready When You Are
              <span className="eyebrow-line !bg-sage" aria-hidden="true" />
            </p>
            <h2
              id="cta-heading"
              className="mt-6 text-balance font-display text-[2.5rem] font-medium leading-[1.06] tracking-[-0.015em] text-cream sm:text-5xl lg:text-[3.6rem]"
            >
              Need Professional <span className="italic text-sage-light">Tree Care?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-[0.98rem] leading-relaxed text-cream/70 sm:text-base">
              Whether you are looking to remove a tree, maintain your garden or arrange
              professional pruning, get in touch with Redwood Tree Surgeons to discuss your
              requirements.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button type="button" onClick={onQuoteClick} className="btn-light group">
                Request a Free Quote
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
              <a href={business.phoneHref} className="btn-outline-light">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {business.phoneDisplay}
              </a>
            </div>
            <p className="mt-7 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cream/40">
              Family-run · Fully insured · Maghull, Liverpool
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
