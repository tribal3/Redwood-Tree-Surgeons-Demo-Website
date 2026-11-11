import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Plus,
  X,
} from "lucide-react";
import {
  business,
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "../data/site";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const isLightboxOpen = lightboxIndex !== null;
  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  useLockBodyScroll(isLightboxOpen);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrevious = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) {
        return null;
      }

      return (current - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) {
        return null;
      }

      return (current + 1) % filteredItems.length;
    });
  }, [filteredItems.length]);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    return () => previouslyFocused?.focus();
  }, [isLightboxOpen]);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        showPrevious();
      } else if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );

        if (!focusable?.length) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isLightboxOpen, closeLightbox, showPrevious, showNext]);

  const handleCategoryChange = (category: GalleryCategory) => {
    setActiveCategory(category);
    setLightboxIndex(null);
  };

  return (
    <section id="work" className="bg-cream py-24 lg:py-32" aria-labelledby="work-heading">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" />
                Our Work
              </p>
              <h2 id="work-heading" className="display-title mt-5 text-balance">
                Quality Work. <span className="italic text-forest-light">Beautifully Finished.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-pretty text-[0.9rem] leading-relaxed text-charcoal/65">
                A visual overview of the tree surgery, pruning, hedge and stump work carried out
                across the local area.
              </p>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-[0.78rem] font-semibold text-forest-light transition-colors hover:text-forest"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
                See more on Facebook
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="no-scrollbar mt-9 flex gap-2.5 overflow-x-auto pb-1"
            role="group"
            aria-label="Filter projects by category"
          >
            {galleryCategories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => handleCategoryChange(category)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-[0.73rem] font-semibold tracking-wide transition-all duration-200 ${
                    active
                      ? "border-forest bg-forest text-cream shadow-soft"
                      : "border-forest/15 bg-transparent text-forest/65 hover:border-forest/35 hover:text-forest"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 grid auto-rows-[150px] grid-cols-2 gap-3 [grid-auto-flow:dense] sm:auto-rows-[185px] lg:grid-cols-3 lg:auto-rows-[215px] lg:gap-4">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className={`group relative overflow-hidden rounded-[1.2rem] bg-forest/10 text-left ${
                item.id % 3 === 1 ? "row-span-2" : ""
              }`}
              aria-label={`View larger image: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/15 to-transparent"
                aria-hidden="true"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <span>
                  <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-sage-light">
                    {item.category}
                  </span>
                  <span className="mt-1.5 block font-display text-[1.05rem] leading-tight text-cream sm:text-lg">
                    {item.title}
                  </span>
                </span>
                <span
                  className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/90 text-forest opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden="true"
                >
                  <Plus className="h-4 w-4" />
                </span>
              </span>
            </button>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 text-xs leading-relaxed text-charcoal/45">
            Gallery images are illustrative of the services offered and are not presented as
            completed Redwood projects. Visit our Facebook page to see the latest work.
          </p>
        </Reveal>
      </div>

      {activeItem &&
        isLightboxOpen &&
        createPortal(
          <div
            ref={dialogRef}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-dark/95 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`Image viewer: ${activeItem.title}`}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeLightbox();
              }
            }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-6 sm:top-6"
              aria-label="Close image viewer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 bg-forest-dark/60 text-cream transition-colors hover:bg-forest-light sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 bg-forest-dark/60 text-cream transition-colors hover:bg-forest-light sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <figure
              className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <img
                src={activeItem.image}
                alt={activeItem.alt}
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />
              <figcaption className="mt-5 flex w-full max-w-3xl flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="font-display text-xl text-cream sm:text-2xl">
                    {activeItem.title}
                  </p>
                  <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-sage-light">
                    {activeItem.category}
                  </p>
                </div>
                <p className="text-xs text-cream/45">
                  {(lightboxIndex ?? 0) + 1} / {filteredItems.length} · Illustrative image
                </p>
              </figcaption>
            </figure>
          </div>,
          document.body,
        )}
    </section>
  );
}
