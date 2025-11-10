"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { SITE_CONFIG } from "@/lib/constants";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showSymbol?: boolean;
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

export function Logo({ className, size = "md", showSymbol = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group relative inline-block",
        className
      )}
    >
      <span
        className={cn(
          "font-bold tracking-tighter transition-all duration-300 ease-out",
          "group-hover:tracking-wide",
          sizeClasses[size]
        )}
      >
        {showSymbol ? (
          <>
            <span>{SITE_CONFIG.name.slice(0, -1)}</span>
            <span className="text-accent">
              {SITE_CONFIG.name.slice(-1)}
            </span>
          </>
        ) : (
          SITE_CONFIG.name
        )}
      </span>
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-[2px] bg-accent",
          "w-0 transition-all duration-300 ease-out",
          "group-hover:w-full"
        )}
      />
    </Link>
  );
}
