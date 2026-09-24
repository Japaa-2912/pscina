import { Link } from "react-router-dom";

/** Trilha de navegação (Home / Página atual), exibida no cabeçalho das internas. */
export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav
      aria-label="Trilha de navegação"
      className="mb-4 flex items-center gap-2 text-xs text-white/60"
    >
      <Link to="/" className="transition-colors hover:text-white">
        Home
      </Link>
      <span aria-hidden="true">/</span>
      <span className="font-semibold text-white/85">{current}</span>
    </nav>
  );
}
