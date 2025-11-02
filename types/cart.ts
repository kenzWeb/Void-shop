import { ProductSize, ProductColor } from "./enums";
import { Product } from "./product";

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  size: ProductSize;
  color: ProductColor;
  addedAt: Date;
}

export interface CartSummary {
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  itemCount: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  isLoading: boolean;
}

export interface CartActions {
  addItem: (item: Omit<CartItem, "id" | "addedAt">) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  getCartSummary: () => CartSummary;
}
