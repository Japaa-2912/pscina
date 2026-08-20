import { site } from "../config/site";

/**
 * Monta um link do WhatsApp com mensagem pré-preenchida.
 * O número fica centralizado em src/config/site.ts.
 */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Mensagens padrão por tipo de contato/serviço. */
export const messages = {
  geral: "Olá! Vim pelo site da Med's Piscinas e gostaria de solicitar um orçamento.",
  orcamento:
    "Olá! Vim pelo site da Med's Piscinas e gostaria de solicitar um orçamento para o serviço de piscina.",
  limpeza:
    "Olá! Vim pelo site da Med's Piscinas e gostaria de solicitar um orçamento para limpeza de piscina.",
  manutencao:
    "Olá! Vim pelo site da Med's Piscinas e gostaria de solicitar um orçamento para manutenção de piscina.",
  tratamento:
    "Olá! Vim pelo site da Med's Piscinas e gostaria de saber mais sobre o tratamento da água da minha piscina.",
  trocaAreia:
    "Olá! Vim pelo site da Med's Piscinas e gostaria de saber sobre troca de areia do filtro.",
  produtos:
    "Olá! Vim pelo site da Med's Piscinas e gostaria de consultar a disponibilidade de produtos para piscina.",
  equipamentos:
    "Olá! Vim pelo site da Med's Piscinas e gostaria de saber sobre manutenção de equipamentos da piscina.",
  agendar:
    "Olá! Vim pelo site da Med's Piscinas e gostaria de agendar uma manutenção.",
  regiao:
    "Olá! Vim pelo site da Med's Piscinas. Gostaria de saber se vocês atendem a minha região.",
} as const;

export type MessageKey = keyof typeof messages;

/** Link do WhatsApp para um serviço específico, com mensagem adequada. */
export function waServiceLink(key: MessageKey): string {
  return waLink(messages[key]);
}