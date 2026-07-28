"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Reveal from "@/components/primitives/Reveal";

type GalleryItem = {
  label: string;
  caption: string;
  image: string | null;
};

export default function ScreenshotGallery({
  gallery,
  aspectClassName = "aspect-[4/3]",
}: {
  gallery: GalleryItem[];
  aspectClassName?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? gallery[activeIndex] : null;

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-3">
        {gallery.map((item, index) => (
          <Reveal key={item.label} delay={index * 60} className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => item.image && setActiveIndex(index)}
              disabled={!item.image}
              aria-label={item.image ? `Expand ${item.label}` : undefined}
              className={`relative ${aspectClassName} w-full overflow-hidden rounded-lg border border-white/10 bg-surface disabled:cursor-default`}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={`${item.label} — ${item.caption}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center border border-dashed border-white/10">
                  <p className="font-sans text-sm text-text-muted">
                    ↑ Screenshot coming soon
                  </p>
                </div>
              )}
            </button>
            <p className="font-sans text-sm font-bold text-text-primary">
              {item.label}
            </p>
            <p className="font-sans text-sm text-text-muted">
              {item.caption}
            </p>
          </Reveal>
        ))}
      </div>

      {active?.image &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full bg-white/10 text-text-primary transition-colors hover:bg-white/20"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative ${aspectClassName} w-full overflow-hidden rounded-lg border border-white/10 bg-surface`}>
                <Image
                  src={active.image}
                  alt={`${active.label} — ${active.caption}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center font-sans text-sm text-text-muted">
                {active.label} — {active.caption}
              </p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
