// app/(admin)/admin/dashboard/vendors/[vendorId]/_components/inventory/ui/filter-select.tsx
"use client";

import { ChevronDown } from "lucide-react";

export default function FilterSelect({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 w-[160px] appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-xs font-extrabold text-slate-700 outline-none focus:ring-4 focus:ring-sky-100"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </div>
  );
}