import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types";

interface FavoritesStore {
  favorites: Product[];
  recentlyAnimated: string[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: string) => void;
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
  getFavoritesCount: () => number;
  setAnimated: (productId: string) => void;
  clearAnimated: (productId: string) => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      recentlyAnimated: [],

      addFavorite: (product) => {
        set((state) => {
          if (state.favorites.some((fav) => fav.id === product.id)) {
            return state;
          }
          return { favorites: [...state.favorites, product] };
        });
      },

      removeFavorite: (productId) => {
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav.id !== productId),
        }));
      },

      toggleFavorite: (product) => {
        const isFav = get().isFavorite(product.id);
        if (isFav) {
          get().removeFavorite(product.id);
        } else {
          get().addFavorite(product);
          get().setAnimated(product.id);
        }
      },

      isFavorite: (productId) => {
        return get().favorites.some((fav) => fav.id === productId);
      },

      clearFavorites: () => {
        set({ favorites: [] });
      },

      getFavoritesCount: () => {
        return get().favorites.length;
      },

      setAnimated: (productId) => {
        set((state) => ({
          recentlyAnimated: [...state.recentlyAnimated, productId],
        }));
      },

      clearAnimated: (productId) => {
        set((state) => ({
          recentlyAnimated: state.recentlyAnimated.filter((id) => id !== productId),
        }));
      },
    }),
    {
      name: "voido-favorites",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);
