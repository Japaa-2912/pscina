import { useEffect } from "react";

interface PageMeta {
  /** Título único da página (ex: "Serviços | Med's Piscinas"). */
  title: string;
  /** Meta description resumindo a página. */
  description: string;
}

/**
 * Define o <title> e a meta description da página atual.
 * Abordagem simples (sem dependências), suficiente para o SEO básico por rota.
 */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", description);
  }, [title, description]);
}
