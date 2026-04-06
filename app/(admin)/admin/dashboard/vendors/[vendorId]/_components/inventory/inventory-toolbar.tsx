// app/(admin)/admin/dashboard/vendors/[vendorId]/_components/inventory/inventory-toolbar.tsx
"use client";

import { Download, Search } from "lucide-react";

type Props = {
  search: string;
  onSearch: (v: string) => void;
  onExport: () => void;
};

export default function InventoryToolbar({ search, onSearch, onExport }: Props) {
  return (
    <div className="flex flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-[420px]">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="ইনভেন্টরিতে পণ্য খুঁজুন..."
          className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-medium text-slate-700 outline-none focus:ring-4 focus:ring-sky-100"
        />
      </div>

      <button
        type="button"
        onClick={onExport}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-extrabold text-slate-700 hover:bg-slate-50"
      >
        <Download className="h-4 w-4" />
        এক্সেল এক্সপোর্ট
      </button>
    </div>
  );
}