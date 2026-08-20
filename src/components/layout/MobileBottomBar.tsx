import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { InstagramIcon, WhatsAppIcon } from "../ui/icons";

/** Barra de contatos fixa no rodapé do mobile (WhatsApp · Orçamento · Instagram). */
export function MobileBottomBar() {
  return (
    <nav
      aria-label="Contatos rápidos"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-deep pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a
        href={waServiceLink("geral")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 py-3 text-[11px] font-semibold text-white/85 transition-colors hover:text-white"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp
      </a>
      <a
        href={waServiceLink("orcamento")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 border-x border-white/10 bg-deep-800 py-3 text-[11px] font-semibold text-white transition-colors hover:text-white"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6M9 17h6" />
        </svg>
        Orçamento
      </a>
      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 py-3 text-[11px] font-semibold text-white/85 transition-colors hover:text-white"
      >
        <InstagramIcon className="h-5 w-5" />
        Instagram
      </a>
    </nav>
  );
}