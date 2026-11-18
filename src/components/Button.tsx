import Link from "next/link";
import type { ReactNode } from "react";

const VARIANT = {
  primary: "btn-shine bg-gold text-white hover:bg-gold-dark",
  secondary: "border border-line bg-white text-ink hover:border-gold hover:text-gold",
  outlineDark: "border border-white/40 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-ink",
  light: "btn-shine bg-white text-maroon hover:bg-gold-pale",
} as const;

const BASE =
  "group/btn inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg";

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANT;
  external?: boolean;
  arrow?: boolean;
  className?: string;
}) {
  const classes = `${BASE} ${VARIANT[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <span aria-hidden className="transition-transform duration-300 group-hover/btn:translate-x-1">
          →
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
