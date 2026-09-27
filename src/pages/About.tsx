import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

const companyServices = [
  "Conversion Copywriting",
  "Creative Strategy",
  "Conversion-Focused Websites",
  "Landing Pages",
  "Email Marketing",
  "Creative Concepts",
  "Visual Direction",
];

export default function About() {
  return (
    <div className="pb-28 pt-36 md:pt-44">
      <Container>
        {/* Personal */}
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
          About
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] text-balance text-[var(--color-paper)] sm:text-5xl md:text-6xl">
          Mohamed Samir
        </h1>
        <p className="mt-3 text-lg text-[var(--color-paper-dim)]">
          Conversion Copywriter &amp; Creative Strategist
        </p>

        <div className="mt-12 grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.3fr] md:gap-20">
          <div>
            <img
              src="/images/about/mohamed-samir.jpg"
              alt="Mohamed Samir"
              className="aspect-[4/5] w-full border border-[var(--color-line)] object-cover"
            />
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
              <div className="mt-4">
                <Button to="/#contact" variant="secondary">Work With Me</Button>
              </div>
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
              Good products don't always need louder advertising. They need clearer reasons to act.
            </p>
          </div>
        </div>

        {/* Company */}
        <div className="mt-32 border-t border-[var(--color-line)] pt-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
            The Studio
          </p>
          <h2 className="max-w-3xl font-display text-3xl font-medium leading-[1.15] text-balance text-[var(--color-paper)] sm:text-4xl md:text-5xl">
            M.Heax — Conversion-focused websites, copy, and creative strategy.
          </h2>

          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-[var(--color-paper-dim)]">
            <p>
              M.Heax is an independent creative studio focused on helping brands communicate more
              clearly and convert more effectively.
            </p>
            <p>
              The work sits at the intersection of conversion copywriting, creative strategy, and
              website experience.
            </p>
            <p>
              That includes paid ad copy, landing pages, email, creative concepts, and
              conversion-focused websites built around the customer, the offer, and the action that
              matters.
            </p>
            <p>
              The process starts with customer understanding — identifying the problem, desire,
              belief, objection, and insight — then turning those findings into stronger messaging,
              clearer creative ideas, and practical execution.
            </p>
            <p>
              M.Heax is intentionally focused. Copy and strategy lead. Visuals and execution support
              the idea.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {companyServices.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[var(--color-line)] px-3.5 py-1.5 text-xs text-[var(--color-paper-dim)]"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <Button to="/#contact">Work With M.Heax</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
