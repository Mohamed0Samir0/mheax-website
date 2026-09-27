import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

const services = [
  {
    title: "Conversion Copywriting",
    description: "Paid ads, landing pages, email, headlines, messaging.",
  },
  {
    title: "Creative Strategy",
    description: "Customer insight, angles, hooks, ideas, campaign concepts.",
  },
  {
    title: "Conversion-Focused Websites",
    description: "Website strategy, copy, structure, Framer development, CTA flows.",
  },
  {
    title: "Creative Direction",
    description: "Ad concepts, visual direction, AI-assisted creative thinking.",
  },
];

export default function Services() {
  return (
    <div className="pb-28 pt-36 md:pt-44">
      <Container>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
          Services
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] text-balance text-[var(--color-paper)] sm:text-5xl md:text-6xl">
          Clearer messaging. Stronger ideas. Better conversion paths.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-paper-dim)] md:text-xl">
          M.Heax works across copy, creative strategy, and websites — helping brands communicate the
          value of what they sell and make the next step easier to take.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
          {services.map((service, i) => (
            <div key={service.title} className="border-t border-[var(--color-line)] pt-8">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 font-display text-2xl font-medium text-[var(--color-paper)] md:text-3xl">
                {service.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-paper-dim)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-28 border-t border-[var(--color-line)] pt-16 text-center">
          <h2 className="font-display text-3xl font-medium text-[var(--color-paper)] md:text-4xl">
            Not sure what you need?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-paper-dim)]">
            Start with the problem. I'll help identify where the message, creative, or website needs
            work.
          </p>
          <div className="mt-9 flex justify-center">
            <Button to="/#contact">Start a Project</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
