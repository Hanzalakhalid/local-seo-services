"use client";

import { motion } from "framer-motion";
import {
  Camera,
  CircleCheck,
  Clock,
  MapPin,
  MessageSquareText,
  Navigation,
  Phone,
  Star,
  Globe,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const highlights = [
  "Free, no-obligation analysis",
  "Google-guideline-safe methods",
  "Plain-English monthly reports",
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft background glow + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-blue-400/15 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      </div>

      <Container className="grid items-center gap-16 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:pb-28 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted shadow-sm sm:text-sm">
            <MapPin aria-hidden className="size-4 text-brand-fg" />
            For every local business on Google Maps
          </p>
          <h1 className="mt-7 text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Get found by more{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-sky-300">
              local customers
            </span>{" "}
            on Google
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
            Whether you run a restaurant, a clinic, a shop, or a contracting
            business, we help you build a complete, trustworthy Google Business
            Profile, earn genuine reviews, and stand out on Google Maps, with
            honest methods and no false promises.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={site.cta.href} size="xl" arrow>
              {site.cta.label}
            </ButtonLink>
            <ButtonLink href="/how-it-works" size="xl" variant="secondary">
              See How It Works
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-col gap-2.5 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-6">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CircleCheck aria-hidden className="size-4 text-brand-fg" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-md"
        >
          <ProfileMockup />
        </motion.div>
      </Container>
    </section>
  );
}


/** Illustrative example of a complete Google Business Profile (not real data). */
function ProfileMockup() {
  return (
    <figure>
      <div className="relative rounded-3xl border border-border bg-surface p-3 shadow-xl shadow-blue-900/5 dark:shadow-black/30">
        {/* Map strip */}
        <div className="relative h-36 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-sky-50 dark:from-blue-950 dark:to-slate-900">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.6)_2px,transparent_2px),linear-gradient(to_bottom,rgb(255_255_255/0.6)_2px,transparent_2px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_2px,transparent_2px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_2px,transparent_2px)]" />
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <MapPin
              aria-hidden
              className="size-10 fill-brand text-white drop-shadow-md"
              strokeWidth={1.5}
            />
          </motion.div>
        </div>

        <div className="px-3 pb-3 pt-4">
          <p className="font-display text-lg font-bold text-fg">
            Your Business Name
          </p>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-muted">
            <span className="flex" aria-label="Star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  aria-hidden
                  className="size-4 fill-amber-400 text-amber-400"
                />
              ))}
            </span>
            <span>Reviews</span>
            <span aria-hidden>·</span>
            <span>Local business</span>
          </div>
          <p className="mt-2 flex items-center gap-1.5 text-sm">
            <Clock aria-hidden className="size-4 text-emerald-600" />
            <span className="font-medium text-emerald-600 dark:text-emerald-400">
              Open
            </span>
            <span className="text-muted">· Serving your area</span>
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { icon: Phone, label: "Call" },
              { icon: Navigation, label: "Directions" },
              { icon: Globe, label: "Website" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 rounded-xl bg-brand-soft py-2.5 text-xs font-medium text-brand-fg"
              >
                <Icon aria-hidden className="size-4" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <FloatingChip
        className="-left-3 top-24 sm:-left-10"
        icon={MessageSquareText}
        text="New review, replied"
        delay={0.6}
      />
      <FloatingChip
        className="-right-3 top-6 sm:-right-8"
        icon={Camera}
        text="Photos updated"
        delay={0.8}
      />

      <figcaption className="mt-4 text-center text-xs text-muted">
        Illustration of a complete, well-maintained profile
      </figcaption>
    </figure>
  );
}

function FloatingChip({
  icon: Icon,
  text,
  className,
  delay,
}: {
  icon: typeof Camera;
  text: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease }}
      className={`absolute flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-xs font-medium text-fg shadow-lg shadow-blue-900/5 ${className}`}
    >
      <span className="flex size-6 items-center justify-center rounded-lg bg-brand-soft text-brand-fg">
        <Icon aria-hidden className="size-3.5" />
      </span>
      {text}
    </motion.div>
  );
}
