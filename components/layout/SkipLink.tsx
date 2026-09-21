import React from "react";

export interface SkipLinkProps {
  targetId?: string;
  label?: string;
}

export function SkipLink({
  targetId = "main-content",
  label = "Skip to main content",
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className="focus:bg-amber-glow focus:text-charcoal focus:ring-charcoal sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:px-5 focus:py-2.5 focus:font-semibold focus:shadow-xl focus:ring-2 focus:outline-none"
    >
      {label}
    </a>
  );
}
