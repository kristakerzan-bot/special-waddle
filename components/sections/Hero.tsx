import Image from "next/image";
import Container from "@/components/primitives/Container";
import Divider from "@/components/primitives/Divider";
import Eyebrow from "@/components/primitives/Eyebrow";
import MetaLabel from "@/components/primitives/MetaLabel";
import Reveal from "@/components/primitives/Reveal";
import Parallax from "@/components/primitives/Parallax";

export default function Hero() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48"
    >
      <Parallax
        speed={0.08}
        className="pointer-events-none absolute inset-0"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(79,70,229,0.12),transparent_60%)]"
        />
      </Parallax>
      <Container className="relative grid gap-16 lg:grid-cols-12 lg:items-center">
        <Reveal className="flex flex-col gap-8 lg:col-span-7">
          <div className="flex items-center gap-3">
            <Eyebrow>Contextual Phase</Eyebrow>
            <Divider />
            <MetaLabel>File: 01_problem.ia</MetaLabel>
          </div>

          <h1 className="font-display text-[56px] italic leading-[0.95] tracking-[-0.02em] text-text-primary md:text-[80px]">
            Technical debt has a visual counterpart.
          </h1>

          <div className="flex flex-col gap-6 border-l border-accent pl-8">
            <p className="max-w-xl font-sans text-xl leading-relaxed text-text-primary/90 md:text-2xl">
              Fast-growing products accumulate{" "}
              <span className="font-sans italic text-accent">UX debt</span>{" "}
              quietly – until your patterns no longer agree with each other.
            </p>
            <p className="font-mono text-sm leading-relaxed text-text-muted">
              {"// Nobody decided to make it inconsistent."}
              <br />
              {"// It just happened, one deadline at a time."}
            </p>
          </div>

          <a
            href="#discovery"
            className="group flex w-fit items-center gap-4 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-text-primary"
          >
            Analyze the discovery gap
            <Divider width="w-12" className="transition-all group-hover:w-16" />
          </a>
        </Reveal>

        <Parallax speed={-0.06} className="lg:col-span-5">
          <Reveal delay={150}>
            <div className="relative w-full max-w-[448px] overflow-hidden rounded-2xl border border-white/10 bg-surface p-[17px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:-translate-y-1">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between px-2">
                  <div className="flex gap-[6px]">
                    <span className="size-2 rounded-full bg-red-500/40" />
                    <span className="size-2 rounded-full bg-yellow-500/40" />
                    <span className="size-2 rounded-full bg-green-500/40" />
                  </div>
                  <span className="font-mono text-[8px] text-text-primary/40">
                    SYSTEM_OVERVIEW.PDF
                  </span>
                </div>

                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/profile-photo.svg"
                    alt="Placeholder portrait — replace with a real photo"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <span className="absolute right-4 top-4 -rotate-2 rounded bg-accent px-2 py-1 font-mono text-[8px] text-white">
                    Krista // Design Lead
                  </span>
                  <div className="absolute bottom-6 left-6 max-w-[160px] rounded-xl border border-white/10 bg-bg/80 p-3 backdrop-blur">
                    <div className="mb-2 flex gap-1">
                      <span className="size-1 rounded-full bg-accent" />
                      <span className="size-1 rounded-full bg-accent/50" />
                      <span className="size-1 rounded-full bg-accent/20" />
                    </div>
                    <p className="font-mono text-[9px] leading-[1.4] text-text-muted">
                      Architecting clarity for operational power users and
                      technical users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Parallax>
      </Container>
    </section>
  );
}
