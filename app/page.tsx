import type { Metadata } from "next";
import Image from "next/image";
import HeroVideo from "@/components/home/hero-video";
import StatsBar from "@/components/home/StatsBar";
import BusinessVerticals from "@/components/home/BusinessVerticals";
import CTABanner from "@/components/home/CTABanner";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "Karan Kothari Group — Jewellery · Warehousing · Business Parks",
  description:
    "A diversified Indian conglomerate with business interests in fine jewellery, industrial warehousing, and premium business parks.",
};

const valueIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
    <circle cx="12" cy="12" r="3" />
    <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── Video Hero ── */}
      <HeroVideo />

      {/* ── Stats bar ── */}
      <StatsBar />

      {/* ── Business Verticals ── */}
      <BusinessVerticals />

      {/* ── Group Story ── */}
      <section className="bg-[#F3F2EF] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Our Story
            </p>
            <h2
              className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#0E0F11] md:text-5xl"
              style={{ fontFamily: "sarif" }}
            >
              25 Years of<br />Building Real Value
            </h2>
            <div className="mt-3 h-px w-12 bg-[#C9A84C]" />
            <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-[#6B7280]">
              <p>
                Founded on the principles of trust, craftsmanship, and long-term thinking, the Karan Kothari Group has grown from a single business into a diversified conglomerate spanning three vital sectors of the Indian economy.
              </p>
              <p>
                Over 25 years, we have built businesses that stand the test of time — not by following trends, but by understanding the fundamental needs of our customers and communities. From the precision of a handcrafted jewel to the scale of an industrial warehouse, every venture carries the same commitment to excellence.
              </p>
              <p>
                Today, we are a group of over 2,000 people, united by a shared purpose: to build real, lasting value across India.
              </p>
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src="/hero/hero-2.jpg"
              alt="Karan Kothari Group — 25 Years of Excellence"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-[#F3F2EF] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              What drives us
            </p>
            <h2
              className="mt-3 text-4xl font-semibold text-[#0E0F11] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What We Stand For
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#6B7280]">
              Four principles that guide every decision across all our businesses.
            </p>
          </div>

          {/* Card grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group relative overflow-hidden rounded-2xl border border-[#E4E3DE] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A84C]/30 hover:shadow-xl hover:shadow-[#C9A84C]/8"
              >
                {/* Top gold bar — grows from left on hover */}
                <div className="absolute left-0 top-0 h-0.5 w-0 bg-[#C9A84C] transition-all duration-500 group-hover:w-full" />

                {/* Number watermark */}
                <span
                  className="absolute right-4 top-1 select-none text-3xl font-semibold leading-none text-[#C9A84C]"
                  style={{ fontFamily: "sans sarif" }}
                >
                  {String(i + 1).padStart(2)}
                </span>

                {/* Icon */}
                <div className="relative mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9A84C]/10 text-[#C9A84C] transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:text-white">
                  {valueIcons[i]}
                </div>

                {/* Title */}
                <h3
                  className="relative text-2xl font-semibold text-[#0E0F11]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {v.title}
                </h3>

                {/* Description */}
                <p className="relative mt-3 text-sm leading-relaxed text-[#6B7280]">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner />

    </div>
  );
}
