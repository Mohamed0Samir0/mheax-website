import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/images/hero-texture.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-ink)]/40 via-[var(--color-ink)]/80 to-[var(--color-ink)]" />

      <Container className="relative">
        <div className="animate-fade-up max-w-4xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-gold)]">
            M.Heax — Conversion Creative
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.08] text-balance text-[var(--color-paper)] sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            Conversion-focused websites, copy, and creative strategy.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-paper-dim)] md:text-xl">
            I help brands turn what they sell into clearer messaging, stronger creative ideas, and
            websites built to move people toward action.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button to="/work" variant="primary">View My Work</Button>
            <Button
              variant="secondary"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start a Project
            </Button>
          </div>

          <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-paper-dim)]">
            Copy first. Creative second. Conversion always.
          </p>
        </div>
      </Container>
    </section>
  );
}
