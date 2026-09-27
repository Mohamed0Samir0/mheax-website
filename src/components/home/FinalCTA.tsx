import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function FinalCTA() {
  return (
    <section className="border-t border-[var(--color-line)] py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium leading-tight text-balance text-[var(--color-paper)] sm:text-4xl md:text-5xl">
            Have a product worth explaining?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-paper-dim)] md:text-xl">
            Let's make the message clearer, the idea stronger, and the path to action easier.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start a Project
            </Button>
            <Button to="/work" variant="secondary">View My Work</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
