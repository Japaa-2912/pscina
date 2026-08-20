export type GalleryCategory =
  | "limpeza"
  | "manutencao"
  | "troca-de-areia"
  | "produtos"
  | "antes-depois";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  title: string;
}

export const galleryCategories: {
  id: GalleryCategory | "todos";
  label: string;
}[] = [
  { id: "todos", label: "Todos" },
  { id: "limpeza", label: "Limpeza" },
  { id: "manutencao", label: "Manutenção" },
  { id: "troca-de-areia", label: "Troca de areia" },
  { id: "produtos", label: "Produtos" },
  { id: "antes-depois", label: "Antes e depois" },
];

/**
 * Galeria de trabalhos realizados.
 * As imagens apontam para placeholders SVG com proporções variadas
 * (formato editorial). Para usar as fotos reais do Instagram:
 *  1. Salve cada foto em /public/images/galeria/
 *  2. Atualize o caminho `src` abaixo
 */
export const gallery: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/galeria/galeria-limpeza-1.svg",
    alt: "Profissional fazendo a limpeza da borda da piscina",
    category: "limpeza",
    title: "Limpeza de bordas e linha d'água",
  },
  {
    id: "g2",
    src: "/images/galeria/galeria-limpeza-2.svg",
    alt: "Piscina residencial com água cristalina após a limpeza",
    category: "limpeza",
    title: "Piscina limpa e pronta para uso",
  },
  {
    id: "g3",
    src: "/images/galeria/galeria-manutencao-1.svg",
    alt: "Técnico verificando equipamentos da piscina",
    category: "manutencao",
    title: "Verificação de equipamentos",
  },
  {
    id: "g4",
    src: "/images/galeria/galeria-manutencao-2.svg",
    alt: "Casa de máquinas da piscina durante a manutenção",
    category: "manutencao",
    title: "Casa de máquinas",
  },
  {
    id: "g5",
    src: "/images/galeria/galeria-troca-areia-1.svg",
    alt: "Profissional realizando a troca de areia do filtro da piscina",
    category: "troca-de-areia",
    title: "Troca de areia do filtro",
  },
  {
    id: "g6",
    src: "/images/galeria/galeria-troca-areia-2.svg",
    alt: "Filtro de areia da piscina em manutenção",
    category: "troca-de-areia",
    title: "Manutenção do filtro",
  },
  {
    id: "g7",
    src: "/images/galeria/galeria-produtos-1.svg",
    alt: "Produtos para tratamento da água da piscina",
    category: "produtos",
    title: "Produtos para a piscina",
  },
  {
    id: "g8",
    src: "/images/galeria/galeria-antes-depois-1.svg",
    alt: "Comparativo da piscina antes e depois da manutenção profissional",
    category: "antes-depois",
    title: "Resultado da manutenção",
  },
];