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
  usabilitySeverityCounts,
  usabilityThemes,
  cardSortResults,
  timeBaseline,
  nextSteps,
  gallery,
} from "@/lib/caseStudies/playerProfile";

export const metadata: Metadata = {
  title: "Player Profile — Krista",
  description: hero.subtext,
};

const SEVERITY_DOT = {
  high: "bg-red-500",
  medium: "bg-amber-500",
  low: "bg-blue-500",
};

export default function PlayerProfileCaseStudy() {
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
          Case Studies <span className="text-accent-light">{">"}</span> Player
          Profile
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
        </Reveal>
      </section>

      {/* Method */}
      <section className="border-t border-white/10 px-6 py-24 md:px-32">
        <Reveal className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <MetaLabel>Triangulated Study</MetaLabel>
            <div className="h-px w-8 bg-accent-light/30" />
            <MetaLabel>
              {"// Six methods, ~2 months, no finding rests on one data source"}
            </MetaLabel>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
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
              <MetaLabel>{"// 01 — Personas"}</MetaLabel>
            </div>
            <h2 className="font-display text-[36px] italic text-text-primary md:text-[56px]">
              Who works inside this profile
            </h2>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-text-muted">
              Six roles touch the same player record for entirely different
              reasons — and today, they&apos;re handed the same
              undifferentiated wall of tabs and tables regardless of what they
              came to do.
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

      {/* Usability Findings */}
      <section className="px-6 py-28 md:px-32">
        <Reveal className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Eyebrow>Usability Analysis</Eyebrow>
              <MetaLabel>{"// 04 — Usability findings"}</MetaLabel>
            </div>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-display text-[36px] italic text-text-primary md:text-[56px]">
                Where the interface broke down
              </h2>
              <div className="flex gap-4">
                {usabilitySeverityCounts.map((item) => (
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
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-text-muted">
              16 findings across five recurring themes. SUS score of 52 (vs.
              68 industry average) placed the interface in the bottom
              quartile. Fraud & Risk and Payments roles scored worst.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {usabilityThemes.map((theme, index) => (
              <Reveal
                key={theme.title}
                delay={index * 60}
                className={`flex flex-col gap-4 pb-8 ${
                  index < usabilityThemes.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <p className="font-sans text-base font-bold text-text-primary">
                  {theme.title}
                </p>
                <div className="flex flex-col gap-4 md:flex-row">
                  {theme.findings.map((finding) => (
                    <FindingCard key={finding.name} finding={finding} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Supplementary Research */}
      <section className="bg-[#141419] px-6 py-28 md:px-32">
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Eyebrow>Baseline & Validation</Eyebrow>
              <MetaLabel>{"// 05 — Measurable before-and-after"}</MetaLabel>
            </div>
            <h2 className="font-display text-[36px] italic text-text-primary md:text-[56px]">
              From a 52 SUS score to shipped redesign
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-surface p-8">
              <p className="font-mono text-sm font-bold text-accent-light">
                Card Sort · Tab Consolidation Check
              </p>
              <p className="font-sans text-[15px] leading-relaxed text-text-muted">
                6 agents (1 per persona) grouped 22 profile data points into
                categories. Agreement rates on logical grouping:
              </p>
              <div className="flex flex-col gap-3 pt-2">
                {cardSortResults.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="font-sans text-sm text-text-primary">
                      {item.label}
                    </span>
                    <span className="font-mono text-sm font-bold text-accent-light">
                      {item.agreement}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-surface p-8">
              <p className="font-mono text-sm font-bold text-accent-light">
                Task-Time & Error Baseline
              </p>
              <p className="font-sans text-[15px] leading-relaxed text-text-muted">
                Timed walkthroughs, 5 reps per task. Documenting efficiency
                leaks on standard flows:
              </p>
              <div className="flex flex-col gap-4 pt-2">
                {timeBaseline.map((item) => (
                  <div key={item.task} className="flex flex-col gap-1">
                    <p className="font-sans text-sm font-bold text-text-primary">
                      {item.task}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-accent-light">
                        {item.time}
                      </span>
                      <span className="size-1 rounded-full bg-text-muted" />
                      <span className="font-sans text-sm text-red-500">
                        {item.error}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Next Steps */}
      <section className="px-6 py-24 md:px-32">
        <Reveal className="flex flex-col gap-8 rounded-[32px] border border-accent-light bg-gradient-to-r from-accent-light/20 to-accent-light/5 p-8 md:p-12">
          <div className="flex flex-col gap-4">
            <MetaLabel>Shipped Redesign</MetaLabel>
            <h2 className="max-w-3xl font-display text-2xl italic text-text-primary md:text-4xl">
              {nextSteps.heading}
            </h2>
            <p className="max-w-2xl font-sans text-base leading-relaxed text-text-muted">
              {nextSteps.body}
            </p>
          </div>
          <div className="h-px w-full bg-white/10" />
          <div className="grid gap-8 md:grid-cols-3">
            {nextSteps.columns.map((column) => (
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
            <MetaLabel>Player Profile · Selected Screens</MetaLabel>
            <h2 className="font-display text-3xl italic text-text-primary md:text-4xl">
              Inside the interface
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {gallery.map((item, index) => (
              <Reveal key={item.label} delay={index * 60} className="flex flex-col gap-3">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-white/10 bg-surface">
                  <Image
                    src={item.image}
                    alt={`${item.label} — ${item.caption}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="font-sans text-sm text-text-muted">
                  {item.caption}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

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
