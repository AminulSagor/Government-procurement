"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

function rangeText(total: number, page: number, pageSize: number) {
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(total, page * pageSize);
  return `সর্বমোট ${total.toLocaleString()} টি অর্ডারের মধ্যে ${start} থেকে ${end} দেখানো হচ্ছে`;
}

function buildPages(page: number, pageCount: number) {
  // screenshot style: < 1 2 3 ... last >
  if (pageCount <= 6) return Array.from({ length: pageCount }, (_, i) => i + 1);
  return [1, 2, 3, "ellipsis" as const, pageCount];
}

export default function OrderPagination({
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

  const boxBtn =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-md border border-border bg-white px-3 text-sm font-semibold " +
    "text-[var(--color-black)] hover:bg-[var(--color-off-white)]";

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-[var(--color-light-gray)]">{rangeText(total, page, pageSize)}</p>

      <div className="flex items-center justify-end gap-2">
        {/* Prev */}
        <button
          type="button"
          onClick={() => safeGo(page - 1)}
          disabled={page === 1}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4 text-[var(--color-light-gray)]" />
        </button>

        {/* Pages */}
        {pages.map((p, idx) =>
          p === "ellipsis" ? (
            <span key={`e-${idx}`} className="px-2 text-sm text-[var(--color-light-gray)]">
              ...
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => safeGo(p)}
              className={
                p === page
                  ? "inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-[var(--color-primary-color)] px-3 text-sm font-semibold text-white"
                  : boxBtn
              }
            >
              {p}
            </button>
          )
        )}

        {/* Next */}
        <button
          type="button"
          onClick={() => safeGo(page + 1)}
          disabled={page === pageCount}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white disabled:opacity-50"
        >
          <ChevronRight className="h-4 w-4 text-[var(--color-light-gray)]" />
        </button>
      </div>
    </div>
  );
}
