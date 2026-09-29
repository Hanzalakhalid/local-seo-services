import { steps } from "@/lib/data";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessOverview() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A simple, transparent process"
          description="No confusing jargon and no long sales calls. Here's exactly what happens when you work with us."
        />

        <div className="relative mt-16">
          {/* Connector line on large screens */}
          <div
            aria-hidden
            className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-border lg:block"
          />
          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                as="li"
                delay={i * 0.1}
                className="relative flex flex-col items-start lg:items-center lg:text-center"
              >
                <span className="relative flex size-12 items-center justify-center rounded-full border-4 border-surface bg-brand font-display text-lg font-bold text-white shadow-md shadow-blue-600/25">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-fg sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {step.summary}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={site.cta.href} size="lg" arrow>
            Start with a Free Analysis
          </ButtonLink>
          <ButtonLink href="/how-it-works" size="lg" variant="secondary">
            See the full process
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
