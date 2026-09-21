import React from "react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Accordion } from "@/components/ui/Accordion";
import { FaqContent } from "@/content/faq";

export interface FaqSectionProps {
  content: FaqContent;
}

export function FaqSection({ content }: FaqSectionProps) {
  return (
    <section id="faq" className="bg-warm-cream text-charcoal py-20 sm:py-28">
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
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

        {/* Accessible Accordion Component */}
        <RevealOnScroll delayMs={100}>
          <Accordion items={content.items} />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
