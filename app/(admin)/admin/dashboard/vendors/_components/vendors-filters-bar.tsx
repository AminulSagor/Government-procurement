"use client";

import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { VendorsFiltersState, VendorCategory } from "../_types/vendors.types";

export default function VendorsFiltersBar({
  filters,
  categories,
  onChange,
  onAddVendor,
}: {
  filters: VendorsFiltersState;
  categories: VendorCategory[];
  onChange: (next: VendorsFiltersState) => void;
  onAddVendor: () => void;
}) {
  return (
    <div className="rounded-2xl border border-[rgba(100,116,139,0.18)] bg-white p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* search */}
        <div className="relative w-full lg:max-w-[720px]">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-medium-gray)]"
            strokeWidth={2}
          />
          <input
            value={filters.q}
            onChange={(e) => onChange({ ...filters, q: e.target.value })}
            placeholder="ভেন্ডর নাম, মালিকের নাম বা লোকেশন দিয়ে খুঁজুন..."
            className="h-11 w-full rounded-xl border border-[rgba(100,116,139,0.14)] bg-white pl-10 pr-3 text-sm outline-none focus:border-[rgba(31,110,128,0.35)]"
          />
        </div>

        {/* right controls */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <div className="flex items-center gap-2">
            <div className="text-xs text-[var(--color-medium-gray)]">স্ট্যাটাস:</div>
            <select
              value={filters.status}
              onChange={(e) => onChange({ ...filters, status: e.target.value as any })}
              className="h-10 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white px-3 text-sm outline-none"
            >
              <option value="all">সকল স্ট্যাটাস</option>
              <option value="active">সক্রিয়</option>
              <option value="pending">পেন্ডিং</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-xs text-[var(--color-medium-gray)]">ক্যাটাগরি:</div>
            <select
              value={filters.category}
              onChange={(e) => onChange({ ...filters, category: e.target.value as any })}
              className="h-10 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white px-3 text-sm outline-none"
            >
              <option value="all">সকল ক্যাটাগরি</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="button"
            onClick={onAddVendor}
            className="h-11 rounded-xl bg-[var(--color-primary-color)] px-4 text-white hover:opacity-95"
          >
            <Plus className="mr-2 h-4 w-4" />
            নতুন ভেন্ডর যুক্ত করুন
          </Button>
        </div>
      </div>
    </div>
  );
}
