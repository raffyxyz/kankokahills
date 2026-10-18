"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav, NavItem } from "@/components/layout/MobileNav";

export interface HeaderProps {
  siteName?: string;
  locationName?: string;
  navLinks?: NavItem[];
  primaryCta?: {
    label: string;
    href: string;
  };
}

const DEFAULT_NAV_LINKS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "The view", href: "#view" },
  { label: "Best time", href: "#timing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Getting there", href: "#getting-there" },
  { label: "Visitor tips", href: "#tips" },
  { label: "FAQ", href: "#faq" },
];

export function Header({
  siteName = "Kankoka Hills",
  locationName = "Candijay, Bohol",
  navLinks = DEFAULT_NAV_LINKS,
  primaryCta = { label: "Plan your visit", href: "#tips" },
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu when resizing into the desktop breakpoint so the
  // drawer never stays mounted-and-open invisibly (which would trap scrolling).
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // At the top of the page the header rides the photograph; once scrolled it
  // becomes a light ruled bar that matches the daylight bands below it.
  const tone = isScrolled
    ? {
        header: "bg-chalk/95 border-mist border-b backdrop-blur-md py-3",
        brand: "text-ink",
        place: "text-ink-soft",
        nav: "text-ink-soft hover:text-ink focus-visible:ring-tide",
      }
    : {
        header: "bg-gradient-to-b from-ink/75 to-transparent py-5",
        brand: "text-chalk",
        place: "text-chalk/65",
        nav: "text-chalk/85 hover:text-chalk focus-visible:ring-solar",
      };

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${tone.header}`}
      >
        <Container className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="group focus-visible:ring-solar flex flex-col rounded-[2px] focus-visible:ring-2 focus-visible:outline-none"
          >
            <span
              className={`font-heading text-[19px] leading-tight font-medium tracking-tight transition-colors sm:text-[21px] ${tone.brand}`}
            >
              {siteName}
            </span>
            <span className={`text-[11px] transition-colors ${tone.place}`}>
              {locationName}
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex xl:gap-7"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-[2px] text-[14px] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${
                  isScrolled
                    ? "focus-visible:ring-offset-chalk"
                    : "focus-visible:ring-offset-ink"
                } ${tone.nav}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href={primaryCta.href} variant="primary" size="sm">
                {primaryCta.label}
              </Button>
            </div>

            <button
              ref={hamburgerRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              className={`focus-visible:ring-solar rounded-[2px] p-2 transition-colors focus-visible:ring-2 focus-visible:outline-none ${
                isScrolled
                  ? "text-ink hover:bg-ink/[0.06] focus-visible:ring-tide"
                  : "text-chalk hover:bg-chalk/10"
              } lg:hidden`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => {
          setIsMobileMenuOpen(false);
          hamburgerRef.current?.focus();
        }}
        items={navLinks}
        cta={primaryCta}
      />
    </>
  );
}
