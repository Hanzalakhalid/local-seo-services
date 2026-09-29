import type { Metadata } from "next";
import { CircleCheck, Hourglass } from "lucide-react";
import { faqs, steps } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "How It Works: Our Local SEO Process",
  description:
    "From a free analysis to ongoing monitoring, here's exactly how we improve your Google Business Profile and local visibility, with honest expectations at every step.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="A clear process, from first look to ongoing care"
        description="You'll always know what we're doing, why we're doing it, and what to realistically expect."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical timeline line */}
            <div
              aria-hidden
              className="absolute bottom-6 left-6 top-6 w-px bg-border"
            />
            <ol className="space-y-10">
              {steps.map((step, i) => (
                <Reveal
                  key={step.title}
                  as="li"
                  delay={0.05}
                  className="relative flex gap-6 sm:gap-8"
                >
                  <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-4 border-bg bg-brand text-white shadow-md shadow-blue-600/25">
                    <step.icon aria-hidden className="size-5" />
                  </span>
                  <div className="flex-1 rounded-2xl border border-border bg-surface p-6 sm:p-8">
                    <p className="text-sm font-semibold text-brand-fg">
                      Step {i + 1}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-fg">
                      {step.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted">
                      {step.summary}
                    </p>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex gap-2.5 text-sm text-fg">
                          <CircleCheck
                            aria-hidden
                            className="mt-0.5 size-4 shrink-0 text-brand-fg"
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col gap-5 rounded-2xl border border-brand/30 bg-brand-soft p-6 sm:flex-row sm:p-8">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <Hourglass aria-hidden className="size-5" />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold text-fg">
                  Realistic timelines
                </h2>
                <p className="mt-2 leading-relaxed text-muted">
                  Profile fixes and setup are usually completed within the first
                  couple of weeks. Changes in visibility and review growth
                  typically build gradually over several months. How quickly
                  depends on your competition, your location, and how
                  consistently new reviews come in. We&apos;ll never promise
                  overnight results.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="faq" className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="Straight answers to the questions we hear most."
          />
          <FAQ items={faqs} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
