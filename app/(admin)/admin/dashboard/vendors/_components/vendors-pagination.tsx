"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { bnNumber } from "../_utils/vendors.format";

export default function VendorsPagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  const safeGo = (p: number) => onChange(Math.max(1, Math.min(totalPages, p)));

  const pages = (() => {
    // show: < 1 2 3 ... 84 >
    if (totalPages <= 6) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 3) return [1, 2, 3, "…", totalPages] as const;
    if (page >= totalPages - 2) return [1, "…", totalPages - 2, totalPages - 1, totalPages] as const;
    return [1, "…", page, "…", totalPages] as const;
  })();

  return (
    <div className="flex items-center justify-end gap-2">
      <button
        type="button"
        onClick={() => safeGo(page - 1)}
        className="grid h-9 w-9 place-items-center rounded-xl border border-[rgba(100,116,139,0.18)] bg-white hover:bg-[rgba(246,247,248,0.9)]"
        aria-label="Prev"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((p, idx) => {
        if (p === "…") {
          return (
            <div
              key={`dots-${idx}`}
              className="grid h-9 w-9 place-items-center rounded-xl border border-[rgba(100,116,139,0.10)] bg-white text-sm text-[var(--color-medium-gray)]"
            >
              …
            </div>
          );
        }

        const active = p === page;
        return (
          <button
            key={p}
            type="button"
            onClick={() => safeGo(p)}
            className={`grid h-9 w-9 place-items-center rounded-xl border text-sm font-semibold ${
              active
                ? "border-transparent bg-[var(--color-primary-color)] text-white"
                : "border-[rgba(100,116,139,0.18)] bg-white text-[var(--color-black)] hover:bg-[rgba(246,247,248,0.9)]"
            }`}
          >
            {bnNumber(p)}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => safeGo(page + 1)}
        className="grid h-9 w-9 place-items-center rounded-xl border border-[rgba(100,116,139,0.18)] bg-white hover:bg-[rgba(246,247,248,0.9)]"
        aria-label="Next"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
