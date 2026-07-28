"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [paused, interval, slides.length]);

  return (
    <div
      className="flex flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-white/10 bg-bg/40">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
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

        <button
          type="button"
          onClick={() =>
            setActive((prev) => (prev - 1 + slides.length) % slides.length)
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
          onClick={() => setActive((prev) => (prev + 1) % slides.length)}
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

      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
          {slides[active].label}
        </p>
        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${slide.label}`}
              className={`size-2 rounded-full transition-colors ${
                index === active ? "bg-accent" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
