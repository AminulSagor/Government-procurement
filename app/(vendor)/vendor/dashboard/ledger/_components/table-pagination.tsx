"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

function getPages(page: number, totalPages: number) {
  // 1 ... (page-1) page (page+1) ... total
  const set = new Set<number>([1, totalPages, page - 1, page, page + 1]);
  const nums = [...set].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b);

  const out: Array<number | "..."> = [];
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const prev = nums[i - 1];
    if (i > 0 && prev !== undefined && cur - prev > 1) out.push("...");
    out.push(cur);
  }
  return out;
}

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
  onPrev: () => void;
  onNext: () => void;
  onGoToPage: (page: number) => void;
}) {
  const items = useMemo(() => getPages(page, totalPages), [page, totalPages]);

  const btnBase =
    "grid h-8 w-8 place-items-center rounded-lg border bg-white text-sm font-semibold";
  const btnIdle = "border-gray/15 text-gray hover:border-primary/40";
  const btnActive = "border-primary-color bg-primary-color text-white";
  const btnDisabled = "opacity-50 pointer-events-none";

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between p-4">
      <p className="text-xs font-medium text-light-gray">{showingText}</p>

      <div className="flex items-center gap-2">
        {/* prev */}
        <button
          type="button"
          onClick={onPrev}
          className={cn(btnBase, btnIdle, page <= 1 && btnDisabled)}
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* pages */}
        {items.map((it, idx) => {
          if (it === "...") {
            return (
              <div
                key={`dots-${idx}`}
                className={cn(btnBase, "border-transparent bg-transparent text-light-gray")}
                aria-hidden
              >
                <MoreHorizontal className="h-4 w-4" />
              </div>
            );
          }

          const active = it === page;

          return (
            <button
              key={it}
              type="button"
              onClick={() => onGoToPage(it)}
              className={cn(btnBase, active ? btnActive : btnIdle)}
            >
              {it}
            </button>
          );
        })}

        {/* next */}
        <button
          type="button"
          onClick={onNext}
          className={cn(btnBase, btnIdle, page >= totalPages && btnDisabled)}
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
