"use client";

import { useState, useCallback } from "react";
import { Product, ProductSize, ProductColor } from "@/types";
import { useCartStore, useUIStore } from "@/store";
import { calculateDiscountPercentage } from "@/lib/format";
import {
  getStatusBadge,
  getMainImage,
  hasProductDiscount,
  isProductOutOfStock,
} from "./product-card.utils";
import { UseProductCardReturn } from "./product-card.types";

export function useProductCard(product: Product): UseProductCardReturn {
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const showSuccess = useUIStore((state) => state.showSuccess);

  const mainImage = getMainImage(product.images);
  const hasDiscount = hasProductDiscount(product);
  const discountPercentage = hasDiscount
    ? calculateDiscountPercentage(product.originalPrice!, product.price)
    : 0;
  const statusBadge = getStatusBadge(product.status);
  const isOutOfStock = isProductOutOfStock(product.status);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleQuickAdd = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const defaultSize = product.sizes[0] || ProductSize.M;
      const defaultColor = product.colors[0] || ProductColor.Black;

      addItem(product, 1, defaultSize, defaultColor);
      showSuccess("Added to cart", `${product.name} has been added to your cart`);
    },
    [product, addItem, showSuccess]
  );

  return {
    isHovered,
    hasDiscount,
    discountPercentage,
    statusBadge,
    mainImageUrl: mainImage?.url ?? null,
    mainImageAlt: mainImage?.alt ?? product.name,
    isOutOfStock,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onQuickAdd: handleQuickAdd,
    },
  };
}
