import { waServiceLink } from "../../lib/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { WhatsAppIcon } from "../ui/icons";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-deep py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-water/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-sun/10 blur-3xl" />
        <svg
          className="absolute bottom-0 left-0 w-full text-deep-800"
          viewBox="0 0 1440 120"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,64 C240,120 480,0 720,32 C960,64 1200,96 1440,48 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-tight text-balance text-white sm:text-4xl lg:text-5xl">
            Sua piscina merece estar sempre pronta.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Fale com a Med&apos;s Piscinas e solicite um orçamento para limpeza,
            manutenção ou tratamento da sua piscina.
          </p>
          <Button
            href={waServiceLink("orcamento")}
            variant="whatsapp"
            className="mt-9 px-10 py-5 text-lg"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Solicitar orçamento pelo WhatsApp
          </Button>
          <p className="mt-5 text-sm text-white/50">
            Resposta rápida pelo WhatsApp
          </p>
        </Reveal>
      </Container>
    </section>
  );
}