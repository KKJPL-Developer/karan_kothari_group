import Image from "next/image";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import BusinessCard from "@/components/BusinessCard";
import Button from "@/components/Button";
import CornerFrame from "@/components/decor/CornerFrame";
import Sunburst from "@/components/decor/Sunburst";
import HeroShowcase from "@/components/HeroShowcase";
import LocationsMarquee from "@/components/LocationsMarquee";
import MilestoneRail from "@/components/MilestoneRail";
import TextLink from "@/components/TextLink";
import ValuesGrid from "@/components/ValuesGrid";
import { BUSINESS_ICONS, MailIcon, MapPinIcon, PhoneIcon, VentureIcon } from "@/components/icons";
import { businesses, generalEnquiries, presence } from "@/lib/data";

function Hero() {
  const slides = businesses.map((business) => ({
    src: business.image,
    alt: business.imageAlt,
    label: business.heroLabel,
    name: business.name,
    href: business.detailPath,
  }));

  return (
    <HeroShowcase slides={slides}>
      <p className="animate-rise flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold-light uppercase">
        <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold-light" />
        Karan Kothari Group
        <span aria-hidden className="hidden h-px w-10 bg-gold-light/50 sm:block" />
        <span className="hidden sm:inline">{presence.headquarters}</span>
      </p>
      <h1
        className="animate-rise mt-6 text-display font-semibold text-white"
        style={{ animationDelay: "0.12s" }}
      >
        Rooted in jewellery.
        <br />
        <em className="text-gold-shimmer">Grown with care.</em>
      </h1>
      <p
        className="animate-rise mt-6 max-w-xl text-[0.95rem] leading-relaxed text-white/80 md:text-lg"
        style={{ animationDelay: "0.24s" }}
      >
        Karan Kothari Group&apos;s ventures span jewellery, commercial real estate and
        warehousing — each run independently, all held to the same standard of trust.
      </p>
      <div
        className="animate-rise mt-9 flex flex-wrap gap-3"
        style={{ animationDelay: "0.36s" }}
      >
        <Button href="/ventures" arrow>
          Explore Our Ventures
        </Button>
        <Button href="/about" variant="outlineDark">
          About the Group
        </Button>
      </div>
    </HeroShowcase>
  );
}

function WhoWeAre() {
  return (
    <Section id="about" tone="white">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="stagger">
          <SectionHeading
            eyebrow="Who We Are"
            title={
              <>
                Karan Kothari <em>Group</em>
              </>
            }
            description="The Group's roots are in jewellery — a business where reputation is earned one relationship at a time. That foundation now supports a wider set of interests: fine jewellery retail, a commercial business park and warehousing infrastructure, each run on its own terms."
          />
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft md:text-base">
            Each one looks different on the surface, yet they&apos;re connected underneath — by
            the same standards of quality, integrity and patient growth.
          </p>

          <dl className="mt-8 grid max-w-md grid-cols-2 divide-x divide-line border-y border-line">
            <div className="py-5 pr-5">
              <dt className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-maroon text-white">
                  <MapPinIcon className="h-3.5 w-3.5" />
                </span>
                Headquarters
              </dt>
              <dd className="mt-3 text-sm font-semibold text-ink">
                {presence.headquarters}, {presence.region}
              </dd>
            </div>
            <div className="py-5 pl-5">
              <dt className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white">
                  <VentureIcon className="h-3.5 w-3.5" />
                </span>
                Ventures
              </dt>
              <dd className="mt-3 text-sm font-semibold text-ink">
                Jewellery, real estate &amp; warehousing — and growing
              </dd>
            </div>
          </dl>

          <div className="mt-8">
            <Button href="/about" variant="secondary" arrow>
              Read Our Story
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 translate-x-3 translate-y-3 rounded-sm border border-gold/40 md:-inset-4"
          />
          <div aria-hidden className="bg-jali absolute -top-10 -right-10 -z-10 h-48 w-48 text-maroon/15" />

          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <div className="group relative row-span-2 overflow-hidden rounded-sm">
              <Image
                src="/images/collage-jewellery.jpg"
                alt="Jewellery display"
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <CornerFrame className="text-gold-light" />
            </div>
            <div className="group relative aspect-4/3 overflow-hidden rounded-sm">
              <Image
                src="/images/collage-business-park.jpg"
                alt="Business park exterior"
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-4/3 overflow-hidden rounded-sm">
              <Image
                src="/images/collage-cold-storage.jpg"
                alt="Cold storage warehouse"
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          <div className="animate-float absolute -bottom-6 -left-4 flex items-center gap-3 rounded-sm border border-line bg-white px-4 py-3 shadow-xl md:-left-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon text-white">
              <MapPinIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[0.65rem] font-semibold tracking-[0.16em] text-ink-faint uppercase">
                Rooted in
              </span>
              <span className="block text-sm font-semibold text-ink">
                {presence.headquarters}, {presence.region}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Statement() {
  return (
    <Section tone="maroon" space="md" className="text-center">
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        <Sunburst rays={48} className="animate-spin-slow h-160 w-160 text-gold-light/15" />
      </div>

      <div className="stagger py-6 md:py-10">
        <p className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold-light uppercase">
          <span aria-hidden className="h-px w-10 bg-gold-light/50" />
          The Group, in a line
          <span aria-hidden className="h-px w-10 bg-gold-light/50" />
        </p>
        <blockquote className="mx-auto mt-6 max-w-4xl font-serif text-[clamp(2.25rem,1.4rem+3.6vw,4.5rem)] leading-[1.08] text-white">
          One foundation, <em>many ventures.</em>
        </blockquote>
        <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-relaxed text-white/75">
          Different on the surface, connected underneath — by quality, integrity and patient
          growth.
        </p>
      </div>

      <div className="mt-10 border-t border-white/10 pt-10">
        <p className="text-xs font-semibold tracking-[0.22em] text-gold-light/80 uppercase">
          Present across {presence.region}
        </p>
        <LocationsMarquee className="mt-6" />
      </div>
    </Section>
  );
}

function OurBusinesses() {
  return (
    <Section id="ventures" tone="ivory">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Our Ventures"
          title={
            <>
              Different industries. <em>One standard of care.</em>
            </>
          }
          description="Trust, quality and long-term thinking run through everything the Group builds."
        />
        <TextLink href="/ventures">See the full portfolio</TextLink>
      </div>
      <div className="stagger mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {businesses.map((business, index) => (
          <BusinessCard key={business.slug} business={business} index={index} />
        ))}
      </div>
    </Section>
  );
}

