import Image from "next/image";
import {
  ExternalLink,
  MapPin,
  MoreVertical,
  Share2,
  Star,
  ThumbsUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const googleReviewsUrl =
  "https://www.google.com/maps/place/USA+Plumbing/@33.7070198,-78.9046448,17z/data=!4m15!1m8!3m7!1s0x89006c6f295ca6d3:0xc0de83b998573b71!2sUSA+Plumbing!8m2!3d33.7070198!4d-78.9046448!10e1!16s%2Fg%2F11g7zw62cx!3m5!1s0x89006c6f295ca6d3:0xc0de83b998573b71!8m2!3d33.7070198!4d-78.9046448!16s%2Fg%2F11g7zw62cx?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D";

function Stars({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          aria-hidden
          className={`${size === "sm" ? "size-4" : "size-5"} fill-[#fbbc04] text-[#fbbc04]`}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

function GoogleWordmark() {
  return (
    <span className="font-sans text-sm font-semibold tracking-[-0.04em]" aria-label="Google">
      <span className="text-[#4285f4]">G</span>
      <span className="text-[#ea4335]">o</span>
      <span className="text-[#fbbc05]">o</span>
      <span className="text-[#4285f4]">g</span>
      <span className="text-[#34a853]">l</span>
      <span className="text-[#ea4335]">e</span>
    </span>
  );
}

export function Testimonials() {
  return (
    <Section className="relative overflow-hidden border-y border-border bg-surface-2/55">
      <Container>
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-fg shadow-sm">
              Real Google review
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-fg sm:text-5xl">
              What local trust looks like
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              A public review example from a real local service business—linked
              directly to its Google listing.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-border bg-surface shadow-xl shadow-slate-900/5 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="h-full">
            <aside className="h-full border-b border-border bg-surface lg:border-b-0 lg:border-r">
              <div className="grid h-56 grid-cols-5 gap-1 overflow-hidden sm:h-64">
                <div className="relative col-span-3">
                  <Image
                    src="/images/usa-plumbing/team.jpg"
                    alt="USA Plumbing service team with branded work vehicles"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, 60vw"
                  />
                </div>
                <div className="relative col-span-2">
                  <Image
                    src="/images/usa-plumbing/project.jpg"
                    alt="USA Plumbing technician beside a completed pump installation"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 20vw, 40vw"
                  />
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                    Real project photos
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-fg">
                      Featured local business
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-fg">
                      USA Plumbing
                    </h3>
                  </div>
                  <GoogleWordmark />
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="text-3xl font-medium text-fg">4.9</span>
                  <Stars />
                  <a
                    href={googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand-fg hover:underline"
                  >
                    378 Google reviews
                  </a>
                </div>

                <p className="mt-3 text-sm text-muted">Plumber in Myrtle Beach, South Carolina</p>
                <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-fg" aria-hidden />
                  741 Commerce Pl, Myrtle Beach, SC 29577, United States
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <a
                    href={googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
                  >
                    View on Google
                    <ExternalLink className="size-4" aria-hidden />
                  </a>
                  <a
                    href="https://www.usaplumbingsc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-semibold text-fg transition-colors hover:bg-surface-2"
                  >
                    Visit website
                  </a>
                </div>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <article className="flex h-full flex-col p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                  <p className="text-sm font-medium text-muted">Customer review</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-2xl font-semibold text-fg">5.0</span>
                    <Stars size="sm" />
                  </div>
                </div>
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-brand-fg hover:bg-surface-2"
                >
                  Read on Google
                  <ExternalLink className="size-4" aria-hidden />
                </a>
              </div>

              <div className="pt-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full bg-[#7e57c2] text-base font-semibold text-white">
                      M
                    </span>
                    <div>
                      <p className="font-semibold text-fg">Mark Keys</p>
                      <p className="text-xs text-muted">5 reviews · 3 months ago</p>
                    </div>
                  </div>
                  <MoreVertical className="size-5 text-muted" aria-hidden />
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <Stars size="sm" />
                  <span className="text-xs font-medium text-muted">Google review</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted">Reasonable price</span>
                  <span className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted">$200–300</span>
                </div>

                <blockquote className="mt-5 text-pretty text-base leading-7 text-fg sm:text-lg sm:leading-8">
                  “I called with an emergency and they showed up within the hour.
                  They were fast, friendly, and professional. I expected to get
                  raked over the coals but they were reasonably priced. I was
                  happy to pay!”
                </blockquote>

                <div className="mt-5 flex items-center gap-5 text-sm text-muted">
                  <span className="inline-flex items-center gap-2">
                    <ThumbsUp className="size-4" aria-hidden /> Helpful
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Share2 className="size-4" aria-hidden /> Share
                  </span>
                </div>

                <div className="mt-7 border-l-2 border-border pl-4 sm:pl-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-[#dbeafe] text-sm font-bold text-[#2563eb]">
                      U
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-fg">USA Plumbing (owner)</p>
                      <p className="text-xs text-muted">3 months ago</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    “Wow Mark so glad to hear from you. Happy to hear another great
                    experience. We appreciate you and the opportunity.”
                  </p>
                </div>
              </div>

              <p className="mt-auto pt-8 text-xs leading-5 text-muted">
                Rating and review count reflect the supplied Google listing
                screenshot and may change as new reviews are posted.
              </p>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
