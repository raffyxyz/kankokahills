export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
  caption?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ActionLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  note?: string;
  isTodo?: boolean;
}

export interface HighlightItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tag: string;
  image: ImageAsset;
}

export interface TimeSlotItem {
  id: string;
  period: string;
  timeRange: string;
  title: string;
  description: string;
  lightingBadge: string;
  recommendedFor: string;
  bgGradient: string;
}

export interface GalleryItem extends ImageAsset {
  id: string;
  category: "panorama" | "viewpoint" | "sunset" | "landscape";
}

export interface RouteStep {
  stepNumber: number;
  title: string;
  instruction: string;
  note?: string;
}

export interface TransportOption {
  mode: string;
  travelTime: string;
  description: string;
  iconType: "motorcycle" | "car" | "van";
  recommended?: boolean;
}

export interface VisitorTipItem {
  title: string;
  items: string[];
  iconType: "pack" | "sun" | "footwear" | "cash";
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  location: {
    spotName: string;
    municipality: string;
    province: string;
    country: string;
    fullAddress: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    googleMapsUrl: string;
  };
  navigation: NavLink[];
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
  contact: {
    tourismOffice: string;
    phone: string;
    mobile: string;
    email: string;
    facebookUrl: string;
  };
}
