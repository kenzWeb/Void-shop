"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { IconButtonProps } from "@/types";

const variantClasses = {
  primary: "bg-foreground text-background hover:bg-foreground/90",
  secondary: "bg-surface text-foreground hover:bg-surface-elevated",
  ghost: "bg-transparent text-foreground hover:bg-surface",
  outline:
    "bg-transparent text-foreground hover:bg-foreground hover:text-background border border-border-strong",
};

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

type MotionIconButtonProps = Omit<HTMLMotionProps<"button">, "children"> &
  IconButtonProps;

export const IconButton = forwardRef<HTMLButtonElement, MotionIconButtonProps>(
  (
    {
      icon,
      label,
      variant = "ghost",
      size = "md",
      isLoading = false,
      isDisabled = false,
      badge,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type="button"
        disabled={isDisabled || isLoading}
        aria-label={label}
        whileHover={{ scale: isDisabled || isLoading ? 1 : 1.05 }}
        whileTap={{ scale: isDisabled || isLoading ? 1 : 0.95 }}
        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative inline-flex items-center justify-center",
          "transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className={cn("animate-spin", iconSizeClasses[size])} />
        ) : (
          <span className={iconSizeClasses[size]}>{icon}</span>
        )}
        {badge !== undefined && badge > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={cn(
              "absolute -right-1 -top-1",
              "flex h-5 w-5 items-center justify-center",
              "rounded-full bg-accent text-accent-foreground",
              "text-[10px] font-bold"
            )}
          >
            {badge > 99 ? "99+" : badge}
          </motion.span>
        )}
      </motion.button>
    );
  }
);

IconButton.displayName = "IconButton";
