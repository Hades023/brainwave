import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

import LogoTicker from "../components/sections/LogoTicker.jsx";
import FeatureCards from "../components/sections/FeatureCards.jsx";
import Integrations from "../components/sections/Integrations.jsx";
import FeatureSplitA from "../components/sections/FeatureSplitA.jsx";
import CreatorShowcase from "../components/sections/CreatorShowcase.jsx";
import Pricing from "../components/sections/Pricing.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import Roadmap from "../components/sections/Roadmap.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";

export default function Home() {
  return (
    <main id="main-content">
      <Section as="section" className="min-h-[80vh] grid place-items-center text-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]">
        <Container>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Build smarter with modern AI</h1>
          <p className="mt-4 max-w-prose mx-auto text-white/80 text-lg">
            Ask questions, analyze content, and create faster—all in a simple, elegant UI.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/sign-up" className="rounded-lg bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition">
              Get started
            </a>
            <a href="/how-to-use" className="rounded-lg ring-1 ring-white/30 px-6 py-3 text-white hover:bg-white/10 transition">
              How it works
            </a>
          </div>
        </Container>
      </Section>

      <LogoTicker />
      <FeatureCards />
      <Integrations />
      <FeatureSplitA />
      <CreatorShowcase />
      <Pricing />
      <Testimonials />
      <Roadmap />
      <FinalCTA />
    </main>
  );
}
