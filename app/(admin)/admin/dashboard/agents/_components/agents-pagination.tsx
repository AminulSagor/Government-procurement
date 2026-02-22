"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AgentsMeta } from "../_types/agents.types";

function rangeText(total: number, page: number, pageSize: number) {
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(total, page * pageSize);
  return `Showing ${start} to ${end} of ${total} agents`;
}

function buildPages(page: number, pageCount: number) {
  // screenshot feel: 1 2 3 ... last, and current highlighted
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, i) => i + 1);

  const set = new Set<number>([1, 2, 3, pageCount, page, page - 1, page + 1]);
  const cleaned = Array.from(set)
    .filter((p) => p >= 1 && p <= pageCount)
    .sort((a, b) => a - b);

  return cleaned;
}

export default function AgentsPagination({
  meta,
  onChange,
  fallbackMeta,
}: {
  meta: AgentsMeta;
  onChange: (p: number) => void;
  fallbackMeta: AgentsMeta;
}) {
  const total = meta.total ?? fallbackMeta.total;
  const page = meta.page ?? fallbackMeta.page;
  const limit = meta.limit ?? fallbackMeta.limit;
  const pageCount = meta.totalPages ?? fallbackMeta.totalPages;

  const pages = buildPages(page, pageCount);

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[rgba(100,116,139,0.14)] bg-white px-5 py-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="text-xs text-[var(--color-medium-gray)]">
        {rangeText(total, page, limit)}
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button
          variant="outline"
          className="h-9 w-9 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white p-0"
          onClick={() => onChange(page - 1)}
          disabled={page <= 1}
        >
          <ChevronLeft className="h-4 w-4 text-[var(--color-medium-gray)]" />
        </Button>

        <div className="flex items-center gap-2">
          {pages.map((p, idx) => {
            const prev = pages[idx - 1];
            const showDots = prev && p - prev > 1;

            return (
              <div key={p} className="flex items-center gap-2">
                {showDots && (
                  <span className="px-1 text-xs text-[var(--color-medium-gray)]">
                    ...
                  </span>
                )}

                <button
                  onClick={() => onChange(p)}
                  className={[
                    "h-9 w-9 rounded-xl text-sm font-bold",
                    p === page
                      ? "bg-[var(--color-primary-color)] text-white"
                      : "bg-transparent text-[var(--color-black)] hover:bg-[rgba(120,185,181,0.18)]",
                  ].join(" ")}
                >
                  {p}
                </button>
              </div>
            );
          })}
        </div>

        <Button
          variant="outline"
          className="h-9 w-9 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white p-0"
          onClick={() => onChange(page + 1)}
          disabled={page >= pageCount}
        >
          <ChevronRight className="h-4 w-4 text-[var(--color-medium-gray)]" />
        </Button>
      </div>
    </div>
  );
}
