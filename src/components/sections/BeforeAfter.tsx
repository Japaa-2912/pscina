import { beforeAfter } from "../../data/beforeAfter";
import { waServiceLink } from "../../lib/whatsapp";
import { BeforeAfterSlider } from "../BeforeAfterSlider";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { WhatsAppIcon } from "../ui/icons";

export function BeforeAfter() {
  if (beforeAfter.length === 0) return null;

  return (
    <Section id="antes-depois" className="bg-cream">
      <SectionHeading
        eyebrow="Antes e depois"
        title="Veja a diferença"
        description="Arraste o controle sobre a imagem para comparar o antes e o depois de uma piscina recuperada."
      />

      <div className="mt-12 grid gap-10 sm:mt-14 lg:grid-cols-2">
        {beforeAfter.map((pair, index) => (
          <Reveal key={pair.id} delay={index * 100}>
            <figure>
              <BeforeAfterSlider pair={pair} />
              <figcaption className="mt-4">
                <p className="font-display text-lg text-deep">{pair.title}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <p className="text-base text-muted">
          Quer ver esse resultado na sua piscina?
        </p>
        <Button
          href={waServiceLink("limpeza")}
          variant="whatsapp"
          className="mt-4 px-8 py-4 text-base"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Agendar manutenção
        </Button>
      </Reveal>
    </Section>
  );
}
