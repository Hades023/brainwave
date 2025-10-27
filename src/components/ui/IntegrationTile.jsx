export default function IntegrationTile({ emoji, name, blurb }) {
  return (
    <article className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10 hover:shadow-lg hover:shadow-black/20">
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden>{emoji}</span>
        <h3 className="text-base font-semibold">{name}</h3>
      </div>
      <p className="mt-2 text-sm text-white/80">{blurb}</p>
      <div className="mt-3 text-xs text-white/70 opacity-0 transition group-hover:opacity-100">Connect →</div>
    </article>
  );
}
