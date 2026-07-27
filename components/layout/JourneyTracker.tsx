"use client";

import { useEffect, useState } from "react";
import { NAV_SECTIONS } from "@/lib/sections";
import { useActiveSection } from "@/lib/useActiveSection";

export default function JourneyTracker() {
  const activeId = useActiveSection();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-y-0 left-12 z-40 hidden lg:flex">
      <div className="relative my-24 w-px bg-white/10">
        <div
          className="absolute left-0 top-0 w-px bg-accent transition-[height] duration-150"
          style={{ height: `${progress}%` }}
        />
        {NAV_SECTIONS.map((section, index) => {
          const isActive = activeId === section.id;
          const top = `${(index / (NAV_SECTIONS.length - 1)) * 100}%`;
          return (
            <div
              key={section.id}
              className="absolute left-0 -translate-x-1/2 -translate-y-1/2"
              style={{ top }}
            >
              <span
                className={`block size-[9px] rounded-full transition-colors ${
                  isActive ? "bg-accent" : "bg-white/20"
                }`}
              />
              <span
                className={`absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                  isActive ? "text-text-primary" : "text-text-muted"
                }`}
              >
                {section.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
