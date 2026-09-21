import { TimeSlotItem } from "./types";

export interface TimingContent {
  eyebrow: string;
  title: string;
  description: string;
  slots: TimeSlotItem[];
  seasonalAdvice: {
    title: string;
    description: string;
    bulletPoints: string[];
  };
}

export const timingContent: TimingContent = {
  eyebrow: "When to Visit",
  title: "A View That Evolves Throughout the Day",
  description:
    "Whether you arrive for early morning mist or stay for the glowing sunset, each hour brings a distinct mood to Kankoka Hills.",
  slots: [
    {
      id: "sunrise",
      period: "Dawn & Sunrise",
      timeRange: "5:30 AM – 7:30 AM",
      title: "Misty Valleys & First Light",
      description:
        "Cool mountain air and soft pastel glows over waking lowlands. Often features low-lying morning mist across the valley.",
      lightingBadge: "Soft & Ethereal",
      recommendedFor: "Early birds, peaceful contemplation, mist photography",
      bgGradient: "from-amber-glow/10 via-soft-gold/20 to-transparent",
    },
    {
      id: "daytime",
      period: "Midday Clarity",
      timeRange: "8:00 AM – 3:30 PM",
      title: "Expansive 360° Visibility",
      description:
        "Maximum visibility across eastern Bohol. The green contours of the hills contrast vividly against clear tropical blue skies.",
      lightingBadge: "Vivid & Crisp",
      recommendedFor: "Wide landscape vistas, hiking, clear-day photography",
      bgGradient: "from-grass-green/10 via-forest-green/10 to-transparent",
    },
    {
      id: "sunset",
      period: "Golden Hour & Sunset",
      timeRange: "4:30 PM – 6:00 PM",
      title: "The Signature Sunset Glow",
      description:
        "The peak experience. The western horizon illuminates in warm amber, rose, and gold as dusk casts long shadows along the hills.",
      lightingBadge: "Signature Golden Glow",
      recommendedFor: "Couples, sunset seekers, cinematic portraits",
      bgGradient: "from-warm-rose/20 via-amber-glow/20 to-soft-gold/20",
    },
    {
      id: "twilight",
      period: "Twilight & Dusk",
      timeRange: "6:00 PM – 7:00 PM",
      title: "Twilight Serenity",
      description:
        "Deep dusk indigo settles over the hills. Enjoy cool summit breezes and the quiet stillness of Candijay evening.",
      lightingBadge: "Deep Dusk & Calm",
      recommendedFor: "Stargazing, quiet evening breeze, twilight photos",
      bgGradient: "from-dusk-indigo/20 via-dusk-indigo-dark/30 to-transparent",
    },
  ],
  seasonalAdvice: {
    title: "Seasonal Conditions",
    description:
      "Bohol enjoys a tropical climate year-round with seasonal nuances:",
    bulletPoints: [
      "Dry Season (Dec – May): Typically the clearest skies and most reliable sunset visibility.",
      "Green Season (Jun – Nov): Lush emerald hill vegetation; morning visits usually enjoy crisp, clear conditions before any afternoon showers.",
      "Weather Tip: Check local Candijay forecasts before ascending, especially for sunset trips.",
    ],
  },
};
