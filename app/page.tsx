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
        {/* 1. Hero: the photograph, the headline, the readings along the horizon */}
        <HeroSection
          headline="Where the sky touches the hills of Candijay"
          tagline={siteConfig.tagline}
          primaryCta={siteConfig.primaryCta}
          secondaryCta={siteConfig.secondaryCta}
          image={{
            src: "/images/kankoka-hills-candijay-bohol.jpg",
            alt: "Dramatic panoramic mountain landscape of Kankoka Hills in Candijay, Bohol",
            width: 1920,
            height: 1280,
          }}
        />

        {/* 2. About Kankoka Hills */}
        <AboutSection content={aboutContent} />

        {/* 3. The view, as full-bleed strips */}
        <HighlightsSection content={highlightsContent} />

        {/* 4. Best time to visit — the daylight band */}
        <BestTimeSection content={timingContent} />

        {/* 5. Gallery with lightbox */}
        <GallerySection photos={galleryItems} />

        {/* 6. How to get there */}
        <GettingThereSection
          content={directionsContent}
          locationName={siteConfig.name}
          municipality={siteConfig.location.municipality}
          province={siteConfig.location.province}
          coordinates={siteConfig.location.coordinates}
          googleMapsUrl={siteConfig.location.googleMapsUrl}
        />

        {/* 7. Visitor tips, fees & stewardship */}
        <VisitorTipsSection content={visitorTipsContent} />

        {/* 8. Frequently asked questions */}
        <FaqSection content={faqContent} />

        {/* The ridge, drawn once, where the page falls into dusk */}
        <div className="bg-chalk">
          <HillDivider variant="dusk-to-night" fillBottom="text-ink" />
        </div>

        {/* 9. Final CTA & tourism contact */}
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
