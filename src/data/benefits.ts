export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

/**
 * Faixa de benefícios exibida logo após o Hero.
 * Informações genéricas e verdadeiras sobre a empresa.
 */
export const benefits: Benefit[] = [
  {
    icon: "wrench",
    title: "Atendimento profissional",
    description: "Profissional dedicado ao cuidado da sua piscina.",
  },
  {
    icon: "droplet",
    title: "Cuidado em cada detalhe",
    description: "Atenção em cada etapa do serviço realizado.",
  },
  {
    icon: "flask",
    title: "Tratamento adequado da água",
    description: "Produtos e cuidados para a qualidade da água.",
  },
  {
    icon: "whatsapp",
    title: "Atendimento rápido",
    description: "Resposta rápida e direta pelo WhatsApp.",
  },
];