"use client";

import { useState, useMemo, useCallback } from "react";
import {
  Product,
  ProductFilterState,
  ProductCategory,
  ProductColor,
  ProductSize,
  ProductStatus,
  SortOption,
} from "@/types";

const initialFilterState: ProductFilterState = {
  categories: [],
  colors: [],
  sizes: [],
  priceRange: { min: 0, max: 1000 },
  status: [],
  searchQuery: "",
};

interface UseProductFilterReturn {
  filters: ProductFilterState;
  sortOption: SortOption;
  filteredProducts: Product[];
  setCategory: (category: ProductCategory, enabled: boolean) => void;
  setColor: (color: ProductColor, enabled: boolean) => void;
  setSize: (size: ProductSize, enabled: boolean) => void;
  setPriceRange: (min: number, max: number) => void;
  setStatus: (status: ProductStatus, enabled: boolean) => void;
  setSearchQuery: (query: string) => void;
  setSortOption: (option: SortOption) => void;
  resetFilters: () => void;
  activeFilterCount: number;
}

export function useProductFilter(products: Product[]): UseProductFilterReturn {
  const [filters, setFilters] = useState<ProductFilterState>(initialFilterState);
  const [sortOption, setSortOption] = useState<SortOption>(SortOption.Newest);

  const setCategory = useCallback((category: ProductCategory, enabled: boolean) => {
    setFilters((prev) => ({
      ...prev,
      categories: enabled
        ? [...prev.categories, category]
        : prev.categories.filter((c) => c !== category),
    }));
  }, []);

  const setColor = useCallback((color: ProductColor, enabled: boolean) => {
    setFilters((prev) => ({
      ...prev,
      colors: enabled
        ? [...prev.colors, color]
        : prev.colors.filter((c) => c !== color),
    }));
  }, []);

  const setSize = useCallback((size: ProductSize, enabled: boolean) => {
    setFilters((prev) => ({
      ...prev,
      sizes: enabled
        ? [...prev.sizes, size]
        : prev.sizes.filter((s) => s !== size),
    }));
  }, []);

  const setPriceRange = useCallback((min: number, max: number) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: { min, max },
    }));
  }, []);

  const setStatus = useCallback((status: ProductStatus, enabled: boolean) => {
    setFilters((prev) => ({
      ...prev,
      status: enabled
        ? [...prev.status, status]
        : prev.status.filter((s) => s !== status),
    }));
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setFilters((prev) => ({
      ...prev,
      searchQuery: query,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilterState);
    setSortOption(SortOption.Newest);
  }, []);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.categories.length > 0) count += filters.categories.length;
    if (filters.colors.length > 0) count += filters.colors.length;
    if (filters.sizes.length > 0) count += filters.sizes.length;
    if (filters.status.length > 0) count += filters.status.length;
    if (filters.priceRange.min > 0 || filters.priceRange.max < 1000) count += 1;
    return count;
  }, [filters]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    if (filters.colors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) => filters.colors.includes(c))
      );
    }

    if (filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => filters.sizes.includes(s))
      );
    }

    if (filters.status.length > 0) {
      result = result.filter((p) => filters.status.includes(p.status));
    }

    result = result.filter(
      (p) =>
        p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
    );

    switch (sortOption) {
      case SortOption.PriceLowToHigh:
        result.sort((a, b) => a.price - b.price);
        break;
      case SortOption.PriceHighToLow:
        result.sort((a, b) => b.price - a.price);
        break;
      case SortOption.Popular:
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case SortOption.Rating:
        result.sort((a, b) => b.rating - a.rating);
        break;
      case SortOption.Newest:
      default:
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
    }

    return result;
  }, [products, filters, sortOption]);

  return {
    filters,
    sortOption,
    filteredProducts,
    setCategory,
    setColor,
    setSize,
    setPriceRange,
    setStatus,
    setSearchQuery,
    setSortOption,
    resetFilters,
    activeFilterCount,
  };
}
