import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SiteConfig } from "@/content/types";

export interface CtaContactSectionProps {
  siteConfig: SiteConfig;
}

export function CtaContactSection({ siteConfig }: CtaContactSectionProps) {
  return (
    <section
      id="contact"
      className="bg-dusk-indigo text-warm-cream relative overflow-hidden py-24 sm:py-32"
    >
      {/* Twilight atmospheric sunset gradient background */}
      <div
        className="from-charcoal-deep via-dusk-indigo to-dusk-indigo-dark pointer-events-none absolute inset-0 bg-gradient-to-t"
        aria-hidden="true"
      />
      {/* Warm rose & amber glow accents */}
      <div
        className="from-warm-rose/25 via-amber-glow/15 pointer-events-none absolute -top-32 left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b to-transparent blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="mx-auto mb-16 max-w-4xl space-y-6 text-center">
          <RevealOnScroll>
            <span className="bg-warm-cream/10 text-soft-gold border-warm-cream/20 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wider uppercase">
              <span className="bg-warm-rose h-2 w-2 rounded-full" />
              Your Bohol Mountain Sanctuary Awaits
            </span>
          </RevealOnScroll>

          <RevealOnScroll delayMs={100}>
            <h2 className="font-heading text-fluid-display text-warm-cream font-serif leading-tight font-bold tracking-tight">
              Stand Above the Hills of Candijay
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delayMs={200}>
            <p className="text-fluid-lead text-warm-cream/80 mx-auto max-w-2xl">
              Whether you are chasing the golden sunset or breathing in the cool
              morning mist, Kankoka Hills invites you to experience Bohol from a
              rare perspective.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delayMs={300}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                href={siteConfig.location.googleMapsUrl}
                variant="sunset"
                size="lg"
                isExternal
                icon={
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              >
                Get Directions to Summit
              </Button>

              <Button href="#tips" variant="outline-light" size="lg">
                Review Visitor Guidelines
              </Button>
            </div>
          </RevealOnScroll>
        </div>

        {/* Contact & Tourism Information Cards */}
        <RevealOnScroll delayMs={200}>
          <div className="bg-charcoal-deep/80 border-warm-cream/15 mx-auto max-w-3xl rounded-3xl border p-8 shadow-2xl backdrop-blur-md">
            <div className="border-warm-cream/10 mb-6 flex flex-col justify-between gap-4 border-b pb-6 sm:flex-row sm:items-center">
              <div>
                <span className="text-amber-glow text-xs font-bold tracking-wider uppercase">
                  Local Tourism Assistance
                </span>
                <h3 className="font-heading text-warm-cream mt-0.5 font-serif text-xl font-bold">
                  {siteConfig.contact.tourismOffice}
                </h3>
              </div>
              <Badge variant="todo">Tourism Contacts</Badge>
            </div>

            <div className="text-warm-cream/80 grid grid-cols-1 gap-4 text-xs sm:grid-cols-2 sm:text-sm">
              <div className="bg-warm-cream/5 border-warm-cream/5 space-y-1 rounded-xl border p-4">
                <span className="text-warm-cream/60 block text-[11px] font-semibold uppercase">
                  Tourism Office Contact
                </span>
                <p className="text-soft-gold font-mono font-medium">
                  {siteConfig.contact.phonePlaceholder}
                </p>
                <p className="text-soft-gold/80 font-mono">
                  {siteConfig.contact.emailPlaceholder}
                </p>
              </div>

              <div className="bg-warm-cream/5 border-warm-cream/5 space-y-1 rounded-xl border p-4">
                <span className="text-warm-cream/60 block text-[11px] font-semibold uppercase">
                  Official Channels & Guides
                </span>
                <p className="text-soft-gold font-mono font-medium">
                  {siteConfig.contact.messengerPlaceholder}
                </p>
                <p className="text-soft-gold/80 font-mono">
                  {siteConfig.contact.socialPlaceholder}
                </p>
              </div>
            </div>

            <p className="text-warm-cream/60 mt-6 text-center text-xs">
              Inquiries for guided tours or barangay permits can be coordinated
              directly with Candijay Municipal Tourism.
            </p>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
