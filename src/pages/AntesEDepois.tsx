import { BeforeAfter } from "../components/sections/BeforeAfter";
import { PageHeader } from "../components/ui/PageHeader";
import { usePageMeta } from "../lib/usePageMeta";

export function AntesEDepois() {
  usePageMeta({
    title: "Antes e Depois | Med's Piscinas",
    description:
      "Veja o antes e depois de piscinas recuperadas com o trabalho da Med's Piscinas, na Zona Sul e Zona Oeste de São Paulo.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Resultados"
        title="Antes e Depois"
        description="Arraste os controles sobre as imagens e veja a diferença que o cuidado profissional faz na sua piscina."
      />
      <BeforeAfter />
    </>
  );
}
