"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "@/content/types";

export interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  photos: GalleryItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  isOpen,
  currentIndex,
  photos,
  onClose,
  onNavigate,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const currentPhoto = photos[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation & scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }

      // Simple focus trapping
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartXRef.current;

    if (diff > 50) {
      handlePrev();
    } else if (diff < -50) {
      handleNext();
    }
    touchStartXRef.current = null;
  };

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      ref={dialogRef}
      className="text-warm-cream animate-fadeIn fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar: Counter & Controls */}
      <div className="border-warm-cream/10 z-10 flex items-center justify-between border-b bg-black/40 px-6 py-4">
        <span className="text-warm-cream/70 font-mono text-xs tracking-wider sm:text-sm">
          {currentIndex + 1} / {photos.length}
        </span>

        <div className="flex items-center gap-2">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer (Press Escape)"
            className="text-warm-cream/80 hover:text-warm-cream hover:bg-warm-cream/15 focus-visible:ring-amber-glow rounded-full p-2 transition-colors focus-visible:ring-2 focus-visible:outline-none"
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
      </div>

      {/* Main Image Area with Navigation Chevrons */}
      <div className="relative flex flex-1 items-center justify-center p-4 sm:p-8">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo (Press Left Arrow)"
          className="text-warm-cream border-warm-cream/20 focus-visible:ring-amber-glow absolute left-4 z-10 rounded-full border bg-black/50 p-3 backdrop-blur-sm transition-all hover:scale-105 hover:bg-black/80 focus-visible:ring-2 focus-visible:outline-none active:scale-95 sm:left-8"
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Display Image */}
        <div className="relative flex h-full max-h-[75vh] w-full max-w-5xl items-center justify-center">
          <Image
            key={currentPhoto.id}
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            width={currentPhoto.width}
            height={currentPhoto.height}
            priority
            sizes="90vw"
            className="animate-scaleUp max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl transition-all duration-300"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo (Press Right Arrow)"
          className="text-warm-cream border-warm-cream/20 focus-visible:ring-amber-glow absolute right-4 z-10 rounded-full border bg-black/50 p-3 backdrop-blur-sm transition-all hover:scale-105 hover:bg-black/80 focus-visible:ring-2 focus-visible:outline-none active:scale-95 sm:right-8"
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Bottom Bar: Caption */}
      <div className="border-warm-cream/10 border-t bg-black/40 px-6 py-4 text-center">
        <p className="text-warm-cream/90 mx-auto max-w-2xl text-sm font-medium">
          {currentPhoto.caption || currentPhoto.alt}
        </p>
        <span className="text-warm-cream/50 mt-1 block text-[11px]">
          Use arrow keys or swipe left/right to navigate • Esc to close
        </span>
      </div>
    </div>
  );
}
