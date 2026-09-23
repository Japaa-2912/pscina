import { useState } from "react";
import { site } from "../config/site";
import { faqs } from "../data/faqs";
import { ChevronDownIcon, ClockIcon, MapPinIcon } from "./ui/icons";

/**
 * Conteúdo de "Informações" compartilhado entre a página /informacoes
 * e o card (modal) aberto pelo menu.
 */
export function InformacoesContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-2xl border border-deep/10 bg-cream p-4">
          <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-water-deep" />
          <div>
            <p className="text-sm font-semibold text-deep">
              Horário de atendimento
            </p>
            <p className="mt-0.5 text-sm text-muted">
              {site.openingHours || "Em breve"}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-2xl border border-deep/10 bg-cream p-4">
          <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-water-deep" />
          <div>
            <p className="text-sm font-semibold text-deep">
              Área de atendimento
            </p>
            <p className="mt-0.5 text-sm text-muted">
              {site.region || "Consulte pelo WhatsApp"}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-water-deep">
        Dúvidas frequentes
      </p>

      <div className="mt-4 space-y-3">
        {faqs.map((faq, index) => {
          const expanded = openIndex === index;
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
                id={`info-faq-button-${index}`}
                aria-expanded={expanded}
                aria-controls={`info-faq-panel-${index}`}
                onClick={() => setOpenIndex(expanded ? null : index)}
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
                id={`info-faq-panel-${index}`}
                role="region"
                aria-labelledby={`info-faq-button-${index}`}
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
    </>
  );
}
