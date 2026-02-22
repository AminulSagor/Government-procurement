// app/(admin)/analytics/live-activity-feed/_components/LAFPagination.tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

function rangeText(total: number, page: number, pageSize: number) {
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(total, page * pageSize);
  return `Showing ${start} to ${end} of ${total} results`;
}

function buildPages(page: number, pageCount: number) {
  // match screenshot: 1 2 3 ... 8
  if (pageCount <= 6) return Array.from({ length: pageCount }, (_, i) => i + 1);
  if (page <= 3) return [1, 2, 3, "dots", pageCount] as const;
  if (page >= pageCount - 2) return [1, "dots", pageCount - 2, pageCount - 1, pageCount] as const;
  return [1, "dots", page, "dots2", pageCount] as const;
}

export default function LAFPagination({
  total,
  page,
  pageSize,
  pageCount,
  onChange,
}: {
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
  onChange: (p: number) => void;
}) {
  const safeGo = (p: number) => onChange(Math.min(pageCount, Math.max(1, p)));
  const pages = buildPages(page, pageCount);

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <p className="text-xs font-semibold text-[var(--color-medium-gray)]">
        {rangeText(total, page, pageSize)}
      </p>

      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => safeGo(page - 1)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[rgba(100,116,139,0.18)] bg-white"
        >
          <ChevronLeft className="h-4 w-4 text-[var(--color-medium-gray)]" />
        </button>

        <div className="flex items-center gap-1">
          {pages.map((p, idx) => {
            if (p === "dots" || p === "dots2")
              return (
                <span key={`${p}-${idx}`} className="px-2 text-sm text-[var(--color-medium-gray)]">
                  …
                </span>
              );

            const active = p === page;
            return (
              <button
                key={p}
                type="button"
                onClick={() => safeGo(p)}
                className={[
                  "h-8 w-8 rounded-md text-sm font-bold",
                  active
                    ? "bg-[var(--color-primary-color)] text-white"
                    : "border border-[rgba(100,116,139,0.18)] bg-white text-[var(--color-black)]",
                ].join(" ")}
              >
                {p}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => safeGo(page + 1)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[rgba(100,116,139,0.18)] bg-white"
        >
          <ChevronRight className="h-4 w-4 text-[var(--color-medium-gray)]" />
        </button>
      </div>
    </div>
  );
}
