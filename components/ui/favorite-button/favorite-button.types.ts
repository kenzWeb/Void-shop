import { Product } from "@/types";

export type FavoriteButtonSize = "sm" | "md" | "lg";

export interface FavoriteButtonProps {
  product: Product;
  className?: string;
  size?: FavoriteButtonSize;
}

export interface UseFavoriteButtonReturn {
  isFavorite: boolean;
  showParticles: boolean;
  handleClick: (e: React.MouseEvent) => void;
}
