export default function ProjectCard({ image, title, blurb, href = "#" }) {
  return (
    <article
      className="group h-[440px] rounded-xl border border-white/10 bg-white/5 p-0 overflow-hidden
                   transition hover:bg-white/10 hover:shadow-lg hover:shadow-black/20 focus-within:bg-white/10"
    >
      {/* Image */}
      <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
        <img
          src={image}
          alt={`${title} cover`}
          className="h-full w-full object-cover transition group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex h-[calc(440px- (440px*0.75))] flex-col p-4">
        <h4 className="text-base font-semibold">{title}</h4>
        <p className="mt-2 text-sm text-white/80 line-clamp-3">{blurb}</p>
        {/* Footer link pinned to bottom */}
        <div className="mt-auto pt-3">
          <a
            href={href}
            className="inline-block text-sm text-white/75 underline-offset-4 hover:underline
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
          >
            View Details →
          </a>
        </div>
      </div>
    </article>
  );
}
