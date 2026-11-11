import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  CircleCheckBig,
  Clock3,
  Facebook,
  Info,
  MapPin,
  Navigation,
  Phone,
  PhoneCall,
  Send,
  ShieldCheck,
} from "lucide-react";
import { business, serviceOptions } from "../data/site";
import { Reveal } from "./Reveal";

type FormValues = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type ContactProps = {
  preselectedService: string;
  selectionKey: number;
};

const initialValues: FormValues = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  details: "",
};

const fieldIds: Record<keyof FormValues, string> = {
  fullName: "quote-full-name",
  phone: "quote-phone",
  email: "quote-email",
  service: "quote-service",
  location: "quote-location",
  details: "quote-details",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.service) {
    errors.service = "Please choose a service.";
  }

  if (values.location.trim().length < 3) {
    errors.location = "Please enter your property location or postcode.";
  }

  if (values.details.trim().length < 10) {
    errors.details = "Please add a little detail about the work needed.";
  }

  return errors;
}

export function Contact({ preselectedService, selectionKey }: ContactProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!preselectedService) {
      return;
    }

    setValues((current) => ({ ...current, service: preselectedService }));
    setErrors((current) => ({ ...current, service: undefined }));
    setSubmitted(false);
  }, [preselectedService, selectionKey]);

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleBlur = (field: keyof FormValues) => {
    const fieldErrors = validate(values);

    setErrors((current) => ({ ...current, [field]: fieldErrors[field] }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstError = (Object.keys(nextErrors) as (keyof FormValues)[])[0];

    if (firstError) {
      document.getElementById(fieldIds[firstError])?.focus();
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
  };

  const firstName = values.fullName.trim().split(" ")[0] || "there";

  const inputClass = (field: keyof FormValues) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal transition-colors placeholder:text-charcoal/35 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15 ${
      errors[field] ? "border-red-400" : "border-forest/15 hover:border-forest/25"
    }`;

  return (
    <section id="contact" className="bg-cream py-24 lg:py-32" aria-labelledby="contact-heading">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Contact & Free Quote
            </p>
            <h2 id="contact-heading" className="display-title mt-5 text-balance">
              Request Your <span className="italic text-forest-light">Free Quote</span>
            </h2>
            <p className="mt-5 text-pretty text-[0.96rem] leading-relaxed text-charcoal/65">
              Share a few details about the work you have in mind and the team can discuss your
              requirements. No obligation, just straightforward local advice.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-[1.75rem] bg-forest p-7 text-cream shadow-card sm:p-8">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-sage-light">
                  Contact Details
                </p>
                <h3 className="mt-3 font-display text-[1.7rem] leading-tight text-cream">
                  Let&apos;s talk about your trees.
                </h3>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-cream/60">
                  Call the team directly or send an enquiry using the quote request form.
                </p>

                <a
                  href={business.phoneHref}
                  className="group mt-7 flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/[0.06] p-4 transition-colors hover:bg-cream/[0.1]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-forest-dark">
                    <PhoneCall className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream/45">
                      Call our team
                    </span>
                    <span className="mt-1 block text-lg font-semibold tracking-wide text-cream">
                      {business.phoneDisplay}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="ml-auto h-4 w-4 shrink-0 text-cream/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>

                <div className="mt-6 space-y-5 border-t border-cream/10 pt-6">
                  <div className="flex gap-3.5">
                    <MapPin
                      className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-sage-light"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <address className="not-italic text-[0.85rem] leading-relaxed text-cream/70">
                      <span className="mb-1 block font-semibold text-cream">
                        {business.name}
                      </span>
                      {business.address.line1}
                      <br />
                      {business.address.line2}
                      <br />
                      {business.address.line3}
                      <br />
                      {business.address.country}
                    </address>
                  </div>

                  <div className="flex gap-3.5">
                    <Navigation
                      className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-sage-light"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <p className="text-[0.85rem] leading-relaxed text-cream/70">
                      Serving Maghull, Liverpool and the surrounding areas.
                    </p>
                  </div>

                  <div className="flex gap-3.5">
                    <ShieldCheck
                      className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-sage-light"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <p className="text-[0.85rem] leading-relaxed text-cream/70">
                      Fully insured, with NPTC qualified arborists.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2.5 border-t border-cream/10 pt-6 sm:flex-row">
                  <a
                    href={business.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[0.78rem] font-semibold text-sage-light transition-colors hover:text-cream"
                  >
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    View on Google Maps
                  </a>
                  <span className="hidden text-cream/20 sm:block" aria-hidden="true">
                    ·
                  </span>
                  <a
                    href={business.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[0.78rem] font-semibold text-sage-light transition-colors hover:text-cream"
                  >
                    <Facebook className="h-3.5 w-3.5" aria-hidden="true" />
                    Facebook
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-forest/10 bg-white px-5 py-4">
                <Clock3
                  className="mt-0.5 h-4 w-4 shrink-0 text-forest-light"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <p className="text-[0.8rem] leading-relaxed text-charcoal/60">
                  A friendly, family-run team with a strong local reputation for reliable and
                  tidy work.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[1.75rem] border border-forest/10 bg-white p-6 shadow-soft sm:p-8">
              {submitted ? (
                <div className="flex min-h-[32rem] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/30 text-forest">
                    <CircleCheckBig className="h-8 w-8" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <p className="mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-forest/45">
                    Request Complete
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-forest">Thanks, {firstName}.</h3>
                  <p className="mt-3 max-w-sm text-[0.9rem] leading-relaxed text-charcoal/65">
                    Your quote request has been completed successfully. This is a frontend
                    demonstration, so your details have not been sent or stored.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a href={business.phoneHref} className="btn-primary">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Call the team
                    </a>
                    <button type="button" onClick={resetForm} className="btn-outline">
                      Start another request
                    </button>
                  </div>
                  <p className="mt-6 flex items-center gap-2 text-xs text-charcoal/40">
                    <Info className="h-3.5 w-3.5" aria-hidden="true" />
                    Demo form — no data is submitted or stored.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl font-medium text-forest">
                      Tell us about your project
                    </h3>
                    <span className="hidden rounded-full bg-cream px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-forest/50 sm:inline-block">
                      Free quote
                    </span>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor={fieldIds.fullName}
                        className="mb-1.5 block text-[0.78rem] font-semibold text-charcoal/75"
                      >
                        Full Name <span className="text-forest-light">*</span>
                      </label>
                      <input
                        id={fieldIds.fullName}
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? "quote-full-name-error" : undefined}
                        value={values.fullName}
                        onChange={(event) => handleChange("fullName", event.target.value)}
                        onBlur={() => handleBlur("fullName")}
                        placeholder="Your full name"
                        className={inputClass("fullName")}
                      />
                      {errors.fullName && (
                        <p id="quote-full-name-error" className="mt-1.5 text-[0.72rem] text-red-700">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor={fieldIds.phone}
                        className="mb-1.5 block text-[0.78rem] font-semibold text-charcoal/75"
                      >
                        Phone Number <span className="text-forest-light">*</span>
                      </label>
                      <input
                        id={fieldIds.phone}
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "quote-phone-error" : undefined}
                        value={values.phone}
                        onChange={(event) => handleChange("phone", event.target.value)}
                        onBlur={() => handleBlur("phone")}
                        placeholder="07xxx xxxxxx"
                        className={inputClass("phone")}
                      />
                      {errors.phone && (
                        <p id="quote-phone-error" className="mt-1.5 text-[0.72rem] text-red-700">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor={fieldIds.email}
                        className="mb-1.5 block text-[0.78rem] font-semibold text-charcoal/75"
                      >
                        Email Address <span className="text-forest-light">*</span>
                      </label>
                      <input
                        id={fieldIds.email}
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "quote-email-error" : undefined}
                        value={values.email}
                        onChange={(event) => handleChange("email", event.target.value)}
                        onBlur={() => handleBlur("email")}
                        placeholder="you@example.com"
                        className={inputClass("email")}
                      />
                      {errors.email && (
                        <p id="quote-email-error" className="mt-1.5 text-[0.72rem] text-red-700">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor={fieldIds.service}
                        className="mb-1.5 block text-[0.78rem] font-semibold text-charcoal/75"
                      >
                        Service Required <span className="text-forest-light">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id={fieldIds.service}
                          name="service"
                          required
                          aria-required="true"
                          aria-invalid={Boolean(errors.service)}
                          aria-describedby={errors.service ? "quote-service-error" : undefined}
                          value={values.service}
                          onChange={(event) => handleChange("service", event.target.value)}
                          onBlur={() => handleBlur("service")}
                          className={`${inputClass("service")} appearance-none pr-10 ${
                            values.service ? "text-charcoal" : "text-charcoal/40"
                          }`}
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40"
                          aria-hidden="true"
                        />
                      </div>
                      {errors.service && (
                        <p id="quote-service-error" className="mt-1.5 text-[0.72rem] text-red-700">
                          {errors.service}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor={fieldIds.location}
                        className="mb-1.5 block text-[0.78rem] font-semibold text-charcoal/75"
                      >
                        Property Location / Postcode <span className="text-forest-light">*</span>
                      </label>
                      <input
                        id={fieldIds.location}
                        name="location"
                        type="text"
                        autoComplete="postal-code"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.location)}
                        aria-describedby={errors.location ? "quote-location-error" : undefined}
                        value={values.location}
                        onChange={(event) => handleChange("location", event.target.value)}
                        onBlur={() => handleBlur("location")}
                        placeholder="e.g. Maghull, L31"
                        className={inputClass("location")}
                      />
                      {errors.location && (
                        <p id="quote-location-error" className="mt-1.5 text-[0.72rem] text-red-700">
                          {errors.location}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor={fieldIds.details}
                        className="mb-1.5 block text-[0.78rem] font-semibold text-charcoal/75"
                      >
                        Project Details <span className="text-forest-light">*</span>
                      </label>
                      <textarea
                        id={fieldIds.details}
                        name="details"
                        rows={4}
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.details)}
                        aria-describedby={errors.details ? "quote-details-error" : undefined}
                        value={values.details}
                        onChange={(event) => handleChange("details", event.target.value)}
                        onBlur={() => handleBlur("details")}
                        placeholder="Tell us about the tree, hedge or garden work you need..."
                        className={`${inputClass("details")} resize-none`}
                      />
                      {errors.details && (
                        <p id="quote-details-error" className="mt-1.5 text-[0.72rem] text-red-700">
                          {errors.details}
                        </p>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="btn-primary group mt-6 w-full">
                    Submit Request
                    <Send
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>

                  <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-cream px-4 py-3">
                    <Info
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest/50"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <p className="text-[0.7rem] leading-relaxed text-charcoal/50">
                      This is a frontend demonstration. Your details are not sent, stored or shared
                      with anyone.
                    </p>
                  </div>

                  <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[0.68rem] text-charcoal/40">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Required fields are marked with an asterisk.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
