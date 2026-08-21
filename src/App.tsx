import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";
import { WhatsAppFloat } from "./components/layout/WhatsAppFloat";
import { About } from "./components/sections/About";
import { BeforeAfter } from "./components/sections/BeforeAfter";
import { Benefits } from "./components/sections/Benefits";
import { Contact } from "./components/sections/Contact";
import { CTA } from "./components/sections/CTA";
import { Faq } from "./components/sections/Faq";
import { Gallery } from "./components/sections/Gallery";
import { Hero } from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { InstagramFeed } from "./components/sections/InstagramFeed";
import { Products } from "./components/sections/Products";
import { ServiceArea } from "./components/sections/ServiceArea";
import { Services } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";
import { WhyUs } from "./components/sections/WhyUs";

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Benefits />
        <Services />
        <HowItWorks />
        <About />
        <WhyUs />
        <Gallery />
        <BeforeAfter />
        <Products />
        <ServiceArea />
        <CTA />
        <InstagramFeed />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar />
    </>
  );
}