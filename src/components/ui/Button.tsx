import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "accent" | "whatsapp" | "outline" | "light" | "ghost";

interface BaseProps {
  variant?: Variant;
  className?: string;
}

interface ButtonAsButton extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

interface ButtonAsAnchor extends BaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variants: Record<Variant, string> = {
  primary: "bg-deep text-cream hover:bg-deep-800 shadow-sm",
  accent: "bg-sun text-deep hover:bg-sun-dark shadow-sm",
  whatsapp: "bg-wa text-white hover:bg-wa-dark shadow-sm",
  outline: "border border-deep/25 text-deep hover:border-deep hover:bg-deep/5",
  light: "border border-white/35 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost: "text-deep hover:bg-deep/5",
};

export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold sm:text-base transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if ("href" in rest) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal = typeof anchorProps.href === "string" && anchorProps.href.startsWith("http");
    const externalProps = isExternal && !anchorProps.target
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a {...anchorProps} {...externalProps} className={classes}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}