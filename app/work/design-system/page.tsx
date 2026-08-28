import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/primitives/Eyebrow";
import MetaLabel from "@/components/primitives/MetaLabel";
import Reveal from "@/components/primitives/Reveal";
import PullQuote from "@/components/primitives/PullQuote";
import ScreenshotGallery from "@/components/casestudy/ScreenshotGallery";
import {
  hero,
  inheritedSystem,
  severityCounts,
  auditFindings,
  architecture,
  aiLayer,
  automatedAudit,
  handoff,
  validation,
  gallery,
  closingLine,
} from "@/lib/caseStudies/designSystem";

export const metadata: Metadata = {
  title: "Design System — Krista",
  description: hero.subtext,
};

const SEVERITY_DOT = {
  critical: "bg-red-600",
  high: "bg-red-500",
  medium: "bg-amber-500",
  low: "bg-blue-500",
};

export default function DesignSystemCaseStudy() {
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
          Case Studies <span className="text-accent-light">{">"}</span> Design System
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
                <p className="mt-1 font-sans text-xs text-text-muted/70">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Inherited System */}
      <section className="border-t border-white/10 px-6 py-24 md:px-32">
        <Reveal className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <Eyebrow>Inherited System</Eyebrow>
            <div className="h-px w-8 bg-accent-light/30" />
            <MetaLabel>{"// 01 — What they already had"}</MetaLabel>
          </div>

          <PullQuote>{inheritedSystem.calloutTitle}</PullQuote>

          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-sans text-base leading-relaxed text-text-muted">
              {inheritedSystem.intro}
            </p>
            {inheritedSystem.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="font-sans text-base leading-relaxed text-text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex max-w-3xl flex-col gap-3 rounded-2xl border border-white/10 bg-surface p-8">
            <p className="font-sans text-base font-bold text-text-primary">
              {inheritedSystem.turningPointLabel}
            </p>
            <p className="font-sans text-[15px] leading-relaxed text-text-muted">
              {inheritedSystem.turningPointBody}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {inheritedSystem.columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3">
                <p className="font-mono text-sm font-bold text-text-primary">
                  {column.title}
                </p>
                <p className="font-sans text-[15px] leading-relaxed text-text-muted">
                  {column.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Token Audit */}
      <section className="bg-[#141419] px-6 py-28 md:px-32">
        <Reveal className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Eyebrow>Token Audit</Eyebrow>
              <MetaLabel>{"// 02 — Findings"}</MetaLabel>
            </div>
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

          <div className="flex flex-col gap-6 rounded-2xl border border-red-600/40 bg-surface p-8">
            <p className="font-sans text-base font-bold text-text-primary">
              {auditFindings.featured.title}
            </p>
            <p className="font-sans text-[15px] leading-relaxed text-text-muted">
              {auditFindings.featured.body}
            </p>
            <p className="font-sans text-[15px] leading-relaxed text-text-muted">
              {auditFindings.featured.fix}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="rounded-2xl border border-white/10 bg-bg/40 p-6">
                <p className="font-mono text-3xl font-bold text-red-500">
                  {auditFindings.featured.before.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.05em] text-text-muted">
                  {auditFindings.featured.before.label}
                </p>
                <p className="mt-1 font-sans text-xs text-text-muted/70">
                  {auditFindings.featured.before.sub}
                </p>
              </div>
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                <path
                  d="M1 8H22M22 8L15 1M22 8L15 15"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="text-accent-light"
                />
              </svg>
              <div className="rounded-2xl border border-white/10 bg-bg/40 p-6">
                <p className="font-mono text-3xl font-bold text-accent-light">
                  {auditFindings.featured.after.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.05em] text-text-muted">
                  {auditFindings.featured.after.label}
                </p>
                <p className="mt-1 font-sans text-xs text-text-muted/70">
                  {auditFindings.featured.after.sub}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {auditFindings.others.map((finding) => (
              <div key={finding.title} className="flex flex-col gap-3 rounded-xl bg-surface p-5">
                <p className="font-sans text-sm font-bold text-text-primary">
                  {finding.title}
                </p>
                <p className="font-sans text-sm leading-relaxed text-text-muted">
                  {finding.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Architecture */}
      <section className="px-6 py-24 md:px-32">
        <Reveal className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <Eyebrow>Architecture</Eyebrow>
            <div className="h-px w-8 bg-accent-light/30" />
            <MetaLabel>{"// 03 — Four tiers"}</MetaLabel>
          </div>
          <p className="max-w-2xl font-sans text-base leading-relaxed text-text-muted">
            {architecture.intro}
          </p>

          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-surface p-8">
            {architecture.tiers.map((row) => (
              <div
                key={row.tier}
                className="flex flex-col gap-1 border-b border-white/10 pb-4 last:border-0 last:pb-0 md:flex-row md:items-center md:gap-6"
              >
                <p className="font-mono text-sm font-bold uppercase text-accent-light md:w-24 md:shrink-0">
                  {row.tier}
                </p>
                <p className="font-sans text-sm text-text-primary md:flex-1">
                  {row.contains}
                </p>
                <p className="font-sans text-sm text-text-muted md:flex-1">
                  {row.job}
                </p>
              </div>
            ))}
          </div>

          <p className="max-w-2xl font-sans text-[15px] leading-relaxed text-text-muted">
            {architecture.note}
          </p>
          <p className="max-w-2xl font-sans text-[15px] leading-relaxed text-accent-light">
            {architecture.stat}
          </p>
        </Reveal>
      </section>

      {/* AI Layer */}
      <section className="bg-[#141419] px-6 py-28 md:px-32">
        <Reveal className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <Eyebrow>AI Layer</Eyebrow>
            <div className="h-px w-8 bg-accent-light/30" />
            <MetaLabel>{"// 04 — Designing for machine-generated content"}</MetaLabel>
          </div>
          <p className="max-w-2xl font-sans text-base leading-relaxed text-text-muted">
            {aiLayer.intro}
          </p>
          <p className="font-sans text-base font-bold text-text-primary">
            {aiLayer.kicker}
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {aiLayer.cards.map((card, index) => (
              <div key={card.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-surface p-6">
                <p className="font-mono text-xs font-bold text-accent-light">
                  {`Card ${index + 1}`}
                </p>
                <p className="font-sans text-sm font-bold text-text-primary">
                  {card.title}
                </p>
                <p className="font-sans text-sm leading-relaxed text-text-muted">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <p className="max-w-2xl font-sans text-[15px] leading-relaxed text-text-muted">
            {aiLayer.footnote}
          </p>
          <p className="max-w-2xl font-sans text-[15px] leading-relaxed text-text-muted">
            {aiLayer.components}
          </p>
        </Reveal>
      </section>

      {/* Automated Audit */}
      <section className="px-6 py-24 md:px-32">
        <Reveal className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <Eyebrow>Automated Audit</Eyebrow>
            <div className="h-px w-8 bg-accent-light/30" />
            <MetaLabel>{"// 05 — Making it enforceable"}</MetaLabel>
          </div>
          <p className="max-w-2xl font-sans text-base leading-relaxed text-text-muted">
            {automatedAudit.intro}
          </p>

          <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-surface p-8">
            {automatedAudit.rules.map((row) => (
              <div
                key={row.rule}
                className="flex flex-col gap-1 border-b border-white/10 pb-3 last:border-0 last:pb-0 md:flex-row md:items-center md:gap-6"
              >
                <p className="font-mono text-xs font-bold uppercase text-accent-light md:w-40 md:shrink-0">
                  {row.rule}
                </p>
                <p className="font-sans text-sm text-text-muted">
                  {row.question}
                </p>
              </div>
            ))}
          </div>

          <p className="font-sans text-base font-bold text-text-primary">
            {automatedAudit.failuresIntro}
          </p>

          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-surface p-8">
            {automatedAudit.failures.map((row, index) => (
              <div
                key={`${row.rule}-${index}`}
                className="flex flex-col gap-2 border-b border-white/10 pb-4 last:border-0 last:pb-0 md:flex-row md:items-start md:gap-6"
              >
                <p className="font-mono text-xs font-bold uppercase text-accent-light md:w-32 md:shrink-0">
                  {row.rule}
                </p>
                <p className="font-sans text-sm text-text-muted md:flex-1">
                  {row.found}
                </p>
                <p className="font-mono text-sm font-bold text-text-primary md:w-16 md:shrink-0 md:text-right">
                  {row.count}
                </p>
              </div>
            ))}
          </div>

          <p className="max-w-2xl font-sans text-[15px] leading-relaxed text-text-muted">
            {automatedAudit.compositingNote}
          </p>

          <div className="flex max-w-3xl flex-col gap-3 rounded-2xl border border-white/10 bg-surface p-8">
            <p className="font-sans text-base font-bold text-text-primary">
              {automatedAudit.decisionTitle}
            </p>
            <p className="font-sans text-[15px] leading-relaxed text-text-muted">
              {automatedAudit.decisionBody}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Handoff */}
      <section className="bg-[#141419] px-6 py-28 md:px-32">
        <Reveal className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Eyebrow>Handoff</Eyebrow>
            <div className="h-px w-8 bg-accent-light/30" />
            <MetaLabel>{"// 06 — Closing the loop back to design"}</MetaLabel>
          </div>
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-sans text-base leading-relaxed text-text-muted">
              {handoff.intro}
            </p>
            <p className="font-sans text-base leading-relaxed text-text-muted">
              {handoff.body}
            </p>
            <p className="font-sans text-base leading-relaxed text-text-muted">
              {handoff.detail}
            </p>
            <p className="font-sans text-base leading-relaxed text-text-muted">
              {handoff.closing}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Validation & Results */}
      <section className="px-6 py-24 md:px-32">
        <Reveal className="flex flex-col gap-10 rounded-[32px] border border-accent-light bg-gradient-to-r from-accent-light/20 to-accent-light/5 p-8 md:p-12">
          <div className="flex flex-col gap-4">
            <MetaLabel>{"// 07 — Validation & Results"}</MetaLabel>
            <h2 className="max-w-3xl font-display text-2xl italic text-text-primary md:text-4xl">
              {validation.heading}
            </h2>
          </div>
          <div className="h-px w-full bg-white/10" />
          <div className="flex flex-col gap-4">
            {validation.rows.map((row) => (
              <div
                key={row.before}
                className="grid grid-cols-1 gap-2 border-b border-white/10 pb-4 last:border-0 last:pb-0 md:grid-cols-2 md:gap-8"
              >
                <p className="font-sans text-sm text-text-muted">{row.before}</p>
                <p className="font-sans text-sm font-bold text-text-primary">
                  {row.after}
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
            <MetaLabel>Design System · Selected Screens</MetaLabel>
            <h2 className="font-display text-3xl italic text-text-primary md:text-4xl">
              The system in production
            </h2>
          </div>
          <ScreenshotGallery gallery={gallery} />
        </Reveal>
      </section>

      {/* Closing line */}
      <div className="border-t border-white/10 px-6 py-16 md:px-32">
        <Reveal>
          <p className="max-w-3xl font-sans text-lg italic leading-relaxed text-text-primary/90">
            {closingLine}
          </p>
        </Reveal>
      </div>

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
          <Link
            href="/work/rules"
            className="font-mono text-sm text-accent-light transition-colors hover:text-text-primary"
          >
            Rules: One Engine, Three Teams Who Don&apos;t Think Alike
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
