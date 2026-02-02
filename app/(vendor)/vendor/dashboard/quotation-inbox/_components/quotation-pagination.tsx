"use client";

import React from "react";

type Props = {
  total?: number;
  from?: number;
  to?: number;
  page?: number;
  totalPages?: number;
};

export default function PaginationBar({
  total = 24,
  from = 1,
  to = 6,
  page = 1,
  totalPages = 6,
}: Props) {
  const pages = [1, 2, 3, "...", totalPages];

  return (
    <div className="flex items-center justify-between gap-3">
      {/* left text */}
      <p className="text-xs font-semibold text-gray/60">
        {total}টি ফলাফলের মধ্যে {from} থেকে {to}টি দেখানো হচ্ছে
      </p>

      {/* right segmented pager */}
      <div className="inline-flex overflow-hidden rounded-lg border border-gray/15 bg-white">
        {/* prev */}
        <button
          type="button"
          className="h-9 w-10 grid place-items-center border-r border-gray/15 text-gray/60 hover:bg-secondary"
          aria-label="Previous"
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
                className="h-9 w-10 grid place-items-center border-r border-gray/15 text-xs font-bold text-gray/40"
              >
                ...
              </div>
            );
          }

          return (
            <button
              key={`p-${p}`}
              type="button"
              className={[
                "h-9 w-10 grid place-items-center border-r border-gray/15 text-xs font-extrabold",
                isActive
                  ? "bg-primary-color text-white"
                  : "text-gray/70 hover:bg-secondary",
              ].join(" ")}
            >
              {p}
            </button>
          );
        })}

        {/* next */}
        <button
          type="button"
          className="h-9 w-10 grid place-items-center text-gray/60 hover:bg-secondary"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}
