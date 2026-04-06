"use client";

import { Button } from "@/components/ui/button";
import { Filter, ArrowUpDown, Search } from "lucide-react";

export default function OrdersFilterBar() {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* search */}
      <div className="relative w-full max-w-sm">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-light-gray"
        />
        <input
          placeholder="অর্ডার খুঁজুন..."
          className="
            h-10 w-full rounded-xl
            border border-gray/15 bg-white
            pl-10 pr-4
            text-sm font-semibold text-gray
            placeholder:text-light-gray
            outline-none
            focus:border-primary/40
            focus:ring-2 focus:ring-primary/10
          "
        />
      </div>

      {/* actions */}
      <div className="flex gap-2">
        <Button
          variant="secondary"
          className="h-10 gap-2 rounded-xl font-semibold"
        >
          <Filter size={16} />
          Filter
        </Button>

        <Button
          variant="secondary"
          className="h-10 gap-2 rounded-xl font-semibold"
        >
          <ArrowUpDown size={16} />
          Sort
        </Button>
      </div>
    </div>
  );
}
