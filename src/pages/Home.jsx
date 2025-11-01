import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import TechStack from "../components/sections/TechStack.jsx";
import Projects from "../components/sections/Projects.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import Clients from "../components/sections/Clients.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";

export default function Home() {
  return (
    <main id="main-content">
      <Section
        as="section"
        aria-labelledby="intro-heading"
        className="min-h-[80vh] grid place-items-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]"
      >
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Text Content - 2/3 */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 id="intro-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, my name is Joe Anonymous. I create things for the web
              </h1>

              <h2 className="mt-4 max-w-prose lg:mx-0 mx-auto text-white/80 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget
                finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere
                malesuada
              </h2>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap lg:justify-start justify-center gap-4">
                <a
                  href="/portfolio"
                  aria-label="Check out my work"
                  className="rounded-lg bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Check Out My Work
                </a>
                <a
                  href="/resume"
                  aria-label="Download my resume"
                  className="rounded-lg ring-1 ring-white/30 px-6 py-3 text-white hover:bg-white/10 transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Download My Resume
                </a>
              </div>

              {/* Social links with placeholder SVGs */}
              <nav aria-label="Social links" className="mt-6">
                <ul className="flex items-center lg:justify-start justify-center gap-6 text-sm">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/placeholder"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1"
                      aria-label="LinkedIn (opens in a new tab)"
                    >
                      {/* LinkedIn icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.1 1 2.5 1s2.48 1 2.48 2.5zM.02 8.98H5V24H.02zM8.98 8.98h4.6v2.06h.06c.64-1.2 2.2-2.46 4.54-2.46 4.85 0 5.74 3.18 5.74 7.3V24H18V16.2c0-1.86-.04-4.24-2.58-4.24-2.6 0-3 2.02-3 4.1V24H8.98V8.98z" />
                      </svg>
                      LinkedIn
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://github.com/placeholder"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1"
                      aria-label="GitHub (opens in a new tab)"
                    >
                      {/* GitHub icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.38-3.87-1.38-.52-1.33-1.27-1.68-1.27-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.73-1.54-2.55-.3-5.23-1.28-5.23-5.68 0-1.26.46-2.3 1.2-3.1-.12-.3-.52-1.5.12-3.14 0 0 .98-.32 3.2 1.2a10.95 10.95 0 0 1 5.82 0c2.22-1.52 3.2-1.2 3.2-1.2.64 1.64.24 2.84.12 3.14.76.8 1.2 1.84 1.2 3.1 0 4.42-2.68 5.37-5.24 5.67.42.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.54A10.53 10.53 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                      </svg>
                      GitHub
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/placeholder"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1"
                      aria-label="Instagram (opens in a new tab)"
                    >
                      {/* Instagram icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1.1.5 1.6 1s.8 1 1 1.6c.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1.1-1 1.6s-1 .8-1.6 1c-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1.1-.5-1.6-1s-.8-1-.9-1.6c-.2-.5-.3-1.2-.4-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1.1 1-1.6s1-.8 1.6-1c.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.6.2-2 .3-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.1.4-.3.9-.3 2-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.6.3 2 .2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.1.9.3 2 .3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.6-.2 2-.3.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.1-.4.3-.9.3-2 .1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.6-.3-2-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.1-.9-.3-2-.3-1.3-.1-1.7-.1-4.8-.1zm0 3.3a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 10.7a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4zm5.8-10.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                      Instagram
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Circular Image - 1/3 */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-white/10 border-4 border-white/20">
                <img
                  src="https://picsum.photos/320?random=100"
                  alt="Joe Anonymous"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <TechStack />
      <Projects limit={6} />
      <Testimonials limit={3} />
      <Clients />
      <FinalCTA />
    </main>
  );
}
