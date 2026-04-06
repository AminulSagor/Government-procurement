"use client";

import { useMemo, useState } from "react";
import { Plus, Search, Dot } from "lucide-react";
import type { VendorRow } from "../_types/negotiation-assign.types";

export default function VendorAssignTable({
  rows,
  onChangeBudget,
}: {
  rows: VendorRow[];
  onChangeBudget: (id: string, next: string) => void;
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim();
    if (!s) return rows;
    return rows.filter((r) =>
      (r.itemNameBn + " " + r.itemCode).toLowerCase().includes(s.toLowerCase())
    );
  }, [q, rows]);

  return (
    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-[var(--color-off-white)] border border-black/10 flex items-center justify-center">
            <span className="h-5 w-5 rounded-md bg-[var(--color-primary-color)]/10 flex items-center justify-center">
              <span className="h-2.5 w-2.5 rounded-sm bg-[var(--color-primary-color)]" />
            </span>
          </div>
          <div className="text-[16px] font-extrabold text-[var(--color-black)]">
            প্রাইস এসাইনমেন্ট টেবিল
          </div>
        </div>

        {/* legend (top right like screenshot) */}
        <div className="flex items-center gap-4 text-[12px] font-semibold text-[var(--color-light-gray)]">
          <span className="inline-flex items-center gap-1.5">
            <Dot className="h-6 w-6 text-[var(--color-medium-gray)]" />
            রেকার্ডের ডেটা
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Dot className="h-6 w-6 text-[var(--color-primary-color)]" />
            অফিস ক্যালকুলেটেড
          </span>
        </div>
      </div>

      <div className="px-5 pb-5">
        {/* Search + button row */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="h-4 w-4 text-[var(--color-light-gray)] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ভেন্ডর ইনভয়েস থেকে আইটেম খুঁজুন ও যোগ করুন..."
              className="h-11 w-full rounded-2xl border border-black/10 bg-white pl-11 pr-4 text-[13px] outline-none focus:ring-2 focus:ring-[var(--color-primary-color)]/15"
            />
          </div>

          <button className="h-11 rounded-2xl bg-[var(--color-primary-color)] px-6 text-[13px] font-extrabold text-white inline-flex items-center gap-2">
            <span className="h-6 w-6 rounded-xl bg-white/15 flex items-center justify-center">
              <Plus className="h-4 w-4" />
            </span>
            যোগ করুন
          </button>
        </div>

        {/* Table */}
        <div className="mt-4 rounded-3xl border border-black/10 overflow-hidden">
          {/* header row */}
          <div className="grid grid-cols-12">
            <HeaderCell className="col-span-3">আইটেম ও কোড</HeaderCell>
            <HeaderCell className="col-span-3 text-center">অফিসের বাজেট</HeaderCell>
            <HeaderCell className="col-span-2 text-center">ভেন্ডর মূল্য</HeaderCell>

            {/* highlighted admin budget column */}
            <div className="col-span-2 bg-[var(--color-off-white)]/70 border-l border-black/10">
              <div className="px-4 py-3 text-center text-[12px] font-extrabold text-[var(--color-primary-color)]">
                এডমিন বাজেট
              </div>
            </div>

            <HeaderCell className="col-span-2 text-right">প্রক্রিয়া/সাশ্রয়</HeaderCell>
          </div>

          <div className="divide-y divide-black/10 bg-white">
            {filtered.map((r) => (
              <div key={r.id} className="grid grid-cols-12 items-stretch">
                {/* item */}
                <div className="col-span-3 px-4 py-5">
                  <div className="text-[13px] font-extrabold text-[var(--color-black)]">
                    {r.itemNameBn}
                  </div>
                  <div className="mt-1 text-[12px] text-[var(--color-light-gray)]">
                    Code: {r.itemCode} | {r.unitBn}
                  </div>
                </div>

                {/* office budget (if you have it later, show; now fallback) */}
                <div className="col-span-3 px-4 py-5 flex items-center justify-center">
                  <span className="text-[13px] font-semibold text-[var(--color-black)]">
                    {r.officeBudgetBn ?? "৳ ০০"}
                  </span>
                </div>

                {/* vendor price */}
                <div className="col-span-2 px-4 py-5 flex items-center justify-center">
                  <span className="text-[13px] font-semibold text-[var(--color-black)]">
                    {r.vendorPriceBn}
                  </span>
                </div>

                {/* admin budget highlighted */}
                <div className="col-span-2 bg-[var(--color-off-white)]/70 border-l border-black/10 px-4 py-5 flex items-center justify-center">
                  <div className="relative w-[140px]">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px] font-semibold text-[var(--color-light-gray)]">
                      ৳
                    </span>
                    <input
                      value={r.adminBudgetBn}
                      onChange={(e) => onChangeBudget(r.id, e.target.value)}
                      className="h-11 w-full rounded-2xl border border-black/10 bg-white pl-7 pr-3 text-center text-[15px] font-extrabold text-[var(--color-primary-color)] outline-none focus:ring-2 focus:ring-[var(--color-primary-color)]/15"
                    />
                  </div>
                </div>

                {/* status/savings pill */}
                <div className="col-span-2 px-4 py-5 flex items-center justify-end">
                  <span
                    className={[
                      "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-extrabold border",
                      r.status === "ok"
                        ? "bg-[var(--color-green)]/10 text-[var(--color-green)] border-[var(--color-green)]/25"
                        : "bg-[var(--color-orange)]/10 text-[var(--color-orange)] border-[var(--color-orange)]/25",
                    ].join(" ")}
                  >
                    <span className="text-[14px]">↗</span>
                    {r.statusTextBn}
                  </span>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="px-4 py-10 text-center text-[13px] text-[var(--color-light-gray)]">
                কোনো আইটেম পাওয়া যায়নি
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderCell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "px-4 py-3 bg-white text-[12px] font-extrabold text-[var(--color-light-gray)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
