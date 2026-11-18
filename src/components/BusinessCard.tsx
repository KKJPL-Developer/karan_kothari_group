import Image from "next/image";
import Link from "next/link";
import { BUSINESS_ICONS } from "@/components/icons";
import type { Business } from "@/lib/data";

export default function BusinessCard({ business, index }: { business: Business; index: number }) {
  const Icon = BUSINESS_ICONS[business.slug];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-line bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_24px_50px_-24px_rgba(31,39,64,0.45)]">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-ivory">
        <Image
          src={business.image}
          alt={business.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-navy-deep/70 via-navy-deep/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90"
        />
        <span
          aria-hidden
          className="absolute top-4 right-5 font-serif text-3xl text-white/80 italic drop-shadow"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6 pt-9">
        {Icon && (
          <span className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-navy-dark text-gold-light shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
            <Icon className="h-5 w-5" />
          </span>
        )}
        {/* Two-line min-height keeps card titles aligned across the grid, since one
            category label wraps and the others do not. */}
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase sm:min-h-8">
          {business.category}
        </p>
        <h3 className="mt-2 text-h3 font-semibold text-ink transition-colors group-hover:text-maroon">
          <Link href={business.detailPath} className="after:absolute after:inset-0">
            {business.name}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{business.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-gold uppercase">
          Explore venture
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>

      <span
        aria-hidden
        className="bg-brand-gradient absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
      />
    </article>
  );
}
