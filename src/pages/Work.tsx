import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { WorkCard } from "../components/home/WorkCard";
import { caseStudies } from "../data/work";

export default function Work() {
  return (
    <div className="pb-28 pt-36 md:pt-44">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          supporting="A selection of independent projects and campaign concepts exploring how stronger messaging and creative strategy can improve the way a product is communicated."
        />

        <div className="mt-14 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 md:gap-8">
          {caseStudies.map((project, i) => (
            <WorkCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}
