import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CheckIcon, WhatsAppIcon } from "../ui/icons";

const highlights = [
  "Atendimento próximo",
  "Cuidado com cada piscina",
  "Serviço profissional",
  "Compromisso com o cliente",
];

export function About() {
  return (
    <section id="sobre" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Fotos do profissional trabalhando */}
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -left-5 -top-5 h-full w-full rounded-3xl bg-sand-light"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_24px_48px_-24px_rgba(10,52,60,0.3)]">
              <img
                src={site.images.profissional}
                alt="Profissional da Med's Piscinas realizando o serviço"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-3 hidden w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:-right-8 lg:w-56">
              <img
                src={site.images.profissionalAlt}
                alt="Profissional da Med's Piscinas em atendimento"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Texto */}
          <Reveal delay={100}>
            <p className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-water-deep">
              <span aria-hidden="true" className="h-px w-8 bg-sand-deep" />
              Sobre a Med&apos;s Piscinas
            </p>
            <h2 className="font-display text-3xl font-medium leading-[1.15] text-balance text-deep sm:text-4xl">
              Quem cuida da sua piscina
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              A Med&apos;s Piscinas trabalha para tornar a manutenção da sua
              piscina mais simples, prática e confiável.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Da limpeza ao tratamento da água, cada etapa é feita com atenção
              e profissionalismo, para que você aproveite sua piscina sem
              preocupações.
            </p>

            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-ink">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sand-light text-deep">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              href={waServiceLink("geral")}
              variant="whatsapp"
              className="mt-9"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Conversar com a Med&apos;s
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}