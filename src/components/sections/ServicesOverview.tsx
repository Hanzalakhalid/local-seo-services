import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesOverview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything your local listing needs"
          description="Practical, proven work on the parts of your online presence that local customers actually see."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.08}>
              <Link
                href={`/services#${service.id}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all sm:p-8 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-blue-900/5"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-brand-fg transition-colors group-hover:bg-brand group-hover:text-white">
                  <service.icon aria-hidden className="size-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-fg sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-base leading-relaxed text-muted">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-fg">
                  Learn more
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
