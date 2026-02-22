// app/(admin)/admin/dashboard/vendors/[vendorId]/_components/inventory/inventory-pagination.tsx
"use client";

import PagerButton from "./ui/pager-button";

export default function InventoryPagination({ total }: { total: number }) {
  const from = total === 0 ? 0 : 1;
  const to = Math.min(total, 10);

  return (
    <div className="flex items-center justify-between gap-4 px-6 py-4">
      <div className="text-xs text-slate-500">
        মোট {toBnDigits(total)}টি পণ্যের মধ্যে {toBnDigits(from)}-{toBnDigits(to)}টি দেখানো হচ্ছে
      </div>

      <div className="flex items-center gap-2">
        <PagerButton label="‹" />
        <PagerButton label="1" active />
        <PagerButton label="2" />
        <PagerButton label="3" />
        <PagerButton label="›" />
      </div>
    </div>
  );
}

function toBnDigits(n: number) {
  const map: Record<string, string> = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };
  return String(n).replace(/[0-9]/g, (d) => map[d]);
}