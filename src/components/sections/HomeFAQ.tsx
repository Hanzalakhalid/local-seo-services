import Link from "next/link";
import { homeFaqs } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "./FAQ";

export function HomeFAQ() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Honest answers, up front"
          description="The questions business owners ask us most."
        />
        <FAQ items={homeFaqs} />
        <p className="mt-8 text-center text-sm text-muted">
          More questions?{" "}
          <Link
            href="/how-it-works#faq"
            className="font-semibold text-brand-fg hover:underline"
          >
            See the full FAQ
          </Link>
        </p>
      </Container>
    </Section>
  );
}
