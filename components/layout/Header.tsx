"use client";

import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Container, Logo } from "@/components/ui";
import { NavLinks } from "@/components/features/NavLinks";
import { HeaderActions } from "./HeaderActions";
import { cn } from "@/lib/cn";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrollingDown = latest > lastScrollY;
    const isAtTop = latest < 10;
    const scrollDelta = Math.abs(latest - lastScrollY);

    if (scrollDelta < 5) return;

    setIsScrolled(!isAtTop);
    setIsVisible(isAtTop || !isScrollingDown);
    setLastScrollY(latest);
  });

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
        }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50",
          "transition-colors duration-300"
        )}
      >
        <motion.div
          animate={{
            backgroundColor: isScrolled
              ? "var(--color-background)"
              : "transparent",
            borderBottomColor: isScrolled
              ? "var(--color-border)"
              : "transparent",
          }}
          transition={{ duration: 0.3 }}
          className="border-b"
        >
          <Container>
            <div className="flex h-16 items-center justify-between gap-8 lg:h-20">
              <Logo size="lg" />

              <NavLinks />

              <HeaderActions />
            </div>
          </Container>
        </motion.div>

        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-accent"
            />
          )}
        </AnimatePresence>
      </motion.header>

      <div className="h-16 lg:h-20" />
    </>
  );
}
