"use client";

import React, { useEffect, useRef } from "react";

export interface RevealOnScrollProps {
  children: React.ReactNode;
  delayMs?: number;
  direction?: "up" | "none" | "left" | "right";
  className?: string;
  as?: "div" | "section" | "article";
}

export function RevealOnScroll({
  children,
  delayMs = 0,
  direction = "up",
  className = "",
  as: Component = "div",
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("reveal-visible");
      return;
    }

    element.classList.add("reveal-init");
    if (direction === "left") {
      element.classList.add("-translate-x-6");
    } else if (direction === "right") {
      element.classList.add("translate-x-6");
    } else if (direction === "up") {
      element.classList.add("translate-y-6");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("reveal-visible");
            element.classList.remove(
              "translate-y-6",
              "-translate-x-6",
              "translate-x-6"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [direction]);

  return (
    <Component
      ref={elementRef}
      style={{
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delayMs}ms`,
        transitionProperty: "opacity, transform",
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </Component>
  );
}
