"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModalOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  return (
    <>
      {/* ── Full-screen video hero ── */}
      <section className="relative mt-18.5 h-[calc(100vh-74px)] w-full overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-top"
        >
          <source src="/videos/Seedance 2_0.mp4" type="video/mp4" />
        </video>

        {/* Bottom-up dark gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

        {/* ── Hero content ── */}
        <div className="absolute bottom-20 left-8 z-10 max-w-3xl md:bottom-24 md:left-16">
          {/* Sector badges */}
          <div className="mb-6 flex flex-wrap gap-2">
            {["Fine Jewellery", "Industrial Warehousing", "Business Parks"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Headline — Cormorant Garamond display font */}
          <h1
            className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Crafting Legacy<br />Across Industries
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            From fine jewellery to industrial warehousing and world-class business parks — the Karan Kothari Group builds enduring value across India.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/companies"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#C9A84C] px-7 text-sm font-semibold text-[#101828] transition-all duration-200 hover:bg-[#A07830]"
            >
              Explore Our Businesses
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* ── Play video button ── */}
        <div className="absolute bottom-20 right-8 z-10 md:bottom-24 md:right-16">
          <button
            onClick={() => setModalOpen(true)}
            className="group flex items-center gap-3 text-white"
          >
            <span className="text-sm font-medium tracking-wide">Play Video</span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 translate-x-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
          <div className="h-10 w-px animate-pulse bg-linear-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* ── Video modal ── */}
      {modalOpen && (
        <div
          ref={modalRef}
          onClick={(e) => e.target === modalRef.current && setModalOpen(false)}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-5xl px-4">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              aria-label="Close video"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
            <video controls autoPlay className="w-full rounded-2xl shadow-2xl">
              <source src="/videos/Seedance 2_0.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}
