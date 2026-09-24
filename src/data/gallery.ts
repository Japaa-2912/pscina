export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  /** Classes extras de posição no mosaico (grid 4 colunas no desktop). */
  span: string;
}

/**
 * Galeria de trabalhos (mosaico editorial) — fotos reais da empresa.
 * Para adicionar mais fotos, salve em /public/images/galeria/ e inclua um item.
 *
 * O mosaico usa 4 colunas no desktop. Para não abrir buracos no grid, cada item
 * grande (span 2x2) é seguido por exatamente 4 itens simples.
 */
const BIG = "md:col-span-2 md:row-span-2";

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/galeria/galeria-9.jpg",
    alt: "Piscina cuidada pela Med's Piscinas",
    title: "Piscina limpa e pronta para uso",
    span: BIG,
  },
  {
    id: "g2",
    src: "/images/galeria/galeria-10.jpg",
    alt: "Piscina após o serviço de manutenção",
    title: "Manutenção realizada",
    span: "",
  },
  {
    id: "g3",
    src: "/images/galeria/galeria-11.jpg",
    alt: "Água de piscina cristalina",
    title: "Água cristalina",
    span: "",
  },
  {
    id: "g4",
    src: "/images/galeria/galeria-13.jpg",
    alt: "Piscina com água tratada e equilibrada",
    title: "Tratamento da água",
    span: "",
  },
  {
    id: "g5",
    src: "/images/galeria/galeria-14.jpg",
    alt: "Atendimento em piscina de condomínio",
    title: "Atendimento em condomínio",
    span: "",
  },
  {
    id: "g6",
    src: "/images/galeria/galeria-15.jpg",
    alt: "Piscina após limpeza completa",
    title: "Limpeza completa",
    span: BIG,
  },
  {
    id: "g7",
    src: "/images/galeria/galeria-16.jpg",
    alt: "Piscina residencial cuidada",
    title: "Piscina residencial",
    span: "",
  },
  {
    id: "g8",
    src: "/images/galeria/galeria-17.jpg",
    alt: "Manutenção preventiva em piscina",
    title: "Manutenção preventiva",
    span: "",
  },
  {
    id: "g9",
    src: "/images/galeria/galeria-18.jpg",
    alt: "Detalhe do serviço realizado na piscina",
    title: "Detalhes do serviço",
    span: "",
  },
  {
    id: "g10",
    src: "/images/galeria/galeria-19.jpg",
    alt: "Piscina em área de lazer",
    title: "Área de lazer",
    span: "",
  },
  {
    id: "g11",
    src: "/images/galeria/galeria-20.jpg",
    alt: "Resultado do cuidado profissional na piscina",
    title: "Resultado do cuidado",
    span: "",
  },
];
