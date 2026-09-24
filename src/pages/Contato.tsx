import { Contact } from "../components/sections/Contact";
import { ServiceArea } from "../components/sections/ServiceArea";
import { PageHeader } from "../components/ui/PageHeader";
import { usePageMeta } from "../lib/usePageMeta";

export function Contato() {
  usePageMeta({
    title: "Contato | Med's Piscinas",
    description:
      "Fale com a Med's Piscinas pelo WhatsApp e solicite seu orçamento. Atendimento na Zona Sul e Zona Oeste de São Paulo.",
  });

  return (
    <>
      <PageHeader
        current="Contato"
        eyebrow="Fale com a gente"
        title="Contato"
        description="Tire suas dúvidas e solicite seu orçamento pelo WhatsApp. O atendimento é direto com o Arquimedes."
      />
      <Contact />
      <ServiceArea />
    </>
  );
}
