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
  { label: "The View", href: "#view" },
  { label: "Best Time", href: "#timing" },
  { label: "Gallery", href: "#gallery" },
  { label: "How to Get There", href: "#getting-there" },
  { label: "Visitor Tips", href: "#tips" },
  { label: "FAQ", href: "#faq" },
];

export function Header({
  siteName = "Kankoka Hills",
  locationName = "Candijay, Bohol",
  navLinks = DEFAULT_NAV_LINKS,
  primaryCta = { label: "Plan Your Visit", href: "#tips" },
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    // Initialize check
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

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-charcoal-deep/90 border-warm-cream/10 border-b py-3.5 shadow-lg shadow-black/10 backdrop-blur-md"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group focus-visible:ring-amber-glow flex flex-col rounded-md focus-visible:ring-2 focus-visible:outline-none"
          >
            <span className="font-heading text-warm-cream group-hover:text-amber-glow font-serif text-xl font-bold tracking-tight transition-colors sm:text-2xl">
              {siteName}
            </span>
            <span className="text-warm-cream/70 group-hover:text-warm-cream/90 text-[11px] font-medium tracking-wider uppercase transition-colors">
              {locationName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden items-center space-x-7 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-warm-cream/85 hover:text-amber-glow focus-visible:ring-amber-glow rounded px-1.5 py-0.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                href={primaryCta.href}
                variant={isScrolled ? "primary" : "sunset"}
                size="sm"
                className="shadow-sm"
              >
                {primaryCta.label}
              </Button>
            </div>

            {/* Mobile menu trigger */}
            <button
              ref={hamburgerRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="text-warm-cream hover:bg-warm-cream/10 focus-visible:ring-amber-glow rounded-lg p-2 focus-visible:ring-2 focus-visible:outline-none lg:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => {
          setIsMobileMenuOpen(false);
          // Return focus to the trigger that opened the menu
          hamburgerRef.current?.focus();
        }}
        items={navLinks}
        cta={primaryCta}
      />
    </>
  );
}
