import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function Testimonials({ headingLevel: H = "h2", mode = "grid" }) {
  return (
    <Section aria-labelledby="testimonials-heading">
      <Container>
        <header className="max-w-2xl">
          <H id="testimonials-heading" className="text-2xl sm:text-3xl font-bold">
            Testimonials
          </H>
          <p className="mt-2 text-white/80">A few quotes from people I've worked for and a few I've worked with.</p>
        </header>

        {mode === "grid" ? (
          <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {testimonials.map((t) => (
              <li key={t.id}>
                <TestimonialCard quote={t.quote} author={t.author} role={t.role} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 overflow-x-auto" aria-label="Testimonials list">
            <ul className="flex snap-x snap-mandatory gap-4 pr-4" role="list">
              {testimonials.map((t) => (
                <li key={t.id} className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[33%] snap-start">
                  <TestimonialCard quote={t.quote} author={t.author} role={t.role} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Section>
  );
}
