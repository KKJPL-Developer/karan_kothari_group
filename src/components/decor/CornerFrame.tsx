const CORNERS = [
  "top-0 left-0 border-t border-l",
  "top-0 right-0 border-t border-r",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

/**
 * Four small L-shaped marks inset from an image's edges — a quiet
 * viewfinder/loupe nod, meant to sit on top of a `relative` image
 * container. Color comes from `className` (defaults to a warm gold).
 */
export default function CornerFrame({ className = "text-gold" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-3 ${className}`} aria-hidden="true">
      {CORNERS.map((position) => (
        <span key={position} className={`absolute h-5 w-5 border-current ${position}`} />
      ))}
    </div>
  );
}
