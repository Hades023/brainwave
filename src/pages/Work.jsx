import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import ProjectCard from "../components/ui/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Work() {
  return (
    <Section aria-labelledby="work-heading">
      <Container>
        <header className="max-w-2xl">
          <h1 id="work-heading" className="text-3xl font-bold">
            My Work
          </h1>
          <p className="mt-2 text-white/80">Click any card to view details.</p>
        </header>

        <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {projects.map((p) => (
            <li key={p.id}>
              <ProjectCard image={p.image} title={p.title} blurb={p.blurb} href={p.href} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
