import React from "react";
import Link from "next/link";

export type ButtonVariant =
  "primary" | "secondary" | "outline" | "outline-light" | "ghost" | "sunset";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

export type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
    isExternal?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  iconPosition = "right",
  ...restProps
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-glow focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "text-xs sm:text-sm px-4 py-2 gap-1.5",
    md: "text-sm sm:text-base px-6 py-3 gap-2",
    lg: "text-base sm:text-lg px-8 py-4 gap-2.5 font-semibold",
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-amber-glow text-charcoal shadow-md shadow-amber-glow/25 hover:bg-amber-glow/90 hover:shadow-lg hover:shadow-amber-glow/35 active:scale-[0.98]",
    secondary:
      "bg-forest-green text-warm-cream shadow-md shadow-forest-green/20 hover:bg-forest-green-dark active:scale-[0.98]",
    outline:
      "border border-charcoal/20 text-charcoal hover:bg-charcoal/5 hover:border-charcoal/40 active:scale-[0.98]",
    "outline-light":
      "border border-warm-cream/40 text-warm-cream hover:bg-warm-cream/10 hover:border-warm-cream active:scale-[0.98]",
    ghost: "text-charcoal hover:bg-charcoal/5 active:scale-[0.98]",
    sunset:
      "bg-gradient-to-r from-warm-rose via-amber-glow to-soft-gold text-charcoal font-semibold shadow-lg shadow-warm-rose/20 hover:brightness-105 active:scale-[0.98]",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="inline-flex shrink-0 items-center">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="inline-flex shrink-0 items-center">{icon}</span>
      )}
    </>
  );

  if ("href" in restProps && restProps.href !== undefined) {
    const { href, isExternal, ...anchorProps } = restProps as ButtonAsLink;
    const isExternalLink =
      isExternal ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (isExternalLink) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} {...anchorProps}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(restProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
