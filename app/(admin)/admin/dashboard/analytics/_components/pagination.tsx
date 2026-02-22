"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  page,
  pageCount,
  onChange,
}: {
  page: number;
  pageCount: number;
  onChange: (p: number) => void;
}) {
  const safeGo = (p: number) => onChange(Math.min(pageCount, Math.max(1, p)));

  const pages = (() => {
    if (pageCount <= 5) return Array.from({ length: pageCount }, (_, i) => i + 1);
    if (page <= 3) return [1, 2, 3, 0, pageCount];
    if (page >= pageCount - 2) return [1, 0, pageCount - 2, pageCount - 1, pageCount];
    return [1, 0, page - 1, page, page + 1, 0, pageCount];
  })();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => safeGo(page - 1)}
        className="grid h-9 w-9 place-items-center rounded-lg border border-[rgba(100,116,139,0.16)] bg-white"
        aria-label="prev"
      >
        <ChevronLeft className="h-4 w-4 text-[var(--color-light-gray)]" />
      </button>

      {pages.map((p, idx) =>
        p === 0 ? (
          <span key={"d" + idx} className="px-2 text-sm text-[var(--color-light-gray)]">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => safeGo(p)}
            className={[
              "h-9 min-w-9 rounded-lg border px-3 text-sm font-semibold",
              p === page
                ? "border-[rgba(31,110,128,0.45)] bg-[rgba(31,110,128,0.10)] text-[var(--color-primary-color)]"
                : "border-[rgba(100,116,139,0.16)] bg-white text-[var(--color-light-gray)]",
            ].join(" ")}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => safeGo(page + 1)}
        className="grid h-9 w-9 place-items-center rounded-lg border border-[rgba(100,116,139,0.16)] bg-white"
        aria-label="next"
      >
        <ChevronRight className="h-4 w-4 text-[var(--color-light-gray)]" />
      </button>
    </div>
  );
}
