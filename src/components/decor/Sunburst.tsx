/**
 * An abstracted, low-opacity nod to the group logo's sunburst — thin
 * radiating lines and a center ring, no fill, no literal starburst shape.
 * Meant to sit behind content at ~5–10% opacity via a `text-*` utility on
 * the wrapping element (it renders with `stroke="currentColor"`).
 */
export default function Sunburst({
  className = "",
  rays = 32,
}: {
  className?: string;
  rays?: number;
}) {
  const angles = Array.from({ length: rays }, (_, i) => (360 / rays) * i);

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        {angles.map((angle, i) => {
          const rad = (Math.PI / 180) * angle;
          const inner = 56;
          const outer = i % 2 === 0 ? 98 : 80;
          // Fixed to 2 decimals: Math.cos/sin can differ by 1 ULP between the
          // server and client V8 builds, which otherwise trips a React
          // hydration mismatch on the raw float string.
          const x1 = (100 + inner * Math.cos(rad)).toFixed(2);
          const y1 = (100 + inner * Math.sin(rad)).toFixed(2);
          const x2 = (100 + outer * Math.cos(rad)).toFixed(2);
          const y2 = (100 + outer * Math.sin(rad)).toFixed(2);
          return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        <circle cx="100" cy="100" r="38" fill="none" />
      </g>
    </svg>
  );
}
