"use client";

import Link from "next/link";
import { Search, ShoppingBag, Heart, Menu, User } from "lucide-react";
import { IconButton } from "@/components/ui";
import { useCartStore, useUIStore, useFavoritesStore } from "@/store";
import { useHydration } from "@/hooks/useHydration";
import { cn } from "@/lib/cn";

interface HeaderActionsProps {
  className?: string;
}

export function HeaderActions({ className }: HeaderActionsProps) {
  const isHydrated = useHydration();
  const cartItemCount = useCartStore((state) => state.getItemCount());
  const toggleCart = useCartStore((state) => state.toggleCart);
  const toggleSearch = useUIStore((state) => state.toggleSearch);
  const toggleMobileMenu = useUIStore((state) => state.toggleMobileMenu);
  const favoritesCount = useFavoritesStore((state) => state.getFavoritesCount());

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <IconButton
        icon={<Search className="h-full w-full" />}
        label="Search"
        onClick={toggleSearch}
        className="hidden sm:flex"
      />
      <Link href="/favorites" className="hidden sm:block">
        <IconButton
          icon={<Heart className="h-full w-full" />}
          label="Favorites"
          badge={isHydrated ? favoritesCount : undefined}
        />
      </Link>
      <Link href="/account" className="hidden sm:block">
        <IconButton
          icon={<User className="h-full w-full" />}
          label="Account"
        />
      </Link>
      <IconButton
        icon={<ShoppingBag className="h-full w-full" />}
        label="Cart"
        badge={isHydrated ? cartItemCount : undefined}
        onClick={toggleCart}
      />
      <IconButton
        icon={<Menu className="h-full w-full" />}
        label="Menu"
        onClick={toggleMobileMenu}
        className="md:hidden"
      />
    </div>
  );
}
