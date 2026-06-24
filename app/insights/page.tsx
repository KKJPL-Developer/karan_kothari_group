import type { Metadata } from "next";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Insights & News | Karan Kothari Group",
  description:
    "Latest news, announcements, and industry insights from Karan Kothari Group.",
};

const articles = [
  {
    id: "warehousing-expansion",
    category: "KK Warehousing",
    title: "KKG Expands Warehousing Operations to New City",
    excerpt:
      "Karan Kothari Group announces the opening of its sixth warehousing facility, expanding its logistics footprint to serve more businesses across India.",
    date: "June 2026",
    featured: true,
  },
  {
    id: "diamond-collection-2025",
    category: "KK Jewellery",
    title: "KK Jewellery Launches Diamond Collection 2025",
    excerpt:
      "The new collection features 200 handcrafted designs inspired by Indian heritage and contemporary aesthetics.",
    date: "March 2026",
    featured: false,
  },
  {
    id: "green-building",
    category: "KK Business Parks",
    title: "KK Business Parks Achieves Green Building Certification",
    excerpt:
      "Our flagship business park has received a LEED Gold certification for sustainable design, energy efficiency, and environmental responsibility.",
    date: "January 2026",
    featured: false,
  },
  {
    id: "group-milestone",
    category: "Group",
    title: "KKG Crosses ₹500Cr in Group Assets",
    excerpt:
      "Karan Kothari Group marks a major financial milestone, reflecting 25 years of disciplined growth and value creation.",
    date: "December 2025",
    featured: false,
  },
  {
    id: "jewellery-awards",
    category: "KK Jewellery",
    title: "KK Jewellery Recognised at India Gem & Jewellery Awards",
    excerpt:
      "Our design team was honoured for excellence in craftsmanship at the annual India Gem & Jewellery Awards 2025.",
    date: "November 2025",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "KK Jewellery": "bg-amber-50 text-amber-700 border-amber-200",
  "KK Warehousing": "bg-blue-50 text-blue-700 border-blue-200",
  "KK Business Parks": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Group: "bg-zinc-100 text-zinc-600 border-zinc-200",
};

export default function InsightsPage() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="flex flex-col">

      {/* ── Page Hero ── */}
      <section className="bg-[#101828] px-6 pb-20 pt-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            News &amp; updates
          </p>
          <h1
            className="mt-4 max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Insights &amp; News
          </h1>
          <p className="mt-5 max-w-lg text-base text-zinc-400">
            Stay updated with the latest announcements, milestones, and industry developments from the Karan Kothari Group.
          </p>
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="bg-[#FAFAF8] px-6 py-20">
        <div className="mx-auto max-w-7xl">

          {/* Featured article */}
          {featured && (
            <div className="mb-12 rounded-2xl border border-[#E4E3DE] bg-white p-8 md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        categoryColors[featured.category] ?? "bg-zinc-100 text-zinc-600 border-zinc-200"
                      }`}
                    >
                      {featured.category}
                    </span>
                    <span className="text-xs text-[#6B7280]">{featured.date}</span>
                    <span className="rounded-full bg-[#C9A84C]/15 px-2.5 py-0.5 text-xs font-medium text-[#A07830]">
                      Featured
                    </span>
                  </div>
                  <h2
                    className="text-3xl font-semibold leading-snug text-[#0E0F11] md:text-4xl"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">{featured.excerpt}</p>
                  <button className="mt-6 text-sm font-medium text-[#C9A84C] hover:underline">
                    Read more →
                  </button>
                </div>
                <div className="h-px w-full bg-[#E4E3DE] md:h-40 md:w-px" />
                <div className="flex flex-col gap-2 md:w-48">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Quick facts</p>
                  <p className="text-xs text-[#6B7280]">Published: {featured.date}</p>
                  <p className="text-xs text-[#6B7280]">Category: {featured.category}</p>
                </div>
              </div>
            </div>
          )}

          {/* Article grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((article) => (
              <div
                key={article.id}
                className="flex flex-col gap-4 rounded-xl border border-[#E4E3DE] bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                      categoryColors[article.category] ?? "bg-zinc-100 text-zinc-600 border-zinc-200"
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-[#6B7280]">{article.date}</span>
                </div>
                <h3
                  className="text-lg font-semibold leading-snug text-[#0E0F11]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {article.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#6B7280]">{article.excerpt}</p>
                <button className="mt-auto text-left text-xs font-medium text-[#C9A84C] hover:underline">
                  Read more →
                </button>
              </div>
            ))}
          </div>

          {/* Newsletter strip */}
          <div className="mt-16 flex flex-col items-center gap-6 rounded-2xl bg-[#101828] px-8 py-12 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <h3
                className="text-2xl font-semibold text-white md:text-3xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Stay in the know
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Get the latest news and announcements from the KK Group delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full max-w-sm items-center gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20"
              />
              <button className="shrink-0 rounded-xl bg-[#C9A84C] px-5 py-3 text-sm font-semibold text-[#101828] transition-colors hover:bg-[#A07830]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
