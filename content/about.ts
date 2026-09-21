import { ImageAsset, StatItem } from "./types";

export interface AboutContent {
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  stats: StatItem[];
  featuredImage: ImageAsset;
}

export const aboutContent: AboutContent = {
  eyebrow: "The Candijay Viewpoint",
  title: "A Quiet Sanctuary Above Bohol’s Rolling Landscape",
  lead: "Perched high atop Candijay, Kankoka Hills offers one of the most breathtaking natural vantage points in eastern Bohol.",
  paragraphs: [
    "Away from the crowded tourist trails, Kankoka Hills welcomes travelers with fresh mountain air, quiet horizons, and sweeping 360-degree vistas stretching across Candijay's verdant valleys and undulating ridges.",
    "Visitors climb up to experience the peaceful grandeur of the hills—watching morning mists drift gently over the lowlands, soaking in open breezes under daytime skies, and gathering at the viewpoint crest as golden hour settles across Bohol.",
  ],
  stats: [
    {
      label: "Sightlines",
      value: "360°",
      note: "Unobstructed panorama",
    },
    {
      label: "Summit Elevation",
      value: "[TODO: exact elevation]",
      note: "Above sea level",
      isTodo: true,
    },
    {
      label: "Prime Orientation",
      value: "West-Facing",
      note: "Golden hour & sunset view",
    },
    {
      label: "Atmosphere",
      value: "Open & Calm",
      note: "Clean mountain air",
    },
  ],
  featuredImage: {
    src: "/images/standing-on-kankoka-hills-candijay-bohol.jpg",
    alt: "Visitors standing at the summit of Kankoka Hills taking in the sweeping panoramic view of Candijay, Bohol",
    width: 1920,
    height: 1440,
    caption: "Standing at the crest of Kankoka Hills overlooking Candijay",
  },
};
