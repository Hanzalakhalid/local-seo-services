import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-28 text-center">
      <p className="font-display text-6xl font-extrabold text-brand-fg">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-fg">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <ButtonLink href="/" className="mt-8" arrow>
        Back to home
      </ButtonLink>
    </Container>
  );
}
