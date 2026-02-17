"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type ToastItem = {
  id: string;
  message: string;
};

type ToastContextValue = {
  push: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider />");
  return ctx;
}

type ToastProviderProps = {
  children: React.ReactNode;
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const push = useCallback((message: string) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setItems((prev) => [...prev, { id, message }]);
    window.setTimeout(() => {
      setItems((prev) => prev.filter((t) => t.id !== id));
    }, 1600);
  }, []);

  const value = useMemo(() => ({ push }), [push]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-5 left-1/2 z-[60] w-[min(92vw,520px)] -translate-x-1/2">
        <div className="flex flex-col gap-2">
          {items.map((t) => (
            <div
              key={t.id}
              className="rounded-xl border border-white/15 bg-black/70 px-4 py-3 text-[11px] tracking-[0.28em] text-white/85 backdrop-blur"
            >
              {t.message.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
}
