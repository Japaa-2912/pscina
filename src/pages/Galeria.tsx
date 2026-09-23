import { Gallery } from "../components/sections/Gallery";
import { PageHeader } from "../components/ui/PageHeader";
import { usePageMeta } from "../lib/usePageMeta";

export function Galeria() {
  usePageMeta({
    title: "Galeria | Med's Piscinas",
    description:
      "Fotos de piscinas cuidadas pela Med's Piscinas: limpeza, tratamento e manutenção na Zona Sul e Zona Oeste de São Paulo.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Nosso trabalho"
        title="Galeria"
        description="Alguns dos trabalhos de limpeza, tratamento e manutenção que realizamos."
      />
      <Gallery />
    </>
  );
}
