import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckIcon, WhatsAppIcon } from "../ui/icons";

const highlights = [
  {
    title: "Atendimento próximo",
    text: "Contato direto pelo WhatsApp, do orçamento à entrega do serviço.",
  },
  {
    title: "Cuidado com cada piscina",
    text: "Cada piscina é tratada com dedicação e atenção aos detalhes.",
  },
  {
    title: "Manutenção preventiva",
    text: "Rotinas de cuidados que evitam problemas e mantêm a água pronta.",
  },
  {
    title: "Compromisso com o cliente",
    text: "Transparência sobre o que a sua piscina realmente precisa.",
  },
];

export function About() {
  return (
    <Section id="sobre" className="bg-cream">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-sand"
            />
            <img
              src={site.images.profissional}
              alt={`Profissional da ${site.businessName}`}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-lg"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-deep/85 px-5 py-4 backdrop-blur-sm">
              <p className="font-display text-lg font-semibold text-white">
                Quem cuida da sua piscina
              </p>
              <p className="mt-1 text-sm text-white/70">
                Atendimento humano, próximo e com trabalho bem feito.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Sobre"
            title="Mais do que limpar uma piscina. Cuidamos de todo o seu espaço."
          />

          <Reveal delay={80}>
            <p className="mt-6 text-base leading-relaxed text-muted">
              A {site.businessName} nasceu do cuidado com um espaço que muita
              gente ama: a piscina. Mais do que limpar a água, cuidamos de todo
              o conjunto — das bordas ao filtro, dos equipamentos ao tratamento,
              sempre com atenção aos detalhes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Trabalhamos com limpeza, manutenção e tratamento de piscinas, com
              atendimento próximo e direto: você fala com quem faz o serviço.
              Nosso compromisso é simples — sua piscina limpa, bem cuidada e
              pronta para aproveitar.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sun/20 text-sun-dark">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="font-semibold text-deep">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <Button href={waServiceLink("geral")} variant="primary" className="mt-9">
              <WhatsAppIcon className="h-4 w-4" />
              Conversar com a gente
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}