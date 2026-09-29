import {
  BadgeCheck,
  Briefcase,
  Camera,
  Car,
  ChartLine,
  ClipboardList,
  Eye,
  FileSearch,
  HeartHandshake,
  House,
  MapPin,
  MessageSquareText,
  Scissors,
  Search,
  ShieldCheck,
  Star,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  includes: string[];
};

export const services: Service[] = [
  {
    id: "gbp-optimization",
    title: "Google Business Profile Optimization",
    icon: MapPin,
    summary:
      "Complete, accurate, and well-structured profiles that give Google and customers the full picture.",
    description:
      "Your Google Business Profile is often the first thing a customer sees. We make sure every part of it is complete, accurate, and set up the way Google recommends.",
    includes: [
      "Primary and secondary category review",
      "Services, service areas, and hours set up correctly",
      "Clear, helpful business description",
      "Relevant attributes and contact options",
      "Name, address, and phone consistency checks",
    ],
  },
  {
    id: "review-generation",
    title: "Genuine Review Generation System",
    icon: Star,
    summary:
      "A simple, repeatable way to ask real customers for honest reviews, set up for your team.",
    description:
      "Most happy customers never leave a review because nobody asked. We set up an easy, repeatable process for asking every customer, and it follows Google's review policies.",
    includes: [
      "Direct review links and printable QR codes",
      "Ready-to-send text and email request templates",
      "Guidance on when and how to ask",
      "A quick walkthrough for you and your team",
      "No incentives, no fake reviews, no filtering out unhappy customers",
    ],
  },
  {
    id: "review-management",
    title: "Review Management",
    icon: MessageSquareText,
    summary:
      "Professional, timely responses to every review, positive or negative.",
    description:
      "How you respond to reviews says a lot about your business. We help you reply professionally and consistently, including to the difficult ones.",
    includes: [
      "Monitoring for new reviews",
      "Professional response drafts in your voice",
      "Calm, constructive handling of negative reviews",
      "Flagging reviews that appear to break Google's policies",
      "Tips to turn feedback into better service",
    ],
  },
  {
    id: "local-seo",
    title: "Local SEO & Google Maps Visibility",
    icon: Search,
    summary:
      "Strengthen the signals Google uses to decide which local businesses to show.",
    description:
      "Google says local results are based mainly on relevance, distance, and prominence. We work on the parts you can influence so your business is a stronger match for local searches.",
    includes: [
      "Local keyword and competitor review",
      "Directory listing (citation) clean-up and consistency",
      "Local on-page basics for your website",
      "Service and service-area page recommendations",
      "Internal linking and title tag improvements",
    ],
  },
  {
    id: "photos-setup",
    title: "Profile Photos & Setup",
    icon: Camera,
    summary:
      "New profile setup, verification help, and real photos that show your work.",
    description:
      "Starting fresh or fixing a messy listing? We help you claim, verify, and set up your profile properly, and make it look trustworthy with real photos.",
    includes: [
      "New profile creation or claiming an existing one",
      "Step-by-step verification guidance",
      "Duplicate listing clean-up",
      "Logo, cover, team, vehicle, and job-site photo guidance",
      "Photo upload and organization",
    ],
  },
  {
    id: "monthly-monitoring",
    title: "Monthly Monitoring",
    icon: ChartLine,
    summary:
      "Ongoing care so your profile stays accurate, active, and protected.",
    description:
      "Profiles aren't set-and-forget. Suggested edits, new competitors, and outdated info can quietly hurt you. We keep an eye on things and send you a clear monthly update.",
    includes: [
      "Watching for unwanted or suggested edits",
      "Regular profile updates and posts",
      "Fresh photo additions",
      "Tracking calls, direction requests, and website clicks",
      "Plain-English monthly summary",
    ],
  },
];

export type Step = {
  title: string;
  icon: LucideIcon;
  summary: string;
  details: string[];
};

export const steps: Step[] = [
  {
    title: "Free Analysis",
    icon: FileSearch,
    summary:
      "We review your Google Business Profile, reviews, local competitors, and website basics.",
    details: [
      "Profile completeness and accuracy check",
      "Review count, recency, and response review",
      "Look at who shows up for your key searches",
      "Clear summary of what's working and what's missing",
    ],
  },
  {
    title: "Custom Plan",
    icon: ClipboardList,
    summary:
      "You get a prioritized plan: what we'd fix first, why it matters, and what it costs.",
    details: [
      "Priorities based on your business and area",
      "Straightforward scope and pricing",
      "Honest expectations, with no promised rankings",
      "No pressure. It's your call.",
    ],
  },
  {
    title: "Setup & Optimization",
    icon: Wrench,
    summary:
      "We fix and complete your profile, set up your review system, and clean up listings.",
    details: [
      "Profile optimization and photo setup",
      "Review request links, QR codes, and templates",
      "Directory listing consistency fixes",
      "Website local SEO recommendations",
    ],
  },
  {
    title: "Monitor & Improve",
    icon: Eye,
    summary:
      "We keep your profile healthy, track progress, and adjust based on what we see.",
    details: [
      "Ongoing monitoring and updates",
      "Review response support",
      "Monthly plain-English report",
      "Adjustments as your market changes",
    ],
  },
];

export type Reason = {
  title: string;
  icon: LucideIcon;
  description: string;
};

