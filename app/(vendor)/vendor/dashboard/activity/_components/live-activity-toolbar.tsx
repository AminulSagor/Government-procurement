"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function LiveActivityToolbar({
  searchValue,
  onSearchChange,
  typeValue,
  onTypeChange,
}: {
  searchValue: string;
  onSearchChange: (v: string) => void;
  typeValue: string;
  onTypeChange: (v: string) => void;
}) {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
      {/* search (wide like screenshot) */}
      <div className="relative w-full sm:w-[420px]">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-light-gray">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </span>

        <input
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="কার্যক্রম খুঁজুন..."
          className={cn(
            "h-10 w-full rounded-xl border border-gray/15 bg-white pl-10 pr-3 text-sm text-gray outline-none",
            "placeholder:text-light-gray focus:border-primary-color/30"
          )}
        />
      </div>

      {/* type dropdown (same height + rounded like screenshot) */}
      <div className="relative w-full sm:w-[210px]">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-light-gray">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 5h18" />
            <path d="M6 12h12" />
            <path d="M10 19h4" />
          </svg>
        </span>

        <select
          value={typeValue}
          onChange={(e) => onTypeChange(e.target.value)}
          className={cn(
            "h-10 w-full appearance-none rounded-xl border border-gray/15 bg-white pl-10 pr-9 text-sm text-gray outline-none",
            "focus:border-primary-color/30"
          )}
        >
          <option value="All">Activity Type: All</option>
          <option value="Payment">Payment</option>
          <option value="Bid">Bid</option>
          <option value="System">System</option>
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-light-gray">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </div>
    </div>
  );
}