import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Modal } from "../components/ui/Modal";
import { PageHeader } from "../components/ui/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import {
  ChevronDownIcon,
  ClockIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "../components/ui/icons";
import { site } from "../config/site";
import { faqs } from "../data/faqs";
import { informacoes } from "../data/informacoes";
import { waServiceLink } from "../lib/whatsapp";
import { usePageMeta } from "../lib/usePageMeta";

const cardClass =
  "group flex h-full w-full flex-col rounded-2xl border border-deep/10 bg-cream p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-deep/20 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2";

export function Informacoes() {
  usePageMeta({
    title: "Informações | Med's Piscinas",
    description:
      "Horário de atendimento, área de atendimento (Zona Sul e Zona Oeste de São Paulo), dúvidas frequentes e dicas de cuidado com a piscina.",
  });

  const [topic, setTopic] = useState<number | null>(null);
  const [faqOpen, setFaqOpen] = useState(false);
  const [faqIndex, setFaqIndex] = useState<number | null>(0);

  const active = topic !== null ? informacoes[topic] : null;

  return (
    <>
      <PageHeader
        current="Informações"
        eyebrow="Ajuda"
        title="Informações"
        description="Horário, área de atendimento e respostas para as dúvidas mais comuns — toque em um card para ver os detalhes."
      />

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          {/* Informações rápidas */}
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-3 rounded-2xl border border-deep/10 bg-cream p-5">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-water-deep" />
              <div>
                <p className="text-sm font-semibold text-deep">Horário</p>
                <p className="mt-0.5 text-sm text-muted">
                  {site.openingHours || "Em breve"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-deep/10 bg-cream p-5">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-water-deep" />
              <div>
                <p className="text-sm font-semibold text-deep">Atendimento</p>
                <p className="mt-0.5 text-sm text-muted">
                  {site.region || "Consulte pelo WhatsApp"}
                </p>
              </div>
            </div>
            <a
              href={waServiceLink("geral")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-2xl border border-deep/10 bg-cream p-5 transition-colors hover:border-deep/20"
            >
              <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-wa" />
              <div>
                <p className="text-sm font-semibold text-deep">WhatsApp</p>
                <p className="mt-0.5 text-sm text-muted">
                  {site.whatsappDisplay}
                </p>
              </div>
            </a>
          </div>

          {/* Cards de tópicos */}
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <button
                type="button"
                onClick={() => setFaqOpen(true)}
                className={cardClass}
              >
                <h3 className="font-display text-xl text-deep sm:min-h-14">
                  Dúvidas frequentes
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  Respostas para as perguntas que mais recebemos.
                </p>
                <span className="mt-4 text-sm font-semibold text-water-deep transition-colors group-hover:text-deep">
                  Ver →
                </span>
              </button>
            </Reveal>

            {informacoes.map((item, index) => (
              <Reveal key={item.id} delay={(index + 1) * 40}>
                <button
                  type="button"
                  onClick={() => setTopic(index)}
                  className={cardClass}
                >
                  <h3 className="font-display text-xl text-deep sm:min-h-14">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-water-deep transition-colors group-hover:text-deep">
                    Ver →
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {active && (
        <Modal
          open
          onClose={() => setTopic(null)}
          eyebrow="Informação"
          title={active.title}
        >
          <div className="space-y-3 text-sm leading-relaxed text-muted sm:text-base">
            {active.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Button
            href={waServiceLink("geral")}
            variant="whatsapp"
            className="mt-6 w-full py-4 text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </Modal>
      )}

      {faqOpen && (
        <Modal
          open
          onClose={() => setFaqOpen(false)}
          eyebrow="Informações"
          title="Dúvidas frequentes"
        >
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const expanded = faqIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    expanded
                      ? "border-water/40 bg-water-50"
                      : "border-deep/10 bg-cream/60 hover:border-deep/20"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setFaqIndex(expanded ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-base font-semibold text-deep">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-water transition-transform duration-300 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDownIcon />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      expanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Modal>
      )}
    </>
  );
}
