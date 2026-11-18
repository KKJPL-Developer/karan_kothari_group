"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Container from "@/components/Container";

// `[--em-color:…]` sets the colour of italic accent phrases inside headings.
const TONE = {
  white: "bg-white text-ink",
  ivory: "bg-ivory text-ink",
  beige: "bg-beige text-ink",
  dark: "bg-navy-dark text-white [--em-color:var(--color-gold-light)]",
  maroon: "bg-maroon-dark text-white [--em-color:var(--color-gold-pale)]",
} as const;

// Light reading surfaces stay clean; tinted and dark surfaces carry texture.
const TONE_PATTERN = {
  white: null,
  ivory: null,
  beige: "bg-dot-grid text-maroon/8",
  dark: "bg-jali text-white/5",
  maroon: "bg-jali text-gold-light/9",
} as const;

const SPACE = {
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24 lg:py-28",
} as const;

export default function Section({
  children,
  id,
  tone = "white",
  space = "lg",
  bordered = false,
  pattern,
  reveal = true,
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: keyof typeof TONE;
  space?: keyof typeof SPACE;
  bordered?: boolean;
  /** Override the tone's default texture on/off. */
  pattern?: boolean;
  /** Fade + rise into view the first time the section scrolls into the viewport. */
  reveal?: boolean;
  className?: string;
  containerClassName?: string;
}) {
  const patternClass = TONE_PATTERN[tone];
  const showPattern = pattern ?? Boolean(patternClass);

  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(!reveal);

  useEffect(() => {
    if (!reveal) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reveal]);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative isolate overflow-clip ${TONE[tone]} ${SPACE[space]} ${bordered ? "border-t border-line" : ""} ${
        reveal ? `reveal ${visible ? "reveal-visible" : ""}` : ""
      } ${className}`}
    >
      {showPattern && (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 -z-10 ${patternClass ?? "bg-dot-grid text-ink/5"}`}
        />
      )}
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
