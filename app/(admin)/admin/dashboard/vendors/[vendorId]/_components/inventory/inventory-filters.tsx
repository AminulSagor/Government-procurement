// app/(admin)/admin/dashboard/vendors/[vendorId]/_components/inventory/inventory-filters.tsx
"use client";

import { Filter } from "lucide-react";
import FilterSelect from "./ui/filter-select";

type Props = {
  categories: string[];
  stockStatuses: string[];

  category: string;
  stock: string;

  onCategory: (v: string) => void;
  onStock: (v: string) => void;

  onClear: () => void;
};

export default function InventoryFilters({
  categories,
  stockStatuses,
  category,
  stock,
  onCategory,
  onStock,
  onClear,
}: Props) {
  return (
    <div className="flex flex-col gap-3 px-6 py-4 md:flex-row md:items-center">
      <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
        <Filter className="h-4 w-4" />
        ফিল্টার:
      </div>

      <FilterSelect value={category} onChange={onCategory} options={categories} />
      <FilterSelect value={stock} onChange={onStock} options={stockStatuses} />

      <div className="flex-1" />

      <button
        type="button"
        onClick={onClear}
        className="inline-flex items-center gap-2 text-xs font-extrabold text-red-500 hover:underline"
      >
        ফিল্টার পরিষ্কার করুন
      </button>
    </div>
  );
}