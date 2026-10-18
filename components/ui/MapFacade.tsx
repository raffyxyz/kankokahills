"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export interface MapFacadeProps {
  locationName: string;
  municipality: string;
  province: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  googleMapsUrl: string;
}

export function MapFacade({
  locationName,
  municipality,
  province,
  coordinates,
  googleMapsUrl,
}: MapFacadeProps) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Safe Google Maps search embed URL
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${locationName}, ${municipality}, ${province}`
  )}&t=m&z=14&output=embed&iwloc=near`;

  return (
    <div className="border-ink/15 bg-shell relative flex min-h-[380px] w-full flex-col justify-between overflow-hidden border sm:min-h-[440px]">
      {isMapLoaded ? (
        <iframe
          src={embedUrl}
          title={`Interactive map of ${locationName}, ${municipality}, ${province}`}
          className="h-full min-h-[440px] w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="relative flex flex-1 flex-col items-center justify-center p-8 text-center">
          {/* Contour grid standing in for the map until it is loaded */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20px 20px, #1E4B39 1.2%, transparent 0%)",
              backgroundSize: "80px 80px",
            }}
            aria-hidden="true"
          />

          <div className="bg-pine text-chalk relative z-10 mb-6 flex h-14 w-14 items-center justify-center">
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <div className="relative z-10 mb-8 max-w-md space-y-1.5">
            <h3 className="font-heading text-h2 text-ink">{locationName}</h3>
            <p className="text-ink-soft text-sm">
              {municipality}, {province}, Philippines
            </p>
            <p className="text-datum text-ink-soft">
              {coordinates.latitude}° N, {coordinates.longitude}° E
            </p>
          </div>

          {/* The facade sits in a narrow column, so the two actions stack
              rather than compete for one row: each keeps its intrinsic width
              and its label stays on a single line. */}
          <div className="relative z-10 flex w-full flex-col items-center gap-3">
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={() => setIsMapLoaded(true)}
              icon={
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              }
            >
              Load interactive map
            </Button>

            <Button
              href={googleMapsUrl}
              variant="outline"
              size="md"
              isExternal
              icon={
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              }
            >
              Open in Google Maps
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
