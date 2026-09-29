import type { Metadata } from "next";
import { CircleCheck, CircleX } from "lucide-react";
import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services: Google Business Profile, Reviews & Local SEO",
  description:
    "Google Business Profile optimization, genuine review generation, review management, local SEO, profile photos and setup, and monthly monitoring for local businesses of every kind.",
  alternates: { canonical: "/services" },
};

const wontDo = [
  "Promise or guarantee a #1 ranking",
  "Buy, write, or incentivize reviews",
  "Filter out unhappy customers from review requests",
  "Stuff keywords into your business name",
  "Create fake addresses or duplicate listings",
  "Lock you into access you can't remove",
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Local SEO services that build real trust"
        description="Every service focuses on what actually helps local customers find you, trust you, and contact you, done carefully and within Google's guidelines."
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-8">
          {services.map((service, i) => (
            <Reveal key={service.id}>
              <article
                id={service.id}
                className="grid gap-8 rounded-3xl border border-border bg-surface p-6 sm:p-10 lg:grid-cols-5 lg:gap-12"
              >
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-blue-600/25">
                      <service.icon aria-hidden className="size-6" />
                    </span>
                    <span className="text-sm font-semibold text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
                <div className="rounded-2xl bg-surface-2 p-6 lg:col-span-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-fg">
                    What&apos;s included
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.includes.map((item) => (
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
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our standards"
            title="What we will never do"
            description="Shortcuts can get reviews removed or a profile suspended. Protecting your business comes first."
          />
          <Reveal className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {wontDo.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-bg px-4 py-3 text-sm font-medium text-fg"
              >
                <CircleX aria-hidden className="size-5 shrink-0 text-rose-500" />
                {item}
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Not sure which services you need?"
        description="Start with a free analysis. We'll look at your profile and tell you honestly what would make the biggest difference, even if that's not much."
      />
    </>
  );
}
