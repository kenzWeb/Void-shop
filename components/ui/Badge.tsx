"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { BadgeProps } from "@/types";

const variantClasses = {
  primary: "bg-foreground text-background",
  secondary: "bg-surface text-foreground border border-border",
  accent: "bg-accent text-accent-foreground",
};

const sizeClasses = {
  sm: "h-4 min-w-4 text-[10px] px-1",
  md: "h-5 min-w-5 text-xs px-1.5",
};

export function Badge({
  count,
  variant = "accent",
  size = "md",
  className,
}: BadgeProps) {
  if (count <= 0) return null;

  return (
    <motion.span
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-full font-bold",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {count > 99 ? "99+" : count}
    </motion.span>
  );
}
