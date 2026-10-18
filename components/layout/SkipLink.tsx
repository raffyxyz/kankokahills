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
      className="focus:bg-ink focus:text-chalk focus:ring-solar sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-[2px] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:shadow-xl focus:ring-2 focus:outline-none"
    >
      {label}
    </a>
  );
}
