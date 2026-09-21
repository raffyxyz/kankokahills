import { VisitorTipItem } from "./types";

export interface VisitorTipsContent {
  eyebrow: string;
  title: string;
  description: string;
  whatToBring: VisitorTipItem[];
  feesAndHours: {
    entranceFee: string;
    operatingHours: string;
    parkingInfo: string;
    guideRequirement: string;
    facilitiesNotice: string;
  };
  leaveNoTrace: {
    title: string;
    subtitle: string;
    principles: Array<{ title: string; text: string }>;
  };
}

export const visitorTipsContent: VisitorTipsContent = {
  eyebrow: "Visitor Guide",
  title: "Essential Tips for a Smooth Summit Visit",
  description:
    "Preparation ensures a safe, relaxing, and memorable visit to the hills. Here is what you need to know before you head up.",
  whatToBring: [
    {
      title: "Hydration & Snacks",
      items: [
        "Bring reusable water bottles (at least 1 liter per person).",
        "Pack light snacks or fruit; carry all wrappers back down.",
        "Stay hydrated under the Bohol sun.",
      ],
      iconType: "pack",
    },
    {
      title: "Sun & Weather Protection",
      items: [
        "Wide-brim hat or cap and UV-blocking sunglasses.",
        "Reef-safe sunscreen for open midday exposure.",
        "Light windbreaker or rain jacket for sudden mountain breezes.",
      ],
      iconType: "sun",
    },
    {
      title: "Footwear & Clothing",
      items: [
        "Sturdy walking shoes, trail sneakers, or secure strap sandals.",
        "Breathable, lightweight clothing suitable for tropical heat.",
        "A light extra layer if staying through twilight breeze.",
      ],
      iconType: "footwear",
    },
    {
      title: "Cash & Connectivity",
      items: [
        "Philippine Pesos (PHP) in small denominations (₱20, ₱50, ₱100).",
        "Cash is required for habal-habal drivers and local entrance fees.",
        "Power bank for cameras and phones.",
      ],
      iconType: "cash",
    },
  ],
  feesAndHours: {
    entranceFee: "[TODO: entrance fee]",
    operatingHours: "[TODO: operating hours]",
    parkingInfo: "[TODO: parking fee]",
    guideRequirement: "[TODO: guide requirement]",
    facilitiesNotice:
      "Rustic viewing sheds and vantage gazebos are located at the crest [TODO: on-site facilities details]. There may not be commercial concessions on the summit, so bring your essentials.",
  },
  leaveNoTrace: {
    title: "Leave No Trace — Keep Kankoka Hills Pristine",
    subtitle:
      "Kankoka Hills is a natural treasure cherished by the local community of Candijay. Please help protect this landscape for generations to come.",
    principles: [
      {
        title: "Pack It In, Pack It Out",
        text: "Carry all trash, plastic bottles, wrappers, and organic waste back down with you. No bins exist on the natural ridge.",
      },
      {
        title: "Stay on Existing Ridges & Paths",
        text: "Stick to established walking trails to prevent soil erosion and preserve native grasses.",
      },
      {
        title: "Leave Nature Undisturbed",
        text: "Leave rocks, wild flora, and cultural markers exactly as you find them. Take only pictures, leave only footprints.",
      },
      {
        title: "Be Considerate of Others",
        text: "Respect the peaceful atmosphere. Keep music down and let the natural mountain breezes and sounds of nature take center stage.",
      },
    ],
  },
};
