import Image from "next/image";
import Link from "next/link";
import FooterCTABand from "./FooterCTABand";

const socials = [
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com",
    label: "Twitter / X",
    color: "#E4E4E4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    color: "#E1306C",
    gradient: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    color: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const footerLinks: Record<string, { href: string; label: string }[]> = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
  Businesses: [
    { href: "/companies#jewellery", label: "karan Kothari Jewellers" },
    { href: "/companies#warehousing", label: "True Value Spaces" },
    { href: "/companies#business-parks", label: "Karan Business Parks" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#101828] text-white">
      
      {/* ── CTA band (page-aware, image changes per route) ── */}
      <FooterCTABand />




      {/* ── Main grid ── */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-8 py-16 md:grid-cols-4">
        {/* Brand column */}
        <div className="col-span-2 flex flex-col gap-6 md:col-span-1">
          <Link href="/" className="inline-flex transition-opacity hover:opacity-80">
            <Image
              src="/logos/new_logo-removebg-preview.png"
              alt="Karan Kothari Group"
              width={480}
              height={480}
              quality={100}
              unoptimized
              className="h-14 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
            Three verticals. One trusted group. Building India&apos;s future through jewellery, warehousing, and premium commercial spaces.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: s.gradient ?? s.color + "22",
                  border: `1.5px solid ${s.color}44`,
                  color: s.gradient ? "#fff" : s.color,
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
              {group}
            </p>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6 text-xs text-zinc-500">
          <span>
            © {new Date().getFullYear()} Karan Kothari Group. All rights reserved.
          </span>
          <span className="hidden md:inline">
            Crafted with care.
          </span>
        </div>
      </div>
    </footer>
  );
}
