import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Careers | Karan Kothari Group",
  description:
    "Build your career with the KK Group. Explore opportunities across jewellery, warehousing, and business parks.",
};

const openings = [
  { role: "Master Jeweller", dept: "KK Jewellery", type: "Full-time", location: "Mumbai" },
  { role: "Sales Executive", dept: "KK Jewellery", type: "Full-time", location: "Ahmedabad" },
  { role: "Operations Manager", dept: "KK Warehousing", type: "Full-time", location: "Pune" },
  { role: "Logistics Coordinator", dept: "KK Warehousing", type: "Full-time", location: "Mumbai" },
 
];

const benefits = [
  {
    title: "Competitive Compensation",
    description: "Industry-leading salary packages with performance-linked bonuses.",
  },
  {
    title: "Learning & Growth",
    description: "Structured learning paths, mentorship, and cross-functional exposure.",
  },
  {
    title: "Diverse Industry",
    description: "Work across jewellery, logistics, and real estate — rare and enriching experience.",
  },
  {
    title: "Strong Culture",
    description: "A workplace built on respect, ambition, and a commitment to excellence.",
  },
];

const pillars = [
  { label: "Growth", text: "We invest in our people's careers as seriously as we invest in our businesses." },
  { label: "Integrity", text: "Every team member is expected to uphold the highest standards of conduct." },
  { label: "Innovation", text: "We encourage fresh thinking and reward those who challenge the status quo." },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col">

      {/* ── Page Hero ── */}
      <section className="bg-[#5e584a] px-6 pb-20 pt-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            Join the team
          </p>
          <h1
            className="mt-4 max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Build Your Career With Us
          </h1>
          <p className="mt-5 max-w-lg text-base text-white">
            We are always looking for talented, driven individuals who want to be part of a group that is building India&apos;s future across three vital industries.
          </p>
        </div>
      </section>

      {/* ── Culture pillars ── */}
      <section className="bg-[#FAFAF8] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Our culture</p>
            <h2
              className="mt-3 text-4xl font-semibold text-[#0E0F11]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What it means to work here
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.label} className="rounded-2xl border border-[#E4E3DE] bg-white p-8">
                <div className="mb-4 h-px w-10 bg-[#C9A84C]" />
                <h3
                  className="text-2xl font-semibold text-[#0E0F11]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {p.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-[#F3F2EF] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Why join us</p>
            <h2
              className="mt-3 text-4xl font-semibold text-[#0E0F11]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What We Offer
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-[#E4E3DE] bg-white p-6">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#C9A84C]/10">
                  <span className="h-2 w-2 rounded-full bg-[#C9A84C]" />
                </span>
                <h3 className="text-sm font-semibold text-[#0E0F11]">{b.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open positions ── */}
      <section className="bg-[#FAFAF8] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Current openings</p>
            <h2
              className="mt-3 text-4xl font-semibold text-[#0E0F11]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Open Positions
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            {openings.map((job) => (
              <div
                key={`${job.role}-${job.dept}`}
                className="flex flex-col gap-3 rounded-xl border border-[#E4E3DE] bg-white px-6 py-4 transition-colors hover:border-[#C9A84C]/40 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-[#0E0F11]">{job.role}</p>
                  <p className="mt-0.5 text-xs text-[#6B7280]">{job.dept} · {job.location}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-[#E4E3DE] bg-[#F3F2EF] px-3 py-1 text-xs text-[#6B7280]">
                    {job.type}
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-medium text-[#C9A84C] hover:underline"
                  >
                    Apply →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#6B7280]">
            Don&apos;t see your role? Send your CV to{" "}
            <a href="mailto:careers@karankotharigroup.com" className="text-[#C9A84C] hover:underline">
              careers@karankotharigroup.com
            </a>
          </p>
        </div>
      </section>

  
    </div>
  );
}
