import {
  ProductCategory,
  ProductStatus,
  ProductSize,
  ProductColor,
} from "./enums";

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isMain: boolean;
}

export interface ProductVariant {
  id: string;
  size: ProductSize;
  color: ProductColor;
  stock: number;
  sku: string;
}

export interface ProductReview {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  currency: string;
  category: ProductCategory;
  status: ProductStatus;
  images: ProductImage[];
  variants: ProductVariant[];
  colors: ProductColor[];
  sizes: ProductSize[];
  rating: number;
  reviewCount: number;
  tags: string[];
  isFeatured: boolean;
  isNew: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductFilterState {
  categories: ProductCategory[];
  colors: ProductColor[];
  sizes: ProductSize[];
  priceRange: {
    min: number;
    max: number;
  };
  status: ProductStatus[];
  searchQuery: string;
}
