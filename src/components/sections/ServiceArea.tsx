import { useState } from "react";
import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { MapPinIcon, WhatsAppIcon } from "../ui/icons";

type Result = "idle" | "match" | "unknown";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function ServiceArea() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Result>("idle");

  const areas = site.serviceAreas;
  const hasAreas = areas.length > 0;

  const checkArea = () => {
    const query = normalize(value);
    if (!query) {
      setResult("idle");
      return;
    }
    const matched =
      hasAreas &&
      areas.some((area) => {
        const normalizedArea = normalize(area);
        return (
          normalizedArea.includes(query) || query.includes(normalizedArea)
        );
      });
    setResult(matched ? "match" : "unknown");
  };

  return (
    <Section id="atendimento" className="bg-white">
      <div className="overflow-hidden rounded-3xl bg-deep shadow-[0_24px_60px_rgba(11,59,68,0.25)]">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <SectionHeading
              align="left"
              light
              eyebrow="Área de Atendimento"
              title="Tem uma piscina precisando de cuidados?"
              description="Atendimento para clientes da região. Consulte a disponibilidade para o seu endereço."
            />

            <div className="mt-8">
              <label htmlFor="regiao" className="sr-only">
                Digite sua cidade ou região
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="regiao"
                  type="text"
                  value={value}
                  onChange={(event) => {
                    setValue(event.target.value);
                    setResult("idle");
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") checkArea();
                  }}
                  placeholder="Digite sua cidade ou região"
                  autoComplete="off"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-sun focus:outline-none"
                />
                <button
                  type="button"
                  onClick={checkArea}
                  className="shrink-0 rounded-full bg-sun px-7 py-3.5 font-semibold text-deep transition-colors hover:bg-sun-dark"
                >
                  Ver atendimento
                </button>
              </div>

              <div className="mt-5 min-h-[4.5rem] space-y-2 text-sm leading-relaxed">
                {result === "match" && (
                  <p className="text-sand-light">
                    <span className="font-semibold text-sun">✓</span> Ótimo!{" "}
                    {value} está na nossa área de atendimento. Fale com a gente
                    pelo WhatsApp para agendar.
                  </p>
                )}
                {result === "unknown" && (
                  <p className="text-white/75">
                    Não identificamos {value} na nossa lista de atendimento.
                    Chame no WhatsApp para confirmarmos a disponibilidade para o
                    seu endereço.
                  </p>
                )}
                {result === "idle" && hasAreas && (
                  <p className="text-white/60">
                    Atualmente atendemos: {areas.join(" · ")}.
                  </p>
                )}
                {result === "idle" && !hasAreas && (
                  <p className="text-white/60">
                    Estamos organizando a lista de regiões atendidas. Enquanto
                    isso, confirme o seu endereço pelo WhatsApp.
                  </p>
                )}
              </div>
            </div>

            <a
              href={waServiceLink("regiao")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sand-light transition-colors hover:text-sand"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Confirmar atendimento pelo WhatsApp
            </a>
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center bg-gradient-to-br from-water/25 via-deep to-deep p-8 lg:min-h-0">
            <div className="text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sun/20 text-sun">
                <MapPinIcon className="h-8 w-8" />
              </span>
              <p className="mt-4 font-display text-xl font-semibold text-white">
                Região de atendimento
              </p>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/70">
                {site.region ||
                  "Região a confirmar — entre em contato para saber se atendemos o seu endereço."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}