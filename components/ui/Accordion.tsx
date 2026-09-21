"use client";

import React, { useState } from "react";
import { FaqItem } from "@/content/types";

export interface AccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={index}
            className={`rounded-2xl border transition-colors ${
              isOpen
                ? "bg-sand-white/90 border-forest-green/30 shadow-xs"
                : "bg-sand-white/40 border-charcoal/5 hover:border-charcoal/20"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="focus-visible:ring-amber-glow flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left focus-visible:ring-2 focus-visible:outline-none"
              >
                <span className="font-heading text-charcoal font-serif text-lg font-bold sm:text-xl">
                  {item.question}
                </span>
                <span
                  className={`bg-charcoal/5 text-charcoal/70 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                    isOpen ? "bg-forest-green text-warm-cream rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="text-slate-muted border-charcoal/5 border-t px-6 pt-1 pb-6 text-sm leading-relaxed sm:text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
