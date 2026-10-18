import React from "react";
import { Container } from "@/components/ui/Container";
import { DayArcTimeline } from "@/components/ui/DayArcTimeline";
import { TimingContent } from "@/content/timing";

export interface BestTimeSectionProps {
  content: TimingContent;
}

// The band's own ground moves with the day: cool dawn at the left edge, bright
// noon, golden hour, then the first dusk — the same four stops as the arc.
const DAYLIGHT_GROUND =
  "linear-gradient(105deg, #D5E0E3 0%, #E9EEEA 18%, #FAFBF7 36%, #FCF6E7 52%, #F6E3BC 70%, #EBDCDF 86%, #D9DDE3 100%)";

const STAGE_COLOR: Record<string, string> = {
  sunrise: "#8FAEB8",
  daytime: "#14607A",
  sunset: "#E4A038",
  twilight: "#0C1614",
};

export function BestTimeSection({ content }: BestTimeSectionProps) {
  return (
    <section
      id="timing"
      className="text-ink py-16 sm:py-20 lg:py-24"
      style={{ background: DAYLIGHT_GROUND }}
    >
      <Container>
        {/* The arc is symmetric, so its header holds the same axis — the one
            centered section on the page, by intent */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="font-heading text-h1">{content.title}</h2>
          <p className="text-lead text-ink-soft mx-auto max-w-[46ch]">
            {content.description}
          </p>
        </div>

        <div className="mt-12 lg:mt-14">
          <DayArcTimeline />
          {/* Compact stand-in for the arc on small screens */}
          <div className="relative mx-auto mb-8 h-1.5 w-full max-w-md md:hidden">
            <div
              className="absolute inset-0"
              style={{ background: DAYLIGHT_GROUND }}
              aria-hidden="true"
            />
            {[12.5, 37.5, 62.5, 87.5].map((left) => (
              <span
                key={left}
                className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#E9EDE8]"
                style={{
                  left: `${left}%`,
                  background:
                    left < 25
                      ? STAGE_COLOR.sunrise
                      : left < 50
                        ? STAGE_COLOR.daytime
                        : left < 75
                          ? STAGE_COLOR.sunset
                          : STAGE_COLOR.twilight,
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* The four stops, as ruled columns rather than cards. The block is
            held to the arc's own width so each column sits under its stop. */}
        <div className="divide-ink/15 border-ink/20 mx-auto max-w-5xl divide-y border-y md:grid md:grid-cols-4 md:divide-x md:divide-y-0">
          {content.slots.map((slot) => (
            <div
              key={slot.id}
              className="flex h-full flex-col md:px-5 md:first:pl-0 md:last:pr-0"
            >
              <div className="pt-6 pb-4 md:pt-7">
                <span
                  className="mb-4 block h-1 w-12"
                  style={{ background: STAGE_COLOR[slot.id] ?? "#E4A038" }}
                  aria-hidden="true"
                />
                <p className="text-datum text-ink font-semibold">
                  {slot.timeRange}
                </p>
                <p className="text-ink-soft mt-1 text-[12px]">{slot.period}</p>

                <h3 className="font-heading text-h3 mt-3">{slot.title}</h3>

                <p className="text-ink-soft mt-2 text-[14px] leading-relaxed">
                  {slot.description}
                </p>
              </div>

              <div className="border-ink/15 mt-auto space-y-2 border-t py-4 md:pb-7">
                <p className="text-[13px] font-medium">
                  <span
                    className="mr-2 inline-block h-2 w-2 align-middle"
                    style={{
                      background: STAGE_COLOR[slot.id] ?? "#E4A038",
                    }}
                    aria-hidden="true"
                  />
                  {slot.lightingBadge}
                </p>
                <p className="text-ink-soft text-[13px] leading-relaxed">
                  <span className="text-ink font-semibold">Ideal for:</span>{" "}
                  {slot.recommendedFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Seasonal conditions */}
        <div className="mt-12 grid gap-5 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <h4 className="font-heading text-h3">
              {content.seasonalAdvice.title}
            </h4>
            <p className="text-ink-soft mt-1.5 text-[13px] leading-relaxed">
              {content.seasonalAdvice.description}
            </p>
          </div>

          <ul className="grid gap-4 md:col-span-8 md:grid-cols-3 md:gap-6">
            {content.seasonalAdvice.bulletPoints.map((bullet, idx) => (
              <li key={idx} className="flex gap-3 text-[13px] leading-relaxed">
                <span
                  className="bg-ink mt-1.5 h-1.5 w-1.5 shrink-0"
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
