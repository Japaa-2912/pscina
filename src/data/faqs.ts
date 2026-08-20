import { site } from "../config/site";

export interface Faq {
  question: string;
  answer: string;
}

/**
 * Perguntas frequentes.
 * As respostas NÃO afirmam serviços que a empresa não oferece.
 * Edite livremente conforme a empresa confirmar novas informações.
 */
const region = site.region ? `na região de ${site.region}` : "na sua região";

export const faqs: Faq[] = [
  {
    question: "Vocês fazem limpeza periódica?",
    answer:
      "Sim. A limpeza pode ser feita de forma periódica, com uma frequência combinada com você, ou sob demanda. O ideal é manter uma rotina que deixe a água sempre pronta para uso.",
  },
  {
    question: "Vocês fazem troca de areia do filtro?",
    answer:
      "Sim, realizamos a troca da areia do sistema de filtragem para recuperar a eficiência da filtragem da sua piscina.",
  },
  {
    question: "Vocês vendem produtos para piscina?",
    answer:
      "Sim. Trabalhamos com produtos para manutenção e tratamento da água, incluindo cloro e outros produtos disponíveis pela empresa.",
  },
  {
    question: "Vocês atendem minha região?",
    answer: `Atendemos clientes ${region}. Para confirmarmos a disponibilidade para o seu endereço, é só chamar no WhatsApp.`,
  },
  {
    question: "Posso solicitar orçamento pelo WhatsApp?",
    answer:
      "Pode sim, e é o jeito mais rápido. Envie uma mensagem pelo WhatsApp informando o serviço que você precisa e a sua região — retornamos com as informações e o orçamento.",
  },
  {
    question: "Vocês fazem manutenção preventiva?",
    answer:
      "Sim. A manutenção preventiva ajuda a evitar problemas e a manter a piscina sempre em bom estado. É só conversarmos para montar uma frequência adequada para você.",
  },
];