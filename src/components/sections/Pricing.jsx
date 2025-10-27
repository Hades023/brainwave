import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import PlanCard from "../ui/PlanCard.jsx";
import { plans } from "../../data/pricing.js";

export default function Pricing({ headingLevel: H = "h2" }) {
  return (
    <Section aria-labelledby="pricing-heading">
      <Container>
        <header className="max-w-2xl">
          <H id="pricing-heading" className="text-2xl sm:text-3xl font-bold">Simple, flexible pricing</H>
          <p className="mt-2 text-white/80">Pick a plan that fits your workflow. Upgrade or cancel anytime.</p>
        </header>

        <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {plans.map((p) => (
            <li key={p.id}>
              <PlanCard
                name={p.name}
                price={p.price}
                period={p.period}
                cta={p.cta}
                features={p.features}
                featured={p.featured}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
