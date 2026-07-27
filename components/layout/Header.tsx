"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_SECTIONS } from "@/lib/sections";
import { useActiveSection } from "@/lib/useActiveSection";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between px-6 py-6 transition-colors duration-300 md:px-12 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-white/10"
          : "mix-blend-difference"
      }`}
    >
      <Link href="/#problem" className="flex items-center gap-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
          K
        </span>
        <span className="font-display text-xl uppercase tracking-[-0.5px] text-text-primary">
          Krista
        </span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {NAV_SECTIONS.map((section) => (
          <Link
            key={section.id}
            href={`/#${section.id}`}
            className={`font-sans text-[11px] font-medium uppercase tracking-[0.1em] transition-colors ${
              activeId === section.id ? "text-accent-light" : "text-text-primary"
            }`}
          >
            {section.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
