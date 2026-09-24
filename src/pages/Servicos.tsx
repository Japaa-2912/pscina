import { Services } from "../components/sections/Services";
import { PageHeader } from "../components/ui/PageHeader";
import { usePageMeta } from "../lib/usePageMeta";

export function Servicos() {
  usePageMeta({
    title: "Serviços | Med's Piscinas",
    description:
      "Tratamento químico, manutenção preventiva, troca de areia, cuidados gerais, produtos especializados e acompanhamento da água da sua piscina.",
  });

  return (
    <>
      <PageHeader
        current="Serviços"
        eyebrow="O que fazemos"
        title="Serviços"
        description="Do tratamento da água à manutenção do dia a dia — tudo o que cuidamos para manter a sua piscina sempre pronta para aproveitar."
      />
      <Services />
    </>
  );
}
