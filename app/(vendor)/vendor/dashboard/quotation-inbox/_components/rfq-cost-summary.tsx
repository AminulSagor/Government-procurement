"use client";

import React from "react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import { ArrowRight } from "lucide-react";

type Props = {
  subtotal?: number;
  vatPct?: number; // %
  shipping?: number; // optional
  onSubmit?: () => void;
};

const money = (n: number) => {
  try {
    return `৳ ${n.toLocaleString("en-US")}`;
  } catch {
    return `৳ ${n}`;
  }
};

export default function RfqCostSummary({
  subtotal = 850000,
  vatPct = 0,
  shipping = 0,
  onSubmit,
}: Props) {
  const vatAmount = Math.max(0, subtotal * (vatPct / 100));
  const total = subtotal + vatAmount + (shipping || 0);

  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-4">
      <p className="text-xs font-extrabold text-gray">কোটেশন সারাংশ</p>

      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-gray/50">সাব-টোটাল</span>
          <span className="text-gray">{money(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-gray/50">ভ্যাট / ট্যাক্স ({vatPct}%)</span>
          <span className="text-gray">{money(vatAmount)}</span>
        </div>

        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-gray/50">ডেলিভারি / শিপিং</span>
          <span className="text-gray">{money(shipping)}</span>
        </div>

        <div className="my-2 h-px w-full bg-gray/10" />

        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold text-gray">সর্বমোট</span>
          <span className="text-sm font-extrabold text-gray">{money(total)}</span>
        </div>
      </div>

      <p className="mt-3 text-[11px] font-semibold text-gray/45 leading-5">
        * সাবমিট করার আগে আপনার দরপত্রের তথ্য ও নথি যাচাই করুন।
      </p>

      <PrimaryButton
        onClick={onSubmit}
        className="mt-4 w-full py-2.5 text-xs font-extrabold flex items-center justify-center gap-2"
      >
        কোটেশন সাবমিট করুন <ArrowRight size={18} />
      </PrimaryButton>
    </Card>
  );
}
