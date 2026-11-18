import { businesses } from "@/lib/data";

/** A slow, looping ribbon of every city the ventures operate in. Pauses on hover. */
export default function LocationsMarquee({ className = "" }: { className?: string }) {
  const cities = Array.from(new Set(businesses.flatMap((business) => business.locations)));
  // Two identical copies; each item carries its own trailing space so the
  // -50% translate lands exactly on the start of the second copy.
  const loop = [...cities, ...cities];

  return (
    <div
      className={`group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] ${className}`}
    >
      <p className="sr-only">Locations: {cities.join(", ")}.</p>
      <ul aria-hidden className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
        {loop.map((city, i) => (
          <li
            key={`${city}-${i}`}
            className="flex items-center gap-10 pr-10 font-serif text-2xl whitespace-nowrap text-white/85 italic md:text-3xl"
          >
            {city}
            <span className="h-1.5 w-1.5 rotate-45 bg-gold-light" />
          </li>
        ))}
      </ul>
    </div>
  );
}
