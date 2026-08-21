import type { ReactElement } from "react";
import { benefits } from "../../data/benefits";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import {
  CheckIcon,
  ClockIcon,
  DropletIcon,
  FlaskIcon,
  SparkleIcon,
  WhatsAppIcon,
  WrenchIcon,
} from "../ui/icons";

const iconMap: Record<string, (props: { className?: string }) => ReactElement> = {
  wrench: WrenchIcon,
  droplet: DropletIcon,
  flask: FlaskIcon,
  whatsapp: WhatsAppIcon,
  clock: ClockIcon,
  check: CheckIcon,
  sparkle: SparkleIcon,
};

export function Benefits() {
  return (
    <section aria-label="Diferenciais" className="bg-white pb-16 sm:pb-20">
      <Container className="relative z-10">
        <Reveal className="-mt-12 sm:-mt-14">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-deep/10 bg-deep/10 shadow-[0_24px_48px_-24px_rgba(10,52,60,0.25)] sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon] ?? SparkleIcon;
              return (
                <div key={benefit.title} className="flex items-start gap-4 bg-white p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand-light text-deep">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-deep">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}