import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { SkipLink } from "@/components/layout/SkipLink";
import { siteConfig } from "@/content/site";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kankokahills.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kankoka Hills — Candijay, Bohol, Philippines",
    template: "%s | Kankoka Hills",
  },
  description:
    "Experience sweeping 360-degree views, rolling green ridges, and legendary sunsets at Kankoka Hills, a pristine mountaintop viewpoint in Candijay, Bohol.",
  keywords: [
    "Kankoka Hills",
    "Candijay Bohol",
    "Bohol viewpoint",
    "Candijay tourist spots",
    "Bohol hills",
    "Bohol sunset",
    "Bohol travel guide",
    "Can-umantad falls nearby",
  ],
  authors: [{ name: "Kankoka Hills Tourism" }],
  creator: "Kankoka Hills",
  publisher: "Candijay Tourism",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Kankoka Hills — Panoramic Viewpoint in Candijay, Bohol",
    description:
      "Stand above the hills of Candijay. 360° sweeping panoramas, green ridges, and unforgettable sunset horizons in eastern Bohol.",
    siteName: "Kankoka Hills",
    images: [
      {
        url: "/images/kankoka-hills-candijay-bohol.jpg",
        width: 1920,
        height: 1280,
        alt: "Panoramic view from the summit of Kankoka Hills overlooking Candijay, Bohol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kankoka Hills — Candijay, Bohol, Philippines",
    description:
      "Panoramic mountaintop viewpoint and sunset sanctuary in Candijay, Bohol.",
    images: ["/images/kankoka-hills-candijay-bohol.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1E2A4A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org TouristAttraction JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: siteConfig.name,
    description:
      "Scenic mountaintop viewpoint in Candijay, Bohol, Philippines, known for sweeping 360-degree views, rolling ridges, and dramatic sunsets.",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.municipality,
      addressRegion: siteConfig.location.province,
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.coordinates.latitude,
      longitude: siteConfig.location.coordinates.longitude,
    },
    touristType: [
      "Nature Lovers",
      "Hikers",
      "Photographers",
      "Sunset Seekers",
      "Sightseers",
    ],
    image: [
      `${siteUrl}/images/kankoka-hills-candijay-bohol.jpg`,
      `${siteUrl}/images/dusk-16x9.jpg`,
      `${siteUrl}/images/standing-on-kankoka-hills-candijay-bohol.jpg`,
    ],
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-warm-cream text-charcoal selection:bg-amber-glow/30 selection:text-charcoal flex min-h-full flex-col font-sans">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
