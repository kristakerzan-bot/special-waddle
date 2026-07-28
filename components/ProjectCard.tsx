import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-surface shadow-[0_16px_32px_-8px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)]"
    >
      <div className="relative h-[220px] w-full overflow-hidden border-b border-white/10">
        <Image
          src={project.coverImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg/70" />
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
