"use client";

import React from "react";

type Props = {
  total?: number;
  from?: number;
  to?: number;
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
};

export default function PaginationBar({
  total = 0,
  from = 0,
  to = 0,
  page = 1,
  totalPages = 1,
  onPageChange,
}: Props) {
  const buildPages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (page <= 3) {
      return [1, 2, 3, "...", totalPages];
    }

    if (page >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, "...", page, "...", totalPages];
  };

  const pages = buildPages();

  return (
    <div className="flex items-center justify-between gap-3">
      <p className="text-xs font-semibold text-gray/60">
        {total}টি ফলাফলের মধ্যে {from} থেকে {to}টি দেখানো হচ্ছে
      </p>

      <div className="inline-flex overflow-hidden rounded-lg border border-gray/15 bg-white">
        <button
          type="button"
          onClick={() => page > 1 && onPageChange?.(page - 1)}
          className="grid h-9 w-10 place-items-center border-r border-gray/15 text-gray/60 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Previous"
          disabled={page <= 1}
        >
          ‹
        </button>

        {pages.map((p, idx) => {
          const isActive = typeof p === "number" && p === page;
          const isDots = p === "...";

          if (isDots) {
            return (
              <div
                key={`dots-${idx}`}
                className="grid h-9 w-10 place-items-center border-r border-gray/15 text-xs font-bold text-gray/40"
              >
                ...
              </div>
            );
          }

          return (
            <button
              key={`p-${p}`}
              type="button"
              onClick={() => typeof p === "number" && onPageChange?.(p)}
              className={[
                "grid h-9 w-10 place-items-center border-r border-gray/15 text-xs font-extrabold",
                isActive
                  ? "bg-primary-color text-white"
                  : "text-gray/70 hover:bg-secondary",
              ].join(" ")}
            >
              {p}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => page < totalPages && onPageChange?.(page + 1)}
          className="grid h-9 w-10 place-items-center text-gray/60 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Next"
          disabled={page >= totalPages}
        >
          ›
        </button>
      </div>
    </div>
  );
}