"use client";

import React from "react";
import { Search } from "lucide-react";

export default function OrderToolbar({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (v: string) => void;
}) {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 rounded-md bg-white px-4 py-3 shadow-sm">
        <Search className="h-4 w-4 text-primary-color" />
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="অর্ডার আইডি, ভেন্ডর অথবা আইটেম দিয়ে খুঁজুন..."
          className="w-full rounded-md bg-transparent text-sm text-black placeholder:text-light-gray outline-none"
        />
      </div>
    </div>
  );
}
