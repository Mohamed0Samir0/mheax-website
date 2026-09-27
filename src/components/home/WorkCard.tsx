import { Link } from "react-router-dom";
import type { CaseStudy } from "../../data/work";

export function WorkCard({ project, index }: { project: CaseStudy; index: number }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group flex flex-col overflow-hidden border border-[var(--color-line)] bg-[var(--color-ink)] transition-colors duration-300 hover:border-[var(--color-gold)]"
    >
      <div
        className="relative w-full overflow-hidden bg-[var(--color-ink-soft)]"
        style={{ aspectRatio: project.imageAspect }}
      >
        <img
          src={project.image}
          alt={`${project.brand} — ${project.tagline} strategy cover`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8 md:p-10">
        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-sm text-[var(--color-paper-dim)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-right text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            {project.industry}
          </span>
        </div>

        <div className="mt-8 md:mt-10">
          <h3 className="font-display text-2xl font-medium text-[var(--color-paper)] transition-colors duration-300 group-hover:text-[var(--color-gold)] sm:text-3xl">
            {project.brand}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-paper-dim)] md:text-base">
            {project.description}
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-paper)] transition-colors duration-300 group-hover:text-[var(--color-gold)]">
            View Strategy
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
