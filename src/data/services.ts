import type { MessageKey } from "../lib/whatsapp";

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  messageKey: MessageKey;
}

/**
 * Serviços oferecidos pela Med's Piscinas (confirmados no briefing).
 * As imagens apontam para fotos de piscina (Pexels, licença livre) — para
 * usar uma foto real, salve em /public/images/servicos/ e atualize `image`.
 */
export const services: Service[] = [
  {
    id: "limpeza",
    title: "Limpeza de Piscinas",
    description: "Limpeza completa da piscina e manutenção da água.",
    features: [
      "Aspiração do fundo",
      "Escovação de paredes e bordas",
      "Peneiração da superfície",
      "Limpeza da linha d'água",
    ],
    image: "/images/galeria/galeria-1.jpg",
    alt: "Piscina com água limpa e azulejos em bom estado",
    messageKey: "limpeza",
  },
  {
    id: "manutencao",
    title: "Manutenção de Piscinas",
    description: "Cuidados periódicos para manter a piscina em boas condições.",
    features: [
      "Manutenção preventiva",
      "Verificação dos equipamentos",
      "Rotina adequada de cuidados",
      "Acompanhamento periódico",
    ],
    image: "/images/galeria/galeria-7.jpg",
    alt: "Piscina bem cuidada em área de lazer",
    messageKey: "manutencao",
  },
  {
    id: "tratamento-agua",
    title: "Tratamento da Água",
    description:
      "Controle e tratamento adequado da água utilizando os produtos necessários.",
    features: [
      "Controle da qualidade da água",
      "Uso dos produtos adequados",
      "Equilíbrio do pH",
      "Água limpa e bem cuidada",
    ],
    image: "/images/galeria/galeria-3.jpg",
    alt: "Água de piscina cristalina com reflexos de luz",
    messageKey: "tratamento",
  },
  {
    id: "troca-areia",
    title: "Troca de Areia do Filtro",
    description:
      "Substituição da areia do filtro para manter uma boa eficiência de filtragem.",
    features: [
      "Troca da areia do filtro",
      "Verificação do sistema de filtragem",
      "Recuperação da eficiência da filtragem",
      "Água mais limpa e transparente",
    ],
    image: "/images/galeria/galeria-5.jpg",
    alt: "Piscina em área de lazer com água tratada",
    messageKey: "trocaAreia",
  },
  {
    id: "produtos",
    title: "Produtos para Piscina",
    description:
      "Venda de produtos para manutenção e tratamento da piscina, incluindo cloro e outros produtos disponíveis.",
    features: [
      "Cloro e produtos de tratamento",
      "Produtos para manutenção",
      "Orientação de uso",
      "Disponibilidade consultada pelo WhatsApp",
    ],
    image: "/images/produtos/produto-cloro.jpg",
    alt: "Água de piscina em tom azul vibrante",
    messageKey: "produtos",
  },
  {
    id: "equipamentos",
    title: "Manutenção de Equipamentos",
    description:
      "Verificação e manutenção dos equipamentos relacionados ao funcionamento da piscina, quando esse serviço for confirmado pela empresa.",
    features: [
      "Verificação de bombas e filtros",
      "Checagem da casa de máquinas",
      "Identificação de problemas",
      "Serviço confirmado pela empresa",
    ],
    image: "/images/galeria/galeria-8.jpg",
    alt: "Piscina de borda infinita com água cristalina",
    messageKey: "equipamentos",
  },
];