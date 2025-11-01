import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ open, onClose, links }) {
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Close on ESC + lock scroll while open + focus the close button
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    // Focus close button for accessibility
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" onClick={onClose} />

      {/* Slide-over panel */}
      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="relative ml-auto h-full w-80 max-w-[80%] bg-black border-l border-white/10 shadow-xl shadow-black/30"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <a href="/" className="flex items-center gap-2" onClick={onClose}>
            <span className="inline-block h-6 w-6 rounded bg-white/80" aria-hidden />
            <span className="text-white font-semibold">Joe Anonymous</span>
          </a>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="rounded px-3 py-2 ring-1 ring-white/30 text-white/90"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2" role="list">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [
                      "block rounded px-3 py-2 text-sm transition",
                      isActive ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white",
                    ].join(" ")
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Contact CTA */}
          <a
            href="/contact"
            onClick={onClose}
            className="mt-4 inline-flex w-full justify-center rounded-lg bg-white px-4 py-2.5 font-medium text-black hover:opacity-90 transition"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </div>
  );
}
