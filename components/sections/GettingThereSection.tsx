import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
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
    <section id="getting-there" className="bg-shell py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="rail-grid rail-rule">
          <div className="rail">
            <p className="rail-label">Getting there</p>
            <p className="text-datum text-ink-soft mt-2">
              20–30 min
              <br />
              from town proper
            </p>
          </div>

          <div className="rail-body">
            <h2 className="font-heading text-h1 text-ink max-w-[16ch]">
              {content.title}
            </h2>
            <p className="text-lead text-ink-soft mt-4 max-w-[54ch]">
              {content.description}
            </p>

            {/* Ways up — a timetable, not three cards */}
            <div className="border-mist mt-12 border-t">
              <h3 className="text-ink-soft py-4 text-[13px] font-medium">
                Getting from Candijay town center to the hills
              </h3>

              {content.transportOptions.map((opt) => (
                <div
                  key={opt.mode}
                  className="border-mist grid gap-2 border-t py-5 md:grid-cols-12 md:gap-8"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 md:col-span-4">
                    <h4 className="font-heading text-h3">{opt.mode}</h4>
                    {opt.recommended && (
                      <Badge variant="amber">Most popular</Badge>
                    )}
                  </div>
                  <p className="text-datum text-ink-soft md:col-span-3">
                    {opt.travelTime}
                  </p>
                  <p className="text-ink-soft text-[14px] leading-relaxed md:col-span-5">
                    {opt.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Route and map */}
            <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <h3 className="font-heading text-h2 border-ink/20 border-b pb-4">
                  {content.departurePoint}
                </h3>

                <ol className="before:bg-mist relative mt-8 space-y-8 before:absolute before:inset-y-0 before:left-[15px] before:w-px">
                  {content.routeSteps.map((step) => (
                    <li key={step.stepNumber} className="relative flex gap-5">
                      <span className="bg-pine text-chalk flex h-8 w-8 shrink-0 items-center justify-center text-[13px] font-semibold tabular-nums">
                        {step.stepNumber}
                      </span>
                      <div className="space-y-1 pt-0.5">
                        <h4 className="font-heading text-h3">{step.title}</h4>
                        <p className="text-ink-soft max-w-[58ch] text-[14px] leading-relaxed">
                          {step.instruction}
                        </p>
                        {step.note && (
                          <p className="text-ink max-w-[58ch] pt-1 text-[13px] font-medium">
                            {step.note}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="lg:col-span-5">
                <MapFacade
                  locationName={locationName}
                  municipality={municipality}
                  province={province}
                  coordinates={coordinates}
                  googleMapsUrl={googleMapsUrl}
                />
              </div>
            </div>

            {/* Travel notes */}
            <div className="border-mist mt-12 border-t pt-6">
              <h3 className="text-ink-soft text-[13px] font-medium">
                Travel notes
              </h3>
              <ul className="mt-4 grid gap-5 sm:grid-cols-3 sm:gap-8">
                {content.travelAdvisories.map((advisory, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-[13px] leading-relaxed"
                  >
                    <span
                      className="bg-solar mt-1.5 h-1.5 w-1.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{advisory}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
