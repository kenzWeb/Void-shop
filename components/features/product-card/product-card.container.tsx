"use client";

import { ProductCardProps } from "./product-card.types";
import { useProductCard } from "./use-product-card";
import { ProductCardUI } from "./product-card";

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const {
    isHovered,
    hasDiscount,
    discountPercentage,
    statusBadge,
    mainImageUrl,
    mainImageAlt,
    isOutOfStock,
    handlers,
  } = useProductCard(product);

  return (
    <ProductCardUI
      product={product}
      priority={priority}
      isHovered={isHovered}
      hasDiscount={hasDiscount}
      discountPercentage={discountPercentage}
      statusBadge={statusBadge}
      mainImageUrl={mainImageUrl}
      mainImageAlt={mainImageAlt}
      isOutOfStock={isOutOfStock}
      onMouseEnter={handlers.onMouseEnter}
      onMouseLeave={handlers.onMouseLeave}
      onQuickAdd={handlers.onQuickAdd}
    />
  );
}
