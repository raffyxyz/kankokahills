"use client";

import React, { useState } from "react";
import { FaqItem } from "@/content/types";

export interface AccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
}

// Questions sit on rules, not in cards: the list reads as an index.
export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

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
    <div className="border-mist border-t">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={index} className="border-mist border-b">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="group focus-visible:ring-tide hover:bg-ink/[0.03] focus-visible:ring-offset-chalk flex w-full cursor-pointer items-start justify-between gap-6 py-5 text-left transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span className="font-heading text-h3 text-ink pr-4 font-normal">
                  {item.question}
                </span>
                <span
                  className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center border transition-colors ${
                    isOpen
                      ? "border-pine bg-pine text-chalk"
                      : "border-ink/25 text-ink group-hover:border-ink/50"
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
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
                <p className="text-ink-soft max-w-[62ch] pr-8 pb-6 text-[15px] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
