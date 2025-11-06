import { PARTICLE_SPREAD_RADIUS } from "./favorite-button.constants";

export function calculateParticlePosition(
  index: number,
  totalParticles: number
): { x: number; y: number } {
  const angle = (index * (360 / totalParticles) * Math.PI) / 180;
  return {
    x: Math.cos(angle) * PARTICLE_SPREAD_RADIUS,
    y: Math.sin(angle) * PARTICLE_SPREAD_RADIUS,
  };
}

export function generateParticleIndices(count: number): number[] {
  return Array.from({ length: count }, (_, i) => i);
}
