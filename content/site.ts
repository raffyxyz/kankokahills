import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Kankoka Hills",
  tagline: "Where the sky meets the rolling ridges of Candijay, Bohol.",
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
    { label: "The View", href: "#view" },
    { label: "Best Time", href: "#timing" },
    { label: "Gallery", href: "#gallery" },
    { label: "How to Get There", href: "#getting-there" },
    { label: "Visitor Tips", href: "#tips" },
    { label: "FAQ", href: "#faq" },
  ],
  primaryCta: {
    label: "Plan Your Visit",
    href: "#tips",
  },
  secondaryCta: {
    label: "See the View",
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
