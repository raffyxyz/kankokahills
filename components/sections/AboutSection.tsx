import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AboutContent } from "@/content/about";

export interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="bg-warm-cream text-charcoal relative py-20 sm:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text & Storytelling Column */}
          <div className="space-y-6 lg:col-span-6">
            <RevealOnScroll>
              <div className="space-y-3">
                <span className="text-forest-green text-xs font-bold tracking-widest uppercase">
                  {content.eyebrow}
                </span>
                <h2 className="font-heading text-fluid-h1 text-charcoal font-serif leading-tight font-bold">
                  {content.title}
                </h2>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={100}>
              <p className="text-fluid-lead text-charcoal/90 leading-relaxed font-medium">
                {content.lead}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delayMs={200}>
              <div className="text-slate-muted space-y-4 text-base leading-relaxed">
                {content.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </RevealOnScroll>

            {/* Quick Stat Highlights */}
            <RevealOnScroll delayMs={300}>
              <div className="border-charcoal/10 grid grid-cols-2 gap-4 border-t pt-4">
                {content.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-sand-white/80 border-charcoal/5 flex flex-col justify-between rounded-xl border p-4 shadow-xs"
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-slate-muted text-xs font-semibold tracking-wider uppercase">
                        {stat.label}
                      </span>
                      {stat.isTodo && (
                        <Badge variant="todo">Pending Verification</Badge>
                      )}
                    </div>
                    <p
                      className={`font-serif text-xl font-bold ${
                        stat.isTodo
                          ? "text-sm text-amber-800"
                          : "text-forest-green"
                      }`}
                    >
                      {stat.value}
                    </p>
                    {stat.note && (
                      <span className="text-slate-muted/80 mt-1 text-xs">
                        {stat.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Featured Image Column */}
          <div className="lg:col-span-6">
            <RevealOnScroll delayMs={150} direction="right">
              <div className="shadow-forest-green/10 border-charcoal/5 group relative aspect-[4/3] overflow-hidden rounded-2xl border shadow-2xl sm:aspect-[16/11] sm:rounded-3xl">
                <Image
                  src={content.featuredImage.src}
                  alt={content.featuredImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle gradient scrim at bottom of image for caption */}
                <div
                  className="from-charcoal-deep/70 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80"
                  aria-hidden="true"
                />
                {content.featuredImage.caption && (
                  <div className="text-warm-cream/90 absolute right-4 bottom-4 left-4 inline-block w-fit rounded-lg bg-black/30 px-3 py-2 text-xs font-medium backdrop-blur-md sm:text-sm">
                    {content.featuredImage.caption}
                  </div>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
