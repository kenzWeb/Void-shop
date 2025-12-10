import {
  Product,
  ProductCategory,
  ProductStatus,
  ProductSize,
  ProductColor,
} from "@/types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_001",
    name: "Minimal Tech Hoodie",
    slug: "minimal-tech-hoodie",
    description:
      "Engineered for the modern minimalist. This premium hoodie features a clean silhouette with hidden tech pockets and moisture-wicking fabric.",
    shortDescription: "Premium tech-fabric hoodie with minimalist design",
    price: 189,
    originalPrice: 229,
    currency: "USD",
    category: ProductCategory.Clothing,
    status: ProductStatus.InStock,
    images: [
      {
        id: "img_001_1",
        url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop",
        alt: "Black tech hoodie front view",
        isMain: true,
      },
      {
        id: "img_001_2",
        url: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=800&h=1000&fit=crop",
        alt: "Black tech hoodie back view",
        isMain: false,
      },
    ],
    variants: [
      { id: "var_001_1", size: ProductSize.S, color: ProductColor.Black, stock: 12, sku: "MTH-BLK-S" },
      { id: "var_001_2", size: ProductSize.M, color: ProductColor.Black, stock: 25, sku: "MTH-BLK-M" },
      { id: "var_001_3", size: ProductSize.L, color: ProductColor.Black, stock: 18, sku: "MTH-BLK-L" },
      { id: "var_001_4", size: ProductSize.XL, color: ProductColor.Black, stock: 8, sku: "MTH-BLK-XL" },
    ],
    colors: [ProductColor.Black, ProductColor.White, ProductColor.Gray],
    sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
    rating: 4.8,
    reviewCount: 124,
    tags: ["bestseller", "tech", "minimalist"],
    isFeatured: true,
    isNew: false,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-03-10"),
  },
  {
    id: "prod_002",
    name: "Void Runner Sneakers",
    slug: "void-runner-sneakers",
    description:
      "Ultra-lightweight running sneakers with responsive cushioning. Designed for urban athletes who demand performance without compromising style.",
    shortDescription: "Lightweight performance sneakers",
    price: 245,
    currency: "USD",
    category: ProductCategory.Footwear,
    status: ProductStatus.InStock,
    images: [
      {
        id: "img_002_1",
        url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop",
        alt: "White runner sneakers side view",
        isMain: true,
      },
      {
        id: "img_002_2",
        url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=1000&fit=crop",
        alt: "White runner sneakers top view",
        isMain: false,
      },
    ],
    variants: [
      { id: "var_002_1", size: ProductSize.M, color: ProductColor.White, stock: 30, sku: "VRS-WHT-42" },
      { id: "var_002_2", size: ProductSize.L, color: ProductColor.White, stock: 22, sku: "VRS-WHT-44" },
    ],
    colors: [ProductColor.White, ProductColor.Black],
    sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
    rating: 4.9,
    reviewCount: 89,
    tags: ["new", "running", "performance"],
    isFeatured: true,
    isNew: true,
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-15"),
  },
  {
    id: "prod_003",
    name: "Carbon Fiber Watch",
    slug: "carbon-fiber-watch",
    description:
      "Precision timepiece crafted from aerospace-grade carbon fiber. Sapphire crystal display with automatic movement.",
    shortDescription: "Aerospace-grade carbon fiber timepiece",
    price: 599,
    originalPrice: 749,
    currency: "USD",
    category: ProductCategory.Accessories,
    status: ProductStatus.LimitedEdition,
    images: [
      {
        id: "img_003_1",
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=1000&fit=crop",
        alt: "Carbon fiber watch front view",
        isMain: true,
      },
    ],
    variants: [
      { id: "var_003_1", size: ProductSize.OneSize, color: ProductColor.Black, stock: 5, sku: "CFW-BLK-OS" },
    ],
    colors: [ProductColor.Black],
    sizes: [ProductSize.OneSize],
    rating: 5.0,
    reviewCount: 42,
    tags: ["luxury", "limited", "carbon"],
    isFeatured: true,
    isNew: false,
    createdAt: new Date("2023-11-20"),
    updatedAt: new Date("2024-02-28"),
  },
  {
    id: "prod_004",
    name: "Structured Tote Bag",
    slug: "structured-tote-bag",
    description:
      "Architectural silhouette meets everyday functionality. Premium vegan leather with laptop compartment and magnetic closure.",
    shortDescription: "Architectural vegan leather tote",
    price: 175,
    currency: "USD",
    category: ProductCategory.Accessories,
    status: ProductStatus.InStock,
    images: [
      {
        id: "img_004_1",
        url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=1000&fit=crop",
        alt: "Black structured tote bag",
        isMain: true,
      },
    ],
    variants: [
      { id: "var_004_1", size: ProductSize.OneSize, color: ProductColor.Black, stock: 45, sku: "STB-BLK-OS" },
      { id: "var_004_2", size: ProductSize.OneSize, color: ProductColor.Beige, stock: 32, sku: "STB-BGE-OS" },
    ],
    colors: [ProductColor.Black, ProductColor.Beige, ProductColor.White],
    sizes: [ProductSize.OneSize],
    rating: 4.7,
    reviewCount: 67,
    tags: ["everyday", "laptop", "vegan"],
    isFeatured: false,
    isNew: false,
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-03-12"),
  },
  {
    id: "prod_005",
    name: "Oversized Tech Tee",
    slug: "oversized-tech-tee",
    description:
      "Relaxed fit t-shirt with seamless construction. Anti-microbial fabric keeps you fresh all day.",
    shortDescription: "Anti-microbial oversized t-shirt",
    price: 79,
    currency: "USD",
    category: ProductCategory.Clothing,
    status: ProductStatus.InStock,
    images: [
      {
        id: "img_005_1",
        url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
        alt: "White oversized t-shirt",
        isMain: true,
      },
    ],
    variants: [
      { id: "var_005_1", size: ProductSize.S, color: ProductColor.White, stock: 50, sku: "OTT-WHT-S" },
      { id: "var_005_2", size: ProductSize.M, color: ProductColor.White, stock: 65, sku: "OTT-WHT-M" },
      { id: "var_005_3", size: ProductSize.L, color: ProductColor.White, stock: 40, sku: "OTT-WHT-L" },
      { id: "var_005_4", size: ProductSize.XL, color: ProductColor.White, stock: 28, sku: "OTT-WHT-XL" },
    ],
    colors: [ProductColor.White, ProductColor.Black, ProductColor.Gray, ProductColor.Navy],
    sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL, ProductSize.XXL],
    rating: 4.6,
    reviewCount: 203,
    tags: ["essential", "comfort", "tech"],
    isFeatured: false,
    isNew: false,
    createdAt: new Date("2023-09-10"),
    updatedAt: new Date("2024-03-01"),
  },
  {
    id: "prod_006",
    name: "Modular Desk Lamp",
    slug: "modular-desk-lamp",
    description:
      "Adjustable LED desk lamp with modular arm system. Touch-sensitive controls with memory function for brightness and color temperature.",
    shortDescription: "Adjustable LED lamp with touch controls",
    price: 149,
    currency: "USD",
    category: ProductCategory.Home,
    status: ProductStatus.InStock,
    images: [
      {
        id: "img_006_1",
        url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=1000&fit=crop",
        alt: "Black modular desk lamp",
        isMain: true,
      },
    ],
    variants: [
      { id: "var_006_1", size: ProductSize.OneSize, color: ProductColor.Black, stock: 25, sku: "MDL-BLK-OS" },
      { id: "var_006_2", size: ProductSize.OneSize, color: ProductColor.White, stock: 18, sku: "MDL-WHT-OS" },
    ],
    colors: [ProductColor.Black, ProductColor.White],
    sizes: [ProductSize.OneSize],
    rating: 4.8,
    reviewCount: 56,
    tags: ["workspace", "LED", "adjustable"],
    isFeatured: true,
    isNew: true,
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-03-14"),
  },
  {
    id: "prod_007",
    name: "Slim Cargo Pants",
    slug: "slim-cargo-pants",
    description:
      "Modern take on cargo pants with streamlined pockets and tapered fit. Water-resistant fabric with 4-way stretch.",
    shortDescription: "Water-resistant slim cargo pants",
    price: 165,
    currency: "USD",
    category: ProductCategory.Clothing,
    status: ProductStatus.InStock,
    images: [
      {
        id: "img_007_1",
        url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&fit=crop",
        alt: "Olive slim cargo pants",
        isMain: true,
      },
    ],
    variants: [
      { id: "var_007_1", size: ProductSize.S, color: ProductColor.Olive, stock: 20, sku: "SCP-OLV-S" },
      { id: "var_007_2", size: ProductSize.M, color: ProductColor.Olive, stock: 35, sku: "SCP-OLV-M" },
      { id: "var_007_3", size: ProductSize.L, color: ProductColor.Olive, stock: 28, sku: "SCP-OLV-L" },
    ],
    colors: [ProductColor.Olive, ProductColor.Black, ProductColor.Navy],
    sizes: [ProductSize.S, ProductSize.M, ProductSize.L, ProductSize.XL],
    rating: 4.5,
    reviewCount: 78,
    tags: ["utility", "stretch", "water-resistant"],
    isFeatured: false,
    isNew: false,
    createdAt: new Date("2023-10-15"),
    updatedAt: new Date("2024-02-20"),
  },
  {
    id: "prod_008",
    name: "Wireless Earbuds Pro",
    slug: "wireless-earbuds-pro",
    description:
      "Premium wireless earbuds with active noise cancellation. 32-hour battery life with charging case. IPX5 water resistance.",
    shortDescription: "ANC earbuds with 32-hour battery",
    price: 279,
    originalPrice: 329,
    currency: "USD",
    category: ProductCategory.Electronics,
    status: ProductStatus.InStock,
    images: [
      {
        id: "img_008_1",
        url: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=1000&fit=crop",
        alt: "Black wireless earbuds with case",
        isMain: true,
      },
    ],
    variants: [
      { id: "var_008_1", size: ProductSize.OneSize, color: ProductColor.Black, stock: 60, sku: "WEP-BLK-OS" },
      { id: "var_008_2", size: ProductSize.OneSize, color: ProductColor.White, stock: 45, sku: "WEP-WHT-OS" },
    ],
    colors: [ProductColor.Black, ProductColor.White],
    sizes: [ProductSize.OneSize],
    rating: 4.7,
    reviewCount: 312,
    tags: ["bestseller", "audio", "ANC"],
    isFeatured: true,
    isNew: false,
    createdAt: new Date("2023-08-01"),
    updatedAt: new Date("2024-03-10"),
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return MOCK_PRODUCTS.find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return MOCK_PRODUCTS.find((product) => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return MOCK_PRODUCTS.filter((product) => product.isFeatured);
}

export function getNewProducts(): Product[] {
  return MOCK_PRODUCTS.filter((product) => product.isNew);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return MOCK_PRODUCTS.filter((product) => product.category === category);
}

export function getBestSellers(): Product[] {
  return MOCK_PRODUCTS.filter((product) => product.tags.includes("bestseller"));
}

export function getSaleProducts(): Product[] {
  return MOCK_PRODUCTS.filter((product) => product.originalPrice !== undefined);
}

export function getAllProducts(): Product[] {
  return MOCK_PRODUCTS;
}