export const reasons: Reason[] = [
  {
    title: "Guideline-safe methods only",
    icon: ShieldCheck,
    description:
      "We follow Google's Business Profile guidelines. No fake reviews, keyword-stuffed names, or fake addresses that put your listing at risk.",
  },
  {
    title: "No false promises",
    icon: BadgeCheck,
    description:
      "Nobody can honestly guarantee a #1 ranking. We focus on the things you can control and show you real progress.",
  },
  {
    title: "Built for every kind of local business",
    icon: Store,
    description:
      "Storefronts, restaurants, clinics, and service-area businesses all show up differently on Google. We tailor the work to how your customers actually find you.",
  },
  {
    title: "Clear, plain-English reporting",
    icon: ChartLine,
    description:
      "Every month you'll see what we did and how your profile is performing: calls, direction requests, website clicks, and reviews.",
  },
  {
    title: "You own everything",
    icon: HeartHandshake,
    description:
      "Your profile, photos, and reviews stay yours. We work as a manager on your account, and you always keep full ownership.",
  },
  {
    title: "Free analysis first",
    icon: FileSearch,
    description:
      "See exactly what we'd improve before you commit to anything. If your profile is already in great shape, we'll tell you.",
  },
];

export type Industry = {
  title: string;
  icon: LucideIcon;
  examples: string;
};

/** Examples only. Any business customers find on Google Maps is a fit. */
export const industries: Industry[] = [
  {
    title: "Home services",
    icon: House,
    examples: "Plumbers, HVAC, roofers, cleaners, lawn care",
  },
  {
    title: "Restaurants & cafés",
    icon: UtensilsCrossed,
    examples: "Restaurants, cafés, bakeries, food trucks",
  },
  {
    title: "Health & wellness",
    icon: Stethoscope,
    examples: "Dentists, chiropractors, clinics, gyms",
  },
  {
    title: "Beauty & personal care",
    icon: Scissors,
    examples: "Salons, barbershops, spas, nail studios",
  },
  {
    title: "Automotive",
    icon: Car,
    examples: "Auto repair, detailing, tire shops, car washes",
  },
  {
    title: "Retail shops",
    icon: Store,
    examples: "Boutiques, pet stores, florists, hardware stores",
  },
  {
    title: "Professional services",
    icon: Briefcase,
    examples: "Law firms, accountants, real estate, insurance",
  },
  {
    title: "Contractors & trades",
    icon: Wrench,
    examples: "Builders, electricians, painters, remodelers",
  },
];

export type TrustPoint = {
  title: string;
  icon: LucideIcon;
  description: string;
};

export const trustPoints: TrustPoint[] = [
  {
    title: "No fake reviews, ever",
    icon: ShieldCheck,
    description: "Only genuine reviews from real customers",
  },
  {
    title: "No ranking guarantees",
    icon: BadgeCheck,
    description: "Honest expectations from day one",
  },
  {
    title: "Transparent process",
    icon: Eye,
    description: "You see every change and every report",
  },
  {
    title: "You keep ownership",
    icon: HeartHandshake,
    description: "Your profile and reviews stay yours",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Marks sample content. Replace with real, permission-granted client feedback before launch. */
  placeholder: boolean;
};

// TODO: Replace these samples with real client testimonials (with their permission).
export const testimonials: Testimonial[] = [
  {
    quote:
      "Our profile had the wrong hours and almost no photos. Now everything is accurate, and we finally have a simple way to ask customers for reviews. No pushy sales pitch, just clear explanations.",
    name: "Maria R.",
    role: "Owner, family restaurant",
    placeholder: true,
  },
  {
    quote:
      "I appreciated that they didn't promise me the #1 spot. They explained what they'd fix and why, and the monthly updates are short and easy to understand.",
    name: "James T.",
    role: "Owner, roofing company",
    placeholder: true,
  },
  {
    quote:
      "The review request cards and text templates made it easy for our front desk. We ask every patient now, and replying to reviews no longer feels like a chore.",
    name: "Dr. Priya S.",
    role: "Dental practice",
    placeholder: true,
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Can you guarantee a #1 ranking on Google Maps?",
    answer:
      "No, and you should be careful with anyone who does. Google's local results depend on relevance, distance, and prominence, and the searcher's location is something nobody controls. What we can do is make your profile as strong, complete, and trustworthy as possible, and show you how it's performing over time.",
  },
  {
    question: "Do you work with my type of business?",
    answer:
      "Very likely. If your business has (or should have) a Google Business Profile and customers find you on Google Maps, we can help. That includes storefronts like restaurants, shops, and clinics, as well as service-area businesses like contractors and cleaners.",
  },
  {
    question: "Do you buy, write, or filter reviews?",
    answer:
      "Never. Fake or incentivized reviews and review gating (only asking happy customers) break Google's policies and can get reviews removed or your profile suspended. We help you ask every real customer in a simple, consistent way.",
  },
  {
    question: "What's included in the free analysis?",
    answer:
      "We look at your Google Business Profile, your reviews, the businesses showing up for your main local searches, and your website basics. You'll get a clear summary of what's working, what's missing, and what we'd prioritize. There's no obligation.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Profile fixes and setup are usually done in the first couple of weeks. Visibility and review growth tend to build gradually over several months. The timeline depends on your competition, location, and how consistently reviews come in.",
  },
  {
    question: "Do I need a website?",
    answer:
      "It isn't required, but it helps. A simple website with clear business and location information gives Google more context and gives customers another reason to trust you. If you have one, we'll include recommendations for it.",
  },
  {
    question: "Will I keep ownership of my Google Business Profile?",
    answer:
      "Yes. You stay the owner of your profile at all times. We ask to be added as a manager so we can make updates, and you can remove our access whenever you like.",
  },
];

/** Short list shown on the home page; the full list lives on How It Works. */
export const homeFaqs = faqs.slice(0, 4);
