import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import ShowcaseCard from "../ui/ShowcaseCard.jsx";
import { showcase } from "../../data/showcase.js";

export default function CreatorShowcase() {
  const { hero, cards } = showcase;
  return (
    <Section aria-labelledby="creator-heading">
      <Container>
        <header className="max-w-2xl">
          <h2 id="creator-heading" className="text-2xl sm:text-3xl font-bold">Made for creators</h2>
          <p className="mt-2 text-white/80">
            From quick edits to full concepts, jumpstart your creative process.
          </p>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={hero.src}
                alt={hero.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {cards.map((c) => (
              <ShowcaseCard key={c.id} emoji={c.emoji} title={c.title} blurb={c.blurb} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
