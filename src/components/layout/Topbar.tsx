import { site } from "../../config/site";
import { ClockIcon, InstagramIcon } from "../ui/icons";

/** Barra de informações no topo — horário de atendimento e Instagram. */
export function Topbar() {
  return (
    <div className="bg-deep text-white/80">
      <div className="mx-auto flex h-10 w-full max-w-6xl items-center justify-between gap-4 overflow-hidden px-5 text-xs sm:px-8">
        <p className="flex min-w-0 items-center gap-2">
          <ClockIcon className="h-3.5 w-3.5 shrink-0 text-sand-light" />
          <span className="hidden truncate sm:inline">
            {site.openingHours || "Horário de atendimento em breve"}
          </span>
          <span className="truncate sm:hidden">Atendimento por WhatsApp</span>
        </p>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 font-normal text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <InstagramIcon className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{site.instagramHandle}</span>
        </a>
      </div>
    </div>
  );
}
