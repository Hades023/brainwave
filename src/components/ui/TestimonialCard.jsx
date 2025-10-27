export default function TestimonialCard({ quote, author, role }) {
  return (
    <figure className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
      <blockquote className="text-white/90">“{quote}”</blockquote>
      <figcaption className="mt-3 text-sm text-white/70">
        <span className="font-medium text-white/90">{author}</span> — {role}
      </figcaption>
    </figure>
  );
}
