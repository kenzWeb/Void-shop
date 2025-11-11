import { FavoriteButtonSize } from "./favorite-button.types";

export const BUTTON_SIZE_CLASSES: Record<FavoriteButtonSize, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export const ICON_SIZE_CLASSES: Record<FavoriteButtonSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export const PARTICLE_COUNT = 6;

export const PARTICLE_SPREAD_RADIUS = 30;

export const ANIMATION_CLEAR_DELAY = 600;

export const PARTICLE_ANIMATION_DURATION = 0.6;

export const HEART_ANIMATION_DURATION = 0.15;

export const RING_ANIMATION_DURATION = 0.4;

export const PARTICLE_EASING: [number, number, number, number] = [0.16, 1, 0.3, 1];
