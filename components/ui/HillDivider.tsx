import React from "react";

export type HillDividerVariant =
  | "morning-to-day"
  | "day-to-golden"
  | "golden-to-dusk"
  | "dusk-to-night"
  | "custom";

export interface HillDividerProps {
  variant?: HillDividerVariant;
  fillBottom?: string;
  flip?: boolean;
  className?: string;
}

export function HillDivider({
  variant = "day-to-golden",
  fillBottom,
  flip = false,
  className = "",
}: HillDividerProps) {
  // Preset color layers for the rolling hill silhouettes
  const layers = (() => {
    switch (variant) {
      case "morning-to-day":
        return {
          back: "text-forest-green/20",
          mid: "text-grass-green/40",
          front: fillBottom || "text-warm-cream",
        };
      case "day-to-golden":
        return {
          back: "text-amber-glow/20",
          mid: "text-warm-rose/30",
          front: fillBottom || "text-sand-white",
        };
      case "golden-to-dusk":
        return {
          back: "text-warm-rose/40",
          mid: "text-amber-glow/50",
          front: fillBottom || "text-dusk-indigo",
        };
      case "dusk-to-night":
        return {
          back: "text-dusk-indigo-dark/60",
          mid: "text-dusk-indigo/80",
          front: fillBottom || "text-dusk-indigo",
        };
      case "custom":
      default:
        return {
          back: "text-forest-green/15",
          mid: "text-grass-green/30",
          front: fillBottom || "text-warm-cream",
        };
    }
  })();

  return (
    <div
      className={`pointer-events-none relative w-full overflow-hidden leading-none select-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        className="block h-10 w-full sm:h-16 md:h-24 lg:h-28"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Distant background ridge */}
        <path
          d="M0 60C140 30 280 20 420 40C560 60 700 85 840 70C980 55 1120 25 1260 35C1340 40 1400 50 1440 55V120H0V60Z"
          className={`fill-current ${layers.back}`}
        />
        {/* Middle rolling ridge */}
        <path
          d="M0 75C120 50 260 45 380 65C500 85 640 100 780 85C920 70 1060 40 1200 55C1300 65 1380 80 1440 85V120H0V75Z"
          className={`fill-current ${layers.mid}`}
        />
        {/* Foreground rolling hill contour */}
        <path
          d="M0 90C160 65 320 80 480 95C640 110 800 105 960 85C1120 65 1280 75 1440 92V120H0V90Z"
          className={`fill-current ${layers.front}`}
        />
      </svg>
    </div>
  );
}
