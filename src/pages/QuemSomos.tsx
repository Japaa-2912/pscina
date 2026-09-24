import { About } from "../components/sections/About";
import { Valores } from "../components/sections/Valores";
import { PageHeader } from "../components/ui/PageHeader";
import { usePageMeta } from "../lib/usePageMeta";

export function QuemSomos() {
  usePageMeta({
    title: "Quem Somos | Med's Piscinas",
    description:
      "Conheça o Arquimedes e a história da Med's Piscinas: mais de 10 anos de experiência no cuidado de piscinas na Zona Sul e Zona Oeste de São Paulo.",
  });

  return (
    <>
      <PageHeader
        current="Quem Somos"
        eyebrow="A Med's Piscinas"
        title="Quem Somos"
        description="Uma empresa familiar, com mais de 10 anos de experiência no cuidado de piscinas na Zona Sul e na Zona Oeste de São Paulo."
      />
      <About />
      <Valores />
    </>
  );
}
