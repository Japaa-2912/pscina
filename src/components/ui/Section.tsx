import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  className?: string;
  container?: boolean;
  children: ReactNode;
}

export function Section({ id, className = "", container = true, children }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 lg:py-32 ${className}`}>
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}