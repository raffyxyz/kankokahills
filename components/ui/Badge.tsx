import React from "react";

export type BadgeVariant =
  "default" | "green" | "indigo" | "amber" | "todo" | "outline";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "default",
  className = "",
  icon,
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors";

  const variantClasses: Record<BadgeVariant, string> = {
    default: "bg-amber-glow/15 text-charcoal border border-amber-glow/30",
    green: "bg-forest-green/15 text-forest-green border border-forest-green/30",
    indigo: "bg-dusk-indigo/10 text-dusk-indigo border border-dusk-indigo/20",
    amber: "bg-amber-glow/20 text-charcoal border border-amber-glow/40",
    todo: "bg-amber-100 text-amber-900 border border-dashed border-amber-400 font-mono text-[11px] normal-case tracking-normal",
    outline: "border border-charcoal/20 text-charcoal/80 bg-transparent",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
