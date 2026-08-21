import { steps } from "../../data/howItWorks";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function HowItWorks() {
  return (
    <section id="como-trabalhamos" className="bg-deep py-16 sm:py-24">
      <Container>
        <SectionHeading
          light
          eyebrow="Como trabalhamos"
          title="Como cuidamos da sua piscina"
          description="Do primeiro contato à piscina pronta para aproveitar, tudo acontece de forma simples e organizada."
        />

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-white/20 lg:block"
          />
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <li className="relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-sand/40 bg-deep font-display text-base font-semibold text-sand-light">
                  {step.number}
                </span>
                <h3 className="mt-5 max-w-[16rem] font-display text-lg font-semibold leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[16rem] text-sm leading-relaxed text-white/65">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}