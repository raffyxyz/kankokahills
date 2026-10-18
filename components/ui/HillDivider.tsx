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

// A ridge silhouette rather than a decorative wave: three receding hill lines
// whose fills come from the palette, drawn once where the page falls into dusk.
export function HillDivider({
  variant = "dusk-to-night",
  fillBottom,
  flip = false,
  className = "",
}: HillDividerProps) {
  const layers = (() => {
    switch (variant) {
      case "morning-to-day":
        return {
          back: "text-mist/60",
          mid: "text-pine/30",
          front: fillBottom || "text-chalk",
        };
      case "day-to-golden":
        return {
          back: "text-mist/70",
          mid: "text-solar/30",
          front: fillBottom || "text-chalk",
        };
      case "golden-to-dusk":
        return {
          back: "text-solar/40",
          mid: "text-tide/30",
          front: fillBottom || "text-ink",
        };
      case "dusk-to-night":
        return {
          back: "text-tide/35",
          mid: "text-pine/60",
          front: fillBottom || "text-ink",
        };
      case "custom":
      default:
        return {
          back: "text-mist/50",
          mid: "text-pine/25",
          front: fillBottom || "text-chalk",
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
        className="block h-14 w-full sm:h-20 md:h-28"
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
        {/* Foreground crest — the near hill goes solid */}
        <path
          d="M0 90C160 65 320 80 480 95C640 110 800 105 960 85C1120 65 1280 75 1440 92V120H0V90Z"
          className={`fill-current ${layers.front}`}
        />
      </svg>
    </div>
  );
}
