"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import { BUSINESS_ICONS } from "@/components/icons";
import { businesses } from "@/lib/data";

const links = [
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" },
];

const VENTURE_ACCENTS = ["bg-maroon", "bg-navy", "bg-gold-dark"];

/**
 * Fixed header. Every page opens on a dark surface (the hero or PageHeader),
 * so at the top it's transparent with light text; once scrolled it condenses
 * into a frosted white bar with the dusk scroll-progress line.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Close the mobile menu whenever the route changes (including back/forward).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  const solid = scrolled || open;
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const navLinkClass = (href: string) =>
    `relative py-2 text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
      solid
        ? `after:bg-gold hover:text-maroon ${isActive(href) ? "text-maroon" : "text-ink"}`
        : `after:bg-gold-light hover:text-gold-light ${isActive(href) ? "text-gold-light" : "text-white/90"}`
    } ${isActive(href) ? "after:scale-x-100" : "after:scale-x-0"}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
        solid
          ? "border-b border-line bg-white/95 shadow-[0_8px_30px_-12px_rgba(31,39,64,0.25)] backdrop-blur-md"
          : "border-b border-white/10 bg-transparent"
      }`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-linear-to-b from-navy-deep/70 to-transparent transition-opacity duration-500 ${
          solid ? "opacity-0" : "opacity-100"
        }`}
      />

      <Container
        className={`flex items-center justify-between gap-6 transition-[height] duration-500 ${
          solid ? "h-16 md:h-18" : "h-20 md:h-24"
        }`}
      >
        <Link href="/" className="group flex items-center gap-3" aria-label="Karan Kothari Group — home">
          <span
            className={`flex items-center justify-center rounded-full transition-all duration-500 ${
              solid ? "" : "bg-white/95 p-1 shadow-lg"
            }`}
          >
            <Image
              src="/images/kk-group-logo.png"
              alt=""
              width={48}
              height={48}
              className="h-10 w-10 object-contain transition-transform duration-700 group-hover:rotate-20 md:h-11 md:w-11"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`text-base font-semibold transition-colors duration-500 md:text-lg ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              Karan Kothari
            </span>
            <span
              className={`text-[0.6rem] font-semibold tracking-[0.3em] transition-colors duration-500 ${
                solid ? "text-gold" : "text-gold-light"
              }`}
            >
              GROUP
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {links.map((link) =>
            link.href === "/ventures" ? (
              <div key={link.href} className="group relative py-4">
                <Link href={link.href} className={`${navLinkClass(link.href)} flex items-center gap-1.5`}>
                  {link.label}
                  <span
                    aria-hidden
                    className="text-[0.6rem] transition-transform duration-300 group-hover:rotate-180"
                  >
                    ▾
                  </span>
                </Link>
                <div className="invisible absolute top-full left-1/2 w-80 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-sm border border-line bg-white shadow-xl">
                    <div aria-hidden className="bg-brand-gradient h-0.5" />
                    <ul className="p-2">
                      {businesses.map((business, index) => {
                        const Icon = BUSINESS_ICONS[business.slug];
                        return (
                          <li key={business.slug}>
                            <Link
                              href={business.detailPath}
                              className="group/item flex items-center gap-3 rounded-sm px-3 py-3 transition-colors hover:bg-ivory"
                            >
                              {Icon && (
                                <span
                                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover/item:scale-110 ${VENTURE_ACCENTS[index % 3]}`}
                                >
                                  <Icon className="h-4 w-4" />
                                </span>
                              )}
                              <span>
                                <span className="block text-sm font-semibold text-ink transition-colors group-hover/item:text-maroon">
                                  {business.heroLabel}
                                </span>
                                <span className="block text-xs text-ink-faint">{business.name}</span>
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className={`btn-shine rounded-sm px-5 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
              solid
                ? "bg-maroon text-white hover:bg-maroon-dark"
                : "bg-gold text-white hover:bg-gold-dark"
            }`}
          >
            Enquire Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.25 rounded-sm border transition-colors duration-500 lg:hidden ${
            solid ? "border-line" : "border-white/30"
          }`}
        >
          {["translate-y-1.5 rotate-45", "opacity-0", "-translate-y-1.5 -rotate-45"].map((openClass) => (
            <span
              key={openClass}
              className={`h-px w-5 transition-all duration-300 ${solid ? "bg-ink" : "bg-white"} ${
                open ? openClass : ""
              }`}
            />
          ))}
        </button>
      </Container>

      <div
        aria-hidden
        className={`absolute inset-x-0 -bottom-px h-0.5 transition-opacity duration-500 ${
          solid ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="bg-brand-gradient h-full origin-left"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="animate-rise max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <Container className="py-4">
            <nav aria-label="Mobile">
              <ul className="divide-y divide-line">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2 py-3.5 text-sm font-semibold ${
                        isActive(link.href) ? "text-maroon" : "text-ink"
                      }`}
                    >
                      {isActive(link.href) && (
                        <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-maroon" />
                      )}
                      {link.label}
                    </Link>
                    {link.href === "/ventures" && (
                      <ul className="grid gap-1 pb-3">
                        {businesses.map((business, index) => {
                          const Icon = BUSINESS_ICONS[business.slug];
                          return (
                            <li key={business.slug}>
                              <Link
                                href={business.detailPath}
                                className="flex items-center gap-3 rounded-sm px-2 py-2 text-sm text-ink-soft hover:bg-ivory"
                              >
                                {Icon && (
                                  <span
                                    className={`flex h-7 w-7 items-center justify-center rounded-full text-white ${VENTURE_ACCENTS[index % 3]}`}
                                  >
                                    <Icon className="h-3.5 w-3.5" />
                                  </span>
                                )}
                                {business.heroLabel}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-shine mt-4 block rounded-sm bg-maroon px-5 py-3.5 text-center text-xs font-semibold tracking-[0.1em] text-white uppercase"
              >
                Enquire Now
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
