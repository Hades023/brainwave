import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import featureImg from "../../assets/feature/feature-a.svg";

export default function FeatureSplitA() {
  return (
    <Section aria-labelledby="feature-a-heading">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 id="feature-a-heading" className="text-2xl sm:text-3xl font-bold">
              Summaries, answers, and insights — instantly
            </h2>
            <p className="mt-3 text-white/80">
              Drop in content and get clear explanations, bullet points, or a quick summary.
              It’s built for speed and clarity, right when you need it.
            </p>

            <ul className="mt-4 space-y-2 text-white/80">
              <li className="flex items-start gap-2"><span aria-hidden>✔️</span><span>Summarize long PDFs and docs</span></li>
              <li className="flex items-start gap-2"><span aria-hidden>✔️</span><span>Extract action items and deadlines</span></li>
              <li className="flex items-start gap-2"><span aria-hidden>✔️</span><span>Ask follow-up questions in plain English</span></li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a href="/sign-up" className="rounded-lg bg-white text-black px-5 py-2.5 font-medium hover:opacity-90 transition">
                Try it free
              </a>
              <a href="/features" className="rounded-lg ring-1 ring-white/30 px-5 py-2.5 hover:bg-white/10 transition">
                See features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={featureImg}
                alt="Product interface showing quick summaries and insights"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -inset-2 rounded-2xl opacity-20 blur-2xl bg-white/10" aria-hidden />
          </div>
        </div>
      </Container>
    </Section>
  );
}
