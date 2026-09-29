import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Google Business Profile & Local SEO Services`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Google Business Profile optimization",
    "local SEO",
    "Google Maps visibility",
    "review generation",
    "review management",
    "local SEO for small businesses",
    "Google Maps marketing",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Google Business Profile & Local SEO Services`,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: `${site.name} | Google Business Profile & Local SEO Services`,
    description: site.description,
  },
  alternates: { canonical: "/" },
};

// Applies the saved (or system) theme before first paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  email: site.email,
  url: site.url,
  serviceType: [
    "Google Business Profile Optimization",
    "Review Generation",
    "Review Management",
    "Local SEO",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileCTA />
        </MotionProvider>
      </body>
    </html>
  );
}
