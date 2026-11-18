import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { businesses, generalEnquiries } from "@/lib/data";

const groupLinks = [
  { label: "About the Group", href: "/about" },
  { label: "Our Ventures", href: "/ventures" },
  { label: "Our Journey", href: "/journey" },
  { label: "Contact Us", href: "/contact" },
];

const LINK_CLASS =
  "group/f inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold-light";

function FooterHeading({ children }: { children: string }) {
  return (
    <h2 className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-light uppercase">
      <span aria-hidden className="h-1 w-1 rotate-45 bg-gold-light" />
      {children}
    </h2>
  );
}

function Dash() {
  return (
    <span
      aria-hidden
      className="h-px w-0 bg-gold-light transition-all duration-300 group-hover/f:w-3"
    />
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-navy-deep text-white">
      <div aria-hidden className="bg-brand-gradient h-1" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-navy-dark to-navy-deep" />
        <div className="bg-jali absolute inset-0 text-white/4" />
      </div>

      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/kk-group-logo.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-base font-semibold">Karan Kothari</span>
                <span className="text-[0.6rem] font-semibold tracking-[0.3em] text-gold-light">
                  GROUP
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              A Nagpur-based business group with interests in jewellery, commercial real estate
              and warehousing infrastructure.
            </p>
            <p className="mt-6 font-serif text-xl text-gold-light italic">
              One foundation, many ventures.
            </p>
          </div>

          <div>
            <FooterHeading>The Group</FooterHeading>
            <ul className="mt-5 space-y-3">
              {groupLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK_CLASS}>
                    <Dash />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Our Ventures</FooterHeading>
            <ul className="mt-5 space-y-3">
              {businesses.map((business) => (
                <li key={business.slug}>
                  <Link href={business.detailPath} className={LINK_CLASS}>
                    <Dash />
                    {business.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Contact</FooterHeading>
            <address className="mt-5 space-y-3 text-sm not-italic text-white/70">
              <p className="leading-relaxed">{generalEnquiries.address}</p>
              <p>
                <a
                  href={`tel:${generalEnquiries.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {generalEnquiries.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${generalEnquiries.email}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {generalEnquiries.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </Container>

      <div aria-hidden>
        <Container className="overflow-hidden">
          <p className="mb-[-0.18em] font-serif text-[clamp(3.5rem,13vw,11rem)] leading-none whitespace-nowrap text-white/5 italic select-none">
            Karan Kothari
          </p>
        </Container>
      </div>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Karan Kothari Group. All rights reserved.</p>
          <p>Nagpur, Maharashtra, India</p>
        </Container>
      </div>
    </footer>
  );
}
