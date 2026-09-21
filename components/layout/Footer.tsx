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

        {/* Demo Disclaimer */}
        <div className="border-amber-glow/25 bg-amber-glow/5 mt-10 space-y-2 rounded-xl border px-5 py-5 sm:px-6">
          <p className="text-amber-glow flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
            <svg
              className="h-4 w-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            Demo Website Disclaimer
          </p>
          <p className="text-warm-cream/70 max-w-3xl text-xs leading-relaxed sm:text-sm">
            This website is a demo presentation prototype only. It is not an
            official site and is not affiliated with or endorsed by Kankoka
            Hills, the Candijay Municipal Tourism Office, or any government
            agency. All data shown — including fees, operating hours, contact
            numbers, email addresses, and photos — is illustrative demo content
            and does not reflect real, current information.
          </p>
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
