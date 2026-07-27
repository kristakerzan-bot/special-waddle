"use client";

import { useEffect, useState } from "react";
import { NAV_SECTIONS, type SectionId } from "./sections";

export function useActiveSection() {
  const [activeId, setActiveId] = useState<SectionId>(NAV_SECTIONS[0].id);

  useEffect(() => {
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
  }, []);

  return activeId;
}
