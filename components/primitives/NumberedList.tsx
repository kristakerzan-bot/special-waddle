export default function NumberedList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-white/5 bg-surface/30 p-6">
      {items.map((item, index) => (
        <div key={item} className="flex gap-3">
          <span className="pt-[3px] font-mono text-[10px] text-accent-light">
            {String(index + 1).padStart(2, "0")}/
          </span>
          <p className="font-sans text-xs leading-relaxed text-text-muted">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
