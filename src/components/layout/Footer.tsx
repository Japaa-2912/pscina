import { site } from "../../config/site";
import { services } from "../../data/services";
import { waServiceLink } from "../../lib/whatsapp";
import { ClockIcon, InstagramIcon, MapPinIcon, WhatsAppIcon } from "../ui/icons";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#atendimento", label: "Área de Atendimento" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const hasAddress = Boolean(site.street || site.city || site.state);
  const hasHours = Boolean(site.openingHours);

  return (
    <footer id="contato" className="bg-deep pb-20 text-white/70 md:pb-0">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={site.images.logo}
                alt={`Logotipo ${site.businessName}`}
                width={44}
                height={44}
                className="h-11 w-11 shrink-0"
              />
              <p className="font-display text-xl font-semibold text-white">
                Med&apos;s Piscinas
              </p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Limpeza, manutenção e tratamento profissional de piscinas, com
              cuidado e atenção em cada detalhe.
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sand-light transition-colors hover:text-sand"
            >
              <InstagramIcon className="h-4 w-4" />
              {site.instagramHandle}
            </a>
          </div>

          {/* Navegação */}
          <nav aria-label="Links do rodapé">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Serviços */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
              Serviços
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicos"
                    className="text-sm transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
              Contato
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={waServiceLink("geral")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-sand-light" />
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-sand-light" />
                  {site.instagramHandle}
                </a>
              </li>
              {hasAddress && (
                <li className="flex items-start gap-2.5 text-sm">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sand-light" />
                  <span>
                    {[site.street, site.city, site.state].filter(Boolean).join(", ")}
                    {site.zip ? ` — CEP ${site.zip}` : ""}
                  </span>
                </li>
              )}
              {hasHours && (
                <li className="flex items-start gap-2.5 text-sm">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-sand-light" />
                  <span>{site.openingHours}</span>
                </li>
              )}
              {!hasAddress && !hasHours && (
                <li className="text-sm leading-relaxed">
                  Endereço e horários de atendimento serão publicados em breve.
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/50">
            © 2026 {site.businessName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}