import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { CloseIcon, InstagramIcon, MenuIcon, WhatsAppIcon } from "../ui/icons";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem somos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/antes-e-depois", label: "Antes e depois" },
  { to: "/galeria", label: "Galeria" },
  { to: "/informacoes", label: "Informações" },
  { to: "/contato", label: "Contato" },
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
      className={`relative bg-white transition-shadow duration-300 ${
        scrolled || open
          ? "border-b border-deep/10 shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 py-2 sm:min-h-20 sm:px-8">
        <Link
          to="/"
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
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden flex-1 items-center justify-center gap-7 xl:flex"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative whitespace-nowrap text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-current after:transition-all after:duration-200 ${
                  isActive
                    ? "font-semibold text-deep after:w-full"
                    : "font-normal text-ink/75 after:w-0 hover:text-deep hover:after:w-full"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={waServiceLink("orcamento")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Med's Piscinas pelo WhatsApp"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-wa text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-wa-dark focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95 xl:hidden"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-deep transition-colors hover:bg-deep/5 focus-visible:outline-2 focus-visible:outline-offset-2 xl:hidden"
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
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b border-deep/10 py-4 font-display text-2xl transition-colors ${
                  isActive
                    ? "font-semibold text-deep"
                    : "font-normal text-deep/80 hover:text-water-deep"
                }`
              }
            >
              {link.label}
            </NavLink>
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
            className="inline-flex items-center justify-center gap-2 rounded-full border border-deep/20 px-6 py-3.5 text-base font-semibold text-deep transition-colors hover:bg-deep/5 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <InstagramIcon className="h-5 w-5" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </header>
  );
}
