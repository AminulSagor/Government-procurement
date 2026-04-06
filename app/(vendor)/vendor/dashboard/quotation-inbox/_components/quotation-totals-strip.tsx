"use client";

import React from "react";
import Card from "@/components/cards/card";

type Props = {
  subtotal?: number;
  vatPct?: number;
  onVatChange?: (v: number) => void;
};

const money = (n: number) => {
  try {
    return `৳ ${n.toLocaleString("en-US")}`;
  } catch {
    return `৳ ${n}`;
  }
};

export default function QuotationTotalsStrip({
  subtotal = 850000,
  vatPct = 0,
  onVatChange,
}: Props) {
  const vatAmount = Math.max(0, subtotal * (vatPct / 100));
  const total = subtotal + vatAmount;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
      {/* vat input */}
      <Card className="rounded-2xl border border-gray/15 bg-white p-4">
        <p className="text-xs font-extrabold text-gray">ভ্যাট (VAT/Tax %)</p>

        <div className="mt-3 flex items-center gap-2">
          <input
            type="number"
            min={0}
            value={vatPct}
            onChange={(e) => onVatChange?.(Number(e.target.value || 0))}
            className="h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray"
          />
          <div className="h-10 w-12 rounded-xl border border-gray/15 bg-secondary grid place-items-center text-xs font-extrabold text-gray/60">
            %
          </div>
        </div>
      </Card>

      {/* total teal card */}
      <Card className="rounded-2xl bg-primary-color p-4 text-white">
        <p className="text-xs font-semibold text-white/85">সর্বমোট মূল্য</p>
        <p className="mt-2 text-2xl font-extrabold">{money(total)}</p>
        <p className="mt-1 text-[11px] font-semibold text-white/80">
          Total (Including VAT)
        </p>
      </Card>
    </div>
  );
}
