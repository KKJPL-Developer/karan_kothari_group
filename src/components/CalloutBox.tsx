import type { ReactNode } from "react";

/** The bordered ivory box used for "get in touch" style callouts — a dusk rule along the top and faint facets. */
export default function CalloutBox({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-sm border border-line bg-ivory p-6 shadow-[0_24px_60px_-40px_rgba(31,39,64,0.5)] md:p-12 ${className}`}
    >
      <div aria-hidden className="bg-brand-gradient absolute inset-x-0 top-0 h-1" />
      <div aria-hidden className="bg-facet-grid pointer-events-none absolute inset-0 -z-10 text-maroon/6" />
      {children}
    </div>
  );
}
