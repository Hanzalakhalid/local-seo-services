import { trustPoints } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar() {
  return (
    <section aria-label="Our commitments" className="border-y border-border bg-surface">
      <Container>
        <Reveal>
          <ul className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {trustPoints.map((point) => (
              <li
                key={point.title}
                className="flex items-center gap-4 py-6 sm:px-2 lg:justify-center lg:px-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-fg">
                  <point.icon aria-hidden className="size-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-fg sm:text-base">
                    {point.title}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
