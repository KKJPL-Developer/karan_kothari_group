import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import TextLink from "@/components/TextLink";
import GlanceRow from "@/components/GlanceRow";
import VentureEnquiry from "@/components/venture/VentureEnquiry";
import VentureGallery from "@/components/venture/VentureGallery";
import VentureOverview from "@/components/venture/VentureOverview";
import VenturePager from "@/components/venture/VenturePager";
import { MapPinIcon, TagIcon, VentureIcon } from "@/components/icons";
import { businesses } from "@/lib/data";

const business = businesses.find((b) => b.slug === "business-park")!;
const website = new URL(business.href).hostname.replace(/^www\./, "");

const PLACE_FACTS = [
  { label: "City", value: "Nagpur", Icon: MapPinIcon, accent: "bg-maroon" },
  { label: "State", value: "Maharashtra", Icon: TagIcon, accent: "bg-navy" },
  { label: "Type", value: "Commercial business park", Icon: VentureIcon, accent: "bg-gold-dark" },
];

function Location() {
  return (
    <Section tone="ivory">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Location"
            title={
              <>
                Nagpur, <em>Maharashtra</em>
              </>
            }
            description="Karan Kothari Business Park is a single commercial destination in Nagpur, planned around connectivity and accessibility for the businesses that operate from it."
          />
          <div className="mt-8">
            <TextLink href={business.href} external>
              View the project website
            </TextLink>
          </div>
        </div>

        <dl className="stagger grid gap-3">
          {PLACE_FACTS.map(({ label, value, Icon, accent }) => (
            <div
              key={label}
              className="group flex items-center gap-4 rounded-sm border border-line bg-white px-5 py-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-[0_20px_40px_-28px_rgba(31,39,64,0.45)]"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:rotate-12 ${accent}`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <dt className="text-[0.65rem] font-semibold tracking-[0.18em] text-ink-faint uppercase">
                  {label}
                </dt>
                <dd className="mt-0.5 text-sm font-semibold text-ink">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export default function BusinessPark() {
  return (
    <main>
      <PageHeader
        title={business.name}
        description={business.statement}
        breadcrumbs={[{ label: "Ventures", href: "/ventures" }, { label: "Business Park" }]}
      />

      <VentureOverview
        business={business}
        title={
          <>
            About Karan Kothari <em>Business Park</em>
          </>
        }
        glance={
          <>
            <GlanceRow label="Venture">{business.name}</GlanceRow>
            <GlanceRow label="Sector">{business.category}</GlanceRow>
            <GlanceRow label="Location">{business.locations.join(", ")}</GlanceRow>
            <GlanceRow label="Website">
              <a
                href={business.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold transition-colors hover:text-maroon"
              >
                {website}
              </a>
            </GlanceRow>
          </>
        }
      >
        <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft md:text-base">
          It is built for businesses that want an accessible, visible address in Nagpur and expect
          to stay in it — commercial space planned to hold up over the long term rather than for a
          single lease cycle.
        </p>
      </VentureOverview>

      <Location />

      <VentureGallery photos={business.gallery} />

      <VentureEnquiry
        business={business}
        title={
          <>
            Enquire about <em>space</em>
          </>
        }
        text="For availability, site visits or commercial terms, the team can be reached on phone and email."
        visitLabel="Visit Karan Kothari Business Park"
      />

      <VenturePager slug={business.slug} />
    </main>
  );
}
