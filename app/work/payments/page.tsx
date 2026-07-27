import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/primitives/Eyebrow";
import MetaLabel from "@/components/primitives/MetaLabel";
import Reveal from "@/components/primitives/Reveal";
import ScenarioCard from "@/components/casestudy/ScenarioCard";
import FindingCard from "@/components/casestudy/FindingCard";
import {
  hero,
  methods,
  severityCounts,
  findingsIntro,
  findings,
  scenarios,
  redesignDirection,
  gallery,
} from "@/lib/caseStudies/payments";

export const metadata: Metadata = {
  title: "Payments — Krista",
  description: hero.subtext,
};

const SEVERITY_DOT = {
  critical: "bg-red-600",
  high: "bg-red-500",
  medium: "bg-amber-500",
  low: "bg-blue-500",
};

export default function PaymentsCaseStudy() {
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
          Case Studies <span className="text-accent-light">{">"}</span> Payments
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
              {"// Screen review, heuristic evaluation, simulated field research, AI-assisted cross-validation"}
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

      {/* Usability Findings */}
      <section className="bg-[#141419] px-6 py-28 md:px-32">
        <Reveal className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Eyebrow>Usability Findings</Eyebrow>
              <MetaLabel>{"// 12 findings across payment flows"}</MetaLabel>
            </div>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-display text-[36px] italic text-text-primary md:text-[56px]">
                Where money meets usability risk
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
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-text-muted">
              {findingsIntro}
            </p>
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

      {/* Practitioner Scenarios */}
      <section className="bg-[#141419] px-6 py-28 md:px-32">
        <Reveal className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Eyebrow>Practitioner-Informed Scenarios</Eyebrow>
              <MetaLabel>{"// 02 — Field research"}</MetaLabel>
            </div>
            <h2 className="font-display text-[36px] italic text-text-primary md:text-[56px]">
              Practitioner scenarios
            </h2>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-text-muted">
              Three practitioner-informed scenarios modeling what live
              observation would surface — hypothesis set for validation with
              real ops teams.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {scenarios.map((scenario, index) => (
              <Reveal key={scenario.name} delay={index * 80}>
                <ScenarioCard scenario={scenario} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Redesign Direction */}
      <section className="px-6 py-24 md:px-32">
        <Reveal className="flex flex-col gap-8 rounded-[32px] border border-accent-light bg-gradient-to-r from-accent-light/20 to-accent-light/5 p-8 md:p-12">
          <div className="flex flex-col gap-4">
            <MetaLabel>Redesign Direction</MetaLabel>
            <h2 className="max-w-3xl font-display text-2xl italic text-text-primary md:text-4xl">
              {redesignDirection.heading}
            </h2>
            <p className="max-w-2xl font-sans text-base leading-relaxed text-text-muted">
              {redesignDirection.body}
            </p>
          </div>
          <div className="h-px w-full bg-white/10" />
          <div className="grid gap-8 md:grid-cols-3">
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
          <p className="max-w-3xl font-sans text-[15px] leading-relaxed text-accent-light">
            → {redesignDirection.insight}
          </p>
        </Reveal>
      </section>

      {/* Screenshot Gallery */}
      <section className="bg-[#0a0a0f] px-6 py-24 md:px-32">
        <Reveal className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <MetaLabel>Payments · Redesigned Screens</MetaLabel>
            <h2 className="font-display text-3xl italic text-text-primary md:text-4xl">
              The redesigned payment flows
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {gallery.map((item, index) => (
              <Reveal key={item.label} delay={index * 60} className="flex flex-col gap-3">
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
      <div className="border-t border-white/10 px-6 py-10 md:px-32">
        <Link
          href="/work/player-profile"
          className="font-mono text-sm text-accent-light transition-colors hover:text-text-primary"
        >
          Related Case Study → Player Profile: Six Teams, One Overloaded Screen
        </Link>
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
