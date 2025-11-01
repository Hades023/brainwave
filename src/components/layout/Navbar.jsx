import { useState } from "react";
import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu.jsx";

const links = [
  { to: "/about", label: "About Me" },
  { to: "/work", label: "Portfolio" },
  { to: "/resume", label: "Resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
      <Container className="flex h-16 items-center">
        {/* Left: brand (flex-1) */}
        <div className="flex-1 flex justify-start">
          <a href="/" aria-label="Home — Joe Anonymous" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded bg-white/80" aria-hidden />
            <span className="text-white font-semibold">Joe Anonymous</span>
          </a>
        </div>

        {/* Center: nav (flex-none, stays centered) */}
        <nav className="flex justify-center flex-none text-center">
          <ul className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `transition hover:text-white ${isActive ? "text-white" : ""}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: CTA / mobile button (flex-1) */}
        <div className="flex-1 flex justify-end">
          {/* Desktop CTA */}
          <a
            href="/contact"
            className="hidden md:inline-block rounded-lg px-4 py-2 text-sm font-medium text-black bg-white hover:opacity-90 transition"
          >
            Contact Me
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded px-3 py-2 ring-1 ring-white/30 text-white/90 ml-2"
            aria-label="Open menu"
            aria-expanded={open ? "true" : "false"}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </Container>

      {/* Mobile slide-over */}
      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </header>
  );
}
