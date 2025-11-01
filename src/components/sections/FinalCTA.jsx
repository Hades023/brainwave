import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";

export default function FinalCTA() {
  return (
    <Section aria-labelledby="cta-heading" className="bg-gradient-to-b from-white/5 to-transparent text-center py-20">
      <Container>
        <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold">
          Like what you see?
        </h2>
        <p className="mt-3 text-white/80 max-w-prose mx-auto">Contact me and let's chat.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="rounded-lg bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition"
          >
            Contact me
          </a>
        </div>
      </Container>
    </Section>
  );
}
