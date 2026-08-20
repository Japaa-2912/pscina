import { services } from "../../data/services";
import { waServiceLink } from "../../lib/whatsapp";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ArrowRightIcon } from "../ui/icons";

export function Services() {
  return (
    <Section id="servicos" className="bg-white">
      <SectionHeading
        eyebrow="Serviços"
        title="Cuide da sua piscina do jeito certo"
        description="Serviços completos de limpeza, manutenção e tratamento para a sua piscina ficar sempre em perfeito estado."
      />

      <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={(index % 3) * 80} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-deep/10 bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-water/30 hover:shadow-[0_18px_40px_rgba(11,59,68,0.10)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-deep">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-ink/80"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-sun"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={waServiceLink(service.messageKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-water-deep transition-colors hover:text-deep"
                >
                  Solicitar serviço
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