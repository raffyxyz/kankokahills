import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export interface HeroSectionProps {
  headline: string;
  tagline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

// Readings taken from the viewpoint itself; they sit along the horizon line
// at the base of the photograph rather than in floating stat cards.
const readings = [
  { label: "Coordinates", value: "9.8398° N, 124.5517° E" },
  { label: "Sightlines", value: "360°, unobstructed" },
  { label: "Best light", value: "4:30 – 6:00 PM" },
  { label: "From Tagbilaran", value: "2 – 2.5 hrs by road" },
];

export function HeroSection({
  headline,
  tagline,
  primaryCta,
  secondaryCta,
  image,
}: HeroSectionProps) {
  return (
    <section className="bg-ink text-chalk relative flex min-h-[92vh] flex-col justify-end overflow-hidden sm:min-h-screen">
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Scrim: heaviest at the base where the headline sits, still enough
            at the top for the transparent header to stay legible */}
        <div
          className="from-ink/90 via-ink/40 to-ink/65 absolute inset-0 bg-gradient-to-t"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10 pt-36 pb-12 sm:pb-14">
        <h1
          className="text-display rise font-heading max-w-[15ch]"
          style={{ animationDelay: "100ms" }}
        >
          {headline}
        </h1>

        <p
          className="rise text-lead text-chalk/85 mt-6 max-w-[46ch]"
          style={{ animationDelay: "340ms" }}
        >
          {tagline}
        </p>

        <div
          className="rise mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
          style={{ animationDelay: "560ms" }}
        >
          <Button href={primaryCta.href} variant="primary" size="lg">
            {primaryCta.label}
          </Button>
          <a
            href={secondaryCta.href}
            className="focus-visible:ring-solar text-chalk/85 decoration-chalk/40 hover:text-chalk hover:decoration-chalk focus-visible:ring-offset-ink text-[15px] underline decoration-1 underline-offset-[6px] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {secondaryCta.label}
          </a>
        </div>
      </Container>

      {/* Horizon strip */}
      <div className="border-chalk/25 bg-ink/45 relative z-10 border-t backdrop-blur-sm">
        <Container>
          <dl className="divide-chalk/15 divide-y sm:grid sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {readings.map((reading, idx) => (
              <div
                key={reading.label}
                className="rise flex items-baseline justify-between gap-4 py-3 sm:block sm:px-5 sm:py-4 sm:first:pl-0 sm:last:pr-0"
                style={{ animationDelay: `${760 + idx * 90}ms` }}
              >
                <dt className="text-chalk/60 text-[12px]">{reading.label}</dt>
                <dd className="text-datum text-chalk text-right font-medium sm:mt-1 sm:text-left">
                  {reading.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
