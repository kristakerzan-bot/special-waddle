export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l border-accent/80 py-1 pl-4">
      <p className="font-mono text-[11px] uppercase italic tracking-[-0.02em] text-accent-light">
        &ldquo;{children}&rdquo;
      </p>
    </div>
  );
}
