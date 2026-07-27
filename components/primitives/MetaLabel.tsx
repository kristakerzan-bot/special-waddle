export default function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] leading-[15px] text-text-muted">
      {children}
    </span>
  );
}
