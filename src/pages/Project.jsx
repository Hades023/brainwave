import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import { projects } from "../data/projects.js";

export default function Project() {
  const { slug } = useParams(); // expects id like "p1", "p2"...
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <Section>
        <Container>
          <h1 className="text-2xl font-bold">Project not found</h1>
          <p className="mt-2 text-white/80">We couldn't find a project at /work/{slug}</p>
          <div className="mt-6">
            <button 
              onClick={() => navigate(-1)}
              className="rounded-lg ring-1 ring-white/30 px-4 py-2 hover:bg-white/10 transition"
            >
              Go Back
            </button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <nav className="text-sm text-white/70">
          <button
            onClick={() => navigate(-1)}
            className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
          >
            ← Go Back
          </button>
        </nav>

        <header className="mt-4 max-w-3xl">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="mt-2 text-white/80">{project.blurb}</p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src={project.image}
              alt={`${project.title} hero`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-white/80">
              Replace this with a short case study: problem, your role, tools, constraints, outcome.
            </p>

            <h3 className="mt-6 font-semibold">Highlights</h3>
            <ul className="mt-2 list-disc pl-5 text-white/80 space-y-1">
              <li>Goal / KPI impact</li>
              <li>Key UX or dev contribution</li>
              <li>Notable constraint or insight</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
