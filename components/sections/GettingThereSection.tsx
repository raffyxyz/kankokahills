import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MapFacade } from "@/components/ui/MapFacade";
import { DirectionsContent } from "@/content/directions";

export interface GettingThereSectionProps {
  content: DirectionsContent;
  locationName: string;
  municipality: string;
  province: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  googleMapsUrl: string;
}

export function GettingThereSection({
  content,
  locationName,
  municipality,
  province,
  coordinates,
  googleMapsUrl,
}: GettingThereSectionProps) {
  return (
    <section
      id="getting-there"
      className="bg-sand-white text-charcoal py-20 sm:py-28"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <RevealOnScroll>
            <span className="text-forest-green text-xs font-bold tracking-widest uppercase">
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

        {/* Transport Options Grid */}
        <div className="mb-16">
          <RevealOnScroll>
            <h3 className="text-charcoal/70 mb-6 text-center text-xs font-bold tracking-wider uppercase">
              Recommended Transport Options
            </h3>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {content.transportOptions.map((opt, idx) => (
              <RevealOnScroll key={opt.mode} delayMs={idx * 100}>
                <div
                  className={`flex h-full flex-col justify-between rounded-2xl border p-6 transition-all ${
                    opt.recommended
                      ? "bg-warm-cream border-amber-glow/40 ring-amber-glow/30 shadow-md ring-1"
                      : "bg-warm-cream/60 border-charcoal/5 hover:border-charcoal/20 shadow-xs"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-muted font-mono text-xs font-medium">
                        {opt.travelTime}
                      </span>
                      {opt.recommended && (
                        <Badge variant="amber">Most Popular</Badge>
                      )}
                    </div>
                    <h4 className="font-heading text-charcoal font-serif text-xl font-bold">
                      {opt.mode}
                    </h4>
                    <p className="text-slate-muted text-sm leading-relaxed">
                      {opt.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Route Steps & Interactive Map Grid */}
        <div className="mb-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Left Column: Route Steps Timeline */}
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <div className="bg-warm-cream border-charcoal/5 space-y-8 rounded-3xl border p-8 shadow-md sm:p-10">
                <div className="border-charcoal/10 border-b pb-4">
                  <span className="text-forest-green text-xs font-bold tracking-wider uppercase">
                    Step-by-Step Route
                  </span>
                  <h3 className="font-heading text-charcoal mt-1 font-serif text-2xl font-bold">
                    {content.departurePoint}
                  </h3>
                </div>

                <div className="before:bg-charcoal/10 relative space-y-8 before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5">
                  {content.routeSteps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="relative flex items-start gap-6"
                    >
                      <div className="bg-forest-green text-warm-cream ring-warm-cream flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-serif text-sm font-bold ring-4">
                        {step.stepNumber}
                      </div>
                      <div className="flex-1 space-y-1.5 pt-0.5">
                        <h4 className="font-heading text-charcoal font-serif text-lg font-bold">
                          {step.title}
                        </h4>
                        <p className="text-slate-muted text-sm leading-relaxed">
                          {step.instruction}
                        </p>
                        {step.note && (
                          <p className="mt-2 rounded-lg border border-amber-200/60 bg-amber-50 p-2.5 text-xs font-medium text-amber-800">
                            {step.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: On-Demand Map Facade */}
          <div className="h-full lg:col-span-5">
            <RevealOnScroll delayMs={150}>
              <MapFacade
                locationName={locationName}
                municipality={municipality}
                province={province}
                coordinates={coordinates}
                googleMapsUrl={googleMapsUrl}
              />
            </RevealOnScroll>
          </div>
        </div>

        {/* Travel Advisories Box */}
        <RevealOnScroll delayMs={150}>
          <div className="bg-amber-glow/10 border-amber-glow/20 mx-auto max-w-4xl rounded-2xl border p-6">
            <h4 className="font-heading text-charcoal mb-3 flex items-center gap-2 font-serif text-base font-bold">
              <svg
                className="h-5 w-5 shrink-0 text-amber-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Important Travel Notes
            </h4>
            <ul className="text-charcoal/80 grid grid-cols-1 gap-4 text-xs sm:grid-cols-3 sm:text-sm">
              {content.travelAdvisories.map((advisory, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-amber-800">•</span>
                  <span>{advisory}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
