import Image from "next/image";
import type { ReactNode } from "react";
import CornerFrame from "@/components/decor/CornerFrame";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS_ICONS } from "@/components/icons";
import type { Business } from "@/lib/data";

const FRAME_ACCENT: Record<string, string> = {
  jewellery: "border-maroon/30",
  "business-park": "border-navy/30",
  warehousing: "border-gold/40",
};

/** Opening block of a venture page: story on the left, framed photo + at-a-glance card on the right. */
export default function VentureOverview({
  business,
  title,
  children,
  glance,
}: {
  business: Business;
  title: ReactNode;
  children: ReactNode;
  glance: ReactNode;
}) {
  const Icon = BUSINESS_ICONS[business.slug];

  return (
    <Section tone="white">
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="stagger">
          <SectionHeading
            eyebrow={business.category}
            title={title}
            description={business.description}
          />
          {children}
        </div>

        <div>
          <div className="relative">
            <div
              aria-hidden
              className={`absolute -inset-3 -z-10 translate-x-3 translate-y-3 rounded-sm border md:-inset-4 ${
                FRAME_ACCENT[business.slug] ?? "border-gold/40"
              }`}
            />
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-sm">
              <Image
                src={business.image}
                alt={business.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <CornerFrame className="text-gold-light" />
              {Icon && (
                <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white/80 bg-navy-dark text-gold-light shadow-lg">
                  <Icon className="h-5 w-5" />
                </span>
              )}
            </div>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-sm border border-line bg-ivory shadow-[0_24px_50px_-36px_rgba(31,39,64,0.5)]">
            <div aria-hidden className="bg-brand-gradient h-0.5" />
            <dl>{glance}</dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
