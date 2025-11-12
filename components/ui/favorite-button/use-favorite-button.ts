"use client";

import { useCallback } from "react";
import { Product } from "@/types";
import { useFavoritesStore } from "@/store";
import { ANIMATION_CLEAR_DELAY } from "./favorite-button.constants";
import { UseFavoriteButtonReturn } from "./favorite-button.types";

export function useFavoriteButton(product: Product): UseFavoriteButtonReturn {
  const isFavorite = useFavoritesStore((state) => state.isFavorite(product.id));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const recentlyAnimated = useFavoritesStore((state) =>
    state.recentlyAnimated.includes(product.id)
  );
  const clearAnimated = useFavoritesStore((state) => state.clearAnimated);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(product);

      if (!isFavorite) {
        setTimeout(() => {
          clearAnimated(product.id);
        }, ANIMATION_CLEAR_DELAY);
      }
    },
    [product, isFavorite, toggleFavorite, clearAnimated]
  );

  return {
    isFavorite,
    showParticles: recentlyAnimated,
    handleClick,
  };
}
