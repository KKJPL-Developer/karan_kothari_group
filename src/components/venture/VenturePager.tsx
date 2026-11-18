import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { businesses, type Business } from "@/lib/data";

function PagerCard({ business, direction }: { business: Business; direction: "prev" | "next" }) {
  const next = direction === "next";

  return (
    <Link
      href={business.detailPath}
      className={`group relative isolate flex min-h-40 items-end overflow-hidden rounded-sm p-6 text-white md:min-h-52 md:p-8 ${
        next ? "sm:justify-end sm:text-right" : ""
      }`}
    >
      <Image
        src={business.image}
        alt=""
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="-z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-t from-navy-deep/90 via-navy-deep/60 to-navy-deep/30 transition-colors duration-500 group-hover:from-maroon-deep/90 group-hover:via-maroon-deep/60"
      />
      <span>
        <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-light uppercase sm:inline-flex">
          {!next && (
            <span aria-hidden className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
          )}
          {next ? "Next venture" : "Previous venture"}
          {next && (
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          )}
        </span>
        <span className="mt-2 block text-h3 font-semibold">{business.name}</span>
        <span className="mt-1 block text-sm text-white/70">{business.heroLabel}</span>
      </span>
    </Link>
  );
}

/** Previous / next venture at the foot of each venture page, wrapping around the list. */
export default function VenturePager({ slug }: { slug: string }) {
  const index = businesses.findIndex((business) => business.slug === slug);
  const prev = businesses[(index - 1 + businesses.length) % businesses.length];
  const next = businesses[(index + 1) % businesses.length];

  return (
    <nav aria-label="More ventures" className="bg-ivory py-12 md:py-16">
      <Container className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <PagerCard business={prev} direction="prev" />
        <PagerCard business={next} direction="next" />
      </Container>
    </nav>
  );
}
