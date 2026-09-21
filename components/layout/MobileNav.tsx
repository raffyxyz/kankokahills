"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export interface NavItem {
  label: string;
  href: string;
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  cta: {
    label: string;
    href: string;
  };
}

export function MobileNav({ isOpen, onClose, items, cta }: MobileNavProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      // Simple focus trap
      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements =
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Initial focus on close button
    setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      ref={dialogRef}
      className="bg-charcoal-deep/95 text-warm-cream fixed inset-0 z-50 flex flex-col backdrop-blur-lg transition-all duration-300 md:hidden"
    >
      {/* Header bar with close button */}
      <div className="border-warm-cream/10 flex items-center justify-between border-b px-6 py-5">
        <span className="font-heading text-amber-glow font-serif text-xl tracking-tight">
          Kankoka Hills
        </span>
        <button
          ref={firstFocusableRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="text-warm-cream/80 hover:text-warm-cream hover:bg-warm-cream/10 focus-visible:ring-amber-glow -mr-2 rounded-full p-2 focus-visible:ring-2 focus-visible:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-1 flex-col justify-center space-y-4 px-8 py-8">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-warm-cream/90 hover:text-amber-glow border-warm-cream/5 border-b py-2 font-serif text-2xl font-medium transition-colors"
          >
            {item.label}
          </Link>
        ))}

        <div className="pt-8">
          <Button
            href={cta.href}
            variant="sunset"
            size="lg"
            className="w-full justify-center shadow-lg"
            onClick={onClose}
          >
            {cta.label}
          </Button>
        </div>
      </nav>

      {/* Footer info in drawer */}
      <div className="text-warm-cream/50 border-warm-cream/10 border-t px-8 py-6 text-xs">
        <p>Candijay, Bohol, Philippines</p>
      </div>
    </div>
  );
}
