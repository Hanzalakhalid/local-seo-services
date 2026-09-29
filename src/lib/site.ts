export const site = {
  name: "Local SEO Help",
  tagline: "Google Business Profile & Local SEO for local businesses",
  description:
    "Honest Google Business Profile optimization, genuine review generation, and local SEO for any business that customers find on Google Maps, from contractors and restaurants to clinics, salons, and shops.",
  email: "localseohelp1@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  cta: { label: "Get Free Analysis", href: "/contact" },
} as const;

/**
 * Formspree form ID for the Free Analysis form (endpoint: https://formspree.io/f/xppwkdgw).
 * Submissions are emailed to the address set on the form in your Formspree dashboard.
 * Can be overridden with NEXT_PUBLIC_FORMSPREE_FORM_ID.
 */
export const formspreeFormId =
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "xppwkdgw";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
