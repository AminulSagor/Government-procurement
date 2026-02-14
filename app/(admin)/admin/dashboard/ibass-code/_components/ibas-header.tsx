"use client";

import { Plus } from "lucide-react";

export default function IbasHeader() {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-black">
          অর্থনৈতিক কোড ব্যবস্থাপনা (iBAS Codes)
        </h1>
        <p className="mt-1 text-sm text-[var(--color-medium-gray)]">
          Manage economic codes, types, and mapping for procurement and salary heads.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex h-10 items-center gap-2 rounded-lg bg-[var(--color-primary-color)] px-4 text-sm font-semibold text-white shadow-sm hover:opacity-95"
      >
        <Plus className="h-4 w-4" />
        + নতুন কোড যুক্ত করুন
      </button>
    </div>
  );
}
