"use client";

import React from "react";
import { cn } from "@/lib/utils";

const inputCls =
  "h-10 rounded-lg border border-gray/15 bg-white px-3 text-sm text-gray outline-none focus:border-primary";

export default function InventoryToolbar({
  search,
  onSearchChange,
  statusValue,
  onStatusChange,
  sortValue,
  onSortChange,
  view,
  onViewChange,
}: {
  search: string;
  onSearchChange: (v: string) => void;
  statusValue: string;
  onStatusChange: (v: string) => void;
  sortValue: string;
  onSortChange: (v: string) => void;
  view: "grid" | "list";
  onViewChange: (v: "grid" | "list") => void;
}) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray">
            🔎
          </span>
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="পণ্যের নাম/কোড দিয়ে খুঁজুন (Search)..."
            className={cn(inputCls, "w-[320px] pl-10")}
          />
        </div>

        <select value={statusValue} onChange={(e) => onStatusChange(e.target.value)} className={cn(inputCls, "w-[180px]")}>
          <option value="All">স্ট্যাটাস: All</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
          <option value="Unavailable">Unavailable</option>
        </select>

        <select value={sortValue} onChange={(e) => onSortChange(e.target.value)} className={cn(inputCls, "w-[200px]")}>
          <option value="Newest">সোর্ট করুন (Sort: Newest)</option>
          <option value="Price: Low">Price: Low</option>
          <option value="Price: High">Price: High</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onViewChange("grid")}
          className={cn(
            "grid h-10 w-10 place-items-center rounded-lg border",
            view === "grid"
              ? "border-primary bg-primary text-white"
              : "border-gray/15 bg-white text-gray hover:border-primary"
          )}
          aria-label="Grid view"
        >
          ⧉
        </button>

        <button
          type="button"
          onClick={() => onViewChange("list")}
          className={cn(
            "grid h-10 w-10 place-items-center rounded-lg border",
            view === "list"
              ? "border-primary bg-primary text-white"
              : "border-gray/15 bg-white text-gray hover:border-primary"
          )}
          aria-label="List view"
        >
          ≡
        </button>
      </div>
    </div>
  );
}
