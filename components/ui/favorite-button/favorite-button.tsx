"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { cn } from "@/lib/cn";
import { FavoriteButtonProps } from "./favorite-button.types";
import { useFavoriteButton } from "./use-favorite-button";
import {
  PARTICLE_COUNT,
  PARTICLE_ANIMATION_DURATION,
  HEART_ANIMATION_DURATION,
  RING_ANIMATION_DURATION,
  PARTICLE_EASING,
} from "./favorite-button.constants";
import {
  calculateParticlePosition,
  generateParticleIndices,
} from "./favorite-button.utils";
import {
  favoriteButtonStyles,
  heartIconStyles,
  particleStyles,
  ringStyles,
} from "./favorite-button.styles";

const particleIndices = generateParticleIndices(PARTICLE_COUNT);

export function FavoriteButton({
  product,
  className,
  size = "md",
}: FavoriteButtonProps) {
  const { isFavorite, showParticles, handleClick } = useFavoriteButton(product);

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={cn(favoriteButtonStyles({ size }), className)}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <HeartIcon isFavorite={isFavorite} size={size} />
      <ParticleEffect showParticles={showParticles} />
    </motion.button>
  );
}

interface HeartIconProps {
  isFavorite: boolean;
  size: "sm" | "md" | "lg";
}

function HeartIcon({ isFavorite, size }: HeartIconProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isFavorite ? "filled" : "empty"}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: HEART_ANIMATION_DURATION }}
      >
        <Heart className={heartIconStyles({ size, isFavorite })} />
      </motion.div>
    </AnimatePresence>
  );
}

interface ParticleEffectProps {
  showParticles: boolean;
}

function ParticleEffect({ showParticles }: ParticleEffectProps) {
  return (
    <AnimatePresence>
      {showParticles && (
        <>
          {particleIndices.map((index) => {
            const position = calculateParticlePosition(index, PARTICLE_COUNT);
            return (
              <motion.span
                key={index}
                initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1, 0],
                  x: position.x,
                  y: position.y,
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: PARTICLE_ANIMATION_DURATION,
                  ease: PARTICLE_EASING,
                }}
                className={particleStyles}
              />
            );
          })}
          <motion.span
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: RING_ANIMATION_DURATION }}
            className={ringStyles}
          />
        </>
      )}
    </AnimatePresence>
  );
}
