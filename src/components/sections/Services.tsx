import { services, servicesNote } from "../../data/services";
import { waServiceLink } from "../../lib/whatsapp";
import { ArrowRightIcon } from "../ui/icons";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Services() {
  return (
    <Section id="servicos" className="bg-white">
      <SectionHeading
        title="O que fazemos pela sua piscina"
        description="Do tratamento da água à manutenção do dia a dia — uma lista direta do que cuidamos para você."
      />

      <div className="mx-auto mt-12 max-w-3xl border-t border-deep/10 sm:mt-14">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 40}>
            <div className="flex flex-col gap-3 border-b border-deep/10 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
              <div>
                <h3 className="font-display text-xl text-deep sm:text-[1.35rem]">
                  {service.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
              <a
                href={waServiceLink(service.messageKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-water-deep transition-colors hover:text-deep"
              >
                Solicitar
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-8 max-w-3xl">
        <p className="text-sm leading-relaxed text-muted">{servicesNote}</p>
      </Reveal>
    </Section>
  );
}
