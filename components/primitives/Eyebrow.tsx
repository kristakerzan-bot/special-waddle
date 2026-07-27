export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[4px] border border-accent/30 bg-accent/10 px-[7px] py-[3px] font-mono text-[9px] uppercase tracking-[0.15em] text-accent-light">
      {children}
    </span>
  );
}
