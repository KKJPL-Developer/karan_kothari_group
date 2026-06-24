"use client";

import Link from "next/link";
import { useState, useRef } from "react";

const businesses = [
  {
    title: "Karan Kothari Jewellers",
    description: "Luxury Jewellery & Precious Gems",
    badge: "Luxury Jewellery",
    headline: ["Crafting Timeless", "Jewellery."],
    body: "For over two decades, KK Jewellery has created fine ornaments, diamond collections, and bespoke pieces that celebrate life's most precious moments.",
  },
  {
    title: "True Value Spaces",
    description: "Industrial Warehousing Solutions",
    badge: "Industrial Logistics",
    headline: ["Warehousing", "at Scale."],
    body: "Strategically located, modern warehousing facilities equipped for cold chain, bulk storage, and last-mile logistics operations across India.",
  },
  {
    title: "Karan Kothari Business Parks",
    description: "Premium Commercial Infrastructure",
    badge: "Commercial Real Estate",
    headline: ["Premium Workspaces", "for India."],
    body: "World-class business parks and commercial complexes designed for the enterprise businesses of today and tomorrow.",
  },
];

const DEFAULT = {
  badge: "KK GROUP",
  headline: ["Building Value.", "Creating Legacies."],
  body: "From luxury jewellery and industrial warehousing to premium business parks, KK Group develops businesses that create enduring value across generations.",
};

export default function CTABanner() {
  const [active, setActive] = useState<number | null>(null);
  const [displayed, setDisplayed] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const switchTo = (idx: number | null) => {
    if (timer.current) clearTimeout(timer.current);
    setVisible(false);
    timer.current = setTimeout(() => {
      setDisplayed(idx);
      setVisible(true);
    }, 160);
  };

  const content = displayed !== null ? businesses[displayed] : DEFAULT;

  return (
    <section className="relative overflow-hidden bg-[#F3F2EF]">
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* ── Left: dynamic content ── */}
          <div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C] bg-[#C9A84C]/5 px-4 py-2"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.16s ease",
              }}
            >
              <div className="h-2 w-2 rounded-full bg-[#C9A84C]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#977109]">
                {content.badge}
              </span>
            </div>

            {/* Headline + body — fade + slide on swap */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
            >
              <h2
                className="mt-8 text-5xl leading-[0.95] text-[#1D2433] md:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {content.headline[0]}
                <br />
                {content.headline[1]}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#6B7280]">
                {content.body}
              </p>
            </div>

            {/* Buttons — always visible */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#C9A84C] px-8 py-4 font-medium text-[#111827] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(201,168,76,0.35)]"
              >
                Talk To Us →
              </Link>
              <Link
                href="/companies"
                className="rounded-full border border-[#1D2433]/20 px-8 py-4 text-[#1D2433] transition-all duration-300 hover:border-[#C9A84C]/60 hover:text-[#C9A84C]"
              >
                View Ventures
              </Link>
            </div>

          </div>

          {/* ── Right: business cards ── */}
          <div className="space-y-5">
            {businesses.map((item, i) => (
              <div
                key={item.title}
                onMouseEnter={() => { setActive(i); switchTo(i); }}
                onMouseLeave={() => { setActive(null); switchTo(null); }}
                className={`cursor-pointer rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  active === i
                    ? "border-[#C9A84C]/50 bg-white shadow-lg shadow-[#C9A84C]/10"
                    : "border-[#E4E3DE] bg-white/60 hover:border-[#C9A84C]/30 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className="text-2xl text-black"
                      style={{ fontFamily: "sans sarif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-500">{item.description}</p>
                  </div>
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      active === i
                        ? "border-[#C9A84C] bg-[#C9A84C] text-[#111827]"
                        : "border-[#C9A84C]/20 text-[#C9A84C]"
                    }`}
                  >
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
