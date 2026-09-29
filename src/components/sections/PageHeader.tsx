import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-blue-400/15 blur-3xl dark:bg-blue-500/10"
      />
      <Container className="py-16 text-center sm:py-20">
        <Reveal className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-fg">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
        </Reveal>
      </Container>
    </section>
  );
}
