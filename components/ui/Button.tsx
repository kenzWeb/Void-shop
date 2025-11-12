"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { ButtonProps } from "@/types";

const variantClasses = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 border-transparent",
  secondary:
    "bg-surface text-foreground hover:bg-surface-elevated border-border",
  ghost: "bg-transparent text-foreground hover:bg-surface border-transparent",
  outline:
    "bg-transparent text-foreground hover:bg-foreground hover:text-background border-border-strong",
  danger: "bg-error text-white hover:bg-error/90 border-transparent",
};

const sizeClasses = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2.5",
};

type MotionButtonProps = HTMLMotionProps<"button"> &
  ButtonProps & {
    href?: never;
  };

export const Button = forwardRef<HTMLButtonElement, MotionButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      isDisabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      className,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={isDisabled || isLoading}
        whileHover={{ scale: isDisabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: isDisabled || isLoading ? 1 : 0.98 }}
        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative inline-flex items-center justify-center",
          "font-medium tracking-tight",
          "border transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {isLoading && (
          <Loader2 className="absolute h-4 w-4 animate-spin" />
        )}
        <span
          className={cn(
            "inline-flex items-center gap-2",
            isLoading && "invisible"
          )}
        >
          {leftIcon}
          {children}
          {rightIcon}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
