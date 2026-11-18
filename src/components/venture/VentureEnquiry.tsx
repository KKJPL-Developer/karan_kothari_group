import type { ReactNode } from "react";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { MailIcon, PhoneIcon } from "@/components/icons";
import type { Business } from "@/lib/data";

/** The closing enquiry band on each venture page, on the maroon surface. */
export default function VentureEnquiry({
  business,
  title,
  text,
  visitLabel,
}: {
  business: Business;
  title: ReactNode;
  text: string;
  visitLabel: string;
}) {
  const contacts = [
    {
      label: "Phone",
      Icon: PhoneIcon,
      value: business.contact.phone,
      href: `tel:${business.contact.phone.replace(/[\s-]/g, "")}`,
    },
    {
      label: "Email",
      Icon: MailIcon,
      value: business.contact.email,
      href: `mailto:${business.contact.email}`,
    },
  ];

  return (
    <Section tone="maroon">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <div>
          <h2 className="text-h2 font-semibold text-white">{title}</h2>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-white/75 md:text-base">
            {text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={business.href} variant="light" external arrow>
              {visitLabel}
            </Button>
            <Button href={`/contact?venture=${business.slug}#enquiry`} variant="outlineDark">
              Send an Enquiry
            </Button>
          </div>
        </div>

        <dl className="stagger grid gap-3">
          {contacts.map(({ label, Icon, value, href }) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd>
                <a
                  href={href}
                  className="group flex items-center gap-4 rounded-sm border border-white/15 bg-white/5 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-light/50 hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-light/40 text-gold-light transition-colors group-hover:bg-gold-light group-hover:text-maroon-deep">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[0.65rem] font-semibold tracking-[0.18em] text-gold-light/80 uppercase">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-white">{value}</span>
                  </span>
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
