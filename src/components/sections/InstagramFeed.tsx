import { site } from "../../config/site";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { InstagramIcon } from "../ui/icons";

/**
 * Seção com as fotos do Instagram ao vivo.
 * Funciona com duas opções (definidas em src/config/site.ts -> instagramFeed):
 *  - Lightwidget (recomendado, funciona em site estático): o widget atualiza
 *    sozinho conforme o perfil muda.
 *  - Instagram Graph API: requer uma serverless function + token de acesso.
 */
export function InstagramFeed() {
  const feed = site.instagramFeed;
  const widgetReady =
    feed.enabled && feed.method === "lightwidget" && feed.widgetId.length > 0;

  return (
    <Section id="instagram" className="bg-white">
      <SectionHeading
        eyebrow="Instagram"
        title="Acompanhe nosso trabalho"
        description={`Fotos e novidades publicadas no nosso perfil ${site.instagramHandle}.`}
      />

      <Reveal className="mt-10">
        {widgetReady ? (
          <div className="overflow-hidden rounded-3xl border border-deep/10">
            <iframe
              src={`https://cdn.lightwidget.com/widgets/${feed.widgetId}.html`}
              title={`Feed do Instagram da ${site.businessName}`}
              className="h-[560px] w-full border-0"
              scrolling="no"
              allowTransparency={true}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-deep/20 bg-cream/60 px-6 py-12 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sun/15 text-sun-dark">
              <InstagramIcon className="h-7 w-7" />
            </span>
            <p className="mx-auto mt-5 max-w-md font-display text-xl font-medium text-deep">
              As fotos do nosso trabalho estão no Instagram
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
              Siga o perfil {site.instagramHandle} para acompanhar os serviços
              realizados e o dia a dia da Med&apos;s Piscinas. Em breve, as fotos
              do perfil aparecem aqui automaticamente.
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-deep-800"
            >
              <InstagramIcon className="h-4 w-4" />
              Seguir no Instagram
            </a>
          </div>
        )}
      </Reveal>
    </Section>
  );
}