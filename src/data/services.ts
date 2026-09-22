import type { MessageKey } from "../lib/whatsapp";

export interface Service {
  id: string;
  title: string;
  description: string;
  messageKey: MessageKey;
}

/**
 * Serviços da Med's Piscinas, em lista objetiva.
 * Conteúdo baseado nas informações confirmadas pela empresa.
 */
export const services: Service[] = [
  {
    id: "tratamento-quimico",
    title: "Tratamento químico da água",
    description:
      "Correção e equilíbrio químico da água, com os produtos adequados para cada piscina.",
    messageKey: "tratamento",
  },
  {
    id: "manutencao-preventiva",
    title: "Manutenção preventiva",
    description:
      "Cuidados periódicos que mantêm a piscina em boas condições e evitam problemas.",
    messageKey: "manutencao",
  },
  {
    id: "troca-areia",
    title: "Troca de areia do filtro",
    description:
      "Substituição da areia do filtro para recuperar a eficiência da filtragem.",
    messageKey: "trocaAreia",
  },
  {
    id: "cuidados-gerais",
    title: "Cuidados gerais",
    description:
      "Limpeza, aspiração e conservação da piscina, das bordas e da linha d'água.",
    messageKey: "limpeza",
  },
  {
    id: "produtos",
    title: "Venda de produtos especializados",
    description:
      "Produtos para tratamento e manutenção da água, com orientação de uso.",
    messageKey: "produtos",
  },
  {
    id: "acompanhamento",
    title: "Avaliação e acompanhamento da água",
    description:
      "Análise periódica da água e acompanhamento para manter tudo em equilíbrio.",
    messageKey: "tratamento",
  },
];

/** Observação sobre serviços que dependem de parceiros. */
export const servicesNote =
  "Para reparos e consertos mais complexos, contamos com uma rede de parceiros especializados de confiança.";
