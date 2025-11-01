// src/components/sections/TechStack.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import { techstack } from "../../data/techstack.js";

/** Inline SVGs by id (keeps data file simple & swappable later) */
function IconById({ id }) {
  const cls = "h-12 w-12";
  switch (id) {
    case "html5":
      return (
        <svg viewBox="0 0 128 128" className={cls} aria-hidden="true">
          <path fill="#E34F26" d="M19 114L9 0h110l-10 114-45 14z" />
          <path fill="#EF652A" d="M64 117l36-10 9-101H64z" />
          <path fill="#fff" d="M64 52H47l-1-12h18V28H33l3 33h28zM64 88l-.1.03L49.5 84l-1-11H36l2 23 26 7 .1-.03z" />
          <path fill="#EBEBEB" d="M64 52V40h18l-1 12zM64 88v13l25-7 3-35H77l1 12h8l-1 11z" />
        </svg>
      );
    case "css3":
      return (
        <svg viewBox="0 0 128 128" className={cls} aria-hidden="true">
          <path fill="#1572B6" d="M19 114L9 0h110l-10 114-45 14z" />
          <path fill="#33A9DC" d="M64 117l36-10 9-101H64z" />
          <path fill="#fff" d="M64 52H46l-1-12h19V28H33l3 33h28zM64 89l-.1.03L49.3 85l-1-11H36l2 23 26 7 .1-.03z" />
          <path fill="#EBEBEB" d="M64 52V40h18l-1 12zM64 89v13l25-7 3-35H77l1 12h8l-1 11z" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 128 128" className={cls} aria-hidden="true">
          <rect width="128" height="128" rx="16" fill="#F7DF1E" />
          <text
            x="50%"
            y="62%"
            textAnchor="middle"
            fontFamily="Inter, Arial, sans-serif"
            fontWeight="700"
            fontSize="56"
            fill="#000"
          >
            JS
          </text>
        </svg>
      );
    case "react":
      return (
        <svg viewBox="-11 -11 22 22" className={cls} aria-hidden="true">
          <circle r="2" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="1">
            <ellipse rx="10" ry="4.5" />
            <ellipse rx="10" ry="4.5" transform="rotate(60)" />
            <ellipse rx="10" ry="4.5" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "react-native":
      return (
        <svg viewBox="-11 -11 22 22" className={cls} aria-hidden="true">
          <circle r="2" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="1">
            <ellipse rx="10" ry="4.5" />
            <ellipse rx="10" ry="4.5" transform="rotate(60)" />
            <ellipse rx="10" ry="4.5" transform="rotate(120)" />
          </g>
          <rect x="-8" y="-8" width="16" height="16" rx="3" fill="none" stroke="#61DAFB" strokeWidth=".8" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 48 24" className={cls} aria-hidden="true">
          <path fill="#38BDF8" d="M12 6c2-8 12-8 14 0 2 8 12 8 14 0-2 8-12 8-14 0-2-8-12-8-14 0z" />
          <path fill="#38BDF8" opacity=".8" d="M-2 18c2-8 12-8 14 0 2 8 12 8 14 0-2 8-12 8-14 0-2-8-12-8-14 0z" />
        </svg>
      );
    case "bootstrap":
      return (
        <svg viewBox="0 0 128 128" className={cls} aria-hidden="true">
          <rect width="128" height="128" rx="24" fill="#7952B3" />
          <text
            x="50%"
            y="62%"
            textAnchor="middle"
            fontFamily="Inter, Arial"
            fontWeight="700"
            fontSize="56"
            fill="#fff"
          >
            B
          </text>
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 64 64" className={cls} aria-hidden="true">
          <rect width="64" height="64" rx="12" fill="#111" />
          <path d="M20 20h8v24h-8z" fill="#fff" />
          <path d="M36 20h8v24h-8z" fill="#fff" opacity=".6" />
          <path d="M20 20l24 24" stroke="#fff" strokeWidth="3" />
        </svg>
      );
    case "node":
      return (
        <svg viewBox="0 0 64 64" className={cls} aria-hidden="true">
          <polygon points="32,4 60,18 60,46 32,60 4,46 4,18" fill="#68A063" />
          <text
            x="50%"
            y="61%"
            textAnchor="middle"
            fontFamily="Inter, Arial"
            fontWeight="700"
            fontSize="16"
            fill="#111"
          >
            node
          </text>
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="#111" />
          <path
            fill="#fff"
            d="M12 5c-4 0-6.5 2.5-6.5 5.7 0 2.5 1.6 4.6 3.8 5.4.3.1.4-.1.4-.3v-1c-1.6.4-2-.7-2-1-.3-.7-.8-.9-.8-.9-.6-.4 0-.4 0-.4.7 0 1.1.7 1.1.7.6 1.1 1.7.8 2.1.6.1-.5.3-.8.5-1-1.3-.1-2.7-.7-2.7-3 0-.7.2-1.3.7-1.7-.1-.2-.3-.9 0-1.8 0 0 .6-.2 1.9.7.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.3-.9 1.9-.7 1.9-.7.3.9.1 1.6 0 1.8.5.4.7 1 .7 1.7 0 2.3-1.4 2.9-2.7 3 .3.2.6.7.6 1.5v2.2c0 .2.1.4.4.3 2.2-.8 3.8-2.8 3.8-5.4C18.5 7.5 16 5 12 5z"
          />
        </svg>
      );
    case "vscode":
      return (
        <svg viewBox="0 0 64 64" className={cls} aria-hidden="true">
          <rect width="64" height="64" rx="12" fill="#007ACC" />
          <path
            fill="#fff"
            d="M42 12l-8 6 8 6v-12zm-8 6L22 10l-8 8 8 8 12-8zm0 16l-12-8-8 8 8 8 12-8zm8-2l-8 6 8 6V32z"
          />
        </svg>
      );
    case "cursor":
      return (
        <svg viewBox="0 0 64 64" className={cls} aria-hidden="true">
          <rect width="64" height="64" rx="12" fill="#6B5AED" />
          <path d="M18 14l28 14-28 14 6-10h-8l2-8h8l-8-10z" fill="#fff" opacity=".95" />
        </svg>
      );
    default:
      return null;
  }
}

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

        {/* Grid: 3/4/6 columns → 12 icons render as 2 rows on md+ */}
        <ul role="list" className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
          {techstack.map((t) => (
            <li key={t.id} className="text-center">
              <a
                href={t.href}
                title={t.label}
                aria-label={t.label}
                className="group block"
                target="_blank"
                rel="noreferrer"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl transition group-hover:scale-105 group-active:scale-95">
                  <IconById id={t.id} />
                </div>
                <span className="sr-only">{t.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
