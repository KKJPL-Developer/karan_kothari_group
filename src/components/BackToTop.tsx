"use client";

import { useEffect, useState } from "react";

const RADIUS = 21;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Appears after the first screenful; its ring fills as the page is read. */
export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > window.innerHeight * 0.8);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`group fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-white shadow-[0_12px_30px_-10px_rgba(58,19,15,0.7)] transition-all duration-500 hover:bg-maroon-dark md:right-8 md:bottom-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg aria-hidden viewBox="0 0 48 48" className="absolute inset-0 -rotate-90">
        <defs>
          <linearGradient id="back-to-top-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-gold-pale)" />
            <stop offset="100%" stopColor="var(--color-gold-light)" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <circle
          cx="24"
          cy="24"
          r={RADIUS}
          fill="none"
          stroke="url(#back-to-top-ring)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
        />
      </svg>
      <span aria-hidden className="relative transition-transform duration-300 group-hover:-translate-y-0.5">
        ↑
      </span>
    </button>
  );
}
