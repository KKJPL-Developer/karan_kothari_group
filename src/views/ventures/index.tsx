import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import CornerFrame from "@/components/decor/CornerFrame";
import TextLink from "@/components/TextLink";
import { BUSINESS_ICONS, MapPinIcon } from "@/components/icons";
import { businesses, type Business } from "@/lib/data";

const VENTURE_ACCENTS = ["bg-maroon", "bg-navy", "bg-gold-dark"];
const FRAME_ACCENTS = ["border-maroon/30", "border-navy/30", "border-gold/40"];

function BusinessBlock({ business, index }: { business: Business; index: number }) {
  const imageFirst = index % 2 === 0;
  const tone = index % 2 === 0 ? "white" : "ivory";
  const Icon = BUSINESS_ICONS[business.slug];

  return (
    <Section tone={tone} bordered>
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className={`relative ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
          <div
            aria-hidden
            className={`absolute -inset-3 -z-10 rounded-sm border md:-inset-4 ${FRAME_ACCENTS[index % 3]} ${
              imageFirst ? "translate-x-3 translate-y-3" : "-translate-x-3 translate-y-3"
            }`}
          />
          <div className="group relative aspect-4/3 w-full overflow-hidden rounded-sm">
            <Image
              src={business.image}
              alt={business.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <CornerFrame className="text-gold-light" />
            <span
              aria-hidden
              className="absolute right-5 bottom-3 font-serif text-6xl leading-none text-white/85 italic drop-shadow-lg"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className={`stagger ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
          <div className="flex items-center gap-3">
            {Icon && (
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${VENTURE_ACCENTS[index % 3]}`}
              >
                <Icon className="h-4 w-4" />
              </span>
            )}
            <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
              {business.category}
            </p>
          </div>
          <h2 className="mt-4 text-h2 font-semibold text-ink">{business.name}</h2>
          <p className="mt-3 font-serif text-2xl leading-snug text-maroon italic">
            {business.statement}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">
            {business.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Locations">
            {business.locations.map((city) => (
              <li
                key={city}
                className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink-soft"
              >
                <MapPinIcon className="h-3 w-3 text-maroon" />
                {city}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button href={business.detailPath} arrow>
              Explore Venture
            </Button>
            <TextLink href={business.href} external>
              Visit website
            </TextLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Enquiry() {
  return (
    <Section tone="maroon" space="md">
      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="text-h2 font-semibold text-white">
            Enquiries about <em>our ventures</em>
          </h2>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-white/75 md:text-base">
            Tell us what you need and our office will put you in touch with the right business.
          </p>
        </div>
        <div className="lg:justify-self-end">
          <Button href="/contact" variant="light" arrow>
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default function Businesses() {
  return (
    <main>
      <PageHeader
        title="Our Ventures"
        description="Ventures across jewellery, commercial real estate and warehousing."
        breadcrumbs={[{ label: "Ventures" }]}
      />

      <Section tone="white" space="md">
        <SectionHeading
          eyebrow="Business Verticals"
          title={
            <>
              One foundation, <em>many ventures</em>
            </>
          }
          description="The Karan Kothari Group operates in jewellery, commercial real estate and warehousing. Each one serves a different set of customers and is run on its own terms, but built on the same standards of quality, trust and long-term thinking."
        />
      </Section>

      {businesses.map((business, index) => (
        <BusinessBlock key={business.slug} business={business} index={index} />
      ))}

      <Enquiry />
    </main>
  );
}
