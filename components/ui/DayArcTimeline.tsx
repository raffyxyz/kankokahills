import React from "react";

export function DayArcTimeline() {
  return (
    <div
      className="mx-auto mb-12 w-full max-w-3xl select-none"
      aria-hidden="true"
    >
      <div className="relative pt-6 pb-2">
        <svg
          className="h-28 w-full overflow-visible sm:h-36"
          viewBox="0 0 600 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizon Line */}
          <line
            x1="20"
            y1="140"
            x2="580"
            y2="140"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="text-charcoal/20"
          />

          {/* Sun Trajectory Arc */}
          <path
            d="M 40 140 C 140 20, 460 20, 560 140"
            stroke="url(#arcGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Gradient Definition for Arc */}
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FBD98D" />
              <stop offset="35%" stopColor="#7BA05B" />
              <stop offset="70%" stopColor="#F2A65A" />
              <stop offset="100%" stopColor="#D9646B" />
            </linearGradient>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FBD98D" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FBD98D" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Point 1: Sunrise (Dawn) */}
          <circle cx="50" cy="130" r="14" fill="url(#sunGlow)" />
          <circle
            cx="50"
            cy="130"
            r="6"
            fill="#FBD98D"
            stroke="#FFF8EC"
            strokeWidth="2"
          />
          <text
            x="50"
            y="155"
            textAnchor="middle"
            className="fill-charcoal/70 font-sans text-[11px] font-semibold"
          >
            5:30 AM
          </text>
          <text
            x="50"
            y="105"
            textAnchor="middle"
            className="fill-forest-green font-serif text-[11px] font-bold"
          >
            Dawn Mist
          </text>

          {/* Point 2: Midday Clarity */}
          <circle cx="210" cy="45" r="14" fill="url(#sunGlow)" />
          <circle
            cx="210"
            cy="45"
            r="7"
            fill="#7BA05B"
            stroke="#FFF8EC"
            strokeWidth="2"
          />
          <text
            x="210"
            y="155"
            textAnchor="middle"
            className="fill-charcoal/70 font-sans text-[11px] font-semibold"
          >
            11:00 AM
          </text>
          <text
            x="210"
            y="25"
            textAnchor="middle"
            className="fill-forest-green font-serif text-[11px] font-bold"
          >
            Clear Vistas
          </text>

          {/* Point 3: Golden Hour (Peak) */}
          <circle cx="430" cy="65" r="18" fill="url(#sunGlow)" />
          <circle
            cx="430"
            cy="65"
            r="8"
            fill="#F2A65A"
            stroke="#FFF8EC"
            strokeWidth="2"
          />
          <text
            x="430"
            y="155"
            textAnchor="middle"
            className="fill-charcoal/70 font-sans text-[11px] font-semibold"
          >
            5:00 PM
          </text>
          <text
            x="430"
            y="42"
            textAnchor="middle"
            className="fill-warm-rose font-serif text-[11px] font-bold"
          >
            Golden Hour
          </text>

          {/* Point 4: Sunset Dusk */}
          <circle cx="550" cy="130" r="14" fill="url(#sunGlow)" />
          <circle
            cx="550"
            cy="130"
            r="6"
            fill="#D9646B"
            stroke="#FFF8EC"
            strokeWidth="2"
          />
          <text
            x="550"
            y="155"
            textAnchor="middle"
            className="fill-charcoal/70 font-sans text-[11px] font-semibold"
          >
            6:00 PM
          </text>
          <text
            x="550"
            y="105"
            textAnchor="middle"
            className="fill-dusk-indigo font-serif text-[11px] font-bold"
          >
            Sunset & Dusk
          </text>
        </svg>
      </div>
    </div>
  );
}
