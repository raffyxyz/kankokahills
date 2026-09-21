"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GalleryItem } from "@/content/types";

// Dynamic import of Lightbox keeps initial page load JS minimal
const Lightbox = dynamic(
  () => import("@/components/ui/Lightbox").then((mod) => mod.Lightbox),
  { ssr: false }
);

export interface GallerySectionProps {
  photos: GalleryItem[];
}

type FilterCategory = "all" | "landscape" | "panorama" | "viewpoint" | "sunset";

export function GallerySection({ photos }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    selectedCategory === "all"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  const openLightbox = (photoId: string) => {
    const index = photos.findIndex((p) => p.id === photoId);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const categories: Array<{ label: string; value: FilterCategory }> = [
    { label: "All Photos", value: "all" },
    { label: "Landscapes", value: "landscape" },
    { label: "Panoramas", value: "panorama" },
    { label: "Viewpoints", value: "viewpoint" },
    { label: "Golden Hour & Sunset", value: "sunset" },
  ];

  return (
    <section
      id="gallery"
      className="bg-warm-cream text-charcoal py-20 sm:py-28"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <RevealOnScroll>
            <span className="text-amber-glow text-xs font-bold tracking-widest uppercase">
              Visual Journey
            </span>
            <h2 className="font-heading text-fluid-h1 text-charcoal mt-2 font-serif font-bold tracking-tight">
              Moments Captured at Kankoka Hills
            </h2>
            <p className="text-fluid-lead text-slate-muted mx-auto mt-4 max-w-2xl">
              Explore authentic glimpses of the rolling ridges, boundless
              horizon, and shifting daylight across Candijay.
            </p>
          </RevealOnScroll>

          {/* Filter Pills */}
          <RevealOnScroll delayMs={100}>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`focus-visible:ring-amber-glow cursor-pointer rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all focus-visible:ring-2 focus-visible:outline-none ${
                    selectedCategory === cat.value
                      ? "bg-forest-green text-warm-cream shadow-sm"
                      : "bg-sand-white text-charcoal/80 hover:bg-sand-white/80 border-charcoal/10 border"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo, idx) => {
            const isWide = photo.category === "panorama";
            return (
              <RevealOnScroll
                key={photo.id}
                delayMs={(idx % 6) * 75}
                className={
                  isWide ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
                }
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox(photo.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(photo.id);
                    }
                  }}
                  className={`group bg-charcoal/5 focus-visible:ring-amber-glow relative cursor-pointer overflow-hidden rounded-2xl shadow-xs transition-all duration-300 hover:shadow-xl focus-visible:ring-2 focus-visible:outline-none ${
                    isWide ? "aspect-[21/9] sm:aspect-[16/7]" : "aspect-[4/3]"
                  }`}
                  aria-label={`View photo: ${photo.caption || photo.alt}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={
                      isWide
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div
                    className="from-charcoal-deep/80 absolute inset-0 flex flex-col justify-end bg-gradient-to-t via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <p className="text-warm-cream text-xs font-medium sm:text-sm">
                      {photo.caption || photo.alt}
                    </p>
                    <span className="text-soft-gold mt-1 flex items-center gap-1 text-[11px] tracking-wider uppercase">
                      <span>Click to expand</span>
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          isOpen={lightboxIndex !== null}
          currentIndex={lightboxIndex}
          photos={photos}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
}
