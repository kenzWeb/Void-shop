"use client";

import { useState, useEffect, useCallback } from "react";

interface ScrollPosition {
  x: number;
  y: number;
  direction: "up" | "down" | null;
  isAtTop: boolean;
  isScrolled: boolean;
}

export function useScrollPosition(threshold: number = 10): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: null,
    isAtTop: true,
    isScrolled: false,
  });

  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const currentScrollX = window.scrollX;

    const direction = currentScrollY > lastScrollY ? "down" : "up";
    const isAtTop = currentScrollY < threshold;
    const isScrolled = currentScrollY > threshold;

    setScrollPosition({
      x: currentScrollX,
      y: currentScrollY,
      direction: Math.abs(currentScrollY - lastScrollY) > 5 ? direction : scrollPosition.direction,
      isAtTop,
      isScrolled,
    });

    setLastScrollY(currentScrollY);
  }, [lastScrollY, threshold, scrollPosition.direction]);

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scrollPosition;
}
