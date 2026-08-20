import { site } from "../../config/site";
import { testimonials, testimonialsAvailable } from "../../data/testimonials";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { InstagramIcon } from "../ui/icons";

export function Testimonials() {
  if (!testimonialsAvailable) {
    return (
      <Section id="depoimentos" className="bg-cream">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem conhece, recomenda"
        />
        <Reveal className="mx-auto mt-10 max-w-2xl">
          <div className="rounded-3xl border border-dashed border-deep/20 bg-white px-6 py-10 text-center">
            <p className="font-display text-lg font-medium text-deep">
              Em breve, depoimentos reais de clientes
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
              Estamos organizando os depoimentos da empresa, a partir do
              Instagram e de clientes atendidos. Enquanto isso, veja o nosso
              trabalho no perfil {site.instagramHandle}.
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-deep-800"
            >
              <InstagramIcon className="h-4 w-4" />
              Ver no Instagram
            </a>
          </div>
        </Reveal>
      </Section>
    );
  }

  return (
    <Section id="depoimentos" className="bg-cream">
      <SectionHeading
        eyebrow="Depoimentos"
        title="Quem conhece, recomenda"
        description="O que clientes dizem sobre o trabalho da Med's Piscinas."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.id} delay={index * 80} className="h-full">
            <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
              <blockquote className="flex-1 text-sm leading-relaxed text-ink/85">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-deep/10 pt-4">
                <p className="font-semibold text-deep">{testimonial.name}</p>
                {testimonial.source && (
                  <p className="mt-0.5 text-xs text-muted">{testimonial.source}</p>
                )}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}