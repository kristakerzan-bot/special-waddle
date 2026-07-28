import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/primitives/Eyebrow";
import MetaLabel from "@/components/primitives/MetaLabel";
import Reveal from "@/components/primitives/Reveal";
import PersonaCard from "@/components/casestudy/PersonaCard";
import FindingCard from "@/components/casestudy/FindingCard";
import {
  hero,
  methods,
  personas,
  severityCounts,
  findings,
  redesignDirection,
  gallery,
} from "@/lib/caseStudies/rules";

export const metadata: Metadata = {
  title: "Rules — Krista",
  description: hero.subtext,
};

const SEVERITY_DOT = {
  critical: "bg-red-600",
  high: "bg-red-500",
  medium: "bg-amber-500",
  low: "bg-blue-500",
};

export default function RulesCaseStudy() {
  return (
    <main className="flex-1">
      {/* Case study header bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-8 md:px-32">
        <Link
          href="/#offer"
          className="font-mono text-[13px] uppercase tracking-[0.05em] text-accent-light transition-colors hover:text-text-primary"
        >
          ← Back to Portfolio
        </Link>
        <p className="hidden font-mono text-[13px] text-text-muted md:block">
          Case Studies <span className="text-accent-light">{">"}</span> Rules
        </p>
      </div>

      {/* Hero */}
      <section className="px-6 py-24 md:px-32">
        <Reveal className="flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>{hero.badge}</Eyebrow>
            <h1 className="max-w-4xl font-display text-[40px] italic leading-[1.1] tracking-[-0.02em] text-text-primary md:text-[64px]">
              {hero.title}
            </h1>
            <p className="max-w-2xl border-l-2 border-accent-light pl-8 font-sans text-lg leading-relaxed text-text-primary/90 md:text-xl">
              {hero.subtext}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-surface p-6"
              >
                <p className="font-mono text-3xl font-bold text-accent-light">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.05em] text-text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="font-mono text-[13px] uppercase tracking-[0.1em] text-text-muted">
            Role: {hero.role}
          </p>
        </Reveal>
      </section>

      {/* Method */}
      <section className="border-t border-white/10 px-6 py-24 md:px-32">
        <Reveal className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <MetaLabel>Methodology</MetaLabel>
            <div className="h-px w-8 bg-accent-light/30" />
            <MetaLabel>
              {"// Legacy audit, dual-audience reframing, pattern borrowing, parallel-mode prototyping"}
            </MetaLabel>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {methods.map((method) => (
              <div key={method.index} className="flex flex-col gap-4">
                <p className="font-mono text-sm font-bold text-text-primary">
                  {method.index} / {method.title.toUpperCase()}
                </p>
                <p className="font-sans text-[15px] leading-relaxed text-text-muted">
                  {method.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Personas */}
      <section className="bg-[#141419] px-6 py-28 md:px-32">
        <Reveal className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Eyebrow>Cohort Profile</Eyebrow>
              <MetaLabel>{"// Who uses this"}</MetaLabel>
            </div>
            <h2 className="font-display text-[36px] italic text-text-primary md:text-[56px]">
              Who uses this
            </h2>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-text-muted">
              Same rule engine, two different relationships to the logic.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {personas.map((persona, index) => (
              <Reveal key={persona.role} delay={index * 80}>
                <PersonaCard persona={persona} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Legacy Findings */}
      <section className="px-6 py-28 md:px-32">
        <Reveal className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Eyebrow>What The Legacy Tool Got Wrong</Eyebrow>
              <MetaLabel>{"// Heuristic read of the old Rules screens"}</MetaLabel>
            </div>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-display text-[36px] italic text-text-primary md:text-[56px]">
                A heuristic read of the old Rules screens
              </h2>
              <div className="flex flex-wrap gap-4">
                {severityCounts.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span
                      className={`size-2 rounded-full ${SEVERITY_DOT[item.tone]}`}
                    />
                    <span className="font-sans text-sm text-text-primary">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {findings.map((finding, index) => (
              <Reveal key={finding.name} delay={index * 60}>
                <FindingCard finding={finding} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Redesign Direction */}
      <section className="bg-[#141419] px-6 py-24 md:px-32">
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <MetaLabel>Redesign Direction</MetaLabel>
            <h2 className="max-w-3xl font-display text-2xl italic text-text-primary md:text-4xl">
              {redesignDirection.heading}
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {redesignDirection.columns.map((column) => (
              <div key={column.index} className="flex flex-col gap-3">
                <p className="font-mono text-sm font-bold text-text-primary">
                  {column.index} / {column.title.toUpperCase()}
                </p>
                <p className="font-sans text-[15px] leading-relaxed text-text-muted">
                  {column.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Screenshot Gallery */}
      <section className="bg-[#0a0a0f] px-6 py-24 md:px-32">
        <Reveal className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <MetaLabel>Rules · Selected Screens</MetaLabel>
            <h2 className="font-display text-3xl italic text-text-primary md:text-4xl">
              The shipped redesign, across both editor modes
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {gallery.map((item, index) => (
              <Reveal key={`${item.label}-${item.caption}`} delay={index * 60} className="flex flex-col gap-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/10 bg-surface">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.label} — ${item.caption}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center border border-dashed border-white/10">
                      <p className="font-sans text-sm text-text-muted">
                        ↑ Screenshot coming soon
                      </p>
                    </div>
                  )}
                </div>
                <p className="font-sans text-sm font-bold text-text-primary">
                  {item.label}
                </p>
                <p className="font-sans text-sm text-text-muted">
                  {item.caption}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Cross Link */}
      <div className="flex flex-col gap-2 border-t border-white/10 px-6 py-10 md:px-32">
        <p className="font-mono text-sm text-text-muted">Related Case Studies →</p>
        <div className="flex flex-col gap-1">
          <Link
            href="/work/player-profile"
            className="font-mono text-sm text-accent-light transition-colors hover:text-text-primary"
          >
            Player Profile: Six Teams, One Overloaded Screen
          </Link>
          <Link
            href="/work/payments"
            className="font-mono text-sm text-accent-light transition-colors hover:text-text-primary"
          >
            Payments: Where Money Meets Usability Risk
          </Link>
        </div>
      </div>

      {/* Case study footer bar */}
      <div className="flex items-center justify-between border-t border-white/10 px-6 py-12 md:px-32">
        <p className="font-mono text-[13px] text-text-muted">
          © 2026 Krista Design Systems.
        </p>
        <a
          href="#top"
          className="font-mono text-[13px] text-accent-light transition-colors hover:text-text-primary"
        >
          ← Back to Top
        </a>
      </div>
    </main>
  );
}
