import { Breadcrumb } from "./Breadcrumb";
import { Container } from "./Container";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Nome da página atual para a trilha de navegação. */
  current?: string;
}

/** Cabeçalho de página (faixa escura) usado nas páginas internas. */
export function PageHeader({
  eyebrow,
  title,
  description,
  current,
}: PageHeaderProps) {
  return (
    <section className="bg-deep text-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          {current && <Breadcrumb current={current} />}
          {eyebrow && (
            <p className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-sand-light">
              <span aria-hidden="true" className="h-px w-8 bg-sand-deep" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-normal leading-[1.1] text-balance sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
