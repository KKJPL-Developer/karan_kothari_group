import Container from "@/components/Container";
import Button from "@/components/Button";
import Sunburst from "@/components/decor/Sunburst";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[80vh] items-center overflow-hidden pt-24 bg-navy-dark text-white [--em-color:var(--color-gold-light)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-navy-deep via-navy-dark to-maroon-deep/80" />
        <div className="bg-jali absolute inset-0 text-white/5" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sunburst rays={48} className="animate-spin-slow h-175 w-175 shrink-0 text-gold-light/16" />
        </div>
      </div>

      <Container className="py-20 text-center">
        <p className="animate-rise font-serif text-7xl leading-none text-gold-light italic md:text-8xl">
          404
        </p>
        <h1 className="animate-rise mt-6 text-h1 font-semibold" style={{ animationDelay: "0.1s" }}>
          This page took <em>a different path.</em>
        </h1>
        <p
          className="animate-rise mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/75 md:text-base"
          style={{ animationDelay: "0.2s" }}
        >
          The page you&apos;re looking for may have moved, or never existed. Let&apos;s get you
          back to solid ground.
        </p>
        <div
          className="animate-rise mt-9 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: "0.3s" }}
        >
          <Button href="/" arrow>
            Back to Home
          </Button>
          <Button href="/ventures" variant="outlineDark">
            Explore Our Ventures
          </Button>
        </div>
      </Container>
    </main>
  );
}
