import type { Metadata } from "next";
import { CircleCheck, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { trustPoints } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact: Get Your Free Analysis",
  description:
    "Request a free, no-obligation analysis of your Google Business Profile, reviews, and local competition.",
  alternates: { canonical: "/contact" },
};

const analysisIncludes = [
  "Google Business Profile completeness check",
  "Review count, recency, and response review",
  "A look at who ranks for your main local searches",
  "Website local SEO basics",
  "A prioritized list of what we'd fix first",
];

const nextSteps = [
  "We review your business and local competition.",
  "You get a clear, plain-English summary by email.",
  "If it makes sense, we suggest a plan. No pressure either way.",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get your free analysis"
        description="Tell us a little about your business and we'll take an honest look at how you're showing up on Google. No obligation, no hard sell."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-fg">
                Request your free analysis
              </h2>
              <p className="mt-2 text-sm text-muted">
                Takes about a minute. Optional fields help us give you a more
                useful analysis.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-fg">
                Prefer email?
              </h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 flex items-center gap-3 rounded-xl bg-brand-soft p-4 text-sm font-semibold text-brand-fg transition-colors hover:bg-brand hover:text-white"
              >
                <Mail aria-hidden className="size-5 shrink-0" />
                <span className="break-all">{site.email}</span>
              </a>
            </div>

            <div className="rounded-3xl border border-brand/25 bg-brand-soft p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-fg">
                Our promise to you
              </h2>
              <ul className="mt-4 space-y-4">
                {trustPoints.map((point) => (
                  <li key={point.title} className="flex gap-3">
                    <point.icon
                      aria-hidden
                      className="mt-0.5 size-5 shrink-0 text-brand-fg"
                    />
                    <span>
                      <span className="block text-sm font-semibold text-fg">
                        {point.title}
                      </span>
                      <span className="block text-sm text-muted">
                        {point.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-fg">
                What the analysis covers
              </h2>
              <ul className="mt-4 space-y-3">
                {analysisIncludes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-fg">
                    <CircleCheck
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-brand-fg"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-fg">
                What happens next
              </h2>
              <ol className="mt-4 space-y-4">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-muted">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
