import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/primitives/Container";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Krista`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 py-24 md:py-32">
      <Container className="flex flex-col gap-10">
        <Link
          href="/#offer"
          className="w-fit font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted transition-colors hover:text-text-primary"
        >
          ← Back to case studies
        </Link>

        <div className="flex flex-col gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent-light">
            {project.category}
          </p>
          <h1 className="font-display text-[40px] italic tracking-[-0.02em] text-text-primary md:text-[56px]">
            {project.title}
          </h1>
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-text-muted">
            {project.summary}
          </p>
        </div>

        <div className="relative aspect-[683/367] w-full overflow-hidden rounded-2xl border border-white/10 bg-surface">
          <Image
            src={project.coverImage}
            alt=""
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <p className="max-w-2xl font-sans text-sm text-text-muted">
          Full case study write-up coming soon.
        </p>
      </Container>
    </main>
  );
}
