import type { ElementType, ReactNode } from "react";

/**
 * Section eyebrow + title + description. Wrap an accent phrase of the title in
 * `<em>` for the serif-italic treatment (maroon on light, gold on dark).
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
  tone = "light",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  as?: ElementType;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const Tag = as;
  const isDark = tone === "dark";
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : ""} ${
        isDark ? "[--em-color:var(--color-gold-light)]" : ""
      } ${className}`}
    >
      <span
        className={`flex items-center gap-2 ${centered ? "justify-center" : ""}`}
        aria-hidden
      >
        <span
          className={`h-1.5 w-1.5 shrink-0 rotate-45 ${isDark ? "bg-gold-light" : "bg-gold"}`}
        />
        <span
          className={`draw-x h-px w-12 bg-linear-to-r ${
            isDark ? "from-gold-light to-gold-light/0" : "from-gold to-gold/0"
          }`}
        />
      </span>
      {eyebrow && (
        <p
          className={`mt-4 text-xs font-semibold tracking-[0.18em] uppercase ${
            isDark ? "text-gold-light" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag className={`mt-2 text-h2 font-semibold ${isDark ? "text-white" : "text-ink"}`}>
        {title}
      </Tag>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-[0.95rem] leading-relaxed md:text-base ${
            centered ? "mx-auto" : ""
          } ${isDark ? "text-white/80" : "text-ink-soft"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
