"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useFavoritesStore } from "@/store";
import { Product } from "@/types";
import { cn } from "@/lib/cn";

interface FavoriteButtonProps {
  product: Product;
  className?: string;
  size?: "sm" | "md" | "lg";
}

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

const particles = Array.from({ length: 6 }, (_, i) => i);

export function FavoriteButton({
  product,
  className,
  size = "md",
}: FavoriteButtonProps) {
  const isFavorite = useFavoritesStore((state) => state.isFavorite(product.id));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const recentlyAnimated = useFavoritesStore((state) =>
    state.recentlyAnimated.includes(product.id)
  );
  const clearAnimated = useFavoritesStore((state) => state.clearAnimated);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);

    if (!isFavorite) {
      setTimeout(() => {
        clearAnimated(product.id);
      }, 600);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={cn(
        "relative flex items-center justify-center",
        "rounded-full bg-background/80 backdrop-blur-sm",
        "border border-border transition-colors",
        "hover:border-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground",
        sizeClasses[size],
        className
      )}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isFavorite ? "filled" : "empty"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.15 }}
        >
          <Heart
            className={cn(
              iconSizeClasses[size],
              "transition-colors",
              isFavorite ? "fill-red-500 text-red-500" : "text-foreground"
            )}
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {recentlyAnimated && (
          <>
            {particles.map((i) => (
              <motion.span
                key={i}
                initial={{
                  scale: 0,
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * 60 * Math.PI) / 180) * 30,
                  y: Math.sin((i * 60 * Math.PI) / 180) * 30,
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute h-2 w-2 rounded-full bg-red-500"
              />
            ))}
            <motion.span
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-full bg-red-500"
            />
          </>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
