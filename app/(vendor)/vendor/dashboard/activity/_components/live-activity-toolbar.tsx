"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function LiveActivityToolbar({
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
    <div className="flex flex-wrap items-center gap-3">
      {/* search */}
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray">
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
          placeholder="কাজের খুঁজুন..."
          className={cn(
            "h-10 w-[220px] rounded-lg border border-gray/15 bg-white pl-10 pr-3 text-sm text-gray outline-none",
            "focus:border-primary"
          )}
        />
      </div>

      {/* type */}
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray">
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
            "h-10 w-[170px] rounded-lg border border-gray/15 bg-white pl-10 pr-8 text-sm text-gray outline-none",
            "focus:border-primary"
          )}
        >
          <option value="All">Activity Type: All</option>
          <option value="Payment">Payment</option>
          <option value="Bid">Bid</option>
          <option value="System">System</option>
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray">
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
