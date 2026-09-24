import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { WhatsAppIcon } from "../ui/icons";
import { Reveal } from "../ui/Reveal";

export function About() {
  return (
    <section id="sobre" className="bg-cream py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Foto principal da equipe */}
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-sm">
              <img
                src={site.images.equipeGaragem}
                alt="Equipe da Med's Piscinas na garagem, ao lado da van"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Texto em primeira pessoa */}
          <Reveal delay={100}>
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
              <p>
                Hoje o cuidado é uma coisa de família: meu filho primogênito,
                Igor, é meu braço direito no dia a dia, e meu enteado, Gustavo,
                também faz parte dessa história. É essa proximidade que a gente
                leva para a casa de cada cliente.
              </p>
            </div>

            {/* Foto da equipe na piscina (menor) */}
            <img
              src={site.images.equipePiscina}
              alt="Arquimedes, Igor e Gustavo, equipe da Med's Piscinas, junto à piscina"
              loading="lazy"
              className="mt-8 w-40 rounded-2xl object-cover shadow-sm sm:w-48"
            />

            <Button
              href={waServiceLink("geral")}
              variant="whatsapp"
              className="mt-9 flex w-fit"
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