function OurJourney() {
  return (
    <Section tone="white">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Our Journey"
          title={
            <>
              A business built <em>over generations</em>
            </>
          }
          description="From a single jewellery business to a group with interests across multiple sectors."
        />
        <TextLink href="/journey">See our full journey</TextLink>
      </div>
      <MilestoneRail />
    </Section>
  );
}

function GroupValues() {
  return (
    <Section tone="dark">
      <SectionHeading
        tone="dark"
        eyebrow="Our Values"
        title={
          <>
            What <em>guides</em> the Group
          </>
        }
        description="The same working principles apply across everything the Group runs."
      />
      <ValuesGrid />
    </Section>
  );
}

const HELP_ROUTES = [
  {
    slug: "jewellery",
    title: "Find the right piece",
    text: "Visit a showroom, or ask about a design, a custom order or an existing purchase.",
  },
  {
    slug: "business-park",
    title: "Lease commercial space",
    text: "Enquire about availability, site visits and commercial terms in Nagpur.",
  },
  {
    slug: "warehousing",
    title: "Store or move goods",
    text: "Warehousing and storage requirements, from general storage to cold-chain.",
  },
] as const;

const HELP_ACCENTS = ["bg-maroon", "bg-navy", "bg-gold-dark"];

function HowCanWeHelp() {
  const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Get in Touch"
        title={
          <>
            How can <em>we help?</em>
          </>
        }
        description="Tell us what you're looking for and we'll put you straight through to the right team."
      />

      <div className="stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {HELP_ROUTES.map((route, index) => {
          const business = businesses.find((b) => b.slug === route.slug)!;
          const Icon = BUSINESS_ICONS[business.slug];
          return (
            <div
              key={route.slug}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_50px_-28px_rgba(31,39,64,0.45)]"
            >
              {Icon && (
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${HELP_ACCENTS[index]}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
              )}
              <h3 className="mt-5 text-h3 font-semibold text-ink">{route.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{route.text}</p>
              <p className="mt-4 text-xs text-ink-faint">
                with <span className="font-medium text-ink-soft">{business.name}</span>
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                <TextLink href={`/contact?venture=${business.slug}#enquiry`}>Enquire</TextLink>
                <a
                  href={telHref(business.contact.phone)}
                  aria-label={`Call ${business.name}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft transition-colors hover:text-maroon"
                >
                  <PhoneIcon className="h-3.5 w-3.5 text-maroon" />
                  {business.contact.phone}
                </a>
              </div>
              <span
                aria-hidden
                className="bg-brand-gradient absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              />
            </div>
          );
        })}

        <div className="relative flex flex-col overflow-hidden rounded-sm bg-linear-to-br from-navy-dark to-navy-deep p-6 text-white [--em-color:var(--color-gold-light)]">
          <div aria-hidden className="bg-jali absolute inset-0 text-white/6" />
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold-light/50 text-gold-light">
            <MailIcon className="h-5 w-5" />
          </span>
          <h3 className="relative mt-5 text-h3 font-semibold">
            Something <em>else?</em>
          </h3>
          <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/70">
            Partnerships, proposals or anything Group-level — the office will direct it.
          </p>
          <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4">
            <TextLink href="/contact?type=Partnership#enquiry" tone="dark">
              Write to us
            </TextLink>
            <a
              href={telHref(generalEnquiries.phone)}
              aria-label="Call the Group office"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white/75 transition-colors hover:text-gold-light"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-gold-light" />
              {generalEnquiries.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 rounded-sm border border-line bg-ivory px-6 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-ink-soft">
          <MapPinIcon className="h-4 w-4 shrink-0 text-maroon" />
          <span>
            <span className="font-semibold text-ink">Group office</span> — {generalEnquiries.address}
          </span>
        </p>
        <TextLink href="/contact">All contact details</TextLink>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Statement />
      <OurBusinesses />
      <OurJourney />
      <GroupValues />
      <HowCanWeHelp />
    </main>
  );
}
