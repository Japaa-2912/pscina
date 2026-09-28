import { Link } from "react-router-dom";
import { CTA } from "../components/sections/CTA";
import { Hero } from "../components/sections/Hero";
import { Testimonials } from "../components/sections/Testimonials";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { site } from "../config/site";
import { services } from "../data/services";
import { usePageMeta } from "../lib/usePageMeta";

export function Home() {
  usePageMeta({
    title: "Med's Piscinas | Cuidado de piscinas com Arquimedes",
    description:
      "Cuidado profissional de piscinas com Arquimedes, na Zona Sul e Zona Oeste de São Paulo: tratamento químico, manutenção preventiva, troca de areia e acompanhamento da água.",
  });

  return (
    <>
      <Hero />

      <section className="bg-deep text-white">
        <Container className="flex flex-col items-center gap-6 py-12 text-center sm:flex-row sm:justify-center sm:gap-12 sm:py-14 sm:text-left">
          <p className="max-w-xl font-display text-xl leading-snug text-balance sm:text-2xl">
            Mais de 10 anos cuidando de piscinas na Zona Sul e na Zona Oeste de
            São Paulo.
          </p>
          <img
            src={site.images.equipePiscina}
            alt="Equipe da Med's Piscinas reunida ao lado da piscina"
            loading="lazy"
            className="w-40 shrink-0 rounded-2xl object-cover shadow-lg sm:w-48 lg:w-56"
          />
        </Container>
      </section>

      <Section id="servicos" className="bg-white">
        <SectionHeading
          eyebrow="Serviços"
          title="O que fazemos pela sua piscina"
          description="Uma prévia do que cuidamos. Veja a lista completa na página de serviços."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 40}>
              <Link
                to="/servicos"
                className="flex h-full flex-col rounded-2xl border border-deep/10 bg-cream p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-deep/20 hover:shadow-md"
              >
                <h3 className="font-display text-lg text-deep">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-water-deep">
                  Ver detalhes →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Button to="/servicos">Ver todos os serviços</Button>
        </Reveal>
      </Section>

      <Testimonials />
      <CTA />
    </>
  );
}
