import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import { clients } from "../../data/clients.js";

export default function Clients() {
  return (
    <Section aria-labelledby="clients-heading">
      <Container>
        {/* Header */}
        <header className="max-w-2xl mx-auto text-center">
          <h2 id="clients-heading" className="heading-section">
            My Clients
          </h2>
          <p className="mt-2 text-white/80">
            Trusted by leading companies and organizations to deliver exceptional results
          </p>
        </header>

        {/* Client logos grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 hover-grayscale"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full max-h-20 w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
