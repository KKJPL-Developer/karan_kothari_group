import PageHeader from "@/components/PageHeader";
import GlanceRow from "@/components/GlanceRow";
import PlaceTiles from "@/components/venture/PlaceTiles";
import VentureEnquiry from "@/components/venture/VentureEnquiry";
import VentureGallery from "@/components/venture/VentureGallery";
import VentureOverview from "@/components/venture/VentureOverview";
import VenturePager from "@/components/venture/VenturePager";
import { businesses } from "@/lib/data";

const business = businesses.find((b) => b.slug === "jewellery")!;
const website = new URL(business.href).hostname.replace(/^www\./, "");

export default function BusinessJewellery() {
  return (
    <main>
      <PageHeader
        title={business.name}
        description={business.statement}
        breadcrumbs={[{ label: "Ventures", href: "/ventures" }, { label: "Jewellery" }]}
      />

      <VentureOverview
        business={business}
        title={
          <>
            About Karan Kothari <em>Jewellers</em>
          </>
        }
        glance={
          <>
            <GlanceRow label="Venture">{business.name}</GlanceRow>
            <GlanceRow label="Sector">{business.category}</GlanceRow>
            <GlanceRow label="Locations">{business.locations.join(", ")}</GlanceRow>
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
          The same standards apply across every showroom — in how a piece is made, how it is
          described and how it is priced. A purchase is treated as the start of a relationship
          rather than the end of one.
        </p>
        <blockquote className="relative mt-10 border-l-2 border-maroon pl-6 font-serif text-2xl leading-snug text-ink md:text-[1.75rem]">
          The Group&apos;s story began here — in jewellery, where reputation is earned{" "}
          <em>one relationship at a time.</em>
        </blockquote>
      </VentureOverview>

      <PlaceTiles
        eyebrow="Showrooms"
        title={
          <>
            Where you can <em>visit us</em>
          </>
        }
        description="Karan Kothari Jewellers showrooms across Maharashtra."
        itemLabel="Showroom"
        places={business.locations}
      />

      <VentureGallery photos={business.gallery} />

      <VentureEnquiry
        business={business}
        title={
          <>
            Enquire about <em>jewellery</em>
          </>
        }
        text="For product enquiries, showroom timings or anything else, the team is available on phone and email."
        visitLabel="Visit Karan Kothari Jewellers"
      />

      <VenturePager slug={business.slug} />
    </main>
  );
}
