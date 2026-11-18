"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import TextLink from "@/components/TextLink";
import { BUSINESS_ICONS, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { businesses, generalEnquiries } from "@/lib/data";

const INPUT_CLASS =
  "w-full rounded-sm border border-line bg-ivory/60 px-3.5 py-3 text-sm text-ink transition-all hover:border-gold/50 focus:border-gold focus:bg-white focus:shadow-[0_0_0_4px_rgba(154,114,45,0.12)]";
const LABEL_CLASS = "block text-sm font-medium text-ink";
const CARD_CLASS =
  "relative overflow-hidden rounded-sm border border-line bg-white p-6 shadow-[0_20px_40px_-32px_rgba(31,39,64,0.5)]";

const VENTURE_ACCENTS = ["bg-maroon", "bg-navy", "bg-gold-dark"];
const GENERAL = "General enquiry";
const enquiryTypes = [GENERAL, ...businesses.map((business) => business.heroLabel), "Partnership", "Other"];

const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

/** Venture enquiries go straight to that venture's team; everything else to the Group office. */
function recipientFor(type: string) {
  const venture = businesses.find((business) => business.heroLabel === type);
  return venture
    ? { email: venture.contact.email, team: venture.name }
    : { email: generalEnquiries.email, team: "the Group office" };
}

function ContactRow({
  Icon,
  label,
  children,
}: {
  Icon: typeof PhoneIcon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-maroon/20 text-maroon">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div>
        <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-ink-faint uppercase">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm leading-relaxed">{children}</dd>
      </div>
    </div>
  );
}

function GeneralEnquiries() {
  return (
    <div className={CARD_CLASS}>
      <div aria-hidden className="bg-brand-gradient absolute inset-x-0 top-0 h-0.5" />
      <h3 className="text-h3 font-semibold text-ink">{generalEnquiries.label}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">For anything Group-level, start here.</p>

      <dl className="mt-5 space-y-4">
        <ContactRow Icon={PhoneIcon} label="Phone">
          <a
            href={telHref(generalEnquiries.phone)}
            className="font-medium text-ink transition-colors hover:text-maroon"
          >
            {generalEnquiries.phone}
          </a>
        </ContactRow>
        <ContactRow Icon={MailIcon} label="Email">
          <a
            href={`mailto:${generalEnquiries.email}`}
            className="font-medium text-ink transition-colors hover:text-maroon"
          >
            {generalEnquiries.email}
          </a>
        </ContactRow>
        <ContactRow Icon={MapPinIcon} label="Office">
          <span className="text-ink">{generalEnquiries.address}</span>
        </ContactRow>
      </dl>
    </div>
  );
}

function VentureEnquiries({ onEnquire }: { onEnquire: (type: string) => void }) {
  return (
    <div className={`${CARD_CLASS} mt-6`}>
      <div aria-hidden className="bg-brand-gradient absolute inset-x-0 top-0 h-0.5" />
      <h3 className="text-h3 font-semibold text-ink">Venture Enquiries</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        For anything specific to one of the Group&apos;s ventures, reach its team directly.
      </p>

      <ul className="mt-5 divide-y divide-line">
        {businesses.map((business, index) => {
          const Icon = BUSINESS_ICONS[business.slug];
          return (
            <li key={business.slug} className="py-5 first:pt-0 last:pb-0">
              <div className="flex items-center gap-3">
                {Icon && (
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white ${VENTURE_ACCENTS[index % 3]}`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                )}
                <div>
                  <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-gold uppercase">
                    {business.heroLabel}
                  </p>
                  <p className="text-base font-semibold text-ink">{business.name}</p>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 pl-12 text-sm">
                <a
                  href={telHref(business.contact.phone)}
                  className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-maroon"
                >
                  <PhoneIcon className="h-3.5 w-3.5 text-maroon" />
                  {business.contact.phone}
                </a>
                <a
                  href={`mailto:${business.contact.email}`}
                  className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-maroon"
                >
                  <MailIcon className="h-3.5 w-3.5 text-maroon" />
                  {business.contact.email}
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 pl-12">
                <button
                  type="button"
                  onClick={() => onEnquire(business.heroLabel)}
                  className="group/e inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-maroon uppercase transition-colors hover:text-gold"
                >
                  Enquire about {business.heroLabel.toLowerCase()}
                  <span aria-hidden className="transition-transform group-hover/e:translate-x-1">
                    →
                  </span>
                </button>
                <TextLink href={business.detailPath}>About this venture</TextLink>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function EnquiryForm({ type, onTypeChange }: { type: string; onTypeChange: (type: string) => void }) {
  const [sentTo, setSentTo] = useState<{ email: string; team: string } | null>(null);
  const recipient = recipientFor(type);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();

    const subject = `Website enquiry — ${type} — ${field("name")}`;
    const body = [
      field("message"),
      "",
      "—",
      `Name: ${field("name")}`,
      `Email: ${field("email")}`,
      field("phone") && `Phone: ${field("phone")}`,
      `Enquiry type: ${type}`,
    ]
      .filter((line) => line !== "")
      .join("\n");

    // No backend yet: hand the composed message to the visitor's own email app,
    // addressed to the team that should receive it.
    window.location.href = `mailto:${recipient.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSentTo(recipient);
  };

  return (
    <div id="enquiry" className={`${CARD_CLASS} scroll-mt-28 md:p-8`}>
      <div aria-hidden className="bg-brand-gradient absolute inset-x-0 top-0 h-0.5" />
      <h3 className="text-h3 font-semibold text-ink">Send Us an Enquiry</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Fill in the form and it will open in your email app, addressed to the right team.
      </p>

      {sentTo ? (
        <div className="animate-rise mt-6 rounded-sm border border-line bg-ivory p-6" role="status">
          <p className="flex items-center gap-2 text-base font-semibold text-ink">
            <span aria-hidden className="h-2 w-2 rotate-45 bg-maroon" />
            Your message is ready to send.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Your email app should have opened with the message addressed to {sentTo.team}. Press
            send there to deliver it. If nothing opened, write to{" "}
            <a href={`mailto:${sentTo.email}`} className="font-medium text-maroon underline underline-offset-2">
              {sentTo.email}
            </a>{" "}
            directly.
          </p>
          <button
            type="button"
            onClick={() => setSentTo(null)}
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-gold uppercase transition-colors hover:text-maroon"
          >
            Back to the form
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={LABEL_CLASS}>
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={`mt-2 ${INPUT_CLASS}`}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={LABEL_CLASS}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`mt-2 ${INPUT_CLASS}`}
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className={LABEL_CLASS}>
              Phone <span className="font-normal text-ink-faint">(optional)</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={`mt-2 ${INPUT_CLASS}`}
            />
          </div>

          <div>
            <label htmlFor="contact-type" className={LABEL_CLASS}>
              Enquiry Type
            </label>
            <select
              id="contact-type"
              name="enquiryType"
              value={type}
              onChange={(event) => onTypeChange(event.target.value)}
              aria-describedby="contact-recipient"
              className={`mt-2 ${INPUT_CLASS}`}
            >
              {enquiryTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <p id="contact-recipient" className="mt-2 flex items-center gap-1.5 text-xs text-ink-faint">
              <MailIcon className="h-3 w-3 text-maroon" />
              Goes to <span className="font-medium text-ink-soft">{recipient.email}</span>
            </p>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="contact-message" className={LABEL_CLASS}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              className={`mt-2 ${INPUT_CLASS}`}
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="btn-shine group/btn inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dark hover:shadow-lg"
            >
              Compose Enquiry
              <span aria-hidden className="transition-transform duration-300 group-hover/btn:translate-x-1">
                →
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

function ContactDetails({ initialType }: { initialType: string }) {
  const [type, setType] = useState(initialType);

  const enquireAbout = (label: string) => {
    setType(label);
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("contact-name")?.focus({ preventScroll: true });
  };

  return (
    <Section tone="ivory">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Reach Us"
            title={
              <>
                Contact <em>details</em>
              </>
            }
          />
          <div className="mt-8">
            <GeneralEnquiries />
            <VentureEnquiries onEnquire={enquireAbout} />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Enquiry Form"
              title={
                <>
                  Write to <em>the Group</em>
                </>
              }
            />
            <div className="mt-8">
              <EnquiryForm type={type} onTypeChange={setType} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function MapSection() {
  const mapsQuery = encodeURIComponent(generalEnquiries.address);

  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Visit Us"
        title={
          <>
            Our <em>office</em>
          </>
        }
        description={generalEnquiries.address}
      />

      <div className="relative mt-8 overflow-hidden rounded-sm border border-line">
        <iframe
          title="Map showing the Karan Kothari Group office in Nagpur"
          src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block aspect-video w-full border-0 grayscale-35"
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-6">
        <TextLink href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`} external>
          Get directions
        </TextLink>
        <a
          href={telHref(generalEnquiries.phone)}
          className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-maroon"
        >
          <PhoneIcon className="h-3.5 w-3.5 text-maroon" />
          Call {generalEnquiries.phone}
        </a>
      </div>
    </Section>
  );
}

/**
 * Preselects the enquiry type from `?venture=<business slug>` or
 * `?type=<enquiry type>` (e.g. "Partnership"), so links elsewhere can deep-link.
 */
export default function Contact({ venture, type }: { venture?: string; type?: string }) {
  const initialType =
    businesses.find((business) => business.slug === venture)?.heroLabel ??
    (type && enquiryTypes.includes(type) ? type : GENERAL);

  return (
    <main>
      <PageHeader
        title="Contact Us"
        description="Get in touch with the Group office in Nagpur, or contact one of our ventures directly."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <ContactDetails initialType={initialType} />
      <MapSection />
    </main>
  );
}
