"use client";

import Card from "@/components/cards/card";
import { Button } from "@/components/ui/button";

import { Calendar, Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function FiltersBar() {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-4">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[240px_240px_1fr_auto_auto] lg:items-center">
        {/* from */}
        <div className="relative">
          <label className="sr-only">তারিখ হতে</label>
          <input
            type="text"
            placeholder="তারিখ হতে"
            className="h-10 w-full rounded-xl border border-gray/15 bg-secondary px-4 pr-10 text-sm font-semibold text-gray placeholder:text-gray/40 outline-none focus:border-gray/25"
          />
          <Calendar
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray/40"
          />
        </div>

        {/* to */}
        <div className="relative">
          <label className="sr-only">তারিখ পর্যন্ত</label>
          <input
            type="text"
            placeholder="তারিখ পর্যন্ত"
            className="h-10 w-full rounded-xl border border-gray/15 bg-secondary px-4 pr-10 text-sm font-semibold text-gray placeholder:text-gray/40 outline-none focus:border-gray/25"
          />
          <Calendar
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray/40"
          />
        </div>

        {/* status */}
        <div className="relative">
          <label className="sr-only">স্ট্যাটাস</label>
          <select
            className="h-10 w-full appearance-none rounded-xl border border-gray/15 bg-secondary px-4 pr-10 text-sm font-semibold text-gray outline-none focus:border-gray/25"
            defaultValue=""
          >
            <option value="" disabled>
              স্ট্যাটাস
            </option>
            <option>Under Review</option>
            <option>Accepted</option>
            <option>Rejected</option>
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray/40"
          />
        </div>

        {/* search */}
        <Button className="h-10 px-5 gap-2 rounded-xl bg-primary-color">
          <Search size={16} />
          খুঁজুন
        </Button>

        {/* filter icon */}
        <button
          className="h-10 w-10 rounded-xl border border-gray/15 bg-white grid place-items-center text-gray/60 hover:text-gray"
          aria-label="More filters"
        >
          <SlidersHorizontal size={16} />
        </button>
      </div>
    </Card>
  );
}
