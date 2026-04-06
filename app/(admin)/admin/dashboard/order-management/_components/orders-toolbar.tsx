"use client";

import { Search } from "lucide-react";

export default function OrdersToolbar() {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between bg-white p-4 py-8 shadow-sm rounded-md">
      <div className="flex items-center gap-2 w-full md:w-130 rounded-md border border-primary-color/20 bg-white px-3 py-2">
        <Search className="h-4 w-4 text-light-gray" />
        <input
          className="w-full outline-none text-sm text-black placeholder:text-light-gray"
          placeholder="অর্ডার আইডি, দপ্তর বা ভেন্ডর দিয়ে খুঁজুন..."
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {["অর্থনৈতিক কোড (All)", "দপ্তর (All)", "স্থিতি (All)"].map((t) => (
          <button
            key={t}
            className="px-3 py-2 text-sm rounded-md bg-white border border-primary-color/20 text-black flex items-center gap-2"
          >
            <span>{t}</span>
            <span className="text-light-gray">▾</span>
          </button>
        ))}
      </div>
    </div>
  );
}
