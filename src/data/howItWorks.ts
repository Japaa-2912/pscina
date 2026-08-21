export interface Step {
  number: string;
  title: string;
  description: string;
}

/** Etapas da seção "Como cuidamos da sua piscina". */
export const steps: Step[] = [
  {
    number: "01",
    title: "Você entra em contato",
    description: "Pelo WhatsApp ou pelo formulário do site, de forma rápida e direta.",
  },
  {
    number: "02",
    title: "Entendemos o que sua piscina precisa",
    description: "Analisamos o caso e indicamos o serviço mais adequado.",
  },
  {
    number: "03",
    title: "Realizamos o serviço",
    description: "Executamos limpeza, manutenção ou tratamento com cuidado e atenção.",
  },
  {
    number: "04",
    title: "Sua piscina fica pronta para aproveitar",
    description: "Você recebe a piscina limpa, cuidada e pronta para o uso.",
  },
];