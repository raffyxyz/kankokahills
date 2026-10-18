import React from "react";

export type BadgeVariant =
  "default" | "green" | "indigo" | "amber" | "todo" | "outline";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  icon?: React.ReactNode;
}

// Tags are rectangular, not pills: they read as annotations in the margin of
// the page rather than as buttons competing with actions.
export function Badge({
  children,
  variant = "default",
  className = "",
  icon,
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 rounded-[2px] px-2 py-1 text-[12px] leading-none font-medium transition-colors";

  const variantClasses: Record<BadgeVariant, string> = {
    default: "bg-solar/15 text-[#8a5c10] border border-solar/40",
    green: "bg-pine/10 text-pine border border-pine/30",
    indigo: "bg-tide/10 text-tide border border-tide/30",
    amber: "bg-solar/20 text-[#7d520d] border border-solar/50",
    todo: "text-ink-soft border border-dashed border-ink/30 bg-transparent text-[11px]",
    outline: "border border-ink/20 text-ink-soft bg-transparent",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
