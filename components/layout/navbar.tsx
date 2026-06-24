"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/companies", label: "Our Ventures" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : "border-b border-[#E4E3DE]"
        }`}
      >
        {/* Gold accent line — top of navbar */}
        {/* <div className="h-0.5 w-full bg-linear-to-r from-[#C9A84C]/0 via-[#C9A84C] to-[#C9A84C]/0" /> */}

        <nav className="flex h-18 w-full items-center gap-8 px-8">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logos/new_logo-removebg-preview.png"
              alt="Karan Kothari Group"
              width={480}
              height={480}
              quality={100}
              unoptimized
              preload
              loading="eager"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Nav links — desktop, pushed to center */}
          <ul className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative flex items-center px-4 py-2 text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#C9A84C]"
                        : "text-zinc-600 hover:text-[#0E0F11]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#C9A84C]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right — phone + CTA */}
          <div className="ml-auto hidden shrink-0 items-center gap-3 md:flex">
            <a
              href="tel:99999999999"
              className="flex items-center gap-2 text-base text-zinc-500 transition-colors hover:text-[#0E0F11]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-3.5 text-[#C9A84C]">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.47 11.47 0 0 0 .57 3.58 1 1 0 0 1-.25 1.01l-2.2 2.2z" />
              </svg>
              99999 99999
            </a>
            <div className="h-8 w-px bg-[#E4E3DE]" />
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-[#101828] px-4 text-xs font-semibold tracking-wide text-white transition-all duration-200 hover:bg-[#C9A84C]"
            >
              Get in Touch
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </header>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-100 flex flex-col bg-[#0d1520]">
          {/* Top bar */}
          <div className="flex h-18 items-center justify-between border-b border-white/10 px-6">
            <Image
              src="/logos/new_logo-removebg-preview.png"
              alt="Karan Kothari Group"
              width={480}
              height={480}
              quality={100}
              unoptimized
              className="h-10 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col justify-center px-6">
            {navLinks.map((link, i) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-white/8 py-5 text-3xl font-semibold transition-colors ${
                    isActive ? "text-[#C9A84C]" : "text-white/75 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-cormorant)", animationDelay: `${i * 60}ms` }}
                >
                  {link.label}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5 shrink-0 opacity-30">
                    <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              );
            })}
          </nav>

          {/* Bottom contact */}
          <div className="border-t border-white/10 px-6 py-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Contact us</p>
            <div className="flex flex-col gap-3">
              <a href="tel:99999999999" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0 text-[#C9A84C]">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.47 11.47 0 0 0 .57 3.58 1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>
                +91 99999 99999
              </a>
              <a href="mailto:info@karankotharigroup.com" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0 text-[#C9A84C]">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                info@karankotharigroup.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
