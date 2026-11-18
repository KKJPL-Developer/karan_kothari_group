import Link from "next/link";
import type { ReactNode } from "react";

export default function TextLink({
  href,
  children,
  external = false,
  tone = "light",
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  tone?: "light" | "dark";
  className?: string;
}) {
  const classes = `group/link inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase transition-colors ${
    tone === "dark" ? "text-gold-light hover:text-white" : "text-gold hover:text-maroon"
  } ${className}`;

  const content = (
    <>
      <span className="relative">
        {children}
        <span
          aria-hidden
          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover/link:scale-x-100"
        />
      </span>
      <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1">
        →
      </span>
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
