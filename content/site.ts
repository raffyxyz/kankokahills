import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Kankoka Hills",
  tagline:
    "The quiet climb above Candijay’s rolling ridges, made for morning mist, open breezes, and the golden hour.",
  location: {
    spotName: "Kankoka Hills",
    municipality: "Candijay",
    province: "Bohol",
    country: "Philippines",
    fullAddress: "Kankoka Hills, Candijay, Bohol, Philippines",
    coordinates: {
      latitude: 9.8398,
      longitude: 124.5517,
    },
    googleMapsUrl: "https://maps.google.com/?q=Kankoka+Hills+Candijay+Bohol",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "The view", href: "#view" },
    { label: "Best time", href: "#timing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Getting there", href: "#getting-there" },
    { label: "Visitor tips", href: "#tips" },
    { label: "FAQ", href: "#faq" },
  ],
  primaryCta: {
    label: "Plan your visit",
    href: "#tips",
  },
  secondaryCta: {
    label: "See the view",
    href: "#view",
  },
  contact: {
    tourismOffice: "Candijay Municipal Tourism Office",
    phone: "(038) 507-4213",
    mobile: "+63 917 555 0147",
    email: "tourism.candijay@bohol.gov.ph",
    facebookUrl: "https://www.facebook.com/share/1EMKLwnzM5/?mibextid=wwXIfr",
  },
};
