import Image from "next/image";
import { milestones } from "@/lib/data";

/**
 * Past / present / future on a horizontal rail (vertical on mobile). The dusk
 * rail draws itself in when the surrounding Section reveals.
 */
export default function MilestoneRail({ withImages = false }: { withImages?: boolean }) {
  return (
    <div className="relative mt-12">
      <div aria-hidden className="absolute top-1.5 right-0 left-0 hidden h-px bg-line sm:block" />
      <div
        aria-hidden
        className="draw-x bg-brand-gradient absolute top-1.5 right-0 left-0 hidden h-px sm:block"
      />
      <div aria-hidden className="absolute top-0 bottom-0 left-1.5 w-px bg-line sm:hidden" />

      <ol className="stagger grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        {milestones.map((milestone, index) => (
          <li key={milestone.period} className="group relative pl-9 sm:pt-10 sm:pl-0">
            <span
              aria-hidden
              className="absolute top-0 left-0 h-3 w-3 rotate-45 bg-gold transition-all duration-500 group-hover:scale-125 group-hover:bg-maroon"
            />

            {withImages && (
              <div className="relative mb-5 aspect-4/3 w-full overflow-hidden rounded-sm border border-line">
                <Image
                  src={milestone.image}
                  alt={milestone.imageAlt}
                  fill
                  sizes="(min-width: 640px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            )}

            <div className="flex items-baseline gap-3">
              <span
                aria-hidden
                className="font-serif text-3xl leading-none text-gold/50 italic transition-colors duration-500 group-hover:text-maroon"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                {milestone.period}
              </p>
            </div>
            <h3 className="mt-3 text-h3 font-semibold text-ink">{milestone.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{milestone.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
