"use client";

import Card from "@/components/cards/card";
import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";

export default function DashboardFilters({
  onOpenAdvanced,
}: {
  onOpenAdvanced: () => void;
}) {
  return (
    <Card className="border border-[var(--color-light-gray)] bg-white p-3">
      <div className="grid grid-cols-12 gap-3">

        {/* Search */}
        <div className="col-span-12 lg:col-span-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray" />
            <input
              placeholder="Search Department by Name or ID..."
              className="h-11 w-full rounded-lg border border-[var(--color-light-gray)] pl-11 pr-4 text-sm"
            />
          </div>
        </div>

        {/* Year */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-2">
          <div className="relative">
            <select className="h-11 w-full appearance-none rounded-lg border px-4 pr-10 text-sm">
              <option>2023-24</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
          </div>
        </div>

        {/* Status */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-2">
          <div className="relative">
            <select className="h-11 w-full appearance-none rounded-lg border px-4 pr-10 text-sm">
              <option>Status: All</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
          </div>
        </div>

        {/* Advanced Button */}
        <div className="col-span-12 lg:col-span-2">
          <button
            onClick={onOpenAdvanced}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border text-sm"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Advanced Filter
          </button>
        </div>

      </div>
    </Card>
  );
}
