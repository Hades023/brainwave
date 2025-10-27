import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import IntegrationTile from "../ui/IntegrationTile.jsx";
import { integrations } from "../../data/integrations.js";

export default function Integrations() {
  return (
    <Section aria-labelledby="integrations-heading">
      <Container>
        <header className="max-w-2xl">
          <h2 id="integrations-heading" className="text-2xl sm:text-3xl font-bold">Seamless integrations</h2>
          <p className="mt-2 text-white/80">Plug into the tools you already use and keep your flow uninterrupted.</p>
        </header>

        <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {integrations.map((i) => (
            <li key={i.id}>
              <IntegrationTile emoji={i.emoji} name={i.name} blurb={i.blurb} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
