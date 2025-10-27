export default function PlanCard({ name, price, period, cta, features, featured = false }) {
  return (
    <article
      className={[
        "rounded-2xl border p-6 transition",
        featured
          ? "border-white/20 bg-white/10 shadow-lg shadow-black/20 ring-1 ring-white/20"
          : "border-white/10 bg-white/5 hover:bg-white/10",
      ].join(" ")}
      aria-label={`${name} plan`}
    >
      <header>
        {featured && (
          <span className="inline-block rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white/90">
            Most popular
          </span>
        )}
        <h3 className="mt-3 text-xl font-semibold">{name}</h3>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-3xl font-bold">
            {typeof price === "number" ? `$${price}` : price}
          </span>
          {period && <span className="text-sm text-white/70">{period}</span>}
        </div>
      </header>
      <ul className="mt-4 space-y-2 text-sm text-white/80" role="list">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span aria-hidden>✔️</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="/sign-up"
        className={[
          "mt-6 inline-flex w-full justify-center rounded-lg px-4 py-2.5 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
          featured ? "bg-white text-black hover:opacity-90" : "ring-1 ring-white/30 hover:bg-white/10",
        ].join(" ")}
      >
        {cta}
      </a>
    </article>
  );
}
