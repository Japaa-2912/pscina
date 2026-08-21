import { site } from "../../config/site";
import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function CTA() {
  return (
    <section
      aria-label="Solicitar orçamento"
      className="relative isolate overflow-hidden py-24 sm:py-28"
    >
      <img
        src={site.images.cta}
        alt="Piscina com água cristalina"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-deep/85" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium leading-[1.15] text-balance text-white sm:text-4xl">
            Sua piscina precisa de manutenção?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            Fale com a Med&apos;s Piscinas e descubra a melhor solução para o
            seu caso.
          </p>
          <Button
            href={waServiceLink("orcamento")}
            variant="accent"
            className="mt-8 px-9 py-4 text-base"
          >
            Solicitar orçamento
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}