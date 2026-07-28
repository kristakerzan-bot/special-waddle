"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_SECTIONS, type SectionId } from "./sections";

export function useActiveSection() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<SectionId | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const elements = NAV_SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id as SectionId);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return pathname === "/" ? activeId : null;
}
