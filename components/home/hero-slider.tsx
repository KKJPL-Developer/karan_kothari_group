"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/hero/hero-1.jpg",
    tagline: "Infrastructure",
    headline: "Building India's\nFuture, Together.",
  },
  {
    image: "/hero/hero-2.jpg",
    tagline: "Energy",
    headline: "Powering\nSustainable Growth.",
  },
  {
    image: "/hero/hero-3.jpg",
    tagline: "Hospitality",
    headline: "Crafting\nExceptional Experiences.",
  },
  {
    image: "/hero/hero-4.jpg",
    tagline: "Finance",
    headline: "Investing in\nWhat Matters Most.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  function goTo(index: number) {
    if (index === current || transitioning) return;
    setPrev(current);
    setTransitioning(true);
    setCurrent(index);
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 900);
  }

  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background images */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className="absolute inset-0 transition-opacity duration-900 ease-in-out"
          style={{
            opacity: i === current ? 1 : i === prev ? 0 : 0,
            zIndex: i === current ? 1 : i === prev ? 0 : -1,
          }}
        >
          <Image
            src={slide.image}
            alt={slide.tagline}
            fill
            quality={90}
            priority={i === 0}
            className="object-cover"
            unoptimized
          />
        </div>
      ))}

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-6 px-6 text-center max-w-4xl">
        <span
          key={current + "-tag"}
          className="animate-fadeIn inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-widest text-zinc-300 uppercase backdrop-blur-sm"
        >
          {slides[current].tagline} · Karan Kothari Group
        </span>

        <h1
          key={current + "-h1"}
          className="animate-fadeUp text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl whitespace-pre-line"
        >
          {slides[current].headline}
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
          A diversified conglomerate with a presence across infrastructure,
          energy, finance, hospitality, and agriculture.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/companies"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-7 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-100 active:scale-95"
          >
            Explore our companies
          </Link>
          <Link
            href="/about"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 px-7 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 active:scale-95"
          >
            Our story →
          </Link>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group flex items-center"
          >
            <span
              className={`block rounded-full transition-all duration-500 ${
                i === current
                  ? "h-2 w-8 bg-white"
                  : "h-2 w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 right-8 z-20 hidden flex-col items-center gap-1.5 md:flex">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
      </div>
    </section>
  );
}
