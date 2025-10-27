import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";

export default function FinalCTA() {
  return (
    <Section aria-labelledby="cta-heading" className="bg-gradient-to-b from-white/5 to-transparent text-center py-20">
      <Container>
        <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold">Ready to get started?</h2>
        <p className="mt-3 text-white/80 max-w-prose mx-auto">
          Create your free account today and start building with AI.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/sign-up" className="rounded-lg bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition">
            Sign up free
          </a>
          <a href="/pricing" className="rounded-lg ring-1 ring-white/30 px-6 py-3 text-white hover:bg-white/10 transition">
            View plans
          </a>
        </div>
      </Container>
    </Section>
  );
}
