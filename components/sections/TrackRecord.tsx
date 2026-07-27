import Container from "@/components/primitives/Container";
import Eyebrow from "@/components/primitives/Eyebrow";
import MetaLabel from "@/components/primitives/MetaLabel";

const ROLES = [
  {
    title: "Senior Core Architecture Product Designer",
    meta: "Bragg Gaming // 2016 – Present",
    badge: "30 → 450+ Growth",
    active: true,
    body: "Owning the experience layer across 11 product domains. Built the platform's design system under strict regulatory constraints.",
  },
  {
    title: "Senior Product Designer",
    meta: "Celtra // 2011 – 2016",
    badge: "Ad-Tech Platform",
    active: false,
    body: "Lead UX Designer for the platform. Collaborated in a cross-functional team including Engineering, QA, and Product Owners to scale technical patterns for speed and pragmatism.",
  },
  {
    title: "Web & Digital Designer",
    meta: "Web Agency // 2005 – 2011",
    badge: "7 → 50+ Growth",
    active: false,
    body: "Shipped more than 500 digital products. Foundation of fast iteration and confident decision-making.",
  },
];

export default function TrackRecord() {
  return (
    <section id="partnership" className="py-24 md:py-32">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="flex items-center gap-3">
            <Eyebrow>Trajectory</Eyebrow>
            <MetaLabel>{"// Experience History"}</MetaLabel>
          </div>
          <h2 className="font-display text-[40px] italic leading-[1] tracking-[-0.02em] text-text-primary md:text-[56px]">
            Two decades of architectural growth.
          </h2>
          <p className="font-sans text-lg leading-relaxed text-text-muted">
            Divided between startup speed and enterprise-scale complexity.
            I&apos;ve grown from individual contributor to lead UX designer
            for the entire platform, collaborating with cross-functional
            specialist teams.
          </p>

          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 border-l-4 border-l-accent bg-surface/40 px-8 py-10">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-accent-light">
              Leadership Artifact
            </p>
            <p className="font-sans text-sm text-text-primary">
              &ldquo;Coherence is a team effort. Design is the glue.&rdquo;
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Lead UX designer for the whole platform",
                "Embedded with Engineering, QA & Product",
                "Set cross-domain coherence standards",
              ].map((item) => (
                <li key={item} className="font-mono text-[10px] text-text-muted">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-16 lg:col-span-7">
          {ROLES.map((role) => (
            <div key={role.title} className="relative pl-12">
              <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
              <span
                className={`absolute -left-[4.5px] top-0 size-[9px] rounded-full ${
                  role.active
                    ? "bg-accent shadow-[0_0_10px_0_#4f46e5]"
                    : "bg-white/20"
                }`}
              />
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-display text-2xl italic font-bold text-text-primary">
                      {role.title}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
                      {role.meta}
                    </p>
                  </div>
                  <span className="whitespace-nowrap rounded border border-white/10 bg-white/5 px-3 py-1 font-mono text-[9px] text-text-primary">
                    {role.badge}
                  </span>
                </div>
                <p
                  className={`max-w-xl font-sans text-sm leading-relaxed text-text-muted ${
                    role.active ? "" : "opacity-70"
                  }`}
                >
                  {role.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
