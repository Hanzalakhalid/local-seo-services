import type { Metadata } from "next";
import { Eye, HeartHandshake, Lightbulb, ShieldCheck, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/sections/PageHeader";
import { Industries } from "@/components/sections/Industries";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} helps local businesses get found on Google through honest Google Business Profile optimization, genuine reviews, and practical local SEO.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Honesty",
    text: "We tell you what we can realistically do, and what nobody can. No inflated promises and no risky shortcuts.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "You'll always know what we changed, why we changed it, and how your profile is performing.",
  },
  {
    icon: Lightbulb,
    title: "Clarity",
    text: "Plain-English explanations and reports. You shouldn't need a marketing degree to understand your results.",
  },
  {
    icon: HeartHandshake,
    title: "Respect for your time",
    text: "You're busy running jobs. We keep things simple, handle the details, and only ask for what we really need.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Helping local businesses get found, the honest way"
        description={`${site.name} exists to give local businesses clear, trustworthy help with the part of marketing that often matters most: showing up when nearby customers search.`}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Why we do this
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                When someone needs a dentist, somewhere to eat, a haircut, or a
                contractor, they usually search Google, look at the map results,
                check reviews, and then call or visit. For many local businesses,
                that profile is the first impression, and it&apos;s often
                incomplete, outdated, or missing reviews.
              </p>
              <p>
                At the same time, business owners get flooded with calls and
                emails promising &ldquo;guaranteed #1 rankings.&rdquo; Many of
                those services rely on tactics that break Google&apos;s rules
                and put your listing at risk.
              </p>
              <p>
                We take a different approach: do the fundamentals really well,
                follow the guidelines, help you earn genuine reviews, and
                explain everything clearly. It isn&apos;t flashy, but it builds
                something that lasts.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-surface p-8 sm:p-10">
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-blue-600/25">
                <Target aria-hidden className="size-6" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-fg">
                Our mission
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                To help hard-working local businesses look as trustworthy online
                as they are in person, so the right customers can find them,
                trust them, and reach out.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our values"
            title="What you can expect from us"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-bg p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-fg">
                    <value.icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-fg">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Industries />

      <CTASection
        title="Let's take a look at your profile"
        description="Send us a few details and we'll put together a free, honest analysis of where your business stands on Google today."
      />
    </>
  );
}
