import Link from "next/link";

type Variant = "primary" | "navy" | "outline" | "white";
type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 font-[family-name:var(--font-display)] font-bold text-[0.95rem] rounded-full px-7 py-3.5 transition-all duration-200 select-none";

const variants: Record<Variant, string> = {
  // teal pill — the primary action
  primary:
    "bg-teal-deep text-white hover:bg-teal active:translate-y-px shadow-[0_8px_20px_-8px_rgba(21,128,143,0.7)]",
  // navy pill
  navy: "bg-navy text-white hover:bg-navy-700 active:translate-y-px shadow-[0_8px_20px_-10px_rgba(0,48,64,0.7)]",
  // outline on light
  outline: "border border-line-2 text-navy hover:border-teal hover:text-teal-deep bg-white",
  // white pill on navy/teal sections
  white: "bg-white text-navy hover:bg-teal-tint active:translate-y-px shadow-[0_8px_20px_-10px_rgba(0,0,0,0.4)]",
};

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (/^https?:|^tel:|^mailto:/.test(href)) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
