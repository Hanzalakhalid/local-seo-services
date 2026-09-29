import { reasons } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          title="Honest work you can trust"
          description="Local SEO has a reputation for shortcuts and big promises. We do it differently."
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 0.08}>
              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-fg">
                  <reason.icon aria-hidden className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
