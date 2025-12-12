import { ProductStatus } from "@/types";
import { StatusBadgeConfig } from "./product-card.types";

export const STATUS_BADGE_CONFIG: Record<ProductStatus, StatusBadgeConfig | null> = {
  [ProductStatus.InStock]: null,
  [ProductStatus.OutOfStock]: {
    label: "Sold Out",
    className: "bg-muted text-foreground",
  },
  [ProductStatus.LimitedEdition]: {
    label: "Limited",
    className: "bg-electric text-electric-foreground",
  },
  [ProductStatus.PreOrder]: {
    label: "Pre-Order",
    className: "bg-accent text-accent-foreground",
  },
};

export const HOVER_ANIMATION_DURATION = 500;

export const IMAGE_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";

export const MAX_VISIBLE_COLORS = 5;

export const QUICK_ADD_BUTTON_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  duration: 0.2,
};
