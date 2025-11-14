import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const links = [
    { to: "/about", label: "About Me" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/resume", label: "Resume" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/70 backdrop-blur py-8 text-white/80">
      <Container>
        {/* Main footer content - similar to navbar layout but vertical on mobile */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
          {/* Left: Brand */}
          <div className="flex-1 text-center md:text-left">
            <a href="/" className="text-white font-semibold text-lg">
              Ivan Villagrana
            </a>
          </div>

          {/* Center: Navigation */}
          <nav className="flex-none" aria-label="Footer navigation">
            <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
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
        </div>
        {/* Copyright line - centered */}
        <div className="mt-6 pt-6 text-center">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Joe Anonymous. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
