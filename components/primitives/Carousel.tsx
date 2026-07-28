"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = {
  image: string;
  label: string;
  alt?: string;
};

export default function Carousel({
  slides,
  interval = 4000,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [skipTransition, setSkipTransition] = useState(false);
  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Wrapping last->first (or first->last) would otherwise animate backward
  // through every slide; jump instantly for just that one transition instead.
  const goTo = (next: number, direction: 1 | -1) => {
    const wrapped =
      (direction === 1 && next < activeRef.current) ||
      (direction === -1 && next > activeRef.current);
    if (wrapped) setSkipTransition(true);
    setActive(next);
  };

  useEffect(() => {
    if (!skipTransition) return;
    const raf = requestAnimationFrame(() => setSkipTransition(false));
    return () => cancelAnimationFrame(raf);
  }, [skipTransition]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      goTo((activeRef.current + 1) % slides.length, 1);
    }, interval);
    return () => clearInterval(id);
  }, [paused, interval, slides.length]);

  return (
    <div
      className="flex flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center">
        {slides.map((slide, index) => (
          <div key={slide.image} className="contents">
            <div
              className={`flex size-8 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] transition-colors duration-300 ${
                index === active
                  ? "border-accent bg-accent text-bg"
                  : "border-white/15 text-text-muted"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
            {index < slides.length - 1 && (
              <div className="mx-2 h-px flex-1 bg-white/10" />
            )}
          </div>
        ))}
      </div>

      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-white/10 bg-bg/40">
        <div
          className={`flex h-full w-full ${skipTransition ? "" : "transition-transform duration-700 ease-in-out"}`}
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.image} className="relative h-full w-full shrink-0">
              <Image
                src={slide.image}
                alt={slide.alt ?? slide.label}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                priority={index === 0}
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() =>
            goTo((active - 1 + slides.length) % slides.length, -1)
          }
          aria-label="Previous design"
          className="absolute left-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-bg/60 text-text-primary backdrop-blur transition-colors hover:bg-bg/80"
        >
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <path
              d="M7 1L2 6L7 11"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => goTo((active + 1) % slides.length, 1)}
          aria-label="Next design"
          className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-bg/60 text-text-primary backdrop-blur transition-colors hover:bg-bg/80"
        >
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <path
              d="M1 1L6 6L1 11"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <p className="text-center font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
        {slides[active].label}
      </p>
    </div>
  );
}
