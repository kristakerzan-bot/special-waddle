import type { Finding } from "@/lib/caseStudies/playerProfile";

const SEVERITY_STYLES = {
  critical: "border-red-600 bg-red-600/15 text-red-600",
  high: "border-red-500 bg-red-500/10 text-red-500",
  medium: "border-amber-500 bg-amber-500/10 text-amber-500",
  low: "border-blue-500 bg-blue-500/10 text-blue-500",
};

export default function FindingCard({ finding }: { finding: Finding }) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-xl bg-surface p-5">
      <div className="flex items-center justify-between">
        <p className="font-sans text-sm font-bold text-text-primary">
          {finding.name}
        </p>
        <span
          className={`rounded border px-2 py-0.5 font-mono text-xs font-bold uppercase ${SEVERITY_STYLES[finding.severity]}`}
        >
          {finding.severity}
        </span>
      </div>
      <p className="font-sans text-sm leading-relaxed text-text-muted">
        {finding.body}
      </p>
    </div>
  );
}
