"use client";

import React from "react";
import Card from "@/components/cards/card";
import { Search, SlidersHorizontal } from "lucide-react";

type Props = {
  invoiceChecked?: boolean;
  onInvoiceChange?: (v: boolean) => void;
  searchValue?: string;
  onSearchChange?: (v: string) => void;
};

export default function QuotationFormHeader({
  invoiceChecked = false,
  onInvoiceChange,
  searchValue = "",
  onSearchChange,
}: Props) {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-5">
      {/* title */}
      <div>
        <h2 className="text-base font-extrabold text-gray">
          আপনার কোটেশন পূরণ করুন
        </h2>
        <p className="mt-1 text-xs font-semibold text-gray/50">
          Fill in the details below to submit your quotation
        </p>
      </div>

      {/* checkbox */}
      <label className="mt-4 flex items-center gap-2 text-xs font-semibold text-gray/60">
        <input
          type="checkbox"
          checked={invoiceChecked}
          onChange={(e) => onInvoiceChange?.(e.target.checked)}
        />
        <span>আপনার ইনভয়েসটি কোটেশনে যুক্ত করুন</span>
      </label>

      {/* product search */}
      <div className="mt-5">
        <p className="text-xs font-extrabold text-gray">
          পণ্য খুঁজুন (Product Search)
        </p>

        <div className="mt-2 flex items-center gap-2">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray/40">
              <Search size={16} />
            </span>
            <input
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="পণ্যের নাম লিখুন"
              className="h-10 w-full rounded-xl border border-gray/15 bg-white pl-10 pr-3 text-xs font-semibold text-gray"
            />
          </div>

          <button
            type="button"
            className="h-10 rounded-xl border border-gray/15 bg-white px-3 text-xs font-extrabold text-gray flex items-center gap-2"
          >
            <SlidersHorizontal size={16} className="text-gray/50" />
            ফিল্টার
          </button>
        </div>

        <p className="mt-2 text-[11px] font-semibold text-gray/45">
          * সার্চ করে পণ্য যোগ করুন অথবা তালিকা থেকে নির্বাচন করুন
        </p>
      </div>
    </Card>
  );
}
