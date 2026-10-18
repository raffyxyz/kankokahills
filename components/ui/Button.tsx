import React from "react";
import Link from "next/link";

export type ButtonVariant =
  "primary" | "secondary" | "outline" | "outline-light" | "ghost" | "light";
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
    "inline-flex items-center justify-center rounded-[2px] font-medium transition-colors duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tide focus-visible:ring-offset-2 focus-visible:ring-offset-chalk disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "text-[13px] px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-[15px] px-7 py-3.5 gap-2.5",
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-solar text-ink hover:bg-[#d08f2b] active:bg-[#c2841f]",
    secondary: "bg-ink text-chalk hover:bg-[#1b2a26]",
    outline:
      "border border-ink/25 text-ink hover:border-ink/50 hover:bg-ink/[0.04]",
    "outline-light":
      "border border-chalk/35 text-chalk hover:border-chalk/70 hover:bg-chalk/10",
    ghost: "text-ink hover:bg-ink/[0.06]",
    light: "bg-chalk text-ink hover:bg-white",
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
