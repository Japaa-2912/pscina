import type { ReactElement } from "react";
import { whyUsItems } from "../../data/whyUs";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import {
  CheckIcon,
  DropletIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "../ui/icons";

const iconMap: Record<string, (props: { className?: string }) => ReactElement> = {
  sparkle: SparkleIcon,
  check: CheckIcon,
  whatsapp: WhatsAppIcon,
  droplet: DropletIcon,
};

export function WhyUs() {
  return (
    <Section id="diferenciais" className="bg-cream">
      <SectionHeading
        eyebrow="Diferenciais"
        title="Por que escolher a Med's Piscinas?"
      />

      <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
        {whyUsItems.map((item, index) => {
          const Icon = iconMap[item.icon] ?? SparkleIcon;
          return (
            <Reveal key={item.title} delay={index * 70}>
              <div className="group h-full rounded-2xl border border-deep/5 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(10,52,60,0.25)]">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sand-light text-deep transition-colors duration-300 group-hover:bg-sand-deep group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}