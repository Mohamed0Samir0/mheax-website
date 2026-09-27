import { Link, useParams } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { caseStudies, getCaseStudy } from "../data/work";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getCaseStudy(slug ?? "");

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 pt-32 text-center">
        <p className="text-[var(--color-paper-dim)]">This strategy doesn't exist.</p>
        <Button to="/work">Back to Work</Button>
      </div>
    );
  }

  const currentIndex = caseStudies.findIndex((c) => c.slug === project.slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  const customerRows: [string, string][] = [
    ["Problem", project.customer.problem],
    ["Desire", project.customer.desire],
    ["Objection", project.customer.objection],
    ["Existing Belief", project.customer.belief],
    ["Buying Motivation", project.customer.motivation],
  ];

  return (
    <article className="pb-28 pt-36 md:pt-44">
      <Container>
        <Link to="/work" className="text-sm text-[var(--color-paper-dim)] hover:text-[var(--color-gold)]">
          ← Back to Work
        </Link>

        {/* 01 — The Brand */}
        <div className="mt-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
            01 — The Brand
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.1] text-[var(--color-paper)] sm:text-5xl md:text-6xl">
            {project.brand}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-2 text-sm text-[var(--color-paper-dim)]">
            <span><span className="text-[var(--color-paper)]">Industry:</span> {project.industry}</span>
            <span><span className="text-[var(--color-paper)]">Project Type:</span> {project.projectType}</span>
          </div>
        </div>

        <div
          className="relative mt-12 w-full overflow-hidden border border-[var(--color-line)] bg-[var(--color-ink-soft)] md:mt-16"
          style={{ aspectRatio: project.imageAspect }}
        >
          <img
            src={project.image}
            alt={`${project.brand} — ${project.tagline} creative concept`}
            className="h-full w-full object-cover"
          />
        </div>

        {/* 02 — The Challenge */}
        <Section number="02" title="The Challenge">
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-paper-dim)]">{project.challenge}</p>
        </Section>

        {/* 03 — The Customer */}
        <Section number="03" title="The Customer">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
            {customerRows.map(([label, value]) => (
              <div key={label} className="bg-[var(--color-ink)] p-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">{label}</p>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-paper-dim)]">{value}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 04 — The Insight */}
        <Section number="04" title="The Insight">
          <p className="max-w-3xl font-display text-2xl leading-snug text-[var(--color-paper)] md:text-3xl">
            {project.insight}
          </p>
        </Section>

        {/* 05 — The Angle */}
        <Section number="05" title="The Angle">
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-paper-dim)]">{project.angle}</p>
        </Section>

        {/* 06 — The Big Idea */}
        <Section number="06" title="The Big Idea">
          <p className="max-w-3xl border-l-2 border-[var(--color-gold)] pl-6 font-display text-2xl leading-snug text-[var(--color-paper)] md:text-3xl">
            {project.bigIdea}
          </p>
        </Section>

        {/* 07 — The Copy */}
        <Section number="07" title="The Copy">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">Hooks</p>
              <ul className="mt-4 space-y-3">
                {project.copy.hooks.map((h) => (
                  <li key={h} className="text-base leading-relaxed text-[var(--color-paper)]">"{h}"</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">Headlines</p>
              <ul className="mt-4 space-y-3">
                {project.copy.headlines.map((h) => (
                  <li key={h} className="text-base leading-relaxed text-[var(--color-paper)]">{h}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">Primary Copy</p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--color-paper-dim)]">{project.copy.primary}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.copy.cta.map((cta) => (
              <span
                key={cta}
                className="rounded-full border border-[var(--color-gold)] px-4 py-2 text-sm text-[var(--color-gold)]"
              >
                {cta}
              </span>
            ))}
          </div>
        </Section>

        {/* 08 — Creative Direction */}
        <Section number="08" title="The Creative Direction">
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-paper-dim)]">{project.creativeDirection}</p>
        </Section>

        {/* 09 — Execution */}
        <Section number="09" title="The Execution">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.execution.map((e) => (
              <li
                key={e}
                className="border border-[var(--color-line)] p-6 text-base leading-relaxed text-[var(--color-paper-dim)]"
              >
                {e}
              </li>
            ))}
          </ul>
        </Section>

        {/* 10 — What This Demonstrates */}
        <Section number="10" title="What This Demonstrates">
          <div className="space-y-5 max-w-3xl">
            <p className="text-base leading-relaxed text-[var(--color-paper-dim)]">
              <span className="text-[var(--color-paper)]">Messaging — </span>{project.demonstrates.messaging}
            </p>
            <p className="text-base leading-relaxed text-[var(--color-paper-dim)]">
              <span className="text-[var(--color-paper)]">Positioning — </span>{project.demonstrates.positioning}
            </p>
            <p className="text-base leading-relaxed text-[var(--color-paper-dim)]">
              <span className="text-[var(--color-paper)]">Creative Thinking — </span>{project.demonstrates.creative}
            </p>
            <p className="text-base leading-relaxed text-[var(--color-paper-dim)]">
              <span className="text-[var(--color-paper)]">Customer Understanding — </span>{project.demonstrates.understanding}
            </p>
            <p className="text-base leading-relaxed text-[var(--color-paper-dim)]">
              <span className="text-[var(--color-paper)]">Conversion Structure — </span>{project.demonstrates.structure}
            </p>
          </div>
        </Section>

        <div className="mt-28 flex flex-col items-start justify-between gap-8 border-t border-[var(--color-line)] pt-14 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">Next Strategy</p>
            <Link to={`/work/${next.slug}`} className="mt-3 block font-display text-3xl text-[var(--color-paper)] hover:text-[var(--color-gold)] md:text-4xl">
              {next.brand} →
            </Link>
          </div>
          <Button to="/#contact">Start a Project</Button>
        </div>
      </Container>
    </article>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-20 border-t border-[var(--color-line)] pt-14">
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
        {number} — {title}
      </p>
      {children}
    </div>
  );
}
