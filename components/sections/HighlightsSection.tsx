import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { HighlightsContent } from "@/content/highlights";

export interface HighlightsSectionProps {
  content: HighlightsContent;
}

// A photo essay: every highlight is a full-bleed strip with its caption set in
// the margin beside the rule beneath it. No cards, no alternating sides.
export function HighlightsSection({ content }: HighlightsSectionProps) {
  return (
    <section id="view" className="bg-shell py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="rail-grid rail-rule">
          <div className="rail">
            <p className="rail-label">The view</p>
            <p className="text-datum text-ink-soft mt-2">360° sightlines</p>
          </div>

          <div className="rail-body grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h2 className="font-heading text-h1 text-ink max-w-[16ch] lg:col-span-7">
              {content.title}
            </h2>
            <p className="text-ink-soft max-w-[46ch] text-[15px] leading-relaxed lg:col-span-5">
              {content.description}
            </p>
          </div>
        </div>
      </Container>

      <div className="mt-14 space-y-14">
        {content.items.map((item) => (
          <article key={item.id}>
            <div className="bg-ink relative aspect-[21/9] max-h-[560px] w-full overflow-hidden">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="100vw"
                quality={85}
                className="object-cover"
              />
            </div>

            <Container className="mt-5">
              <div className="rail-grid">
                <p className="rail-label">{item.tag}</p>
                <div className="rail-body border-mist grid gap-3 border-t pt-4 lg:grid-cols-12 lg:gap-8">
                  <h3 className="font-heading text-h2 text-ink max-w-[18ch] lg:col-span-5">
                    {item.title}
                  </h3>
                  <p className="text-ink-soft max-w-[54ch] text-[15px] leading-relaxed lg:col-span-6 lg:col-start-7">
                    {item.description}
                  </p>
                </div>
              </div>
            </Container>
          </article>
        ))}
      </div>
    </section>
  );
}
