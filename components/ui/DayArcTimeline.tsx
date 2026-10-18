"use client";

import React, { useEffect, useRef } from "react";

// Sun positions across the day, aligned to the four time columns below the
// arc: low at dawn, highest at midday, descending through golden hour, on the
// horizon by dusk.
const STOPS = [
  { x: 120, y: 150, time: "5:30 AM", name: "Dawn mist", fill: "#8FAEB8" },
  { x: 360, y: 55, time: "11:00 AM", name: "Clear vistas", fill: "#14607A" },
  { x: 600, y: 118, time: "5:00 PM", name: "Golden hour", fill: "#E4A038" },
  { x: 840, y: 190, time: "6:00 PM", name: "Sunset & dusk", fill: "#0C1614" },
];

const PATH_POINTS: Array<[number, number]> = [
  [30, 215],
  [120, 150],
  [360, 55],
  [600, 118],
  [840, 190],
  [930, 215],
];

/** Catmull-Rom through the points, emitted as cubic beziers. */
function smoothPath(points: Array<[number, number]>): string {
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? points[i + 1];
    const c1: [number, number] = [
      p1[0] + (p2[0] - p0[0]) / 6,
      p1[1] + (p2[1] - p0[1]) / 6,
    ];
    const c2: [number, number] = [
      p2[0] - (p3[0] - p1[0]) / 6,
      p2[1] - (p3[1] - p1[1]) / 6,
    ];
    d += ` C ${c1[0].toFixed(1)} ${c1[1].toFixed(1)}, ${c2[0].toFixed(1)} ${c2[1].toFixed(1)}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

export function DayArcTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("arc-drawn");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="mx-auto hidden w-full max-w-5xl select-none md:block"
      aria-hidden="true"
    >
      <svg
        className="block h-auto w-full overflow-visible"
        viewBox="0 0 960 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E4A038" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E4A038" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Horizon */}
        <line
          x1="10"
          y1="215"
          x2="950"
          y2="215"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 5"
          className="text-ink/30"
        />

        {/* Sun path across the day */}
        <path
          d={smoothPath(PATH_POINTS)}
          pathLength={1200}
          className="arc-path"
          stroke="#0C1614"
          strokeOpacity={0.55}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {STOPS.map((stop, i) => (
          <g
            key={stop.time}
            className="arc-stop"
            style={{ animationDelay: `${600 + i * 180}ms` }}
          >
            <line
              x1={stop.x}
              y1={stop.y}
              x2={stop.x}
              y2="215"
              stroke={stop.fill}
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            {i === 2 && (
              <circle cx={stop.x} cy={stop.y} r="26" fill="url(#sunGlow)" />
            )}
            <circle
              cx={stop.x}
              cy={stop.y}
              r={i === 2 ? 9 : 7}
              fill={stop.fill}
              stroke="#E9EDE8"
              strokeWidth="2.5"
            />
            <text
              x={stop.x}
              y={stop.y - 22}
              textAnchor="middle"
              className="fill-ink font-sans text-[15px] font-semibold"
            >
              {stop.name}
            </text>
            <text
              x={stop.x}
              y="238"
              textAnchor="middle"
              className="fill-ink-soft font-sans text-[14px] font-medium tabular-nums"
            >
              {stop.time}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
