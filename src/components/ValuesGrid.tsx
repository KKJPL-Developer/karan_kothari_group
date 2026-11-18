import { PRINCIPLE_ICONS } from "@/components/icons";
import { principles } from "@/lib/data";

/** The Group's principles as glass tiles, for use on a `tone="dark"` Section. */
export default function ValuesGrid() {
  return (
    <div className="stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {principles.map((principle, index) => {
        const Icon = PRINCIPLE_ICONS[principle.icon];
        return (
          <div
            key={principle.title}
            className="group relative overflow-hidden rounded-sm border border-white/10 bg-white/3 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-light/40 hover:bg-white/6"
          >
            <div
              aria-hidden
              className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gold-light/0 blur-3xl transition-colors duration-700 group-hover:bg-gold-light/15"
            />
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-light/40 text-gold-light transition-all duration-500 group-hover:rotate-12 group-hover:border-gold-light group-hover:bg-gold-light group-hover:text-navy-deep">
                <Icon className="h-5 w-5" />
              </span>
              <span
                aria-hidden
                className="font-serif text-4xl leading-none text-white/15 italic transition-colors duration-500 group-hover:text-gold-light/70"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-7 text-base font-semibold text-white">{principle.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{principle.text}</p>
          </div>
        );
      })}

      <div className="relative flex flex-col justify-end overflow-hidden rounded-sm bg-linear-to-br from-maroon to-maroon-deep p-7">
        <div aria-hidden className="bg-jali absolute inset-0 text-gold-light/10" />
        <blockquote className="relative font-serif text-2xl leading-snug text-white [--em-color:var(--color-gold-pale)] md:text-[1.75rem]">
          Trust, earned <em>one relationship at a time.</em>
        </blockquote>
      </div>
    </div>
  );
}
