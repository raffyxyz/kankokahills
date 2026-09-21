import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HillDivider } from "@/components/ui/HillDivider";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { BestTimeSection } from "@/components/sections/BestTimeSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { GettingThereSection } from "@/components/sections/GettingThereSection";
import { VisitorTipsSection } from "@/components/sections/VisitorTipsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaContactSection } from "@/components/sections/CtaContactSection";

import { siteConfig } from "@/content/site";
import { aboutContent } from "@/content/about";
import { highlightsContent } from "@/content/highlights";
import { timingContent } from "@/content/timing";
import { galleryItems } from "@/content/gallery";
import { directionsContent } from "@/content/directions";
import { visitorTipsContent } from "@/content/visitorTips";
import { faqContent } from "@/content/faq";

export default function Home() {
  return (
    <>
      <Header
        siteName={siteConfig.name}
        locationName={`${siteConfig.location.municipality}, ${siteConfig.location.province}`}
        navLinks={siteConfig.navigation}
        primaryCta={siteConfig.primaryCta}
      />

      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          headline="Where the Sky Touches the Hills of Candijay"
          tagline={siteConfig.tagline}
          locationBadge={`${siteConfig.location.spotName} • ${siteConfig.location.municipality}, ${siteConfig.location.province}`}
          primaryCta={siteConfig.primaryCta}
          secondaryCta={siteConfig.secondaryCta}
          image={{
            src: "/images/kankoka-hills-candijay-bohol.jpg",
            alt: "Dramatic panoramic mountain landscape of Kankoka Hills in Candijay, Bohol",
            width: 1920,
            height: 1280,
          }}
        />

        {/* Transition: Hero -> Morning About */}
        <HillDivider variant="morning-to-day" fillBottom="text-warm-cream" />

        {/* 2. About Kankoka Hills */}
        <AboutSection content={aboutContent} />

        {/* 3. The View & Highlights */}
        <HighlightsSection content={highlightsContent} />

        {/* Transition: Day -> Golden Hour */}
        <HillDivider variant="day-to-golden" fillBottom="text-warm-cream" />

        {/* 4. Best Time to Visit (Day-Arc Timeline) */}
        <BestTimeSection content={timingContent} />

        {/* 5. Full-Bleed Gallery with Lightbox */}
        <GallerySection photos={galleryItems} />

        {/* Transition: Golden Hour -> Dusk */}
        <HillDivider variant="golden-to-dusk" fillBottom="text-sand-white" />

        {/* 6. How to Get There (with on-demand Map Facade) */}
        <GettingThereSection
          content={directionsContent}
          locationName={siteConfig.name}
          municipality={siteConfig.location.municipality}
          province={siteConfig.location.province}
          coordinates={siteConfig.location.coordinates}
          googleMapsUrl={siteConfig.location.googleMapsUrl}
        />

        {/* 7. Visitor Tips, Fees & Stewardship */}
        <VisitorTipsSection content={visitorTipsContent} />

        {/* 8. Frequently Asked Questions */}
        <FaqSection content={faqContent} />

        {/* Transition: Dusk -> Night */}
        <HillDivider variant="dusk-to-night" fillBottom="text-dusk-indigo" />

        {/* 9. Final CTA & Tourism Contact Section */}
        <CtaContactSection siteConfig={siteConfig} />
      </main>

      <Footer
        siteName={siteConfig.name}
        location={siteConfig.location.fullAddress}
        tagline={siteConfig.tagline}
      />
    </>
  );
}
