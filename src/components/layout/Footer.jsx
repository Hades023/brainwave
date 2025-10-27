import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const links = [
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/how-to-use", label: "How to Use" },
    { to: "/roadmap", label: "Roadmap" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur py-10 text-white/70 text-sm">
      <Container className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <a href="/" className="font-semibold text-white">BrainGPT</a>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className="hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-center sm:text-right opacity-70">
          © {new Date().getFullYear()} BrainGPT. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
