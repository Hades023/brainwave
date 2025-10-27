export default function ShowcaseCard({ emoji, title, blurb }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
      <div className="flex items-center gap-2">
        <span className="text-xl" aria-hidden>{emoji}</span>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="mt-1 text-sm text-white/80">{blurb}</p>
    </article>
  );
}
