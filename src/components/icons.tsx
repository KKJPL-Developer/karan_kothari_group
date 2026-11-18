import type { ReactElement, SVGProps } from "react";
import type { PrincipleIcon } from "@/lib/data";

/**
 * Small line-icon set, stroke-based at a consistent 1.5 weight so they read
 * as one family. Color comes from the parent's `text-*` utility via
 * `currentColor` — size from `className` (defaults to 1.5rem).
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function TrustIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function QualityIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h12l3 5-9 13L3 8Z" />
      <path d="M3 8h18M9 3l3 5 3-5M12 8l-3 13M12 8l3 13" />
    </svg>
  );
}

export function GrowthIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21V10" />
      <path d="M12 10c0-3.5-2-6-6-6 0 3.7 2 6 6 6Z" />
      <path d="M12 14c0-3.2 2.2-5.5 6-5.5 0 3.4-2.2 5.5-6 5.5Z" />
    </svg>
  );
}

export function PeopleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="8" r="2.4" />
      <path d="M21 20c0-2.6-1.8-4.8-4.2-5.6" />
    </svg>
  );
}

export function GenerationsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V10l8-6 8 6v11" />
      <path d="M9 21v-7h6v7" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function VentureIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="8" width="18" height="12" rx="1.5" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <path d="M3 13h18" />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5 9 6a1.5 1.5 0 0 1 0 2L7.5 9.5a12 12 0 0 0 7 7L16 15a1.5 1.5 0 0 1 2 0l2.5 2.5a1.5 1.5 0 0 1 0 2.1 4 4 0 0 1-4.2 1A17 17 0 0 1 5.4 9.7a4 4 0 0 1 1-4.2 1.5 1.5 0 0 1 .1-2Z" />
    </svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m3.5 7 8.5-4 8.5 4-8.5 4-8.5-4Z" />
      <path d="M3.5 7v10l8.5 4 8.5-4V7" />
      <path d="M12 11v10" />
    </svg>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v6.5a1.5 1.5 0 0 0 .44 1.06l8 8a1.5 1.5 0 0 0 2.12 0l6.5-6.5a1.5 1.5 0 0 0 0-2.12l-8-8a1.5 1.5 0 0 0-1.06-.44Z" />
      <circle cx="8" cy="8" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </svg>
  );
}

export const PRINCIPLE_ICONS: Record<PrincipleIcon, (props: IconProps) => ReactElement> = {
  trust: TrustIcon,
  quality: QualityIcon,
  growth: GrowthIcon,
  people: PeopleIcon,
  generations: GenerationsIcon,
};

export const BUSINESS_ICONS: Record<string, (props: IconProps) => ReactElement> = {
  jewellery: QualityIcon,
  "business-park": VentureIcon,
  warehousing: BoxIcon,
};
