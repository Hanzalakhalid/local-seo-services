import Link from "next/link";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-fg"
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-white shadow-sm shadow-blue-600/30">
        <MapPin aria-hidden className="size-5" />
      </span>
      {site.name}
    </Link>
  );
}
