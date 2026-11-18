import PageHeader from "@/components/PageHeader";
import GlanceRow from "@/components/GlanceRow";
import PlaceTiles from "@/components/venture/PlaceTiles";
import VentureEnquiry from "@/components/venture/VentureEnquiry";
import VentureGallery from "@/components/venture/VentureGallery";
import VentureOverview from "@/components/venture/VentureOverview";
import VenturePager from "@/components/venture/VenturePager";
import { businesses } from "@/lib/data";

const business = businesses.find((b) => b.slug === "warehousing")!;
const website = new URL(business.href).hostname.replace(/^www\./, "");

export default function BusinessWarehousing() {
  return (
    <main>
      <PageHeader
        title={business.name}
        description={business.statement}
        breadcrumbs={[{ label: "Ventures", href: "/ventures" }, { label: "Warehousing" }]}
      />

      <VentureOverview
        business={business}
        title={
          <>
            About True Value <em>Spaces</em>
          </>
        }
        glance={
          <>
            <GlanceRow label="Venture">{business.name}</GlanceRow>
            <GlanceRow label="Sector">{business.category}</GlanceRow>
            <GlanceRow label="Locations">{business.locations.length} sites</GlanceRow>
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
          The same standards are applied at every site, so a business working with True Value
          Spaces can expect the facility to run the same way from one location to the next.
        </p>
      </VentureOverview>

      <PlaceTiles
        eyebrow="Locations"
        title={
          <>
            Where our <em>sites</em> are
          </>
        }
        description="Warehousing and storage sites across Maharashtra."
        itemLabel="Site"
        places={business.locations}
      />

      <VentureGallery photos={business.gallery} />

      <VentureEnquiry
        business={business}
        title={
          <>
            Enquire about <em>warehousing</em>
          </>
        }
        text="For storage requirements, site visits or commercial terms, the team can be reached on phone and email."
        visitLabel="Visit True Value Spaces"
      />

      <VenturePager slug={business.slug} />
    </main>
  );
}
