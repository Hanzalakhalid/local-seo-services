import Link from "next/link";
import { Mail } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface pb-20 md:pb-0">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Honest Google Business Profile and local SEO help for any business
            customers find on Google Maps.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-fg hover:underline"
          >
            <Mail aria-hidden className="size-4" />
            {site.email}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-fg">Quick links</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted hover:text-fg">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-fg">Services</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="text-muted hover:text-fg"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Not affiliated with Google. Google Business Profile is a trademark of
            Google LLC.
          </p>
        </Container>
      </div>
    </footer>
  );
}
