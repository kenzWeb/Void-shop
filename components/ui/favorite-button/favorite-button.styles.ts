import { cva } from "class-variance-authority";

export const favoriteButtonStyles = cva(
  [
    "relative flex items-center justify-center",
    "rounded-full bg-background/80 backdrop-blur-sm",
    "border border-border transition-colors",
    "hover:border-foreground",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground",
  ],
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const heartIconStyles = cva("transition-colors", {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
    isFavorite: {
      true: "fill-red-500 text-red-500",
      false: "text-foreground",
    },
  },
  defaultVariants: {
    size: "md",
    isFavorite: false,
  },
});

export const particleStyles = "absolute h-2 w-2 rounded-full bg-red-500";

export const ringStyles = "absolute inset-0 rounded-full bg-red-500";
