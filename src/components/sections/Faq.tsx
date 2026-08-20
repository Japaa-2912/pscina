import { useState } from "react";
import { faqs } from "../../data/faqs";
import { ChevronDownIcon } from "../ui/icons";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-white">
      <SectionHeading
        eyebrow="Dúvidas frequentes"
        title="Perguntas que recebemos com frequência"
        description="Se a sua dúvida não estiver aqui, é só chamar no WhatsApp."
      />

      <div className="mx-auto mt-10 max-w-3xl space-y-3 sm:mt-12">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <Reveal key={faq.question} delay={index * 40}>
              <div
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  open
                    ? "border-water/40 bg-water-50"
                    : "border-deep/10 bg-cream/60 hover:border-deep/20"
                }`}
              >
                <button
                  type="button"
                  id={`faq-button-${index}`}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="font-display text-base font-semibold text-deep sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-water transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDownIcon />
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={`grid transition-all duration-300 ease-out ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}