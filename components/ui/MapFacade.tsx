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
    <div className="border-charcoal/10 bg-sand-white relative flex min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-3xl border shadow-lg sm:min-h-[440px]">
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
        <div className="from-sand-white via-sage-mist/40 to-forest-green/10 relative flex flex-1 flex-col items-center justify-center bg-gradient-to-br p-8 text-center">
          {/* Subtle topographic contour background illustration */}
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, #2F5D3A 1.5%, transparent 0%), radial-gradient(circle at 75px 75px, #2F5D3A 1.5%, transparent 0%)",
              backgroundSize: "100px 100px",
            }}
            aria-hidden="true"
          />

          {/* Map Pin Pinpoint Graphic */}
          <div className="bg-forest-green text-warm-cream shadow-forest-green/20 relative z-10 mb-6 flex h-16 w-16 animate-bounce items-center justify-center rounded-full shadow-xl">
            <svg
              className="h-8 w-8"
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

          {/* Location Title & Coordinates */}
          <div className="relative z-10 mb-8 max-w-md space-y-2">
            <span className="text-forest-green text-xs font-bold tracking-widest uppercase">
              GPS Viewpoint Location
            </span>
            <h3 className="font-heading text-charcoal font-serif text-2xl font-bold sm:text-3xl">
              {locationName}
            </h3>
            <p className="text-slate-muted text-sm">
              {municipality}, {province}, Philippines
            </p>
            <p className="text-charcoal/60 bg-warm-cream/80 border-charcoal/5 inline-block rounded-full border px-3 py-1 font-mono text-xs">
              {coordinates.latitude}° N, {coordinates.longitude}° E
            </p>
          </div>

          {/* Action Trigger Buttons */}
          <div className="relative z-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={() => setIsMapLoaded(true)}
              className="w-full sm:w-auto"
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
              Load Interactive Map
            </Button>

            <Button
              href={googleMapsUrl}
              variant="outline"
              size="md"
              isExternal
              className="w-full sm:w-auto"
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
