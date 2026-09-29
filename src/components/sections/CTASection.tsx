import { ArrowRight, CircleCheck, Mail } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type CTASectionProps = {
  title?: string;
  description?: string;
};

const assurances = ["100% free", "No obligation", "Honest, plain-English results"];

export function CTASection({
  title = "Find out what's holding your Google profile back",
  description = "Get a free, no-obligation analysis of your Google Business Profile, reviews, and local competition. We'll show you what's working, what's missing, and what we'd fix first.",
}: CTASectionProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-6 py-16 text-center shadow-2xl shadow-blue-900/25 sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 size-80 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 size-80 rounded-full bg-sky-300/20 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
                {title}
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-blue-100">
                {description}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={site.cta.href}
                  className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-white px-8 text-lg font-semibold text-blue-700 shadow-xl shadow-blue-950/30 transition-all hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  {site.cta.label}
                  <ArrowRight
                    aria-hidden
                    className="size-5 transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex h-14 items-center gap-2 rounded-xl px-4 text-sm font-medium text-blue-100 hover:text-white"
                >
                  <Mail aria-hidden className="size-4" />
                  {site.email}
                </a>
              </div>
              <ul className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-blue-100 sm:flex-row sm:gap-6">
                {assurances.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CircleCheck aria-hidden className="size-4 text-sky-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
