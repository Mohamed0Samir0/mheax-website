import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function About() {
  return (
    <section id="about" className="border-t border-[var(--color-line)] py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.3fr] md:gap-20">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
              About
            </p>

            <img
              src="/images/about/mohamed-samir.jpg"
              alt="Mohamed Samir"
              className="aspect-[4/5] w-full border border-[var(--color-line)] object-cover"
            />

            <h2 className="mt-8 font-display text-3xl font-medium leading-tight text-[var(--color-paper)] md:text-4xl">
              Mohamed Samir
            </h2>
            <p className="mt-2 text-base text-[var(--color-paper-dim)]">
              Conversion Copywriter &amp; Creative Strategist
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a href="mailto:Samir@mheax.com" className="text-sm text-[var(--color-paper)] hover:text-[var(--color-gold)]">
                Samir@mheax.com
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-samir-52bb5928b/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[var(--color-paper)] hover:text-[var(--color-gold)]"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-10">
              <Button
                variant="secondary"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Work With Me
              </Button>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-paper-dim)] md:text-xl">
            <p>I'm Samir, an independent conversion copywriter and creative strategist.</p>
            <p>
              I work on paid ads, landing pages, email, and conversion-focused websites — combining
              customer research, direct-response copy, and creative thinking to make marketing
              clearer and easier to act on.
            </p>
            <p>
              When the idea needs more than copy alone, I also develop creative concepts and visual
              direction to help communicate the message.
            </p>
            <p>
              My approach is simple: understand the customer, find the strongest insight, build the
              right angle, and turn it into clear communication.
            </p>
            <p className="border-l-2 border-[var(--color-gold)] pl-5 text-base font-medium uppercase tracking-[0.05em] text-[var(--color-paper)] md:text-lg">
              Copy first. Strategy always. Visuals when they help sell the idea.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
