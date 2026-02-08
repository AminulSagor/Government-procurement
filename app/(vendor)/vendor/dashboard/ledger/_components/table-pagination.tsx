"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TablePagination({
  showingText,
  page,
  totalPages,
  onPrev,
  onNext,
  onGoToPage,
}: {
  showingText: string;
  page: number;
  totalPages: number;
  onPrev: () => void; // no-op
  onNext: () => void; // no-op
  onGoToPage: (page: number) => void; // no-op
}) {
  const pages = [1, 2, 3]; // demo UI only

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <p className="text-xs text-gray">{showingText}</p>

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
          <ChevronLeft className="h-4 w-4" />
        </button>

        {pages.map((p) => {
          const active = p === page;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onGoToPage(p)}
              className={cn(
                "h-8 w-8 rounded-lg border text-sm font-semibold",
                active
                  ? "border-primary bg-primary text-white"
                  : "border-gray/15 bg-white text-gray hover:border-primary"
              )}
            >
              {p}
            </button>
          );
        })}

        <button
          type="button"
          onClick={onNext}
          className={cn(
            "grid h-8 w-8 place-items-center rounded-lg border border-gray/15 bg-white text-gray",
            "hover:border-primary"
          )}
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <p className="ml-2 text-xs text-gray">
          {page} / {totalPages}
        </p>
      </div>
    </div>
  );
}
