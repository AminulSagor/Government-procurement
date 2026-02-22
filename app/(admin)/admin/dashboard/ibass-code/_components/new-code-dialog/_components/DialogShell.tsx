"use client";


import { Dialog } from "@/components/ui/dialog";
import { X } from "lucide-react";
import React from "react";

export default function DialogShell({
  open,
  title,
  onClose,
  children,
  footer,
  icon,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <Dialog open={open}>
      {/* ✅ Overlay + Center */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* backdrop */}
        <button
          type="button"
          onClick={onClose}
          className="absolute inset-0 bg-black/40"
          aria-label="Close dialog backdrop"
        />

        {/* dialog box */}
        <div className="relative w-[920px] max-w-[92vw] rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden">
          {/* header */}
          <div className="flex items-start justify-between px-8 py-6 border-b border-gray/10">
            <div className="flex items-start gap-3">
              {icon ? (
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-off-white)] text-[var(--color-primary-color)]">
                  {icon}
                </div>
              ) : null}
              <h2 className="text-[22px] font-semibold text-[var(--color-black)]">
                {title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-[var(--color-light-gray)] hover:bg-[var(--color-off-white)]"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* body */}
          <div className="px-8 py-6">{children}</div>

          {/* footer */}
          {footer ? (
            <div className="px-8 py-5 border-t border-gray/10 bg-[var(--color-off-white)]">
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </Dialog>
  );
}
