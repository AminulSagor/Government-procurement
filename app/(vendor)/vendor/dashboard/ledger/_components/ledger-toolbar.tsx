"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export default function LedgerToolbar({
  search,
  onSearchChange,
  showPerPage,
  onShowPerPageChange,
  onFilterClick,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  showPerPage: string;
  onShowPerPageChange: (value: string) => void;
  onFilterClick: () => void; // no-op
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      {/* search */}
      <div className="relative w-full md:w-[280px]">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray" />
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search"
          className={cn(
            "h-10 w-full rounded-lg border border-gray/15 bg-white pl-10 pr-3 text-sm text-gray outline-none",
            "focus:border-primary"
          )}
        />
      </div>

      {/* right controls */}
      <div className="flex items-center justify-between gap-3 md:justify-end">
        <button
          type="button"
          onClick={onFilterClick}
          className={cn(
            "h-10 rounded-lg border border-gray/15 bg-white px-4 text-sm font-semibold text-gray",
            "hover:border-primary"
          )}
        >
          ফিল্টার
        </button>

        <div className="flex items-center gap-2">
          <p className="text-xs font-semibold text-gray">দেখানো হচ্ছে:</p>
          <select
            value={showPerPage}
            onChange={(e) => onShowPerPageChange(e.target.value)}
            className={cn(
              "h-10 rounded-lg border border-gray/15 bg-white px-3 text-sm text-gray outline-none",
              "focus:border-primary"
            )}
          >
            <option value="10">১০</option>
            <option value="20">২০</option>
            <option value="50">৫০</option>
          </select>
        </div>
      </div>
    </div>
  );
}
