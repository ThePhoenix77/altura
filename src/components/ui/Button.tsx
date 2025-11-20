import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
      variant?: "primary" | "ghost" | "subtle" | "gradient";
    size?: "sm" | "md" | "lg";
    className?: string;
    href?: string;
  };

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const sizes: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const base = "rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary inline-block";
  const variants: Record<string, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-smSoft",
    ghost: "bg-transparent text-foreground hover:text-primary",
    subtle: "bg-secondary text-foreground hover:bg-secondary/80",
    gradient: "bg-gradient-to-r from-primary to-primary-600 text-primary-foreground shadow-smSoft",
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} {...(props as any)}>
      {children}
    </button>
  );
}
