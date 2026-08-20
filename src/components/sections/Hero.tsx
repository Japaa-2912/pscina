import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CheckIcon, WhatsAppIcon } from "../ui/icons";

const trustItems = [
  "Limpeza profissional",
  "Manutenção de piscinas",
  "Troca de areia do filtro",
  "Produtos para tratamento",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-deep"
    >
      <img
        src={site.images.hero}
        alt="Piscina residencial limpa e cristalina"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/70 to-deep/25"
      />

      <Container className="relative py-24 sm:py-28">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-sand/40 bg-deep/40 px-4 py-2 text-xs font-semibold tracking-wide text-sand-light backdrop-blur-sm">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sun" />
            Limpeza · Manutenção · Tratamento da água · Produtos
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-balance text-white sm:text-5xl lg:text-6xl">
            Piscina limpa, cuidada e pronta para aproveitar.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Limpeza, manutenção e tratamento profissional para manter sua piscina
            sempre em perfeito estado.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={waServiceLink("orcamento")}
              variant="whatsapp"
              className="px-8 py-4 text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar orçamento
            </Button>
            <Button
              href={waServiceLink("geral")}
              variant="light"
              className="px-8 py-4 text-base"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <ul className="mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm font-medium text-white/90"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun/25 text-sun">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}