import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function BehindMHeax() {
  return (
    <section className="border-t border-[var(--color-line)] py-24 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
            Behind M.Heax
          </p>
          <p className="font-display text-2xl leading-snug text-[var(--color-paper)] md:text-3xl">
            M.Heax is my independent creative practice, built around conversion copywriting, creative
            strategy, and conversion-focused web experiences.
          </p>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-paper-dim)] md:text-lg">
            I'm interested in the point where customer psychology, clear messaging, and creative
            execution meet.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="https://www.linkedin.com/in/mohamed-samir-52bb5928b/" variant="secondary">
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
