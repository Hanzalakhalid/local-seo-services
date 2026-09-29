"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

/** Sticky bottom CTA on small screens, shown after the visitor scrolls past the hero. */
export function MobileCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === site.cta.href) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/90 p-3 backdrop-blur-md md:hidden"
        >
          <Link
            href={site.cta.href}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand text-base font-semibold text-white shadow-lg shadow-blue-600/25"
          >
            {site.cta.label}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
