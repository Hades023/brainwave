export default function MilestoneCard({ quarter, title, blurb, done }) {
  return (
    <article
      className={[
        "rounded-xl border p-5 transition",
        done ? "border-white/20 bg-white/10" : "border-white/10 bg-white/5 opacity-80",
      ].join(" ")}
    >
      <header className="flex items-center justify-between">
        <span className="text-sm font-medium text-white/70">{quarter}</span>
        <span
          className={["inline-block h-3 w-3 rounded-full", done ? "bg-green-400" : "bg-gray-500"].join(" ")}
          aria-label={done ? "Completed" : "Upcoming"}
        />
      </header>

      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/80">{blurb}</p>
    </article>
  );
}
