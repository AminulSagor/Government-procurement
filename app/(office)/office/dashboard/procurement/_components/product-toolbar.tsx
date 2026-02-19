"use client";

import ProductFilterDialog, {
  ProductFilterValues,
} from "@/app/(office)/office/dashboard/procurement/_components/product-filter-dialog";
import { ListFilterPlus, Search } from "lucide-react";
import { useState } from "react";

type SortKey = "relevance" | "priceAsc" | "priceDesc";

export default function ProductToolbar({
  q,
  onChangeQ,
  sort,
  onChangeSort,
  onApplyFilters,
}: {
  q: string;
  onChangeQ: (v: string) => void;
  sort: SortKey;
  onChangeSort: (v: SortKey) => void;
  onApplyFilters: (v: ProductFilterValues) => void;
}) {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<ProductFilterValues>({
    minPrice: "",
    maxPrice: "",
    itemCode: "",
  });

  const reset = () =>
    setFilters({
      minPrice: "",
      maxPrice: "",
      itemCode: "",
    });

  return (
    <>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 rounded-lg border border-primary-color/20 bg-white px-4 py-3">
            <span className="text-light-gray"><Search size={18}/></span>
            <input
              value={q}
              onChange={(e) => onChangeQ(e.target.value)}
              placeholder="পণ্যের নাম বা কোড খুঁজুন..."
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-light-gray">সাজান:</div>
          <select
            value={sort}
            onChange={(e) => onChangeSort(e.target.value as SortKey)}
            className="h-11 rounded-lg border border-primary-color/20 bg-white px-4 text-sm outline-none"
          >
            <option value="relevance">জনপ্রিয়তা</option>
            <option value="priceAsc">দাম (কম → বেশি)</option>
            <option value="priceDesc">দাম (বেশি → কম)</option>
          </select>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 h-11 rounded-lg border border-primary-color/20 bg-white px-4 text-sm cursor-pointer"
          >
            <ListFilterPlus className="text-medium-gray" size={18} />
            ফিল্টার
          </button>
        </div>
      </div>

      <ProductFilterDialog
        open={open}
        onOpenChange={setOpen}
        value={filters}
        onChange={setFilters}
        onReset={reset}
        onApply={() => onApplyFilters(filters)}
      />
    </>
  );
}
