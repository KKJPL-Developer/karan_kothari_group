"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import type { Photo } from "@/lib/data";

/**
 * A venture's photo set; any photo opens full-size in a native <dialog>
 * (focus trap and Esc for free), with arrow keys stepping through the set.
 */
export default function VentureGallery({ photos }: { photos: Photo[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const pair = photos.length === 2;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  const step = (delta: number) =>
    setActive((current) => (current === null ? null : (current + delta + photos.length) % photos.length));

  const photo = active === null ? null : photos[active];

  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Gallery"
        title={
          <>
            A closer <em>look</em>
          </>
        }
      />
      <div className={`stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 ${pair ? "" : "lg:grid-cols-3"}`}>
        {photos.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`View larger: ${item.alt}`}
            className={`group relative w-full cursor-zoom-in overflow-hidden rounded-sm ${pair ? "aspect-3/2" : "aspect-4/3"}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={
                pair ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              }
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <span
              aria-hidden
              className="absolute inset-0 flex items-end justify-between bg-linear-to-t from-navy-deep/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              <span className="text-left text-xs text-white/85">{item.alt}</span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
            </span>
            <span
              aria-hidden
              className="bg-brand-gradient absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        aria-label="Photo viewer"
        // Full-viewport stage: Chrome gives modal dialogs `overflow: auto`, which
        // would clip controls positioned outside a smaller box.
        className="fixed inset-0 m-0 h-svh max-h-none w-screen max-w-none overflow-hidden bg-transparent p-0 backdrop:bg-navy-deep/92 backdrop:backdrop-blur-sm"
      >
        {photo && active !== null && (
          <div
            onClick={(event) => {
              if (event.target === event.currentTarget) setActive(null);
            }}
            className="flex h-full w-full flex-col items-center justify-center px-4 py-16 sm:px-24"
          >
            <figure key={photo.src} className="animate-rise flex h-full w-full max-w-6xl flex-col">
              <div className="relative min-h-0 flex-1">
                <Image src={photo.src} alt={photo.alt} fill sizes="90vw" className="object-contain" />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4 text-sm text-white/80">
                <span>{photo.alt}</span>
                <span className="shrink-0 font-serif text-lg text-gold-light italic">
                  {String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close photo viewer"
              className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-gold-light hover:text-gold-light md:top-6 md:right-6"
            >
              ✕
            </button>
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="absolute top-1/2 left-3 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur transition-colors hover:bg-maroon md:left-6"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="absolute top-1/2 right-3 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur transition-colors hover:bg-maroon md:right-6"
                >
                  →
                </button>
              </>
            )}
          </div>
        )}
      </dialog>
    </Section>
  );
}
