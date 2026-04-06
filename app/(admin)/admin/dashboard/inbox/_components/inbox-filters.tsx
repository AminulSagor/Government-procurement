"use client";

import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { InboxTabKey } from "../_types/inbox-type";

export default function InboxFilters({ tab }: { tab: InboxTabKey }) {
  return (
    <div className="px-5 py-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
      <div className="flex-1">
        <div className="h-10 rounded-lg border border-border bg-white px-3 flex items-center gap-2">
          <Search className="h-4 w-4 text-gray/70" />
          <input
            className="w-full bg-transparent outline-none text-sm text-gray placeholder:text-gray/50"
            placeholder="প্রতিবেদন বা দপ্তরের নাম..."
          />
        </div>
      </div>

      <div className="flex items-center gap-2 justify-end">
        <button className="h-10 px-4 rounded-lg border border-border bg-white text-sm text-gray/70 flex items-center gap-2">
          অর্থবছর <ChevronDown className="h-4 w-4" />
        </button>

        <button className="h-10 px-4 rounded-lg border border-border bg-white text-sm text-gray/70 flex items-center gap-2">
          {tab === "budget" ? "প্রতিবেদনের ধরন" : "পেমেন্ট ধরন"} <ChevronDown className="h-4 w-4" />
        </button>

        <button className="h-10 px-4 rounded-lg border border-border bg-white text-sm text-gray/70 flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
      </div>
    </div>
  );
}
