"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedBar({ fill }: { fill: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="h-1 w-full overflow-hidden rounded-full bg-white/5"
    >
      <div
        className="h-full rounded-full bg-accent transition-[width] duration-1000 ease-out"
        style={{ width: visible ? `${fill}%` : "0%" }}
      />
    </div>
  );
}
