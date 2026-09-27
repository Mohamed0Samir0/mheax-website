import { cn } from "../../utils/cn";

export function SectionHeading({
  eyebrow,
  title,
  supporting,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  supporting?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-medium leading-[1.15] text-balance text-[var(--color-paper)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {supporting && (
        <p className="mt-5 text-base leading-relaxed text-[var(--color-paper-dim)] md:text-lg">
          {supporting}
        </p>
      )}
    </div>
  );
}
