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
    { label: "The view", href: "#view" },
    { label: "Best time to visit", href: "#timing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Directions", href: "#getting-there" },
    { label: "Visitor tips", href: "#tips" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="border-chalk/15 bg-ink text-chalk/70 border-t pt-14 pb-10">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-6">
            <div className="flex flex-col">
              <span className="font-heading text-chalk text-[21px] font-medium tracking-tight">
                {siteName}
              </span>
              <span className="text-chalk/50 mt-0.5 text-[11px]">
                {location}
              </span>
            </div>
            <p className="text-chalk/65 max-w-md text-[14px] leading-relaxed">
              {tagline}
            </p>
            <p className="text-chalk/55 flex items-center gap-2.5 text-[12px]">
              <span className="bg-pine h-2 w-2 shrink-0" aria-hidden="true" />
              Leave no trace — help keep Bohol&apos;s hills pristine
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <p className="text-chalk/50 text-[12px]">Quick navigation</p>
            <ul className="mt-3 space-y-2 text-[14px]">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-visible:ring-solar hover:text-chalk rounded-[2px] transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visitor guide */}
          <div className="md:col-span-3">
            <p className="text-chalk/50 text-[12px]">Visitor info</p>
            <ul className="mt-3 space-y-2 text-[14px]">
              {navLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-visible:ring-solar hover:text-chalk rounded-[2px] transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="focus-visible:ring-solar hover:text-chalk rounded-[2px] transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  Contact &amp; inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Demo disclaimer — a ruled note, not a highlight box */}
        <div className="border-chalk/15 mt-12 grid gap-3 border-t pt-6 md:grid-cols-12 md:gap-8">
          <p className="text-chalk/80 flex items-center gap-2.5 text-[13px] font-medium md:col-span-3">
            <span className="bg-solar h-2 w-2 shrink-0" aria-hidden="true" />
            Demo website disclaimer
          </p>
          <p className="text-chalk/60 max-w-[80ch] text-[13px] leading-relaxed md:col-span-9">
            This website is a demo presentation prototype only. It is not an
            official site and is not affiliated with or endorsed by Kankoka
            Hills, the Candijay Municipal Tourism Office, or any government
            agency. All data shown — including fees, operating hours, contact
            numbers, email addresses, and photos — is illustrative demo content
            and does not reflect real, current information.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="text-chalk/45 border-chalk/10 mt-8 flex flex-col items-start justify-between gap-4 border-t pt-6 text-[13px] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Kankoka Hills. Tourism showcase for
            Candijay, Bohol.
          </p>
          <a
            href="#main-content"
            className="focus-visible:ring-solar hover:text-chalk flex items-center gap-1.5 rounded-[2px] transition-colors focus-visible:ring-2 focus-visible:outline-none"
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
      </Container>
    </footer>
  );
}
