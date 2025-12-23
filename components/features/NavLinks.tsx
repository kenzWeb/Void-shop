"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/lib/constants";

interface NavLinksProps {
  className?: string;
  variant?: "horizontal" | "vertical";
  onLinkClick?: () => void;
}

export function NavLinks({
  className,
  variant = "horizontal",
  onLinkClick,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        variant === "horizontal"
          ? "hidden items-center gap-8 md:flex"
          : "flex flex-col gap-4",
        className
      )}
    >
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className={cn(
              "group relative text-sm font-medium tracking-tight transition-colors",
              isActive ? "text-foreground" : "text-muted hover:text-foreground",
              variant === "vertical" && "text-3xl font-bold"
            )}
          >
            {link.label}
            <motion.span
              className={cn(
                "absolute -bottom-1 left-0 h-[2px] bg-accent",
                variant === "vertical" && "h-[3px]"
              )}
              initial={{ width: isActive ? "100%" : "0%" }}
              animate={{ width: isActive ? "100%" : "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </Link>
        );
      })}
    </nav>
  );
}
