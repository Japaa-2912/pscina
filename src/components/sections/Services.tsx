import { services } from "../../data/services";
import { waServiceLink } from "../../lib/whatsapp";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ArrowRightIcon } from "../ui/icons";

export function Services() {
  return (
    <Section id="servicos" className="bg-cream">
      <SectionHeading
        eyebrow="Nossos serviços"
        title="Soluções completas para sua piscina"
        description="Da limpeza ao tratamento da água, cuidamos dos principais detalhes para que sua piscina esteja sempre pronta para aproveitar."
      />

      <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 60}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-deep/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(10,52,60,0.25)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-deep/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-deep sm:text-[1.35rem]">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {service.description}
                </p>
                <a
                  href={waServiceLink(service.messageKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-water-deep transition-colors hover:text-deep"
                >
                  Solicitar
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}