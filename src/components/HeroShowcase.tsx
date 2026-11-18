"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Container from "@/components/Container";

export type HeroSlide = {
  src: string;
  alt: string;
  label: string;
  name: string;
  href: string;
};

const INTERVAL_MS = 6500;

/**
 * Full-bleed homepage hero: each venture's photograph crossfades in with a
 * slow Ken Burns zoom, and the bottom tabs double as navigation — the active
 * one fills with a progress bar while it's on screen.
 */
export default function HeroShowcase({
  slides,
  children,
}: {
  slides: HeroSlide[];
  children: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const id = setTimeout(() => setIndex((current) => (current + 1) % slides.length), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index, paused, slides.length]);

  const active = slides[index];

  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-navy-deep text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1400 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover ${i === index ? "animate-ken-burns" : ""}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-navy-deep/95 via-navy-dark/70 to-navy-dark/20" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-deep via-transparent to-transparent" />
        <div className="bg-jali mask-fade-b absolute inset-y-0 left-0 w-1/2 text-white/4" />
      </div>

      <Container className="relative flex flex-1 items-center pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-2xl">{children}</div>
      </Container>

      <div className="relative border-t border-white/10 bg-navy-deep/40 backdrop-blur-md">
        <Container className="flex items-stretch">
          <div className="grid flex-1 grid-cols-3">
            {slides.map((slide, i) => {
              const isActive = i === index;
              return (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${slide.name}`}
                  aria-current={isActive}
                  className="group relative py-4 pr-3 text-left sm:py-5 sm:pr-6"
                >
                  <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-white/15 sm:right-6">
                    {isActive && (
                      <span
                        key={`${index}-${paused}`}
                        className="bg-brand-gradient absolute inset-0 origin-left"
                        style={{
                          animation: paused ? "none" : `slide-progress ${INTERVAL_MS}ms linear forwards`,
                          transform: paused ? "scaleX(1)" : undefined,
                        }}
                      />
                    )}
                  </span>
                  <span
                    className={`font-serif text-lg italic transition-colors ${
                      isActive ? "text-gold-light" : "text-white/40 group-hover:text-white/70"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`mt-1 block text-[0.65rem] font-semibold tracking-[0.18em] uppercase transition-colors sm:text-xs ${
                      isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                    }`}
                  >
                    {slide.label}
                  </span>
                  <span className="mt-0.5 hidden text-xs text-white/50 sm:block">{slide.name}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-5 border-l border-white/10 pl-6 md:flex">
            <Link
              href={active.href}
              className="group/link inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-gold-light uppercase transition-colors hover:text-white"
            >
              <span className="sr-only">Visit </span>
              <span key={active.href} className="animate-rise">
                {active.label}
              </span>
              <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-gold-light hover:text-gold-light"
            >
              {paused ? (
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                  <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                  <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
                </svg>
              )}
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
