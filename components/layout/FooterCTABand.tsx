"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Add or swap images here per route.
// type "photo" = real image fills right panel with gold fade
// type "float" = transparent PNG floats in the centre (jewellery)
const PAGE_CONFIG: Record<string, { src: string; type: "photo" | "float" }> = {
  "/":          { src: "/hero/image_5.png",  type: "photo" },
  "/about":     { src: "/images/image_3.png",       type: "photo" },
  "/companies": { src: "/hero/image_4.png",        type: "photo" },
  "/careers":   { src: "/hero/hero-2.jpg",        type: "photo" },
  "/contact":   { src: "/hero/hero-1.jpg",        type: "photo" },
};

export default function FooterCTABand() {
  const pathname = usePathname();
  const config = PAGE_CONFIG[pathname] ?? null;

  return (
    <div className="relative min-h-35 overflow-hidden bg-[#C9A84C] px-8">

      {/* Subtle shimmer */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_15%,rgba(255,255,255,0.10)_50%,transparent_85%)]" />

      {/* ── Photo panel (right side with gold fade) ── */}
      {config?.type === "photo" && (
        <>
          <div className="absolute inset-y-0 right-0 hidden w-[58%] md:block">
            <Image
              src={config.src}
              alt=""
              fill
              sizes="58vw"
              className="object-cover object-center"
            />
          </div>
          {/* Gold-to-transparent left-edge fade */}
          <div className="pointer-events-none absolute inset-y-0 right-[28%] hidden w-[32%] bg-linear-to-r from-[#C9A84C] to-transparent md:block" />
        </>
      )}

      {/* ── Floating transparent PNG (centred, bottom-anchored) ── */}
      {config?.type === "float" && (
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-end md:flex">
          <Image
            src={config.src}
            alt=""
            width={220}
            height={176}
            className="h-44 w-auto object-contain object-bottom drop-shadow-[0_10px_28px_rgba(0,0,0,0.28)]"
          />
        </div>
      )}

      {/* ── Content row ── */}
      <div className="relative mx-auto flex min-h-35 max-w-7xl items-center justify-between gap-8">

        {/* Left: text */}
        <div className="flex items-center gap-5">
          <div className="h-12 w-px shrink-0 bg-[#101828]/20" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#101828]/60">
              Let&apos;s Work Together
            </p>
            <h2
              className="mt-1 text-3xl text-[#101828]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Ready to partner with the KK Group?
            </h2>
          </div>
        </div>

        {/* Right: button */}
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#101828] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1"
        >
          Get in Touch
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

      </div>
    </div>
  );
}
