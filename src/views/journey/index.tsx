import Image from "next/image";
import Button from "@/components/Button";
import CalloutBox from "@/components/CalloutBox";
import CornerFrame from "@/components/decor/CornerFrame";
import MilestoneRail from "@/components/MilestoneRail";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import TextLink from "@/components/TextLink";
import { family, type FamilyMember } from "@/lib/data";

function Timeline() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Journey"
        title={
          <>
            Past, present <em>and what comes next</em>
          </>
        }
        description="The Karan Kothari story, told in three parts."
      />
      <MilestoneRail withImages />
    </Section>
  );
}

function FamilyPortrait({ member }: { member: FamilyMember }) {
  return (
    <figure className="group">
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-sm bg-ivory">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 16vw, 40vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          style={member.focus ? { objectPosition: member.focus } : undefined}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-navy-deep/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span
          aria-hidden
          className="bg-brand-gradient absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        />
      </div>
      <figcaption className="mt-3 text-sm font-semibold text-ink transition-colors group-hover:text-maroon">
        {member.name}
      </figcaption>
    </figure>
  );
}

function TierLabel({ children, className }: { children: string; className: string }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase ${className}`}>
      <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-current" />
      {children}
      <span aria-hidden className="h-px flex-1 bg-current opacity-20" />
    </p>
  );
}

function FamilyLegacy() {
  const founder = family.find((member) => member.tier === "founder");
  const legacy = family.filter((member) => member.tier === "legacy");
  const directors = family.filter((member) => member.tier === "director");

  return (
    <Section tone="beige">
      <SectionHeading
        eyebrow="The Family"
        title={
          <>
            Founders, legacy and <em>the directors carrying it forward</em>
          </>
        }
        description="Three generations of the Kothari family — the name the Group still carries."
      />

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-14">
        {founder && (
          <figure className="relative isolate self-start overflow-hidden rounded-sm bg-linear-to-br from-maroon to-maroon-deep p-5 text-white shadow-[0_30px_60px_-30px_rgba(58,19,15,0.7)]">
            <div aria-hidden className="bg-jali absolute inset-0 -z-10 text-gold-light/10" />
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-light uppercase">
              <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold-light" />
              Founder
            </p>
            <div className="relative mt-4 aspect-square w-full overflow-hidden rounded-sm ring-1 ring-gold-light/50">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="(min-width: 1024px) 17rem, 80vw"
                className="object-cover"
                style={founder.focus ? { objectPosition: founder.focus } : undefined}
              />
              <CornerFrame className="text-gold-light" />
            </div>
            <figcaption className="mt-4 font-serif text-2xl text-white italic">{founder.name}</figcaption>
          </figure>
        )}

        <div className="space-y-12">
          <div>
            <TierLabel className="text-navy">Legacy</TierLabel>
            <div className="stagger mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {legacy.map((member) => (
                <FamilyPortrait key={member.name} member={member} />
              ))}
            </div>
          </div>

          <div>
            <TierLabel className="text-maroon">Directors</TierLabel>
            <div className="stagger mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {directors.map((member) => (
                <FamilyPortrait key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ClosingCta() {
  return (
    <Section tone="white" space="md">
      <CalloutBox className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="text-h2 font-semibold text-ink">
            Want to be part of <em>what comes next?</em>
          </h2>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft md:text-base">
            Read more about the businesses the Group operates today, or write to us directly.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/ventures" arrow>
              Explore Our Ventures
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <TextLink href="/about">About the Group</TextLink>
        </div>
      </CalloutBox>
    </Section>
  );
}

export default function Journey() {
  return (
    <main>
      <PageHeader
        title="Our Journey"
        description="From a single jewellery business to a group with interests across multiple sectors."
        breadcrumbs={[{ label: "Journey" }]}
      />
      <Timeline />
      <FamilyLegacy />
      <ClosingCta />
    </main>
  );
}
