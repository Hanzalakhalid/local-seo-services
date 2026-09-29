import type { ReactNode } from "react";

/** Consistent vertical rhythm for page sections. `tone="muted"` adds a banded background. */
export function Section({
  children,
  tone = "default",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "default" | "muted";
  className?: string;
  id?: string;
}) {
  const toneClasses =
    tone === "muted" ? "border-y border-border bg-surface" : "";
  return (
    <section id={id} className={`py-20 sm:py-28 ${toneClasses} ${className}`}>
      {children}
    </section>
  );
}
