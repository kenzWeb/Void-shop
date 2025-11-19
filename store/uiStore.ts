import { create } from "zustand";
import { Toast, ToastType } from "@/types";
import { TOAST_DURATION } from "@/lib/constants";

interface UIStore {
  toasts: Toast[];
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
  showSuccess: (title: string, message?: string) => void;
  showError: (title: string, message?: string) => void;
  showWarning: (title: string, message?: string) => void;
  showInfo: (title: string, message?: string) => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
}

export const useUIStore = create<UIStore>((set, get) => ({
  toasts: [],
  isSearchOpen: false,
  isMobileMenuOpen: false,

  addToast: (toast) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const newToast: Toast = {
      ...toast,
      id,
      duration: toast.duration ?? TOAST_DURATION,
    };

    set((state) => ({
      toasts: [...state.toasts, newToast],
    }));

    setTimeout(() => {
      get().removeToast(id);
    }, newToast.duration);
  },

  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },

  showSuccess: (title, message) => {
    get().addToast({ type: ToastType.Success, title, message });
  },

  showError: (title, message) => {
    get().addToast({ type: ToastType.Error, title, message });
  },

  showWarning: (title, message) => {
    get().addToast({ type: ToastType.Warning, title, message });
  },

  showInfo: (title, message) => {
    get().addToast({ type: ToastType.Info, title, message });
  },

  openSearch: () => {
    set({ isSearchOpen: true, isMobileMenuOpen: false });
  },

  closeSearch: () => {
    set({ isSearchOpen: false });
  },

  toggleSearch: () => {
    set((state) => ({ isSearchOpen: !state.isSearchOpen, isMobileMenuOpen: false }));
  },

  openMobileMenu: () => {
    set({ isMobileMenuOpen: true, isSearchOpen: false });
  },

  closeMobileMenu: () => {
    set({ isMobileMenuOpen: false });
  },

  toggleMobileMenu: () => {
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen, isSearchOpen: false }));
  },
}));
