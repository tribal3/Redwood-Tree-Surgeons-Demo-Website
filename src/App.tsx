import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyChoose } from "./components/WhyChoose";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { CallToAction } from "./components/CallToAction";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { MobileCta } from "./components/MobileCta";

function scrollToContact() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const contact = document.getElementById("contact");

  contact?.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

export default function App() {
  const [serviceRequest, setServiceRequest] = useState({ service: "", key: 0 });

  const handleQuoteClick = () => scrollToContact();

  const handleSelectService = (service: string) => {
    setServiceRequest((current) => ({ service, key: current.key + 1 }));
    scrollToContact();
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to content
      </a>

      <Navbar onQuoteClick={handleQuoteClick} />

      <main id="main">
        <Hero onQuoteClick={handleQuoteClick} />
        <About />
        <Services onSelectService={handleSelectService} />
        <WhyChoose onQuoteClick={handleQuoteClick} />
        <Gallery />
        <Reviews />
        <CallToAction onQuoteClick={handleQuoteClick} />
        <Contact
          preselectedService={serviceRequest.service}
          selectionKey={serviceRequest.key}
        />
      </main>

      <Footer />
      <BackToTop />
      <MobileCta onQuoteClick={handleQuoteClick} />
    </>
  );
}
