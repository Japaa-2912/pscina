import { useEffect, useState } from "react";
import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import {
  CloseIcon,
  InstagramIcon,
  MenuIcon,
  WhatsAppIcon,
} from "../ui/icons";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-deep/10 bg-cream/95 shadow-[0_1px_24px_rgba(11,59,68,0.06)] backdrop-blur-md"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label={`${site.businessName} — início`}>
          <img
            src={site.images.logo}
            alt={`Logotipo ${site.businessName}`}
            width={44}
            height={44}
            className="h-11 w-11 shrink-0"
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

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
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
          <Button
            href={waServiceLink("orcamento")}
            variant="whatsapp"
            className="hidden md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar no WhatsApp
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-deep transition-colors hover:bg-deep/5 lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col overflow-y-auto bg-cream px-5 pb-16 pt-6 transition-all duration-300 sm:top-20 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label="Navegação mobile" className="flex flex-col">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-deep/10 py-4 font-display text-2xl font-medium text-deep transition-colors hover:text-water"
              style={{ transitionDelay: `${index * 20}ms` }}
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