import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Entre em contato",
    text: "Chame pelo WhatsApp e conte o que a sua piscina precisa.",
  },
  {
    number: "02",
    title: "Avaliamos o que sua piscina precisa",
    text: "Analisamos a situação da piscina e indicamos o serviço adequado.",
  },
  {
    number: "03",
    title: "Realizamos o serviço",
    text: "Executamos o trabalho com cuidado, higiene e profissionalismo.",
  },
  {
    number: "04",
    title: "Você aproveita sua piscina",
    text: "Água limpa, saudável e pronta para o seu momento de lazer.",
  },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona" className="bg-white">
      <SectionHeading
        eyebrow="Como funciona"
        title="Simples, direto e sem complicação"
        description="Do primeiro contato à piscina pronta para uso, em poucos passos."
      />

      <ol className="relative mt-12 grid gap-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-sand-light via-sand to-sand-light lg:block"
        />
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 100} className="relative">
            <li className="flex flex-col items-center text-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-sand bg-cream font-display text-lg font-semibold text-sun-dark">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-deep">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}