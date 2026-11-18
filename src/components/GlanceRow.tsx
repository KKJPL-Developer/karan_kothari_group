import type { ReactNode } from "react";
import {
  CompassIcon,
  GlobeIcon,
  MapPinIcon,
  TagIcon,
  VentureIcon,
} from "@/components/icons";

const GLANCE_ICONS: Record<string, (props: { className?: string }) => ReactNode> = {
  Venture: VentureIcon,
  Sector: TagIcon,
  Location: MapPinIcon,
  Locations: CompassIcon,
  Website: GlobeIcon,
};

export default function GlanceRow({ label, children }: { label: string; children: ReactNode }) {
  const Icon = GLANCE_ICONS[label];

  return (
    <div className="flex flex-col gap-1 border-b border-line px-4 py-3 last:border-b-0 sm:flex-row sm:gap-4">
      <dt className="flex w-28 shrink-0 items-center gap-1.5 text-xs text-ink-faint">
        {Icon && <Icon className="h-3.5 w-3.5 text-maroon" />}
        {label}
      </dt>
      <dd className="text-sm font-medium text-ink">{children}</dd>
    </div>
  );
}
