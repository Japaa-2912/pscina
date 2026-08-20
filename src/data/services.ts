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
 * Serviços oferecidos pela Med's Piscinas.
 * As imagens apontam para placeholders SVG. Para usar uma foto real:
 *  1. Salve a foto em /public/images/servicos/
 *  2. Atualize o caminho `image` abaixo (ex: "/images/servicos/servico-limpeza.jpg")
 */
export const services: Service[] = [
  {
    id: "limpeza",
    title: "Limpeza de Piscinas",
    description:
      "Aspiração, escovação, peneiração, limpeza das bordas e manutenção geral.",
    features: [
      "Aspiração do fundo",
      "Escovação de paredes e bordas",
      "Peneiração da superfície",
      "Limpeza da linha d'água",
    ],
    image: "/images/servicos/servico-limpeza.svg",
    alt: "Profissional realizando limpeza de piscina residencial",
    messageKey: "limpeza",
  },
  {
    id: "manutencao",
    title: "Manutenção de Piscinas",
    description:
      "Manutenção preventiva, verificação dos equipamentos e cuidados gerais com a piscina.",
    features: [
      "Manutenção preventiva",
      "Verificação dos equipamentos",
      "Rotina adequada de cuidados",
      "Acompanhamento periódico",
    ],
    image: "/images/servicos/servico-manutencao.svg",
    alt: "Técnico verificando o funcionamento da piscina durante manutenção",
    messageKey: "manutencao",
  },
  {
    id: "tratamento-agua",
    title: "Tratamento da Água",
    description:
      "Controle e tratamento da água utilizando os produtos adequados para manter a piscina limpa e bem cuidada.",
    features: [
      "Controle da qualidade da água",
      "Uso dos produtos adequados",
      "Equilíbrio do pH",
      "Água limpa e bem cuidada",
    ],
    image: "/images/servicos/servico-tratamento-agua.svg",
    alt: "Profissional analisando a água da piscina durante o tratamento",
    messageKey: "tratamento",
  },
  {
    id: "troca-areia",
    title: "Troca de Areia do Filtro",
    description:
      "Troca da areia do sistema de filtragem para recuperar a eficiência da filtragem.",
    features: [
      "Troca da areia do filtro",
      "Verificação do sistema de filtragem",
      "Recuperação da eficiência da filtragem",
      "Água mais limpa e transparente",
    ],
    image: "/images/servicos/servico-troca-areia.svg",
    alt: "Profissional realizando troca de areia do filtro da piscina",
    messageKey: "trocaAreia",
  },
  {
    id: "produtos",
    title: "Produtos para Piscina",
    description:
      "Venda de produtos para manutenção e tratamento da piscina, incluindo cloro e outros produtos disponíveis pela empresa.",
    features: [
      "Cloro e produtos de tratamento",
      "Produtos para manutenção",
      "Orientação de uso",
      "Disponibilidade consultada pelo WhatsApp",
    ],
    image: "/images/servicos/servico-produtos.svg",
    alt: "Produtos para tratamento e manutenção de piscina",
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
    image: "/images/servicos/servico-equipamentos.svg",
    alt: "Verificação de equipamentos da casa de máquinas da piscina",
    messageKey: "equipamentos",
  },
];