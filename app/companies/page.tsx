import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/home/CTABanner";
import { companies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Businesses | Karan Kothari Group",
  description:
    "Explore KK Group's three business verticals: fine jewellery, industrial warehousing, and premium business parks.",
};

export default function CompaniesPage() {
  return (
    <div className="flex flex-col">

      {/* ── Page Hero ── */}
      <section className="bg-[#101828] px-6 pb-20 pt-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Our Portfolio
          </p>
          <h1
            className="mt-4 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our Business Portfolio
          </h1>
          <p className="mt-5 max-w-xl text-base text-zinc-400">
            Three distinct verticals. One unified vision of excellence, integrity, and long-term value creation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {companies.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vertical sections ── */}
      {companies.map((company, i) => {
        const isReversed = i % 2 !== 0;
        return (
          <section
            key={company.id}
            id={company.id}
            className={`px-6 py-24 ${isReversed ? "bg-[#F3F2EF]" : "bg-[#FAFAF8]"}`}
          >
            <div className="mx-auto max-w-7xl">
              <div
                className={`grid gap-16 md:grid-cols-2 md:items-center ${isReversed ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Content */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                    {company.sector}
                  </p>
                  <h2
                    className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#0E0F11] md:text-5xl"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {company.headline}
                  </h2>
                  <div className="mt-3 h-px w-12 bg-[#C9A84C]" />
                  <p className="mt-6 text-sm leading-relaxed text-[#6B7280]">
                    {company.description}
                  </p>

                  {/* Key capabilities */}
                  <ul className="mt-8 flex flex-col gap-2">
                    {company.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-3 text-sm text-[#0E0F11]">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/15">
                          <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3 text-[#C9A84C]">
                            <path d="M2 6l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {cap}
                      </li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  <div className="mt-10 grid grid-cols-3 gap-4">
                    {company.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl border border-[#E4E3DE] bg-white p-4 text-center">
                        <p
                          className="text-2xl font-semibold text-[#C9A84C]"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {m.value}
                        </p>
                        <p className="mt-1 text-xs text-[#6B7280]">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {company.website ? (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#101828] px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#C9A84C]"
                    >
                      Visit {company.name}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href="/contact"
                      className="mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-[#101828] px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1a2840]"
                    >
                      Enquire about {company.name} →
                    </a>
                  )}
                </div>

                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    loading={i === 0 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                  {/* Sector label overlay */}
                  <div className="absolute bottom-4 left-4 rounded-full bg-[#101828]/80 px-4 py-1.5 text-xs font-medium text-[#C9A84C] backdrop-blur-sm">
                    {company.sector}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

   
    </div>
  );
}
