import Container from "@/components/primitives/Container";
import Eyebrow from "@/components/primitives/Eyebrow";
import MetaLabel from "@/components/primitives/MetaLabel";

const STATS = [
  { value: "20y+", label: "Industry Depth" },
  { value: "11+", label: "Technical Domains" },
];

const METHODS = [
  { label: "Research-Led Design", index: "01", fill: 90 },
  { label: "Systemic Thinking", index: "02", fill: 95 },
  { label: "Technical Compliance", index: "03", fill: 85 },
];

export default function About() {
  return (
    <section id="discovery" className="py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Eyebrow>Research Phase</Eyebrow>
            <MetaLabel>{"// 20 Years of Craft"}</MetaLabel>
          </div>
          <h2 className="max-w-4xl font-display text-[40px] italic leading-[1.1] tracking-[-0.02em] text-text-primary md:text-[64px]">
            I design for people who don&apos;t have the luxury of confusion.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-6">
            <p className="font-display text-2xl text-text-primary/90">
              I work where high technical complexity meets high regulatory
              stakes.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/5 bg-gradient-to-br from-[#161619] to-[#0d0d0e] p-6"
                >
                  <p className="font-mono text-xl text-accent-light">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.1em] text-text-primary/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-sans text-lg leading-relaxed text-text-muted">
              My focus has narrowed specifically to{" "}
              <span className="font-sans italic text-text-primary underline decoration-accent/40">
                Complex UX
              </span>
              : making powerful platforms feel simple, grounded in research
              but built through judgment.
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-surface p-8 lg:col-span-6">
            <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">
              Methodological Stack
            </p>
            <div className="flex flex-col gap-6">
              {METHODS.map((method) => (
                <div key={method.label} className="flex flex-col gap-2">
                  <div className="flex items-baseline justify-between">
                    <span className="font-sans text-sm font-bold uppercase tracking-[-0.01em] text-text-primary">
                      {method.label}
                    </span>
                    <span className="font-mono text-[9px] italic text-text-muted">
                      {method.index}
                    </span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${method.fill}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
