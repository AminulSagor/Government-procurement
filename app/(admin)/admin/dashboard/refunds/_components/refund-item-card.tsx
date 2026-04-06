"use client";

import { Eye } from "lucide-react";
import type { RequisitionItem } from "../_types/refund-queue-details.type";

function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

export default function RefundItemCard({
  item,
  selected,
  onSelect,
}: {
  item: RequisitionItem;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left rounded-lg border p-4 transition-all
        ${selected ? "border-blue shadow-sm" : "border-primary-color/20 hover:brightness-105"}
        bg-white`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-lg font-semibold text-black">{item.titleBn}</div>
          <div className="mt-1 text-sm text-medium-gray">
            অর্ডার আইডিঃ <span className="font-semibold">{item.orderCode}</span>
          </div>
          <div className="text-sm text-light-gray">ID: {item.internalIdBn}</div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-2 rounded-md px-3 py-1 text-xs font-semibold
              ${item.isPaidDone ? "bg-green/15 text-green" : "bg-orange/15 text-orange"}`}
          >
            ✓ পরিশোধ সম্পন্ন
          </span>

          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-off-white">
            <Eye className="h-4 w-4 text-primary-color" />
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between gap-3">
        <div>
          <div className="text-xs text-light-gray">মোট চুক্তি মূল্য</div>
          <div className="text-lg font-bold text-black">{formatBDT(item.totalPrice)}</div>
        </div>

        <div className="text-right">
          <div className="text-xs text-primary-color">{item.paidPercentTextBn}</div>
          {item.refundPercentTextBn ? (
            <div className="text-xs text-blue">{item.refundPercentTextBn}</div>
          ) : null}
        </div>
      </div>

      <div className="mt-2 h-2 w-full rounded-full bg-off-white overflow-hidden">
        <div className="h-full w-[85%] bg-green" />
      </div>
    </button>
  );
}