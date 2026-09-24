import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { CheckIcon, WhatsAppIcon } from "../ui/icons";
import { Reveal } from "../ui/Reveal";

const trustItems = [
  "Mais de 10 anos de experiência",
  "Atendimento próximo e direto",
  "Zona Sul e Zona Oeste de São Paulo",
];

export function Hero() {
  return (
    <section id="inicio" className="bg-white">
      <Container>
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Reveal>
            <h1 className="font-display text-4xl font-normal leading-[1.1] text-balance text-deep sm:text-5xl lg:text-[3.25rem]">
              Med&apos;s Piscinas
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Comandada por Arquimedes, profissional com mais de 10 anos de
              experiência em tratamento de águas e manutenção.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={waServiceLink("orcamento")}
                variant="whatsapp"
                className="py-4 sm:px-8"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar pelo WhatsApp
              </Button>
              <Button to="/servicos" variant="outline" className="py-4 sm:px-8">
                Ver serviços
              </Button>
            </div>

            <ul className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-ink/80"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand-light text-deep">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={120}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-sm">
              <img
                src={site.images.hero}
                alt="Profissional da Med's Piscinas cuidando da piscina com a peneira"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
