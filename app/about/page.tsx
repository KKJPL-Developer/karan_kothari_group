import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/home/CTABanner";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Karan Kothari Group",
  description:
    "Learn about Karan Kothari Group — our 25-year history, mission, values, and the leadership driving India's diversified conglomerate.",
};

const timeline = [
  {
    year: "2000",
    event:
      "Karan Kothari Group founded, establishing its first business venture.",
  },
  {
    year: "2005",
    event:
      "KK Jewellery launched — bringing precision craftsmanship and heritage designs to customers.",
  },
  {
    year: "2012",
    event:
      "KK Warehousing established, expanding into industrial-grade storage and logistics.",
  },
  {
    year: "2018",
    event:
      "KK Business Parks launched, entering premium commercial real estate.",
  },
  {
    year: "2024",
    event:
      "Group assets cross ₹500Cr+ with 2,000+ team members across all three verticals.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* ── Page Hero ── */}
      <section className="bg-[#101828] px-6 pb-20 pt-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
            About the Group
          </p>
          <h1
            className="mt-4 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "sarif" }}
          >
            Building India&apos;s Future, One Venture at a Time
          </h1>
          <p className="mt-5 max-w-xl text-base text-zinc-400">
            For over 25 years, Karan Kothari Group has been a trusted name in
            jewellery, warehousing, and commercial real estate across India.
          </p>
        </div>
      </section>

      {/* 
    <section className="bg-[#FAFAF8] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">The people behind the group</p>
            <h2
              className="mt-3 text-4xl font-semibold text-[#0E0F11] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Three Generations of Leadership
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-[#6B7280]">
              Rooted in values, driven by trust — the Kothari family has been building enduring businesses and lasting relationships across generations.
            </p>
          </div>

          <div className="mb-16 flex justify-center">
            <div className="w-full max-w-xs overflow-hidden rounded-2xl border-2 border-[#C9A84C]/50 bg-white shadow-xl shadow-[#C9A84C]/10">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/Shri Maganmal Ji Kothari - Founder KKJPL.jpg"
                  alt="Shri Maganmal Ji Kothari — Founder"
                  fill
                  sizes="320px"
                  loading="eager"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#101828]/70 via-transparent to-transparent" />
              </div>
              <div className="bg-linear-to-b from-[#C9A84C]/8 to-white px-6 py-5 text-center">
                <span className="inline-block rounded-full bg-[#C9A84C]/15 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-[#A07830]">
                  Founder, KKJPL
                </span>
                <h3
                  className="mt-2 text-2xl font-semibold text-[#0E0F11]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Shri Maganmal Ji Kothari
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6B7280] italic">
                  तीन पिढीयोंसे ग्राहकों के विश्वास की परंपरा
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
               { name: "Narendra Kothari", role: "Director", file: "Narendra Kothari.JPG" },
              { name: "Suresh Kothari",   role: "Director", file: "Suresh kothari.JPG" },
              { name: "Chandra Kothari",  role: "Director", file: "ChandraKothari.jpg" },
              { name: "Mahesh Kothari",   role: "Director", file: "Mahesh kothari.JPG" },
             
              { name: "Nitin Kothari",    role: "Director", file: "Nitin kothari.JPG" },
              { name: "Pradeep Kothari",  role: "Director", file: "Pradeep kothari.jpg" },
              { name: "Karan Kothari",    role: "Director", file: "Karan kothari.JPG" },
              { name: "Ushabh Kothari",   role: "Director", file: "Ushabh kothari.JPG" },
            ].map((person, idx) => (
              <div
                key={person.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.13)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F3F2EF]">
                  <Image
                    src={`/images/${person.file}`}
                    alt={person.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="relative overflow-hidden bg-white px-5 pb-5 pt-4">
             

                  <div className="absolute left-0 right-0 top-0 h-px bg-[#E4E3DE]" />
                  <div className="absolute left-0 top-0 h-px w-12 bg-[#C9A84C]" />

                  <p className="relative mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
                    {person.role}
                  </p>
                  <h3
                    className="relative mt-1.5 text-2xl font-semibold leading-tight text-[#0E0F11]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {person.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section> */}

      {/* ── Mission & Vision ── */}
      <section className="bg-[#FAFAF8] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[#E4E3DE] bg-white p-10">
              <div className="mb-4 h-px w-10 bg-[#C9A84C]" />
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Our Mission
              </p>
              <h2
                className="mt-3 text-3xl  text-[#0E0F11]"
                style={{ fontFamily: "sarif" }}
              >
                To create lasting value across India&apos;s most vital sectors.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
                We pursue excellence in every business we operate — driven not
                by short-term gains but by a deep commitment to building
                institutions that endure, create employment, and serve
                communities for generations.
              </p>
            </div>
            <div className="rounded-2xl border border-[#C9A84C]/30 bg-[#C9A84C]/5 p-10">
              <div className="mb-4 h-px w-10 bg-[#C9A84C]" />
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Our Vision
              </p>
              <h2
                className="mt-3 text-3xl font-semibold text-[#0E0F11]"
                style={{ fontFamily: "sarif" }}
              >
                To be India&apos;s most trusted diversified group by 2030.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
                Through disciplined expansion, ethical conduct, and unwavering
                focus on quality, we aim to be the partner of choice — for
                customers, partners, employees, and the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-[#F3F2EF] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              Our Journey
            </p>
            <h2
              className="mt-3 text-4xl font-semibold text-[#0E0F11] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              25 Years of Milestones
            </h2>
          </div>

          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-[#E4E3DE]" />

            <div className="flex flex-col gap-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  {/* Dot */}
                  <span className="absolute -left-5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#C9A84C] bg-[#F3F2EF]" />
                  <div className="rounded-xl border border-[#E4E3DE] bg-white px-6 py-5">
                    <p
                      className="text-2xl font-semibold text-[#C9A84C]"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {item.year}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  

   
    </div>
  );
}
