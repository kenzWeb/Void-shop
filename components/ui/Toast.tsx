"use client";

import { motion } from "framer-motion";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { Toast as ToastType, ToastType as ToastTypeEnum } from "@/types";
import { useUIStore } from "@/store";
import { cn } from "@/lib/cn";

interface ToastProps {
  toast: ToastType;
}

const toastConfig = {
  [ToastTypeEnum.Success]: {
    icon: CheckCircle,
    className: "border-green-500/20 bg-green-500/10",
    iconClassName: "text-green-500",
  },
  [ToastTypeEnum.Error]: {
    icon: AlertCircle,
    className: "border-red-500/20 bg-red-500/10",
    iconClassName: "text-red-500",
  },
  [ToastTypeEnum.Warning]: {
    icon: AlertTriangle,
    className: "border-yellow-500/20 bg-yellow-500/10",
    iconClassName: "text-yellow-500",
  },
  [ToastTypeEnum.Info]: {
    icon: Info,
    className: "border-blue-500/20 bg-blue-500/10",
    iconClassName: "text-blue-500",
  },
};

export function Toast({ toast }: ToastProps) {
  const removeToast = useUIStore((state) => state.removeToast);
  const config = toastConfig[toast.type];
  const Icon = config.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "pointer-events-auto relative flex w-full max-w-sm items-start gap-3",
        "rounded-lg border p-4 shadow-lg backdrop-blur-sm",
        "bg-background",
        config.className
      )}
    >
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", config.iconClassName)} />

      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-tight">{toast.title}</p>
        {toast.message && (
          <p className="text-sm text-muted">{toast.message}</p>
        )}
      </div>

      <button
        onClick={() => removeToast(toast.id)}
        className="shrink-0 text-muted transition-colors hover:text-foreground"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
