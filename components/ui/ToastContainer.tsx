"use client";

import { AnimatePresence } from "framer-motion";
import { useUIStore } from "@/store";
import { Toast } from "./Toast";

export function ToastContainer() {
  const toasts = useUIStore((state) => state.toasts);

  return (
    <div
      aria-live="polite"
      aria-label="Notifications"
      className="pointer-events-none fixed right-0 top-0 z-[100] flex max-h-screen w-full flex-col gap-2 p-4 sm:right-4 sm:top-4 sm:max-w-sm"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>
  );
}
