import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DayArcTimeline } from "@/components/ui/DayArcTimeline";
import { TimingContent } from "@/content/timing";

export interface BestTimeSectionProps {
  content: TimingContent;
}

export function BestTimeSection({ content }: BestTimeSectionProps) {
  return (
    <section id="timing" className="bg-warm-cream text-charcoal py-20 sm:py-28">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <RevealOnScroll>
            <span className="text-amber-glow text-xs font-bold tracking-widest uppercase">
              {content.eyebrow}
            </span>
            <h2 className="font-heading text-fluid-h1 text-charcoal mt-2 font-serif font-bold tracking-tight">
              {content.title}
            </h2>
            <p className="text-fluid-lead text-slate-muted mx-auto mt-4 max-w-2xl">
              {content.description}
            </p>
          </RevealOnScroll>
        </div>

        {/* Visual Day-Arc Graphic */}
        <RevealOnScroll delayMs={100}>
          <DayArcTimeline />
        </RevealOnScroll>

        {/* Time Slot Cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.slots.map((slot, idx) => (
            <RevealOnScroll key={slot.id} delayMs={idx * 100}>
              <div className="bg-sand-white/90 border-charcoal/5 hover:border-amber-glow/30 flex h-full flex-col justify-between rounded-2xl border p-6 shadow-xs transition-all hover:shadow-md">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-forest-green text-xs font-bold tracking-wider uppercase">
                      {slot.period}
                    </span>
                    <span className="text-charcoal/70 bg-charcoal/5 rounded px-2 py-0.5 font-mono text-xs font-semibold">
                      {slot.timeRange}
                    </span>
                  </div>

                  <h3 className="font-heading text-charcoal font-serif text-lg font-bold">
                    {slot.title}
                  </h3>

                  <p className="text-slate-muted text-sm leading-relaxed">
                    {slot.description}
                  </p>
                </div>

                <div className="border-charcoal/10 mt-4 space-y-2 border-t pt-6">
                  <Badge variant="default" className="w-fit text-[11px]">
                    {slot.lightingBadge}
                  </Badge>
                  <p className="text-charcoal/80 text-xs">
                    <span className="text-charcoal font-semibold">
                      Ideal for:
                    </span>{" "}
                    {slot.recommendedFor}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Seasonal Guidance Callout */}
        <RevealOnScroll delayMs={200}>
          <div className="bg-sage-mist/40 border-forest-green/20 mx-auto max-w-4xl rounded-2xl border p-6 sm:p-8">
            <div className="mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="bg-forest-green/10 text-forest-green rounded-lg p-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-charcoal font-serif text-lg font-bold">
                  {content.seasonalAdvice.title}
                </h4>
                <p className="text-slate-muted text-xs sm:text-sm">
                  {content.seasonalAdvice.description}
                </p>
              </div>
            </div>

            <ul className="text-charcoal/80 grid grid-cols-1 gap-4 pt-2 text-xs sm:text-sm md:grid-cols-3">
              {content.seasonalAdvice.bulletPoints.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-forest-green text-base leading-none font-bold">
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
