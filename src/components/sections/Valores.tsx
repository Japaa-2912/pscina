import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CheckIcon } from "../ui/icons";

const valores = [
  {
    title: "Responsabilidade",
    description: "Cada piscina é tratada com seriedade e compromisso.",
  },
  {
    title: "Profissionalismo",
    description: "Serviço feito por quem entende, com atenção aos detalhes.",
  },
  {
    title: "Água sempre cristalina",
    description: "Cuidado com o tratamento e o equilíbrio da água.",
  },
  {
    title: "Venda de produtos",
    description: "Produtos especializados para tratamento e manutenção.",
  },
  {
    title: "Parceria para consertos",
    description: "Rede de confiança para consertos de bombas.",
  },
];

export function Valores() {
  return (
    <section id="valores" className="bg-white py-20 sm:py-28 lg:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-water-deep">
            <span aria-hidden="true" className="h-px w-8 bg-sand-deep" />
            Nossos valores
            <span aria-hidden="true" className="h-px w-8 bg-sand-deep" />
          </p>
          <h2 className="font-display text-3xl font-normal leading-[1.15] text-balance text-deep sm:text-4xl">
            No que acreditamos
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {valores.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-deep/10 bg-cream p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sand-light text-deep">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-deep">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
