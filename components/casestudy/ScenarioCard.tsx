import type { Scenario } from "@/lib/caseStudies/payments";

export default function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-surface p-6">
      <div className="flex flex-col gap-1">
        <p className="font-mono text-sm font-bold text-text-primary">
          {scenario.name} — {scenario.role}
        </p>
        <p className="font-sans text-sm text-text-muted">{scenario.context}</p>
      </div>
      <p className="font-sans text-sm italic leading-relaxed text-accent-light">
        &ldquo;{scenario.quote}&rdquo;
      </p>
    </div>
  );
}
