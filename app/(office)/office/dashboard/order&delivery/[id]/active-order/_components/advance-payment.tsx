"use client";

import React from "react";
import Card from "@/components/cards/card";
import { CreditCard, AlertCircle } from "lucide-react";

type Props = {
  orderId: string;
  total?: number; // 616500
  advancePercent?: number; // 0.6
  onSubmitPayment?: () => void;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function formatBDT(amount: number) {
  const bn = new Intl.NumberFormat("bn-BD").format(amount);
  return `৳ ${bn}`;
}

export default function AdvancePayment({
  orderId,
  total = 616500,
  advancePercent = 0.6,
  onSubmitPayment,
}: Props) {
  const advance = Math.round(total * advancePercent);
  const pct = Math.round(advancePercent * 100);

  return (
    <Card className="rounded-md bg-white shadow-sm border border-off-white overflow-hidden">
      <div className="px-6 py-4 border-b border-off-white">
        <p className="text-base font-extrabold text-black">
          অগ্রিম পেমেন্ট জমা দিন
        </p>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-light-gray">মোট মূল্য</p>
          <p className="text-sm font-extrabold text-black">
            {formatBDT(total)}
          </p>
        </div>

        <div className="flex items-center justify-between rounded-md bg-off-white px-5 py-4">
          <p className="text-sm font-extrabold text-primary-color">
            প্রদেয় অগ্রিম ({pct}%)
          </p>
          <p className="text-sm font-extrabold text-primary-color">
            {formatBDT(advance)}
          </p>
        </div>

        <button
          type="button"
          onClick={onSubmitPayment ?? (() => console.log("payment", orderId))}
          className={cn(
            "flex h-12 w-full items-center justify-center gap-2 rounded-md",
            "bg-primary-color text-sm font-extrabold text-white shadow-sm",
            "hover:opacity-90",
          )}
        >
          <CreditCard className="h-5 w-5" />
          পেমেন্ট তথ্য প্রদান করুন
        </button>

        <div className="rounded-md bg-[#FFF4E5] px-4 py-3 text-sm text-[#A66A00] flex items-start gap-2">
          <AlertCircle className="h-5 w-5 mt-0.5" />
          <p className="font-semibold">
            অর্ডারটি পরবর্তী ধাপে নিতে অগ্রিম পেমেন্ট নিশ্চিত করা প্রয়োজন।
          </p>
        </div>
      </div>
    </Card>
  );
}
