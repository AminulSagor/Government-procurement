"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import type { AnalyticsFilters, ProfitRow, TableMeta } from "../_types/analytics.types";
import ProfitFiltersDialog from "./profit-filters-dialog";
import ProfitTableRow from "./profit-table-row";
import Pagination from "./pagination";
import { useMemo, useState } from "react";

export default function ProfitTable({
  titleBn,
  rows,
  meta,
  filters,
  onApplyFilters,
}: {
  titleBn: string;
  rows: ProfitRow[];
  meta: TableMeta;
  filters: AnalyticsFilters;
  onApplyFilters: (next: AnalyticsFilters) => void;
}) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  const viewRows = useMemo(() => {
    if (!q.trim()) return rows;
    const s = q.toLowerCase();
    return rows.filter((r) => r.requisitionNo.toLowerCase().includes(s));
  }, [q, rows]);

  return (
    <div className="rounded-2xl border border-[rgba(100,116,139,0.16)] bg-white">
      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="text-sm font-bold text-[var(--color-black)]">{titleBn}</h2>

        <div className="flex items-center gap-3">
          <div className="flex h-10 items-center gap-2 rounded-xl border border-[rgba(100,116,139,0.16)] bg-white px-3">
            <Search className="h-4 w-4 text-[var(--color-medium-gray)]" strokeWidth={2} />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="অর্ডার আইডি খুঁজুন"
              className="h-10 w-[190px] bg-transparent text-sm text-[var(--color-black)] outline-none placeholder:text-[var(--color-medium-gray)]"
            />
          </div>

          <button
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-[rgba(100,116,139,0.16)] bg-white"
            aria-label="filter"
          >
            <SlidersHorizontal className="h-4 w-4 text-[var(--color-light-gray)]" />
          </button>

          <ProfitFiltersDialog
            open={open}
            onOpenChange={setOpen}
            value={filters}
            onApply={onApplyFilters}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-left">
          <thead>
            <tr className="border-t border-[rgba(100,116,139,0.10)] text-xs text-[var(--color-light-gray)]">
              <th className="px-5 py-3 font-semibold">তারিখ</th>
              <th className="px-5 py-3 font-semibold">অর্ডার আইডি</th>
              <th className="px-5 py-3 font-semibold">অফিস বাজেট (৳)</th>
              <th className="px-5 py-3 font-semibold">ভেন্ডর রেট কোষ (৳)</th>
              <th className="px-5 py-3 font-semibold">সিস্টেম সেভিংস (+৳)</th>
              <th className="px-5 py-3 font-semibold">ভ্যাট/ট্যাক্স (-৳)</th>
              <th className="px-5 py-3 font-semibold">নিট প্রফিট (+৳)</th>
              <th className="px-5 py-3 font-semibold text-right">অ্যাকশন</th>
            </tr>
          </thead>

          <tbody>
            {viewRows.map((r) => (
              <ProfitTableRow key={r.id} row={r} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-[rgba(100,116,139,0.10)] px-5 py-4">
        <div className="text-xs text-[var(--color-light-gray)]">
          {meta.total.toLocaleString()} টি রেকর্ডের মধ্যে {rows.length} টি দেখানো হচ্ছে
        </div>

        <Pagination page={meta.page} pageCount={meta.totalPages} onChange={() => {}} />
      </div>
    </div>
  );
}
