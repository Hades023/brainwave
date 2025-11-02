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
              Joe Anonymous
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

        {/* External Links Section */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Social Links */}
            <div className="text-center md:text-left">
              <h3 className="footer-heading">Connect With Me</h3>
              <ul className="flex flex-col md:flex-row gap-3 md:gap-4 text-sm">
                <li>
                  <a
                    href="https://www.linkedin.com/in/cbhayes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-muted inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/cbhayes77/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-muted inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cbhayesphotos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-muted inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 20.25c-2.19 0-3.967-1.777-3.967-3.967s1.777-3.967 3.967-3.967 3.967 1.777 3.967 3.967-1.777 3.967-3.967 3.967zm7.718 0c-2.19 0-3.967-1.777-3.967-3.967s1.777-3.967 3.967-3.967 3.967 1.777 3.967 3.967-1.777 3.967-3.967 3.967z" />
                    </svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:your.email@example.com" className="nav-link-muted inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    Email
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="nav-link-muted inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.653.349 2.233.913l1.658 1.658a3 3 0 010 4.243L8.105 9.971a1.5 1.5 0 00-.27 1.706l3.236 6.472a1.5 1.5 0 001.706.27l1.658-1.658a3 3 0 014.243 0l1.658 1.658c.564.58.913 1.373.913 2.233V22.5a3 3 0 01-3 3h-3c-9.941 0-18-8.059-18-18V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Phone
                  </a>
                </li>
              </ul>
            </div>

            {/* Photography Portfolio Links */}
            <div className="text-center md:text-right">
              <h3 className="footer-heading">Photography Portfolio</h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <a
                    href="https://www.cbhayesphotos.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-muted"
                  >
                    Landscape Photography
                  </a>
                </li>
                <li>
                  <a
                    href="http://cbhayesstudios.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-muted"
                  >
                    Branding Photography
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright line - centered */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Joe Anonymous. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
