import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const hasPlaceholders = testimonials.some((t) => t.placeholder);

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Client feedback"
          title="What business owners say"
          description="Straightforward work, clear communication, and no pressure. Here's how clients describe working with us."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-surface p-7 shadow-sm sm:p-8">
                <Quote
                  aria-hidden
                  className="absolute right-6 top-6 size-10 text-brand-fg/15"
                />
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      aria-hidden
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-pretty text-base leading-relaxed text-fg">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    aria-hidden
                    className="flex size-10 items-center justify-center rounded-full bg-brand-soft font-display text-sm font-bold text-brand-fg"
                  >
                    {t.name.replace(/^Dr\.\s*/, "").charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-fg">
                      {t.name}
                    </span>
                    <span className="block text-sm text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* {hasPlaceholders && (
          <p className="mt-8 text-center text-xs text-muted">
            Sample testimonials shown for layout purposes. They&apos;ll be
            replaced with real client feedback.
          </p>
        )} */}
      </Container>
    </Section>
  );
}
