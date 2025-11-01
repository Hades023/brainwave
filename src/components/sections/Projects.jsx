// src/components/sections/Projects.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import { projects } from "../../data/projects.js";

export default function Projects() {
  return (
    <Section aria-labelledby="projects-heading">
      <Container>
        {/* Header */}
        <header className="max-w-2xl">
          <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold">
            My Portfolio
          </h2>
          <h3 className="mt-2 text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget
            finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada
          </h3>
        </header>

        {/* Grid layout */}
        <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {projects.map((p) => (
            <li key={p.id}>
              <ProjectCard image={p.image} title={p.title} blurb={p.blurb} href={p.href} />
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="/work"
            className="rounded-lg ring-1 ring-white/30 px-6 py-3 text-white hover:bg-white/10 transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            View More of My Work
          </a>
        </div>
      </Container>
    </Section>
  );
}
