import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { WorkCard } from "./WorkCard";
import { caseStudies } from "../../data/work";
import { Button } from "../ui/Button";

export function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Work"
            supporting="A selection of advertising, landing-page, email, and creative concepts developed around clearer customer-focused messaging."
          />
          <Button to="/work" variant="ghost" className="hidden md:inline-flex">
            View All Work
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 md:gap-8">
          {caseStudies.map((project, i) => (
            <WorkCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Button to="/work" variant="ghost">View All Work</Button>
        </div>
      </Container>
    </section>
  );
}
