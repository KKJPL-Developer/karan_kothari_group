import Link from "next/link";
import Container from "@/components/Container";
import Sunburst from "@/components/decor/Sunburst";

export type Crumb = { label: string; href?: string };

export default function PageHeader({
  title,
  description,
  breadcrumbs = [],
}: {
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-navy-deep via-navy-dark to-maroon-deep/80" />
        <div className="bg-jali mask-fade-b absolute inset-0 text-white/5" />
        <div className="absolute -top-24 -right-24">
          <Sunburst rays={40} className="animate-spin-slow h-120 w-120 text-gold-light/18" />
        </div>
      </div>

      <Container className="pt-34 pb-14 md:pt-44 md:pb-20">
        <nav aria-label="Breadcrumb" className="animate-rise">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60">
            <li>
              <Link href="/" className="transition-colors hover:text-gold-light">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <span aria-hidden className="h-1 w-1 rotate-45 bg-gold-light/70" />
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-gold-light">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white/85">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="animate-rise mt-5 text-h1 font-semibold" style={{ animationDelay: "0.1s" }}>
          {title}
        </h1>
        {description && (
          <p
            className="animate-rise mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-white/75 md:text-base"
            style={{ animationDelay: "0.2s" }}
          >
            {description}
          </p>
        )}
      </Container>

      <div aria-hidden className="bg-brand-gradient h-1" />
    </section>
  );
}
