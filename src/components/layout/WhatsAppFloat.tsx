import { waServiceLink } from "../../lib/whatsapp";
import { WhatsAppIcon } from "../ui/icons";

/** Botão flutuante de WhatsApp (desktop/tablet). No mobile existe a barra inferior. */
export function WhatsAppFloat() {
  return (
    <a
      href={waServiceLink("geral")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Med's Piscinas pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-50 hidden items-center justify-center rounded-full bg-wa p-4 text-white shadow-lg shadow-deep/25 transition-all duration-200 hover:scale-105 hover:bg-wa-dark md:flex"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border-2 border-wa/50 transition-transform duration-300 group-hover:scale-110"
      />
      <WhatsAppIcon className="h-7 w-7" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-deep px-3.5 py-2 text-xs font-semibold text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
      >
        Fale pelo WhatsApp
      </span>
    </a>
  );
}