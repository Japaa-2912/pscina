export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  /** Classes extras de posição no mosaico (grid 4 colunas no desktop). */
  span: string;
}

/**
 * Galeria de trabalhos (mosaico editorial).
 * 8 fotos de piscinas (Pexels, licença livre) + 2 fotos reais do
 * profissional da Med's Piscinas. Para usar mais fotos reais, salve em
 * /public/images/galeria/ e atualize `src` abaixo.
 */
export const gallery: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/galeria/galeria-1.jpg",
    alt: "Piscina com água limpa e azulejos em bom estado",
    title: "Piscina limpa e pronta para uso",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "g2",
    src: "/images/profissional/profissional-2.jpg",
    alt: "Profissional da Med's Piscinas em atendimento",
    title: "Atendimento em campo",
    span: "",
  },
  {
    id: "g3",
    src: "/images/galeria/galeria-4.jpg",
    alt: "Piscina com água azul sob o céu aberto",
    title: "Piscina residencial",
    span: "",
  },
  {
    id: "g4",
    src: "/images/galeria/galeria-6.jpg",
    alt: "Piscina cercada por vegetação",
    title: "Piscina integrada ao lazer",
    span: "",
  },
  {
    id: "g5",
    src: "/images/galeria/galeria-7.jpg",
    alt: "Área de lazer com piscina bem cuidada",
    title: "Área de lazer",
    span: "",
  },
  {
    id: "g6",
    src: "/images/galeria/galeria-3.jpg",
    alt: "Água de piscina cristalina com reflexos de luz",
    title: "Água cristalina",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "g7",
    src: "/images/profissional/profissional-1.jpg",
    alt: "Profissional da Med's Piscinas realizando o serviço",
    title: "Serviço realizado com cuidado",
    span: "",
  },
  {
    id: "g8",
    src: "/images/galeria/galeria-8.jpg",
    alt: "Piscina de borda infinita com água cristalina",
    title: "Piscina de borda infinita",
    span: "",
  },
  {
    id: "g9",
    src: "/images/galeria/galeria-5.jpg",
    alt: "Piscina em área de lazer com água tratada",
    title: "Água tratada e equilibrada",
    span: "",
  },
  {
    id: "g10",
    src: "/images/galeria/galeria-2.jpg",
    alt: "Borda de piscina com escada e água azul",
    title: "Detalhes que fazem diferença",
    span: "",
  },
];