"use client";

import { Printer, Plus } from "lucide-react";

export default function OrderManagementHeader({
  titleBn,
  subtitleEn,
  onPrint,
  onCreateNew,
}: {
  titleBn: string;
  subtitleEn: string;
  onPrint: () => void;
  onCreateNew: () => void;
}) {
  return (
    <div className="w-full border-b border-border bg-white">
      <div className="px-6 py-5">
        <div className="flex items-center justify-between gap-4">
          {/* LEFT */}
          <div className="min-w-0">
            <h1 className="text-2xl font-semibold leading-tight text-[var(--color-black)]">
              {titleBn}
            </h1>
            <p className="mt-1 text-sm text-[var(--color-light-gray)]">{subtitleEn}</p>
          </div>

          {/* RIGHT */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-white px-4 text-sm font-medium text-[var(--color-black)] hover:bg-[var(--color-off-white)]"
            >
              <Printer className="h-4 w-4" />
              প্রিন্ট
            </button>

            <button
              type="button"
              onClick={onCreateNew}
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-[var(--color-primary-color)] px-4 text-sm font-semibold text-white hover:opacity-95"
            >
              <Plus className="h-4 w-4" />
              নতুন অর্ডার
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
