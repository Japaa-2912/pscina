import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { CheckIcon, WhatsAppIcon } from "../ui/icons";

const trustItems = [
  "Limpeza profissional",
  "Manutenção",
  "Tratamento da água",
  "Troca de areia",
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img
        src={site.images.hero}
        alt="Piscina com água cristalina, limpa e pronta para uso"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-deep via-deep/80 to-deep/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-deep/90 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[78svh] w-full max-w-6xl flex-col justify-center px-5 py-24 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sand-light backdrop-blur-sm">
            Limpeza · Manutenção · Tratamento da água
          </p>

          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-balance text-white sm:text-5xl lg:text-6xl">
            Sua piscina limpa, cuidada e pronta para aproveitar.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Limpeza, manutenção e tratamento profissional para manter sua
            piscina sempre em perfeitas condições.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={waServiceLink("orcamento")}
              variant="accent"
              className="py-4 sm:px-8"
            >
              Solicitar orçamento
            </Button>
            <Button
              href={waServiceLink("geral")}
              variant="whatsapp"
              className="py-4 sm:px-8"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar pelo WhatsApp
            </Button>
          </div>

          <ul className="mt-12 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-white/95">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand/20">
                  <CheckIcon className="h-3.5 w-3.5 text-sand-light" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}