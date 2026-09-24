import { useState } from "react";
import { services, servicesNote } from "../../data/services";
import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { WhatsAppIcon } from "../ui/icons";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Services() {
  const [active, setActive] = useState<number | null>(null);
  const service = active !== null ? services[active] : null;

  return (
    <Section id="servicos" className="bg-white">
      <SectionHeading
        title="O que fazemos pela sua piscina"
        description="Clique em um serviço para ver os detalhes e solicitar pelo WhatsApp."
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, index) => (
          <Reveal key={item.id} delay={index * 40}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group flex h-full w-full flex-col rounded-2xl border border-deep/10 bg-white p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-deep/20 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <h3 className="font-display text-xl text-deep">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-water-deep transition-colors group-hover:text-deep">
                Ver detalhes →
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-8 max-w-4xl">
        <p className="text-sm leading-relaxed text-muted">{servicesNote}</p>
      </Reveal>

      {service && (
        <Modal
          open
          onClose={() => setActive(null)}
          eyebrow="Serviço"
          title={service.title}
        >
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            {service.description}
          </p>
          <Button
            href={waServiceLink(service.messageKey)}
            variant="whatsapp"
            className="mt-6 w-full py-4 text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Solicitar pelo WhatsApp
          </Button>
        </Modal>
      )}
    </Section>
  );
}
