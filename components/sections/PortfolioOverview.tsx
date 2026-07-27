import Image from "next/image";
import Container from "@/components/primitives/Container";
import Eyebrow from "@/components/primitives/Eyebrow";
import Divider from "@/components/primitives/Divider";
import MetaLabel from "@/components/primitives/MetaLabel";
import NumberedList from "@/components/primitives/NumberedList";
import PullQuote from "@/components/primitives/PullQuote";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function PortfolioOverview() {
  return (
    <section id="offer" className="py-24 md:py-32">
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Eyebrow>Applied UX Artifacts</Eyebrow>
            <MetaLabel>Methodology: Case for Process vs. Judgment</MetaLabel>
          </div>
          <h2 className="font-display text-[48px] italic leading-[1] tracking-[-0.03em] text-text-primary md:text-[80px]">
            Evidence of Impact.
          </h2>
          <p className="max-w-xl font-mono text-base leading-relaxed text-text-muted">
            {"// I prioritize systems that resolve friction."}
            <br />
            {"// Here is how I decide between full discovery and rapid iteration."}
          </p>
        </div>

        {/* Case for Process */}
        <div className="flex flex-col gap-10">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-surface p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
            <div className="relative aspect-[683/367] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/projects/process-dashboard.svg"
                alt="Placeholder — replace with the Player Profile dashboard screenshot"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-light">
              Enterprise Backoffice // High Stake Flow
            </p>
            <h3 className="font-display text-3xl italic text-text-primary decoration-accent/20 underline md:text-4xl">
              The Case for Process
            </h3>
            <p className="max-w-2xl font-sans text-base leading-relaxed text-text-muted">
              Support teams were managing players across dozens of legal
              jurisdictions. In a regulated market, a mistake isn&apos;t just
              UX debt—it&apos;s a liability.
            </p>
            <NumberedList
              items={[
                "Mapped the decision architecture to build guardrails into the interaction design.",
                "Tested prototypes against real regulatory edge cases with support leads.",
              ]}
            />
            <PullQuote>
              The win was the shift in team confidence, not just the metric.
            </PullQuote>
          </div>
        </div>

        {/* Case for Judgment */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-light">
              Promotions Engine // Speed To Market
            </p>
            <h3 className="font-display text-3xl italic text-text-primary decoration-accent/20 underline md:text-4xl">
              The Case for Judgment
            </h3>
            <p className="font-sans text-base leading-relaxed text-text-muted">
              A complex form was stalling user progress. We had days, not
              sprints, to prove a simpler pattern would work. Sometimes the
              fastest research is to ship.
            </p>
            <NumberedList
              items={[
                "Applied proven stepper patterns to resolve immediate conversion friction.",
                "Skipped full research cycle for speed, validated through rapid prototyping.",
              ]}
            />
            <PullQuote>
              The user reaction justified the pattern, not the slide deck.
            </PullQuote>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-surface p-8">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex gap-[6px]">
                  <span className="size-[6px] rounded-full bg-white/20" />
                  <span className="size-[6px] rounded-full bg-white/20" />
                  <span className="size-[6px] rounded-full bg-accent" />
                </div>
                <MetaLabel>Rapid Prototyping Stepper</MetaLabel>
              </div>
              <div className="flex items-center justify-between">
                {["01", "02", "03", "04"].map((step, index) => (
                  <div key={step} className="flex flex-1 items-center">
                    <div
                      className={`flex size-8 items-center justify-center rounded-full border font-mono text-[10px] ${
                        index === 0
                          ? "border-accent bg-accent text-white"
                          : "border-white/10 text-text-muted"
                      }`}
                    >
                      {step}
                    </div>
                    {index < 3 && (
                      <div className="mx-2 h-px flex-1 bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Selected UX Artifacts */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MetaLabel>02 / Case Studies</MetaLabel>
              <Divider />
            </div>
            <p className="font-display text-3xl italic text-text-primary md:text-4xl">
              Selected UX Artifacts
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
