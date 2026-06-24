import Link from "next/link";
import Image from "next/image";

const verticals = [
  {
    num: "1",
    id: "jewellery",
    sector: "Karan Kothari Jewellers",
    headline: "Where Craftsmanship\nMeets Heritage",
    description:
      "Timeless designs, curated collections, and bespoke pieces that celebrate life's precious moments.",
    facts: ["Custom Designs", "Diamond Certified", "Heritage Collection"],
    cta: "Explore Fine Jewellery",
    href: "/companies#jewellery",
    image: "/hero/hero-1.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path d="M6 3h12l4 6-10 12L2 9l4-6z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 9h20M12 3L8 9l4 12 4-12-4-6z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "2",
    id: "warehousing",
    sector: "True Value Spaces",
    headline: "Industrial-Grade\nStorage at Scale",
    description:
      "Strategically located facilities with advanced infrastructure for efficient storage and logistics.",
    facts: ["Multi-city Presence", "Cold Chain Capable", "24/7 Operations"],
    cta: "Explore Industrial Logistics",
    href: "/companies#warehousing",
    image: "/hero/hero-2.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "3",
    id: "business-parks",
    sector: "Karan Kothari Business park",
    headline: "Premium Workspaces\nfor India's Growth Story",
    description:
      "World-class business parks and commercial complexes designed for the enterprises of today and tomorrow.",
    facts: ["Grade-A Offices", "Modern Amenities", "Sustainable Design"],
    cta: "Explore Real Estate",
    href: "/companies#business-parks",
    image: "/hero/hero-2.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <rect x="3" y="3" width="7" height="7" rx="1" strokeLinecap="round" />
        <rect x="14" y="3" width="7" height="7" rx="1" strokeLinecap="round" />
        <rect x="3" y="14" width="7" height="7" rx="1" strokeLinecap="round" />
        <rect x="14" y="14" width="7" height="7" rx="1" strokeLinecap="round" />
      </svg>
    ),
  },
];

const factIconPath =
  "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z";

export default function BusinessVerticals() {
  return (
    <section className="bg-[#FAFAF8] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* ── Section header: two-column ── */}
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left */}
          <div className="max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Our Portfolio
            </p>
            <h2
              className="mt-4 text-4xl font-semibold leading-tight text-[#0E0F11] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Our Ventures.<br />
              One{" "}
              <em className="not-italic text-[#C9A84C]" style={{ fontStyle: "italic" }}>
                Vision.
              </em>
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="max-w-xs text-sm leading-relaxed text-[#6B7280] md:text-right">
              Diverse strengths. Unified by trust, craftsmanship, and a commitment to creating lasting value across industries.
            </p>
            <Link
              href="/companies"
              className="flex items-center gap-2 text-sm font-semibold text-[#0E0F11] transition-colors hover:text-[#C9A84C]"
            >
              View all Ventures
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid gap-6 md:grid-cols-3">
          {verticals.map((v) => (
            <Link
              key={v.id}
              href={v.href}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#E4E3DE] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C9A84C]/8 hover:ring-[#C9A84C]/30"
            >
              {/* ── Image area ── */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.sector}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  loading="eager"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient overlay so number is readable */}
                <div className="absolute inset-0 bg-linear-to-t from-[#101828]/60 via-[#101828]/10 to-transparent" />

                {/* Number — bottom left of image */}
                <span
                  className="absolute bottom-3 left-4 text-4xl font-semibold leading-none text-[#C9A84C] drop-shadow-md"
                  style={{ fontFamily: "sarif" }}
                >
                  {v.num}
                </span>

                {/* Icon badge — top right */}
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#C9A84C] shadow-md backdrop-blur-sm">
                  {v.icon}
                </span>
              </div>

              {/* ── Card body ── */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                {/* Sector eyebrow */}
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                  {v.sector}
                </p>

                {/* Headline */}
                <h3
                  className="text-2xl font-semibold leading-snug text-[#0E0F11]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {v.headline.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < v.headline.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#6B7280]">{v.description}</p>

                {/* Feature list */}
                <ul className="flex flex-col gap-2">
                  {v.facts.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[#374151]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#E4E3DE] bg-[#FAFAF8]">
                        <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5">
                          <path d="M1.5 5l2.5 2.5 4.5-4" stroke="#C9A84C" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA link — pushed to bottom */}
                <div className="mt-auto flex items-center gap-2 pt-2 text-sm font-semibold text-[#0E0F11] transition-colors group-hover:text-[#C9A84C]">
                  {v.cta}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* ── Gold bottom accent line ── */}
              <div className="h-0.5 w-full bg-[#C9A84C] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="h-px w-full bg-[#C9A84C]/30" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
