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
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#atendimento", label: "Área de Atendimento" },
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
          ? "border-b border-deep/10 shadow-[0_1px_24px_rgba(10,52,60,0.08)]"
          : "border-b border-transparent"
      }`}
    >
      {/* Barra de informações no topo */}
      <div className="bg-deep text-white/80">
        <div className="mx-auto flex h-10 w-full max-w-6xl items-center justify-between gap-4 px-5 text-xs sm:px-8">
          <p className="flex items-center gap-2">
            <ClockIcon className="h-3.5 w-3.5 shrink-0 text-sand-light" />
            <span className="hidden sm:inline">
              {site.openingHours || "Horário de atendimento em breve"}
            </span>
            <span className="sm:hidden">Atendimento por WhatsApp</span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 font-medium text-white/80 transition-colors hover:text-white md:inline-flex"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              {site.instagramHandle}
            </a>
            <a
              href={waServiceLink("geral")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-sand-light"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-sand-light" />
              {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label={`${site.businessName} — início`}
        >
          <img
            src={site.images.logo}
            alt={`Logotipo ${site.businessName}`}
            width={96}
            height={96}
            className="h-11 w-11 shrink-0 rounded-lg object-cover sm:h-12 sm:w-12"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-deep sm:text-xl">
              Med&apos;s Piscinas
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted sm:text-[11px]">
              Limpeza · Manutenção · Tratamento
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/75 transition-colors hover:text-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
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
        className={`fixed inset-x-0 bottom-0 top-0 z-40 flex flex-col overflow-y-auto bg-white px-5 pb-16 pt-[6.5rem] transition-all duration-300 sm:pt-[7.5rem] xl:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label="Navegação mobile" className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-deep/10 py-4 font-display text-2xl font-medium text-deep transition-colors hover:text-water-deep"
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