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
 * mencionadas no briefing. As imagens são de água/piscina (Pexels, licença
 * livre); troque o caminho `image` quando tiver as fotos reais em
 * /public/images/produtos/.
 */
export const products: Product[] = [
  {
    id: "cloro",
    name: "Cloro",
    description:
      "Cloro para tratamento e desinfecção da água, mantendo a piscina limpa e própria para uso.",
    tag: "Tratamento",
    image: "/images/produtos/produto-cloro.jpg",
    alt: "Água de piscina tratada com cloro, em tom azul vibrante",
    messageKey: "produtos",
  },
  {
    id: "tratamento",
    name: "Produtos para tratamento",
    description:
      "Itens para correção de pH, algicidas e demais produtos para manter a qualidade da água da piscina.",
    tag: "Tratamento",
    image: "/images/produtos/produto-tratamento.jpg",
    alt: "Água de piscina cristalina com reflexos",
    messageKey: "produtos",
  },
  {
    id: "limpeza",
    name: "Produtos de limpeza",
    description:
      "Produtos para limpeza e conservação da piscina, como desengordurantes e limpadores de bordas.",
    tag: "Limpeza",
    image: "/images/produtos/produto-limpeza.jpg",
    alt: "Piscina limpa com marcas de pista na água",
    messageKey: "produtos",
  },
];