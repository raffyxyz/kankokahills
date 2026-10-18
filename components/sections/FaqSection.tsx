import React from "react";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { FaqContent } from "@/content/faq";

export interface FaqSectionProps {
  content: FaqContent;
}

export function FaqSection({ content }: FaqSectionProps) {
  return (
    <section id="faq" className="bg-chalk py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="rail-grid rail-rule">
          <div className="rail">
            <p className="rail-label">FAQ</p>
            <p className="text-datum text-ink-soft mt-2">
              {content.items.length} questions
            </p>
          </div>

          <div className="rail-body">
            <div className="max-w-3xl">
              <h2 className="font-heading text-h1 text-ink max-w-[16ch]">
                {content.title}
              </h2>
              <p className="text-lead text-ink-soft mt-4 max-w-[52ch]">
                {content.description}
              </p>
            </div>

            <div className="mt-10 max-w-4xl">
              <Accordion items={content.items} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
