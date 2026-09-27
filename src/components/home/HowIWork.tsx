import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Audience, problem, desire, objections, beliefs, alternatives.",
  },
  {
    number: "02",
    title: "Find the Insight",
    description: "Identify the strongest customer insight and the opportunity behind it.",
  },
  {
    number: "03",
    title: "Build the Message",
    description: "Develop the angle, value proposition, promise, mechanism, and core message.",
  },
  {
    number: "04",
    title: "Create",
    description: "Turn the strategy into copy, creative concepts, and website structure.",
  },
  {
    number: "05",
    title: "Refine",
    description: "Remove unnecessary complexity and make the message clearer, sharper, and easier to act on.",
  },
];

export function HowIWork() {
  return (
    <section className="border-t border-[var(--color-line)] py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="The Work Starts Before the Copy"
          supporting="Good conversion work starts with understanding why someone should care — not with writing the first headline."
        />

        <div className="mt-16 flex flex-col">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-1 gap-4 border-t border-[var(--color-line)] py-8 last:border-b md:grid-cols-[100px_1fr_1.4fr] md:items-center md:gap-10"
            >
              <span className="font-display text-2xl text-[var(--color-gold)]">{step.number}</span>
              <h3 className="font-display text-xl font-medium text-[var(--color-paper)] md:text-2xl">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-[var(--color-paper-dim)]">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
