import { useEffect, useState } from "react";
import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import {
  ClockIcon,
  CloseIcon,
  InstagramIcon,
  MenuIcon,
  WhatsAppIcon,
} from "../ui/icons";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Quem somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#antes-depois", label: "Antes e depois" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled || open
          ? "border-b border-deep/10 shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      {/* Barra de informações no topo — apenas horário e Instagram */}
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
            className="inline-flex shrink-0 items-center gap-1.5 font-normal text-white/80 transition-colors hover:text-white"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{site.instagramHandle}</span>
          </a>
        </div>
      </div>

      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 py-2 sm:min-h-20 sm:px-8">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-3"
          aria-label={`${site.businessName} — início`}
        >
          <img
            src={site.images.logo}
            alt={`Logotipo ${site.businessName}`}
            width={96}
            height={96}
            className="h-11 w-11 shrink-0 rounded-lg object-cover sm:h-12 sm:w-12"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-base font-semibold tracking-tight text-deep sm:text-xl">
              Med&apos;s Piscinas
            </span>
            <span className="mt-0.5 text-[10px] font-normal uppercase tracking-[0.12em] text-muted sm:mt-1 sm:text-[11px] sm:tracking-[0.18em]">
              Limpeza · Manutenção · Tratamento
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden flex-1 items-center justify-center gap-7 xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-normal text-ink/75 transition-colors hover:text-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={waServiceLink("orcamento")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Med's Piscinas pelo WhatsApp"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-wa text-white shadow-sm transition-colors hover:bg-wa-dark xl:hidden"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>

          <Button
            href={waServiceLink("orcamento")}
            variant="primary"
            className="hidden xl:inline-flex"
          >
            Solicitar orçamento
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-deep transition-colors hover:bg-deep/5 xl:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menu mobile / tablet */}
      <div
        id="menu-mobile"
        className={`absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-6.5rem)] overflow-y-auto border-t border-deep/10 bg-white px-5 pb-16 pt-4 transition-all duration-300 sm:max-h-[calc(100dvh-7.5rem)] xl:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Navegação mobile" className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-deep/10 py-4 font-display text-2xl font-normal text-deep transition-colors hover:text-water-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3">
          <Button
            href={waServiceLink("orcamento")}
            variant="whatsapp"
            className="w-full py-4 text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Solicitar orçamento no WhatsApp
          </Button>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-deep/20 px-6 py-3.5 text-base font-semibold text-deep transition-colors hover:bg-deep/5"
          >
            <InstagramIcon className="h-5 w-5" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </header>
  );
}