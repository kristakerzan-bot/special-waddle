import Container from "@/components/primitives/Container";
import Divider from "@/components/primitives/Divider";
import Reveal from "@/components/primitives/Reveal";

export default function Contact() {
  return (
    <section id="resolution" className="py-24 md:py-32">
      <Container className="flex flex-col items-center gap-12 text-center">
        <Reveal className="flex items-center gap-4">
          <Divider width="w-12" />
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-text-primary">
            05: Resolution
          </span>
          <Divider width="w-12" />
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-[56px] leading-[1] tracking-[-0.03em] text-text-primary md:text-[96px]">
            OWN THE
            <br />
            <span className="italic">SYSTEM.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="max-w-2xl font-sans text-xl leading-relaxed text-text-primary/90 md:text-2xl">
            The best UX is the kind nobody notices. Let&apos;s discuss how we
            can build the standards that keep your platform coherent as it
            scales.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <a
            href="mailto:hello@example.com"
            className="group mt-4 flex items-center gap-6 rounded-full border-2 border-white px-10 py-6 font-sans text-sm font-bold uppercase tracking-[0.2em] text-text-primary transition-all duration-300 hover:scale-105 hover:bg-white hover:text-bg"
          >
            Start the Resolution
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M0 5.5H12M12 5.5L7.5 1M12 5.5L7.5 10"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
