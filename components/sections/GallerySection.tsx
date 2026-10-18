"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
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
    { label: "All photos", value: "all" },
    { label: "Landscapes", value: "landscape" },
    { label: "Panoramas", value: "panorama" },
    { label: "Viewpoints", value: "viewpoint" },
    { label: "Golden hour", value: "sunset" },
  ];

  return (
    <section id="gallery" className="bg-chalk py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="rail-grid rail-rule">
          <div className="rail">
            <p className="rail-label">Gallery</p>
            <p className="text-datum text-ink-soft mt-2">
              {photos.length} photographs
            </p>
          </div>

          <div className="rail-body">
            <div className="max-w-[46ch] lg:max-w-[54ch]">
              <h2 className="font-heading text-h1 text-ink max-w-[16ch]">
                Moments captured at Kankoka Hills
              </h2>
              <p className="text-lead text-ink-soft mt-4 max-w-[50ch]">
                Rolling ridges, boundless horizon, and the shifting daylight
                across Candijay.
              </p>
            </div>

            {/* Filters read as tabs: the rule marks where you are */}
            <div className="border-mist mt-8 flex flex-wrap gap-x-7 gap-y-1 border-b">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  aria-pressed={selectedCategory === cat.value}
                  className={`focus-visible:ring-tide focus-visible:ring-offset-chalk -mb-px cursor-pointer border-b-2 pb-2.5 text-[14px] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${
                    selectedCategory === cat.value
                      ? "border-pine text-ink font-medium"
                      : "text-ink-soft hover:border-mist hover:text-ink border-transparent"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Mosaic: hard-edged plates, captioned underneath like plates in
                a printed survey */}
            <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPhotos.map((photo) => {
                const isWide = photo.category === "panorama";
                return (
                  <figure
                    key={photo.id}
                    className={isWide ? "sm:col-span-2" : "col-span-1"}
                  >
                    <button
                      type="button"
                      onClick={() => openLightbox(photo.id)}
                      className={`focus-visible:ring-tide group bg-ink focus-visible:ring-offset-chalk relative block w-full cursor-pointer overflow-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${
                        isWide ? "aspect-[16/7]" : "aspect-[4/3]"
                      }`}
                      aria-label={`View photo: ${photo.caption || photo.alt}`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes={
                          isWide
                            ? "(max-width: 640px) 100vw, 66vw"
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        }
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </button>
                    <figcaption className="text-ink-soft mt-2 text-[13px] leading-snug">
                      {photo.caption || photo.alt}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

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
