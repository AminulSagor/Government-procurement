// app/(admin)/admin/dashboard/vendors/[vendorId]/_components/inventory/inventory-summary.tsx
"use client";

import { Boxes, ClipboardList, Banknote } from "lucide-react";
import type { VendorInventorySummary } from "../../_types/vendor-inventory";
import SummaryCard from "./ui/summary-card";

export default function InventorySummary({ summary }: { summary: VendorInventorySummary }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <SummaryCard
        icon={
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-50 text-primary-color">
            <Boxes className="h-5 w-5" />
          </span>
        }
        label="মোট তালিকাভুক্ত পণ্য"
        value={`${toBnDigits(summary.totalListed)}টি`}
      />

      <SummaryCard
        icon={
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-red-50 text-red-600">
            <ClipboardList className="h-5 w-5" />
          </span>
        }
        label="স্টক শেষ"
        value={`${toBnDigits(summary.outOfStock)}টি`}
      />

      <SummaryCard
        icon={
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-50 text-orange-600">
            <Banknote className="h-5 w-5" />
          </span>
        }
        label="ইনভেন্টরি মূল্য"
        value={`৳ ${summary.totalValueLakhs.toFixed(1)} লক্ষ`}
      />
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