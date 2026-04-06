"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function TablePagination({
  page,
  totalPages,
  onPrev,
  onNext,
  onGoToPage,
}: {
  page: number;
  totalPages: number;
  onPrev: () => void; // no-op
  onNext: () => void; // no-op
  onGoToPage: (page: number) => void; // no-op
}) {
  const pages = [1, 2, 3];

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        className={cn(
          "grid h-8 w-8 place-items-center rounded-lg border border-gray/15 bg-white text-gray",
          "hover:border-primary"
        )}
        aria-label="Previous"
      >
        ‹
      </button>

      {pages.map((p) => {
        const active = p === page;
        return (
          <button
            key={p}
            type="button"
            onClick={() => onGoToPage(p)}
            className={cn(
              "h-8 w-8 rounded-lg border text-xs font-semibold",
              active
                ? "border-primary bg-primary text-white"
                : "border-gray/15 bg-white text-gray hover:border-primary"
            )}
          >
            {p}
          </button>
        );
      })}

      <span className="px-2 text-xs text-gray">…</span>

      <button
        type="button"
        onClick={() => null}
        className="h-8 w-8 rounded-lg border border-gray/15 bg-white text-xs font-semibold text-gray hover:border-primary"
      >
        {totalPages}
      </button>

      <button
        type="button"
        onClick={onNext}
        className={cn(
          "grid h-8 w-8 place-items-center rounded-lg border border-gray/15 bg-white text-gray",
          "hover:border-primary"
        )}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
