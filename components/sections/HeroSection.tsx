import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export interface HeroSectionProps {
  headline: string;
  tagline: string;
  locationBadge: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export function HeroSection({
  headline,
  tagline,
  locationBadge,
  primaryCta,
  secondaryCta,
  image,
}: HeroSectionProps) {
  return (
    <section className="bg-dusk-indigo text-warm-cream relative flex min-h-[92vh] items-center justify-center overflow-hidden sm:min-h-screen">
      {/* Background Image with subtle cinematic scale */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="animate-pulse-slow scale-105 object-cover object-center transition-transform duration-[12000ms] ease-out motion-reduce:scale-100"
        />
        {/* Layered cinematic gradient overlay ensuring high text contrast */}
        <div
          className="from-charcoal-deep via-dusk-indigo/60 absolute inset-0 bg-gradient-to-t to-black/40"
          aria-hidden="true"
        />
        {/* Warm golden-hour tint overlay */}
        <div
          className="from-dusk-indigo/40 to-amber-glow/20 absolute inset-0 bg-gradient-to-r via-transparent mix-blend-overlay"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Container */}
      <Container className="relative z-10 flex flex-col items-center pt-28 pb-20 text-center sm:py-32">
        {/* Location pill */}
        <div className="bg-warm-cream/15 text-soft-gold border-warm-cream/25 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wider uppercase shadow-sm backdrop-blur-md">
          <span className="bg-amber-glow h-2 w-2 animate-pulse rounded-full" />
          <span>{locationBadge}</span>
        </div>

        {/* Display Headline */}
        <h1 className="font-heading text-fluid-display text-warm-cream mb-6 max-w-4xl font-serif leading-[1.08] font-bold tracking-tight drop-shadow-md">
          {headline}
        </h1>

        {/* Tagline */}
        <p className="text-fluid-lead text-warm-cream/90 mx-auto mb-10 max-w-2xl font-normal drop-shadow-sm">
          {tagline}
        </p>

        {/* Dual Call-to-Action Buttons */}
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Button
            href={secondaryCta.href}
            variant="sunset"
            size="lg"
            className="w-full shadow-xl sm:w-auto"
          >
            {secondaryCta.label}
          </Button>
          <Button
            href={primaryCta.href}
            variant="outline-light"
            size="lg"
            className="w-full backdrop-blur-sm sm:w-auto"
          >
            {primaryCta.label}
          </Button>
        </div>

        {/* Scroll Cue Indicator */}
        <div className="pt-12 sm:pt-16">
          <a
            href="#about"
            aria-label="Scroll down to explore Kankoka Hills"
            className="group text-warm-cream/75 hover:text-amber-glow focus-visible:ring-amber-glow inline-flex flex-col items-center gap-2 rounded-full p-2 transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Discover
            </span>
            <div className="border-warm-cream/30 group-hover:border-amber-glow/60 flex h-12 w-8 items-start justify-center rounded-full border-2 p-1.5 transition-colors">
              <span className="bg-amber-glow h-2.5 w-1.5 animate-bounce rounded-full" />
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
