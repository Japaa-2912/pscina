import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";
import { WhatsAppFloat } from "./components/layout/WhatsAppFloat";
import { About } from "./components/sections/About";
import { BeforeAfter } from "./components/sections/BeforeAfter";
import { Faq } from "./components/sections/Faq";
import { FinalCta } from "./components/sections/FinalCta";
import { Gallery } from "./components/sections/Gallery";
import { Hero } from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { InstagramFeed } from "./components/sections/InstagramFeed";
import { Products } from "./components/sections/Products";
import { ServiceArea } from "./components/sections/ServiceArea";
import { Services } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";

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
        <Services />
        <BeforeAfter />
        <About />
        <HowItWorks />
        <Gallery />
        <ServiceArea />
        <Products />
        <InstagramFeed />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar />
    </>
  );
}