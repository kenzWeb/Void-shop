import { Product, ProductStatus, ProductImage } from "@/types";
import { STATUS_BADGE_CONFIG } from "./product-card.constants";
import { StatusBadgeConfig } from "./product-card.types";

export function getStatusBadge(status: ProductStatus): StatusBadgeConfig | null {
  return STATUS_BADGE_CONFIG[status];
}

export function getMainImage(images: ProductImage[]): ProductImage | null {
  return images.find((img) => img.isMain) || images[0] || null;
}

export function hasProductDiscount(product: Product): boolean {
  return Boolean(product.originalPrice && product.originalPrice > product.price);
}

export function isProductOutOfStock(status: ProductStatus): boolean {
  return status === ProductStatus.OutOfStock;
}

export function getProductInitial(name: string): string {
  return name.charAt(0).toUpperCase();
}

export function getColorStyle(color: string): React.CSSProperties {
  return {
    backgroundColor: color === "white" ? "#ffffff" : color,
  };
}
