"use client";

import { Button } from "@/components/ui/button";
import DialogShell from "./DialogShell";

import { Check, List, Plus } from "lucide-react";

export default function SuccessDialog({
  open,
  title,
  lines,
  primaryText,
  secondaryText,
  onPrimary,
  onSecondary,
  onClose,
}: {
  open: boolean;
  title: string;
  lines: Array<{ label: string; value: string }>;
  primaryText: string;
  secondaryText: string;
  onPrimary: () => void;
  onSecondary: () => void;
  onClose: () => void;
}) {
  return (
    <DialogShell open={open} onClose={onClose} title="">
      <div className="mx-auto w-[520px] max-w-full text-center">
        {/* top icon */}
        <div className="mx-auto mt-2 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[rgba(7,136,52,0.10)]">
          <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[var(--color-primary-color)] text-white shadow-[0_0_0_12px_rgba(120,185,181,0.22)]">
            <Check className="h-7 w-7" />
          </div>
        </div>

        {/* title */}
        <h3 className="mt-7 text-[22px] font-extrabold leading-8 text-[var(--color-black)]">
          {title}
        </h3>

        {/* summary box */}
        <div className="mt-6 rounded-2xl bg-[var(--color-off-white)] px-6 py-4 text-left border border-gray/10">
          {lines.map((l, idx) => (
            <div key={l.label} className="py-3">
              <div className="flex items-center justify-between gap-6">
                <p className="text-sm text-[var(--color-light-gray)]">
                  {l.label}
                </p>
                <p className="text-sm font-semibold text-[var(--color-black)]">
                  {l.value}
                </p>
              </div>

              {idx !== lines.length - 1 ? (
                <div className="mt-3 h-px w-full bg-gray/10" />
              ) : null}
            </div>
          ))}
        </div>

        {/* actions */}
        <div className="mt-7 space-y-4">
          <Button className="h-12 w-full rounded-xl bg-[var(--color-primary-color)] text-base font-semibold text-white hover:bg-[var(--color-primary-color)]" onClick={onPrimary}>
            <span className="flex w-full items-center justify-center gap-3">
              <List className="h-5 w-5" />
              <span
                className="text-base font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  onPrimary();
                }}
              >
                {primaryText}
              </span>
            </span>
          </Button>

          <button
            type="button"
            onClick={onSecondary}
            className="h-12 w-full rounded-xl border border-gray/15 bg-white text-base font-semibold text-[var(--color-black)] hover:bg-[var(--color-off-white)]"
          >
            <span className="inline-flex items-center justify-center gap-3">
              <Plus className="h-5 w-5" />
              {secondaryText}
            </span>
          </button>
        </div>

        {/* footer text */}
        <p className="mt-8 text-[11px] font-semibold tracking-[0.28em] text-[var(--color-light-gray)] opacity-70">
          IBAS+ SYSTEM CONFIRMATION
        </p>
      </div>
    </DialogShell>
  );
}
