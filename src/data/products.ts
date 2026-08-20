import type { MessageKey } from "../lib/whatsapp";

export interface Product {
  id: string;
  name: string;
  description: string;
  tag: string;
  image: string;
  alt: string;
  messageKey: MessageKey;
}

/**
 * Produtos oferecidos pela empresa.
 * NÃO foram inventadas marcas ou preços — apenas categorias de produtos
 * mencionadas no briefing. As imagens são placeholders; troque o caminho
 * `image` quando tiver as fotos reais em /public/images/produtos/.
 */
export const products: Product[] = [
  {
    id: "cloro",
    name: "Cloro",
    description:
      "Cloro para tratamento e desinfecção da água, mantendo a piscina limpa e própria para uso.",
    tag: "Tratamento",
    image: "/images/produtos/produto-cloro.svg",
    alt: "Cloro para tratamento de piscina",
    messageKey: "produtos",
  },
  {
    id: "tratamento",
    name: "Produtos para tratamento",
    description:
      "Itens para correção de pH, algicidas e demais produtos para manter a qualidade da água da piscina.",
    tag: "Tratamento",
    image: "/images/produtos/produto-tratamento.svg",
    alt: "Produtos para tratamento da água da piscina",
    messageKey: "produtos",
  },
  {
    id: "limpeza",
    name: "Produtos de limpeza",
    description:
      "Produtos para limpeza e conservação da piscina, como desengordurantes e limpadores de bordas.",
    tag: "Limpeza",
    image: "/images/produtos/produto-limpeza.svg",
    alt: "Produtos de limpeza para piscina",
    messageKey: "produtos",
  },
];