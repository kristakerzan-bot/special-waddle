export default function Divider({
  width = "w-8",
  className = "",
}: {
  width?: string;
  className?: string;
}) {
  return <span className={`h-px bg-white/20 ${width} ${className}`} />;
}
