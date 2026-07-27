import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-surface shadow-[0_16px_32px_-8px_rgba(0,0,0,0.25)] transition-colors hover:border-white/20"
    >
      <div className="relative h-[220px] w-full border-b border-white/10">
        <Image
          src={project.coverImage}
          alt=""
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg/70" />
        <div className="absolute left-4 top-4 flex gap-[6px]">
          <span className="size-2 rounded-full bg-red-500/40" />
          <span className="size-2 rounded-full bg-yellow-500/40" />
          <span className="size-2 rounded-full bg-green-500/40" />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-[6px]">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-accent-light">
            {project.category}
          </p>
          <p className="font-display text-[22px] italic tracking-[-0.5px] text-text-primary">
            {project.title}
          </p>
        </div>
        <p className="font-sans text-[13px] leading-[1.5] text-text-muted">
          {project.summary}
        </p>
        <div className="h-px w-full bg-white/10" />
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-text-primary">
            View Project
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 10"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
          >
            <path
              d="M0 5H11M11 5L7 1M11 5L7 9"
              stroke="currentColor"
              strokeWidth="1.2"
              className="text-text-primary"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
