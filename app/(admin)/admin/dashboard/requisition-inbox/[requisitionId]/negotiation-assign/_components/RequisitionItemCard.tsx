"use client";

import { ChevronDown, Eye, LayoutGrid } from "lucide-react";
import type { RequisitionItem } from "../_types/negotiation-assign.types";

export default function RequisitionItemCard({
  item,
  expanded,
  onToggle,
  onViewDetails,
}: {
  item: RequisitionItem;
  expanded: boolean;
  onToggle: () => void;
  onViewDetails: (item: RequisitionItem) => void;
}) {
  return (
    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden">
      {/* TOP CONTENT */}
      <div className="px-5 pt-5">
        {/* Title + qty */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="text-[16px] font-extrabold text-[var(--color-black)] truncate">
                {item.nameBn}
              </div>

              {/* ✅ Eye Button (opens dialog) */}
              <button
                type="button"
                onClick={() => onViewDetails(item)}
                className="
    h-10 w-10
    rounded-xl
    bg-[var(--color-off-white)]
    border border-black/10
    flex items-center justify-center
    transition
    hover:bg-white
    hover:border-[var(--color-primary-color)]/30
    active:scale-[0.96]
  "
              >
                <Eye className="h-5 w-5 text-[var(--color-light-gray)]" />
              </button>
            </div>

            <div className="mt-1 text-[13px] text-[var(--color-light-gray)]">
              Code: <span className="font-semibold">{item.code}</span>
            </div>
          </div>

          <div className="text-right shrink-0">
            <div className="text-[12px] text-[var(--color-light-gray)] font-semibold">পরিমাণ</div>
            <div className="mt-1 text-[16px] font-extrabold text-[var(--color-black)]">
              {item.qtyBn} {item.unitBn}
            </div>
          </div>
        </div>

        {/* dotted separator */}
        <div className="mt-4 border-t border-dashed border-black/10" />

        {/* Office budget band */}
        <div className="mt-4">
          <div className="text-[12px] font-semibold text-[var(--color-light-gray)]">
            অফিসের বাজেট
          </div>

          <div className="mt-2 rounded-2xl bg-[var(--color-off-white)] px-4 py-3">
            <div className="text-[13px] font-semibold text-[var(--color-primary-color)]">
              এককঃ {item.unitPriceBn ?? "৳ ০"} • মোটঃ {item.totalPriceBn ?? "৳ ০"}
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible Budget Analysis */}
      <div className="px-5 pb-5 pt-4">
        <button
          onClick={onToggle}
          className="w-full rounded-2xl bg-white border border-black/10 px-4 py-3 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-[var(--color-off-white)] border border-black/10 flex items-center justify-center">
              <LayoutGrid className="h-4 w-4 text-[var(--color-primary-color)]" />
            </div>
            <div className="text-[13px] font-extrabold text-[var(--color-primary-color)]">
              অফিসের বাজেট বিশ্লেষণ
            </div>
          </div>

          <ChevronDown
            className={[
              "h-5 w-5 text-[var(--color-primary-color)] transition",
              expanded ? "rotate-180" : "",
            ].join(" ")}
          />
        </button>

        {expanded && (
          <div className="mt-3 rounded-2xl bg-white border border-black/10 px-4 py-4">
            <div className="space-y-3">
              <Row label="একক দর" value={item.breakdown?.baseBn ?? "৳ ০.০০"} />
              <Row label="ভ্যাট (৫%)" value={item.breakdown?.vatBn ?? "৳ ০.০০"} />
              <Row label="আইটি (০%)" value={item.breakdown?.aitBn ?? "৳ ০.০০"} />
              <Row
                label="অতিরিক্ত ভ্যাট (১%)"
                value={item.breakdown?.advanceVatBn ?? "৳ ০.০০"}
              />

              <div className="pt-3 border-t border-black/10 flex items-center justify-between">
                <div className="text-[13px] font-extrabold text-[var(--color-black)]">
                  সর্বমোট একক দর
                </div>
                <div className="text-[13px] font-extrabold text-[var(--color-black)]">
                  {item.breakdown?.finalUnitBn ?? "৳ ০.০০"}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* bottom accent bar */}
        <div className="mt-4 h-[6px] rounded-full bg-[var(--color-primary-color)]" />
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="text-[13px] text-[var(--color-light-gray)]">{label}</div>
      <div className="text-[13px] font-semibold text-[var(--color-black)]">{value}</div>
    </div>
  );
}
