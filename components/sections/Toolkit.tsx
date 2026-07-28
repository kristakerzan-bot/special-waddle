import Container from "@/components/primitives/Container";
import Reveal from "@/components/primitives/Reveal";

const TOOLS = [
  "Figma / Figma Make",
  "UX Pilot / AI-fluent",
  "Claude / FigJam",
  "GitHub",
  "Miro / Maze",
  "Adobe Creative Suite",
  "Earlier: InVision",
];

const EXPERTISE = [
  "Enterprise B2B SaaS",
  "Regulated Environments",
  "Workflow & Task Analysis",
  "Design Systems",
  "Team Mentorship",
];

const LANGUAGES = [
  { name: "Slovenian", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Croatian", level: "Fluent" },
  { name: "Italian", level: "Conversational" },
  { name: "Spanish", level: "Basic" },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-text-muted">
      {children}
    </p>
  );
}

export default function Toolkit() {
  return (
    <section className="border-t border-white/5 py-24">
      <Container className="grid gap-10 md:grid-cols-4">
        <Reveal className="flex flex-col gap-6">
          <ColumnHeading>What I Use</ColumnHeading>
          <ul className="flex flex-col gap-3">
            {TOOLS.map((tool, index) => (
              <li
                key={tool}
                className={`font-sans text-sm text-text-primary/80 ${
                  index === TOOLS.length - 1 ? "italic opacity-50 text-xs" : ""
                }`}
              >
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-6">
          <ColumnHeading>Expertise</ColumnHeading>
          <ul className="flex flex-col gap-3">
            {EXPERTISE.map((item) => (
              <li key={item} className="font-sans text-sm text-text-primary/80">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200} className="flex flex-col gap-6">
          <ColumnHeading>Languages</ColumnHeading>
          <ul className="flex flex-col gap-3">
            {LANGUAGES.map((lang) => (
              <li key={lang.name} className="flex justify-between gap-4">
                <span className="font-sans text-sm text-text-primary/80">
                  {lang.name}
                </span>
                <span className="font-sans text-[10px] text-text-muted">
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={300} className="flex flex-col gap-2">
          <ColumnHeading>Education</ColumnHeading>
          <div className="pt-6">
            <p className="font-sans text-sm font-bold text-text-primary">
              Bachelor&apos;s Degree, Design
            </p>
            <p className="mt-3 font-sans text-xs text-text-muted">
              Academy of Design
            </p>
          </div>

          <div className="pt-10">
            <ColumnHeading>Contact</ColumnHeading>
            <a
              href="mailto:kristina.kerzan@gmail.com"
              className="mt-3 block font-sans text-sm text-text-primary/80 transition-colors hover:text-text-primary"
            >
              kristina.kerzan@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/krista-kerzan/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-sans text-sm text-text-primary/80 transition-colors hover:text-text-primary"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
