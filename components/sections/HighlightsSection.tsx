import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { HighlightsContent } from "@/content/highlights";

export interface HighlightsSectionProps {
  content: HighlightsContent;
}

export function HighlightsSection({ content }: HighlightsSectionProps) {
  return (
    <section id="view" className="bg-sand-white text-charcoal py-20 sm:py-28">
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <RevealOnScroll>
            <span className="text-grass-green text-xs font-bold tracking-widest uppercase">
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

        {/* 4-Card Experience Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {content.items.map((item, idx) => (
            <RevealOnScroll key={item.id} delayMs={idx * 100}>
              <div className="group bg-warm-cream border-charcoal/5 shadow-charcoal/5 flex h-full flex-col overflow-hidden rounded-2xl border shadow-md transition-all duration-300 hover:shadow-xl sm:rounded-3xl">
                {/* Image Container */}
                <div className="bg-charcoal/5 relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge
                      variant="amber"
                      className="shadow-xs backdrop-blur-md"
                    >
                      {item.tag}
                    </Badge>
                  </div>
                  {/* Subtle vignette */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40"
                    aria-hidden="true"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between space-y-4 p-6 sm:p-8">
                  <div className="space-y-2">
                    <span className="text-amber-glow text-xs font-semibold tracking-wider uppercase">
                      {item.tagline}
                    </span>
                    <h3 className="font-heading text-charcoal group-hover:text-forest-green font-serif text-xl font-bold transition-colors sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-slate-muted text-sm leading-relaxed sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
