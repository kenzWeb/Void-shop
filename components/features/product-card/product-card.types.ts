import { Product, ProductStatus } from "@/types";

export interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export interface ProductCardUIProps extends ProductCardProps {
  isHovered: boolean;
  hasDiscount: boolean;
  discountPercentage: number;
  statusBadge: StatusBadgeConfig | null;
  mainImageUrl: string | null;
  mainImageAlt: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onQuickAdd: (e: React.MouseEvent) => void;
  isOutOfStock: boolean;
}

export interface StatusBadgeConfig {
  label: string;
  className: string;
}

export interface UseProductCardReturn {
  isHovered: boolean;
  hasDiscount: boolean;
  discountPercentage: number;
  statusBadge: StatusBadgeConfig | null;
  mainImageUrl: string | null;
  mainImageAlt: string;
  isOutOfStock: boolean;
  handlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onQuickAdd: (e: React.MouseEvent) => void;
  };
}
