import React from "react";
import { Container } from "@/components/ui/Container";

export interface FooterProps {
  siteName?: string;
  location?: string;
  tagline?: string;
}

export function Footer({
  siteName = "Kankoka Hills",
  location = "Candijay, Bohol, Philippines",
  tagline = "A natural mountaintop sanctuary overlooking the hills of Candijay.",
}: FooterProps) {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "The View", href: "#view" },
    { label: "Best Time to Visit", href: "#timing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Directions", href: "#getting-there" },
    { label: "Visitor Tips", href: "#tips" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="border-warm-cream/10 bg-charcoal-deep text-warm-cream/80 border-t pt-16 pb-12">
      <Container>
        <div className="border-warm-cream/10 grid grid-cols-1 gap-10 border-b pb-12 md:grid-cols-12">
          {/* Brand & Mission Column */}
          <div className="space-y-4 md:col-span-6">
            <div className="flex flex-col">
              <span className="font-heading text-warm-cream font-serif text-2xl font-bold tracking-tight">
                {siteName}
              </span>
              <span className="text-amber-glow mt-0.5 text-xs font-medium tracking-wider uppercase">
                {location}
              </span>
            </div>
            <p className="text-warm-cream/70 max-w-md text-sm leading-relaxed">
              {tagline}
            </p>
            <div className="pt-2">
              <span className="border-forest-green/40 bg-forest-green/30 text-grass-green-light inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs">
                <svg
                  className="h-3.5 w-3.5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Leave No Trace — Help keep Bohol&apos;s hills pristine
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3 md:col-span-3">
            <p className="text-warm-cream text-xs font-semibold tracking-wider uppercase">
              Quick Navigation
            </p>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-amber-glow focus-visible:ring-amber-glow rounded focus-visible:ring-1 focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visitor Guide Column */}
          <div className="space-y-3 md:col-span-3">
            <p className="text-warm-cream text-xs font-semibold tracking-wider uppercase">
              Visitor Info
            </p>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-amber-glow focus-visible:ring-amber-glow rounded focus-visible:ring-1 focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-glow focus-visible:ring-amber-glow rounded focus-visible:ring-1 focus-visible:outline-none"
                >
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-warm-cream/50 flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kankoka Hills. Tourism showcase for
            Candijay, Bohol.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#main-content"
              className="hover:text-amber-glow focus-visible:ring-amber-glow flex items-center gap-1 rounded focus-visible:ring-1 focus-visible:outline-none"
            >
              <span>Back to top</span>
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
