import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import FeatureCards from "../components/sections/FeatureCards.jsx";
import Button from "../components/ui/Button.jsx";

export default function Home() {
  return (
    <div id="main-content">
      <Section
        as="section"
        className="min-h-[80vh] grid place-items-center text-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]"
      >
        <Container>
          <h1 className="text-4xl sm:text-5xl lg:text-6x1 font-bold leading-tight">
            Que rollo gente!! Mi nombre es Ivan.
          </h1>
          <p className="mt-4 max-w-prose mx-auto text-white/80 text-lg">
            Soy un programador de software, este es my portafolio
          </p>
          <div className="flex mt-8 flex-wrap justify-center gap-4">
            <Button as="a" href="/portafolio">
              Echale un vistaso a lo que eh creado
            </Button>
            <Button as="a" href="resume" variant="secondary">
              Descarga mi "Resume"
            </Button>
          </div>
        </Container>
      </Section>
      <FeatureCards />
    </div>
  );
}
