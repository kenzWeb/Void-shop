import { ToastType } from "./enums";

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

export interface ModalState {
  isOpen: boolean;
  content: React.ReactNode | null;
}

export interface Breadcrumb {
  label: string;
  href: string;
  isActive: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  isDisabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  className?: string;
  badge?: number;
}

export interface BadgeProps {
  count: number;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md";
  className?: string;
}
