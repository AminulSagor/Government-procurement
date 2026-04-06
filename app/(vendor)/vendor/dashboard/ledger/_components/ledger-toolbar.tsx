"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Search, ChevronDown } from "lucide-react";

export default function LedgerToolbar({
  search,
  onSearchChange,
  showPerPage,
  onShowPerPageChange,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  showPerPage: string;
  onShowPerPageChange: (value: string) => void;
}) {
  return (
    <div className="rounded-lg border border-gray/10 bg-white p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* search (left) */}
        <div className="relative w-full md:w-[240px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-light-gray" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder=""
            className={cn(
              "h-10 w-full rounded-lg border border-gray/15 bg-white pl-10 pr-3 text-sm text-gray outline-none",
              "focus:border-primary/30"
            )}
          />
        </div>

        {/* right: label + small select */}
        <div className="flex items-center justify-end gap-3">
          <p className="text-xs font-semibold text-light-gray">দেখানো হচ্ছে:</p>

          <div className="relative">
            <select
              value={showPerPage}
              onChange={(e) => onShowPerPageChange(e.target.value)}
              className={cn(
                "h-10 w-[92px] appearance-none rounded-lg border border-gray/15 bg-white pl-4 pr-9 text-sm font-medium text-gray outline-none",
                "focus:border-primary/30"
              )}
            >
              <option value="10">১০</option>
              <option value="20">২০</option>
              <option value="50">৫০</option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-light-gray" />
          </div>
        </div>
      </div>
    </div>
  );
}
