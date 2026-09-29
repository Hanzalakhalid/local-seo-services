import { industries } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Industries() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Who we help"
          title="Any business customers find on Google Maps"
          description="If people search for what you offer “near me” or in your town, your Google Business Profile matters. Here are just a few examples."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.title} delay={(i % 4) * 0.06} className="h-full">
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-brand/40">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-fg">
                  <industry.icon aria-hidden className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-fg sm:text-base">
                    {industry.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {industry.examples}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 text-center text-base text-muted">
            Don&apos;t see your type of business? Get in touch and we&apos;ll tell
            you honestly whether we can help.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
