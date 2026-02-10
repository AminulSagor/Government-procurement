"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Search, ChevronDown, LayoutGrid, List } from "lucide-react";

const baseInput =
  "h-10 w-full rounded-xl border border-gray/15 bg-white text-sm text-gray outline-none focus:border-primary/30";

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
      {/* LEFT: controls */}
      <div className="flex flex-col gap-3 lg:flex-1 lg:flex-row lg:items-center">
        {/* search (always flexible) */}
        <div className="relative w-full lg:flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-light-gray" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="নাম বা আইবাস কোড দিয়ে খুঁজুন (Search)..."
            className={cn(baseInput, "pl-11 pr-4")}
          />
        </div>

        {/* selects (stack on mobile, fixed on desktop) */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:gap-3">
          {/* status */}
          <div className="relative">
            <select
              value={statusValue}
              onChange={(e) => onStatusChange(e.target.value)}
              className={cn(baseInput, "appearance-none px-4 pr-10")}
            >
              <option value="All">স্ট্যাটাস: সব (Status: All)</option>
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
              <option value="Unavailable">Unavailable</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-light-gray" />
          </div>

          {/* sort */}
          <div className="relative">
            <select
              value={sortValue}
              onChange={(e) => onSortChange(e.target.value)}
              className={cn(baseInput, "appearance-none px-4 pr-10")}
            >
              <option value="Newest">সোর্ট: নতুন প্রথমে (Sort: Newest)</option>
              <option value="Price: Low">Price: Low</option>
              <option value="Price: High">Price: High</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-light-gray" />
          </div>
        </div>
      </div>

      {/* RIGHT: view toggle (moves under on small) */}
      <div className="flex justify-end lg:ml-3">
        <div className="flex overflow-hidden rounded-xl border border-gray/15 bg-white">
          <button
            type="button"
            onClick={() => onViewChange("grid")}
            className={cn(
              "grid h-10 w-11 place-items-center transition",
              view === "grid"
                ? "bg-secondary/50 text-primary"
                : "text-light-gray hover:bg-secondary/30"
            )}
            aria-label="Grid view"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>

          <div className="my-2 w-px bg-gray/15" />

          <button
            type="button"
            onClick={() => onViewChange("list")}
            className={cn(
              "grid h-10 w-11 place-items-center transition",
              view === "list"
                ? "bg-secondary/50 text-primary"
                : "text-light-gray hover:bg-secondary/30"
            )}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
