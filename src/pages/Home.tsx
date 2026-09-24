import { Link } from "react-router-dom";
import { CTA } from "../components/sections/CTA";
import { Hero } from "../components/sections/Hero";
import { Testimonials } from "../components/sections/Testimonials";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
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

      <section className="bg-deep py-10 text-white sm:py-12">
        <Container>
          <p className="mx-auto max-w-3xl text-center font-display text-xl leading-snug text-balance sm:text-2xl">
            Mais de 10 anos cuidando de piscinas na Zona Sul e na Zona Oeste de
            São Paulo.
          </p>
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
