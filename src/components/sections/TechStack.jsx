// src/components/sections/TechStack.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import { techstack } from "../../data/techstack.js";

export default function TechStack() {
  return (
    <Section aria-labelledby="techstack-heading" className="py-12 sm:py-16">
      <Container>
        <header className="text-center">
          <h2 id="techstack-heading" className="text-2xl sm:text-3xl font-bold">
            My Tech Stack
          </h2>
          <h3 className="mt-2 text-white/70">Tools I&apos;ve been using lately</h3>
        </header>

        {/* Grid: 3/4/5 columns responsive */}
        <ul role="list" className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
          {techstack.map((tech) => (
            <li key={tech.id} className="text-center">
              <a
                href={tech.href}
                title={tech.label}
                aria-label={tech.label}
                className="group block"
                target="_blank"
                rel="noreferrer"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl transition group-hover:scale-105 group-active:scale-95">
                  <img
                    src={tech.img}
                    alt={tech.label}
                    className="h-12 w-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <span className="mt-2 block text-xs text-white/60 group-hover:text-white/80 transition-colors">
                  {tech.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
