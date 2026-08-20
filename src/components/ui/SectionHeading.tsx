import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-sand" : "text-water-deep"
          } ${align === "center" ? "justify-center" : ""}`}
        >
          <span aria-hidden="true" className="h-px w-8 bg-sun" />
          {eyebrow}
          {align === "center" && <span aria-hidden="true" className="h-px w-8 bg-sun" />}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-medium leading-[1.15] text-balance sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-deep"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}