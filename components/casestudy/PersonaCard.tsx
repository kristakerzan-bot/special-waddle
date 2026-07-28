import type { Persona } from "@/lib/caseStudies/playerProfile";

const AVATAR_COLORS = {
  indigo: "bg-accent-light/15 text-accent-light",
  red: "bg-red-500/15 text-red-500",
  amber: "bg-amber-500/15 text-amber-500",
};

const PRESSURE_COLORS = {
  high: "text-red-500",
  medium: "text-amber-500",
  low: "text-blue-500",
};

export default function PersonaCard({ persona }: { persona: Persona }) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-surface p-8">
      <div className="flex items-center gap-3">
        <span
          className={`flex size-10 items-center justify-center rounded-full font-mono text-sm font-bold ${AVATAR_COLORS[persona.color]}`}
        >
          {persona.initials}
        </span>
        <div>
          <p className="font-sans text-base font-bold text-text-primary">
            {persona.role}
          </p>
          <p className="font-sans text-sm text-text-muted">
            {persona.subtitle}
          </p>
        </div>
      </div>

      <p className="font-sans text-sm italic leading-relaxed text-text-primary/90">
        &ldquo;{persona.quote}&rdquo;
      </p>

      {persona.pressureTone && (
        <div className="flex gap-4">
          <div className="flex-1">
            <p className="font-mono text-xs text-text-muted">
              {persona.volumeLabel}
            </p>
            <p className="font-sans text-sm font-bold text-text-primary">
              {persona.volumeValue}
            </p>
          </div>
          <div className="flex-1">
            <p className="font-mono text-xs text-text-muted">
              {persona.pressureLabel}
            </p>
            <p
              className={`font-sans text-sm font-bold ${PRESSURE_COLORS[persona.pressureTone]}`}
            >
              {persona.pressureValue}
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs text-accent-light">Comes Here To</p>
          <ul className="flex flex-col gap-2">
            {persona.comesHereTo.map((item) => (
              <li key={item} className="flex gap-2 font-sans text-sm text-text-muted">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-text-muted" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs text-red-500">Fights With</p>
          <ul className="flex flex-col gap-2">
            {persona.fightsWith.map((item) => (
              <li key={item} className="flex gap-2 font-sans text-sm text-text-muted">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-text-muted" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
