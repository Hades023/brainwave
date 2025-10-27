import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import MilestoneCard from "../ui/MilestoneCard.jsx";
import { milestones } from "../../data/roadmap.js";

export default function Roadmap() {
  return (
    <Section aria-labelledby="roadmap-heading">
      <Container>
        <header className="max-w-2xl">
          <h2 id="roadmap-heading" className="text-2xl sm:text-3xl font-bold">Product roadmap</h2>
          <p className="mt-2 text-white/80">Here’s what we’ve built and what’s coming next.</p>
        </header>

        <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {milestones.map((m) => (
            <li key={m.id}>
              <MilestoneCard quarter={m.quarter} title={m.title} blurb={m.blurb} done={m.done} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
