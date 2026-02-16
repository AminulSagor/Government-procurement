"use client";

import React from "react";
import Card from "@/components/cards/card";
import { ClipboardEdit, Route, RefreshCw } from "lucide-react";

type Props = {
  warrantyValue?: string;
  warrantyUnit?: "বছর" | "মাস";
  deliveryTime?: string;

  productOffer?: number;
  productBudget?: number;

  checked?: boolean;
  onCheckedChange?: (v: boolean) => void;

  onSubmit?: () => void;
};

const money = (n: number) => {
  try {
    return `৳ ${n.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  } catch {
    return `৳ ${n}`;
  }
};

export default function RequoteUpdateTerms({
  warrantyValue = "",
  warrantyUnit = "বছর",
  deliveryTime = "৭ দিন",

  productOffer = 8450,
  productBudget = 10000,

  checked = true,
  onCheckedChange,
  onSubmit,
}: Props) {
  return (
    <Card className="rounded-2xl border border-gray/10 bg-white p-6 shadow-sm">
      {/* top grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* LEFT: UPDATE TERMS */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-primary-color">
              <ClipboardEdit size={16} />
            </span>
            <p className="text-xs font-extrabold text-gray tracking-wide">
              শর্তাবলী আপডেট (UPDATE TERMS)
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            {/* warranty */}
            <div>
              <p className="mb-1 text-[11px] font-semibold text-gray/50">
                ওয়ারেন্টি সময়কাল (হালনাগাদ)
              </p>
              <div className="grid grid-cols-[1fr_110px] gap-3">
                <input
                  defaultValue={warrantyValue}
                  className="h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray"
                />
                <select
                  defaultValue={warrantyUnit}
                  className="h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray"
                >
                  <option>বছর</option>
                  <option>মাস</option>
                </select>
              </div>
              <p className="mt-2 text-[11px] font-semibold text-gray/45">
                সর্বনিম্ন ১ বছর প্রযোজ্য
              </p>
            </div>

            {/* delivery time */}
            <div>
              <p className="mb-1 text-[11px] font-semibold text-gray/50">
                ডেলিভারি সময় (হালনাগাদ)
              </p>
              <select
                defaultValue={deliveryTime}
                className="h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray"
              >
                <option>৭ দিন</option>
                <option>১০ দিন</option>
                <option>১৫ দিন</option>
              </select>
            </div>
          </div>
        </div>

        {/* RIGHT: BID ROUTING INFO */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-primary-color">
              <Route size={16} />
            </span>
            <p className="text-xs font-extrabold text-gray tracking-wide">
              বিড রাউটিং এর তথ্য
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-gray/10 bg-secondary/30 px-5 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray/55">
                পণ্যের অফারকৃত দর:
              </p>
              <p className="text-xs font-extrabold text-gray">
                {money(productOffer)}
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-gray/55">
                পণ্যের বাজেট:
              </p>
              <p className="text-xs font-extrabold text-gray">
                {money(productBudget)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* agreement strip */}
      <div className="mt-6 rounded-2xl border border-primary-color/20 bg-[#F1F8FA] p-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheckedChange?.(e.target.checked)}
            className="mt-1 h-4 w-4 accent-primary-color"
          />
          <p className="text-[11px] font-semibold leading-relaxed text-gray/70">
            আমি ঘোষণা করছি যে সরবরাহকৃত পণ্যের সমস্ত তথ্য অফিস কর্তৃক নির্ধারিত
            স্পেসিফিকেশন অনুযায়ী সঠিক শর্তাবলী মেনে এই হালনাগাদ দরপত্র দাখিল
            করছি।
          </p>
        </label>
      </div>

      {/* submit button */}
      <button
        type="button"
        onClick={onSubmit}
        className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-primary-color text-base font-extrabold text-white shadow-lg hover:opacity-95"
      >
        <RefreshCw size={18} />
        হালনাগাদ দরপত্র দাখিল করুন (Submit Updated Quotation)
      </button>
    </Card>
  );
}
