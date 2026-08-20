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
    <Section id="antes-depois" className="bg-deep">
      <SectionHeading
        light
        eyebrow="Antes e depois"
        title="Veja a diferença de uma manutenção profissional"
        description="Arraste o controle sobre a imagem para comparar. As fotos exibidas são ilustrativas e serão substituídas pelos trabalhos reais da empresa."
      />

      <div className="mt-12 grid gap-10 sm:mt-14 lg:grid-cols-2">
        {beforeAfter.map((pair, index) => (
          <Reveal key={pair.id} delay={index * 100}>
            <figure>
              <BeforeAfterSlider pair={pair} />
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="font-display text-lg font-medium text-white">
                  {pair.title}
                </p>
                {pair.note && (
                  <span className="rounded-full border border-sun/40 px-3 py-1 text-[11px] font-medium tracking-wide text-sand-light">
                    FOTO ILUSTRATIVA
                  </span>
                )}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <p className="text-base text-white/70">
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