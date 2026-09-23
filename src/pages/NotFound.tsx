import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { usePageMeta } from "../lib/usePageMeta";

export function NotFound() {
  usePageMeta({
    title: "Página não encontrada | Med's Piscinas",
    description: "O endereço que você procurou não foi encontrado.",
  });

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-water-deep">
            Erro 404
          </p>
          <h1 className="mt-4 font-display text-4xl font-normal text-deep sm:text-5xl">
            Página não encontrada
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            O endereço que você procurou não existe ou foi movido.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-deep px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-deep-800 sm:text-base"
          >
            Voltar para a Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
