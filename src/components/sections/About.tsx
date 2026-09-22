import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { CheckIcon, WhatsAppIcon } from "../ui/icons";
import { Reveal } from "../ui/Reveal";

const trustPoints = [
  "Mais de 10 anos de experiência",
  "Empresa familiar",
  "Atendimento próximo e direto",
  "Rede de parceiros especializados",
];

export function About() {
  return (
    <section id="sobre" className="bg-cream py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Foto do Arquimedes */}
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-sm">
              <img
                src={site.images.profissionalAlt}
                alt="Arquimedes, à frente da Med's Piscinas, durante um atendimento"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Texto em primeira pessoa */}
          <Reveal delay={100}>
            <p className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-water-deep">
              <span aria-hidden="true" className="h-px w-8 bg-sand-deep" />
              Quem somos
            </p>
            <h2 className="font-display text-3xl font-normal leading-[1.15] text-balance text-deep sm:text-4xl">
              Por trás da Med&apos;s Piscinas
            </h2>
            <div className="mt-5 space-y-3 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Meu nome é Arquimedes e há mais de 10 anos cuido de piscinas. O
                que começou como um trabalho de confiança virou a Med&apos;s
                Piscinas: uma empresa familiar, feita para dar tranquilidade a
                quem só quer aproveitar a piscina.
              </p>
              <p>
                Meu compromisso é simples: lazer com total segurança, água
                cristalina e a tranquilidade de não precisar se preocupar com a
                manutenção no dia a dia.
              </p>
              <p>
                Uno o conhecimento prático a soluções completas — tratamento
                químico, manutenção preventiva, troca de areia, cuidados gerais
                e produtos especializados, com avaliação e acompanhamento
                periódico da água.
              </p>
            </div>

            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand-light text-deep">
                    <CheckIcon className="h-3.5 w-3.5" />
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
              Falar com o Arquimedes
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
