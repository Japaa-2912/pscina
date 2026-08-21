import { products } from "../../data/products";
import { waServiceLink } from "../../lib/whatsapp";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { WhatsAppIcon } from "../ui/icons";

export function Products() {
  return (
    <Section id="produtos" className="bg-cream">
      <SectionHeading
        eyebrow="Produtos"
        title="Produtos para cuidar da sua piscina"
        description="Cloro e produtos para tratamento e limpeza da piscina. Marcas e valores sob consulta pelo WhatsApp."
      />

      <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={index * 80} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,59,68,0.10)]">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-sand-deep px-3 py-1 text-xs font-semibold text-white">
                  {product.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-deep">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
                <a
                  href={waServiceLink(product.messageKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-deep/20 px-5 py-3 text-sm font-semibold text-deep transition-colors hover:bg-deep hover:text-cream"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Consultar disponibilidade
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}