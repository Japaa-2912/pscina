import { CheckIcon } from "../ui/icons";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/**
 * "Nossos valores" — reutiliza os pontos de confiança que antes ficavam no About
 * (mesmo texto, apenas movido para cá).
 */
const valores = [
  "Mais de 10 anos de experiência",
  "Empresa familiar",
  "Atendimento próximo e direto",
  "Rede de parceiros especializados",
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

        <ul className="mx-auto mt-12 grid max-w-3xl gap-3.5 sm:grid-cols-2">
          {valores.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-ink">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand-light text-deep">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
