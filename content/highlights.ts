import { HighlightItem } from "./types";

export interface HighlightsContent {
  eyebrow: string;
  title: string;
  description: string;
  items: HighlightItem[];
}

export const highlightsContent: HighlightsContent = {
  eyebrow: "The Experience",
  title: "What Awaits You at the Top",
  description:
    "From wide-open horizons to dramatic golden sunsets, Kankoka Hills presents an unforgettable perspective of Bohol's countryside.",
  items: [
    {
      id: "panoramas",
      title: "Sweeping Panoramas Over Candijay",
      tagline: "Endless Horizons",
      description:
        "Gaze across miles of rolling hills, coconut groves, and rural valleys spanning all directions from the high crest.",
      tag: "360° Sightlines",
      image: {
        src: "/images/view-hills-1.jpg",
        alt: "Vast panoramic view of rolling green hills in Candijay, Bohol",
        width: 2048,
        height: 1536,
      },
    },
    {
      id: "sunset",
      title: "The Golden Sunset Spectacle",
      tagline: "Dusk in Bohol",
      description:
        "As the afternoon wanes, the sky softens into luminous bands of amber, warm rose, and twilight indigo over the mountain horizon.",
      tag: "Signature View",
      image: {
        src: "/images/dusk-16x9.jpg",
        alt: "Dramatic golden hour and sunset sky over the silhouette of Kankoka Hills",
        width: 1280,
        height: 720,
      },
    },
    {
      id: "observatory",
      title: "Viewpoint Observatory & Crest Walk",
      tagline: "Summit Vantage",
      description:
        "Take a leisurely stroll along the open ridge or rest at the viewpoint gazebo to absorb the uninterrupted landscape.",
      tag: "View Deck",
      image: {
        src: "/images/observatory-kankoka-hills-candijay-bohol.jpg",
        alt: "Viewpoint observatory structure at Kankoka Hills overlooking the green landscape",
        width: 1920,
        height: 1280,
      },
    },
    {
      id: "rolling-ridges",
      title: "Contoured Ridges & Morning Mist",
      tagline: "Pristine Nature",
      description:
        "Early risers are greeted by gentle low-lying mist curling between green peaks and crisp mountain breezes.",
      tag: "Morning Light",
      image: {
        src: "/images/view-hills-2.jpg",
        alt: "Lush undulating hills and valleys under clear blue skies in Candijay",
        width: 2048,
        height: 1536,
      },
    },
  ],
};
