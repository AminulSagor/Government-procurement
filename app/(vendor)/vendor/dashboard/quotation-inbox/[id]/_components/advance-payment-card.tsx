"use client";

import React from "react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import { ImageIcon, Info, ArrowRight } from "lucide-react";

type Props = {
  required?: boolean; // yes/no
  onChange?: (v: boolean) => void;

  totalAmount?: number; // total order amount
  advancePct?: number;  // 10 means 10%
};

const money = (n: number) => {
  try {
    return `৳ ${n.toLocaleString("en-US")}`;
  } catch {
    return `৳ ${n}`;
  }
};

export default function AdvancePaymentCard({
  required = true,
  onChange,
  totalAmount = 3600000,
  advancePct = 10,
}: Props) {
  const pct = Math.max(0, Math.min(100, advancePct));
  const advanceAmount = Math.round(totalAmount * (pct / 100));

  return (
    <Card className="rounded-2xl border border-gray/10 bg-white p-5 shadow-sm">
      {/* header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-primary-color">
            <ImageIcon size={18} />
          </span>
          <p className="text-sm font-extrabold text-gray">
            অগ্রিম পেমেন্ট দরকার?
          </p>
        </div>

        {/* segmented toggle */}
        <div className="inline-flex rounded-xl bg-secondary p-1">
          <button
            type="button"
            onClick={() => {
              onChange?.(true);
            }}
            className={[
              "h-8 rounded-lg px-4 text-xs font-extrabold",
              required ? "bg-white text-primary-color shadow-sm" : "text-gray/60",
            ].join(" ")}
          >
            হ্যাঁ
          </button>

          <button
            type="button"
            onClick={() => {
              onChange?.(false);
            }}
            className={[
              "h-8 rounded-lg px-4 text-xs font-extrabold",
              !required ? "bg-white text-primary-color shadow-sm" : "text-gray/60",
            ].join(" ")}
          >
            না
          </button>
        </div>
      </div>

      {/* info box */}
      <div className="mt-4 rounded-2xl border border-gray/10 bg-secondary/40 p-4">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-primary-color">
            <Info size={18} />
          </span>

          <p className="text-xs font-semibold text-gray/60 leading-6">
            মোট অর্ডার কত টাকা অগ্রিম হিসেবে পরিশোধ করতে হবে, তা এখানে উল্লেখ
            করতে হবে। অগ্রিম প্রদান অনুযায়ী পরবর্তী ধাপে অগ্রিম পেমেন্ট সম্পন্ন
            করে অর্ডারটি কনফার্ম করবেন।
          </p>
        </div>
      </div>

      {/* progress row */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs font-semibold text-gray/55">
          <span>{money(advanceAmount)}</span>
          <span>{pct}% অগ্রিম পেমেন্ট</span>
        </div>

        <div className="mt-2 h-2 w-full rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full rounded-full bg-primary-color"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* divider */}
      <div className="mt-5 h-px w-full bg-gray/10" />

      {/* center total */}
      <div className="mt-5 text-center">
        <p className="text-sm font-extrabold text-gray/70">
          অগ্রিম পেমেন্ট এর পরিমাণ
        </p>
        <p className="mt-2 text-2xl font-extrabold text-gray">
          {money(advanceAmount)}
        </p>
      </div>

      {/* CTA */}
      <PrimaryButton className="mt-5 w-full p-2 text-xs font-medium flex items-center justify-center gap-2">
        অগ্রিম পেমেন্ট এর পরিমাণ নিশ্চিত করুন <ArrowRight size={18} />
      </PrimaryButton>
    </Card>
  );
}
