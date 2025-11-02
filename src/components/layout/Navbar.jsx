import { useState } from "react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu.jsx";

const links = [
  { to: "/about", label: "About Me" },
  { to: "/portfolio", label: "Portfolio" },
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
            <span className="text-white font-semibold">Joe Anonymous</span>
          </a>
        </div>

        {/* Center: nav (flex-none, stays centered) */}
        <nav className="flex justify-center flex-none text-center">
          <ul className="hidden md:flex items-center gap-6 body-small">
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
          <Button as="a" href="/contact" variant="primary" size="sm" className="hidden md:inline-flex">
            Contact Me
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="secondary"
            size="sm"
            className="md:hidden ml-2"
            aria-label="Open menu"
            aria-expanded={open ? "true" : "false"}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            ☰
          </Button>
        </div>
      </Container>

      {/* Mobile slide-over */}
      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </header>
  );
}
