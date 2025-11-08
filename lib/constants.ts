import { NavLink } from "@/types";

export const SITE_CONFIG = {
  name: "VOIDØ",
  description: "Premium curated products for the modern minimalist",
  currency: "USD",
  locale: "en-US",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "New Arrivals", href: "/new" },
  { label: "Sale", href: "/sale" },
];

export const FOOTER_LINKS = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "New Arrivals", href: "/new" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Sale", href: "/sale" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
} as const;

export const TOAST_DURATION = 4000;

export const DEBOUNCE_DELAY = 300;

export const TAX_RATE = 0.08;

export const FREE_SHIPPING_THRESHOLD = 100;

export const SHIPPING_COST = 9.99;

export const ANIMATION_DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
