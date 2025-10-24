import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import FeatureCard from "../ui/FeatureCard";
import { features } from "../../data/features.js";

export default function FeatureCards() {
  return (
    <Section aria-labelledby="features-heading">
      <Container>
        <header className="">
          <h2 id="features-headings">Powerful Features, simple UI</h2>
          <p className="mt-2 text-white/80">
            Everything you need to understand, create, and collaborate — without
            complexity.
          </p>
        </header>
        <ul
          className="mt-8 grid gap-6 sm:gap-8 grid-cols-2 lg:grid-col-3 xl-grid-col-4"
          role="list"
        >
          {features.map((f) => (
            <li key={f.id}>
              <FeatureCard icon={f.icon} title={f.title} blurb={f.blurb} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
