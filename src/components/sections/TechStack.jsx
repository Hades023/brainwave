// src/components/sections/TechStack.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import { techstack } from "../../data/techstack.js";
// Import all icons from react-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCode, // Alternative for VS Code
  FaEdit, // Alternative for Cursor
  FaPython,
  FaGitAlt,
  FaVuejs,
  FaFigma,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaFrog, // For accessibility testing
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiWebpack,
  SiAdobephotoshop,
  SiAdobelightroomclassic,
  SiGoogleanalytics,
  SiAdobe,
  SiSemrush,
  SiGooglesearchconsole,
} from "react-icons/si";
import { DiW3C } from "react-icons/di";
import { PiWaveSineBold } from "react-icons/pi";

// Icon mapping for clean lookup
const iconMap = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJs,
  typescript: SiTypescript,
  react: FaReact,
  "react-native": FaReact,
  bootstrap: FaBootstrap,
  vue: FaVuejs,
  tailwind: SiTailwindcss,
  nextjs: SiNextdotjs,
  node: FaNodeJs,
  python: FaPython,
  git: FaGitAlt,
  figma: FaFigma,
  photoshop: SiAdobephotoshop,
  lightroom: SiAdobelightroomclassic,
  adobe: SiAdobe,
  w3c: DiW3C,
  analytics: SiGoogleanalytics,
  searchconsole: SiGooglesearchconsole,
  semrush: SiSemrush,
  waveform: PiWaveSineBold,
  accessibility: FaFrog, // Creative use of frog icon for accessibility
  github: FaGithub,
  npm: FaNpm,
  webpack: SiWebpack,
  vscode: FaCode, // Alternative icon for VS Code
  cursor: FaEdit, // Alternative icon for Cursor
};

export default function TechStack() {
  return (
    <Section aria-labelledby="techstack-heading" className="py-12 sm:py-16">
      <Container>
        <header className="text-center">
          <h2 id="techstack-heading" className="text-2xl sm:text-3xl font-bold">
            My Tech Stack
          </h2>
          <h3 className="mt-2 text-white/70">Tools I&apos;ve been using lately</h3>
        </header>

        {/* Grid: 3/4/5 columns responsive */}
        <ul role="list" className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
          {techstack.map((tech) => {
            const IconComponent = iconMap[tech.iconId];
            return (
              <li key={tech.id} className="text-center">
                <a
                  href={tech.href}
                  title={tech.label}
                  aria-label={tech.label}
                  className="group block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl transition group-hover:scale-105 group-active:scale-95">
                    {IconComponent && (
                      <IconComponent
                        className="h-12 w-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: tech.color }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <span className="mt-2 block text-xs text-white/60 group-hover:text-white/80 transition-colors">
                    {tech.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
