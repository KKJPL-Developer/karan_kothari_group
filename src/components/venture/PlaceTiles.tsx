import type { ReactNode } from "react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { MapPinIcon } from "@/components/icons";

/** Showrooms / sites as a grid of place tiles. */
export default function PlaceTiles({
  eyebrow,
  title,
  description,
  itemLabel,
  places,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  itemLabel: string;
  places: string[];
}) {
  return (
    <Section tone="ivory">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <ul className="stagger mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {places.map((place, index) => (
          <li
            key={place}
            className="group relative overflow-hidden rounded-sm border border-line bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_40px_-24px_rgba(31,39,64,0.45)]"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon-soft text-maroon transition-colors duration-300 group-hover:bg-maroon group-hover:text-white">
                <MapPinIcon className="h-4 w-4" />
              </span>
              <span aria-hidden className="font-serif text-2xl leading-none text-gold/40 italic">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <span className="mt-5 block text-[0.65rem] font-semibold tracking-[0.18em] text-ink-faint uppercase">
              {itemLabel}
            </span>
            <span className="mt-1 block text-base font-semibold text-ink">{place}</span>
            <span
              aria-hidden
              className="bg-brand-gradient absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
