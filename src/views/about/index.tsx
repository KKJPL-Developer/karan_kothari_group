import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import CalloutBox from "@/components/CalloutBox";
import CornerFrame from "@/components/decor/CornerFrame";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ValuesGrid from "@/components/ValuesGrid";
import { BUSINESS_ICONS, CompassIcon, MapPinIcon, VentureIcon } from "@/components/icons";
import { businesses, groupImages, presence } from "@/lib/data";

const VENTURE_ACCENTS = ["bg-maroon", "bg-navy", "bg-gold-dark"];

function OurStory() {
  return (
    <Section tone="white">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="stagger">
          <SectionHeading
            eyebrow="Our Story"
            title={
              <>
                Built on trust, <em>grown with patience</em>
              </>
            }
            description="The Group's roots are in jewellery — an industry where reputation is earned one relationship at a time, and where a family name is only as good as the last piece it sold."
          />
          <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft md:text-base">
            That foundation now supports a wider set of interests. Karan Kothari Group is the parent
            to a portfolio of independently run businesses — fine jewellery retail, a commercial
            business park and warehousing infrastructure — each built around long-term relationships
            rather than one-time transactions.
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft md:text-base">
            They look different on the surface and are connected underneath, by the same
            standards of quality, integrity and patient growth. Each one is run on its own terms,
            with its own team and its own customers, and each one is expected to stand on the same
            foundation as the last.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/journey" variant="secondary" arrow>
              Our Journey
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 translate-x-3 translate-y-3 rounded-sm border border-gold/40 md:-inset-4"
          />
          <div aria-hidden className="bg-jali absolute -bottom-10 -left-10 -z-10 h-48 w-48 text-navy/15" />
          <div className="group relative aspect-4/3 w-full overflow-hidden rounded-sm">
            <Image
              src={groupImages.about}
              alt={groupImages.aboutAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <CornerFrame className="text-gold-light" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function OurValues() {
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

function GroupToday() {
  const cities = Array.from(new Set(businesses.flatMap((business) => business.locations)));
  const facts = [
    {
      label: "Headquarters",
      value: `${presence.headquarters}, ${presence.region}`,
      Icon: MapPinIcon,
      accent: "bg-maroon",
    },
    {
      label: "Ventures",
      value: "Jewellery, commercial real estate & warehousing — and growing",
      Icon: VentureIcon,
      accent: "bg-navy",
    },
    {
      label: "Locations",
      value: `${cities.length} across ${presence.region}`,
      Icon: CompassIcon,
      accent: "bg-gold-dark",
    },
  ];

  return (
    <Section tone="ivory">
      <SectionHeading
        eyebrow="The Group Today"
        title={
          <>
            Where the Group <em>stands</em>
          </>
        }
        description={presence.text}
      />

      <dl className="stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {facts.map(({ label, value, Icon, accent }) => (
          <div
            key={label}
            className="group relative overflow-hidden rounded-sm border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_50px_-28px_rgba(31,39,64,0.45)]"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${accent}`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <dt className="mt-5 text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
              {label}
            </dt>
            <dd className="mt-2 text-base font-semibold text-ink">{value}</dd>
            <span
              aria-hidden
              className="bg-brand-gradient absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            />
          </div>
        ))}
      </dl>

      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Locations">
        {cities.map((city) => (
          <li
            key={city}
            className="flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-maroon/40 hover:text-maroon"
          >
            <span aria-hidden className="h-1 w-1 rotate-45 bg-gold" />
            {city}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function OurBusinesses() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Our Ventures"
        title={
          <>
            One foundation, <em>many ventures</em>
          </>
        }
        description="Each one operates independently, and each is held to the same standard."
      />

      <ul className="stagger mt-12 border-t border-line">
        {businesses.map((business, index) => {
          const Icon = BUSINESS_ICONS[business.slug];
          return (
            <li key={business.slug} className="border-b border-line">
              <Link
                href={business.detailPath}
                className="group relative isolate grid grid-cols-1 gap-4 overflow-hidden py-8 transition-colors md:grid-cols-12 md:items-center md:gap-6 md:px-4"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 origin-left scale-x-0 bg-ivory transition-transform duration-500 group-hover:scale-x-100"
                />
                <span className="flex items-center gap-4 md:col-span-4">
                  <span
                    aria-hidden
                    className="font-serif text-3xl leading-none text-gold/50 italic transition-colors group-hover:text-maroon"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {Icon && (
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:rotate-12 ${VENTURE_ACCENTS[index % 3]}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  )}
                  <span>
                    <span className="block text-xs font-semibold tracking-[0.14em] text-gold uppercase">
                      {business.category}
                    </span>
                    <span className="mt-1 block text-h3 font-semibold text-ink transition-colors group-hover:text-maroon">
                      {business.name}
                    </span>
                  </span>
                </span>
                <span className="text-sm leading-relaxed text-ink-soft md:col-span-6">
                  {business.statement}
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-gold uppercase md:col-span-2 md:justify-self-end">
                  Learn more
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function LookingAhead() {
  return (
    <Section tone="maroon">
      <div className="max-w-2xl">
        <SectionHeading
          eyebrow="Looking Ahead"
          title={
            <>
              Built for today, <em>prepared for tomorrow</em>
            </>
          }
          tone="dark"
          description="The Group continues to explore new interests and infrastructure that create lasting value in the communities it serves — guided by the same principles that shaped where it began."
        />
        <div className="mt-8">
          <Button href="/ventures" variant="light" arrow>
            Explore Our Ventures
          </Button>
        </div>
      </div>
    </Section>
  );
}

function ContactCta() {
  return (
    <Section tone="white" space="md">
      <CalloutBox className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-h2 font-semibold text-ink">
            Get in touch <em>with the Group</em>
          </h2>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft md:text-base">
            Whether you would like to know more about the Group or one of its businesses, our
            office will be glad to hear from you.
          </p>
        </div>
        <Button href="/contact" arrow>
          Contact Us
        </Button>
      </CalloutBox>
    </Section>
  );
}

export default function About() {
  return (
    <main>
      <PageHeader
        title="About Karan Kothari Group"
        description="A Nagpur-based business group with interests in jewellery, commercial real estate and warehousing infrastructure."
        breadcrumbs={[{ label: "About" }]}
      />
      <OurStory />
      <OurValues />
      <GroupToday />
      <OurBusinesses />
      <LookingAhead />
      <ContactCta />
    </main>
  );
}
