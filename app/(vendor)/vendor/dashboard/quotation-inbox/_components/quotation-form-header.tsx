"use client";

import React from "react";
import Card from "@/components/cards/card";
import { Search, SlidersHorizontal } from "lucide-react";

type Props = {
  invoiceChecked?: boolean;
  onInvoiceChange?: (v: boolean) => void;

  searchValue?: string;
  onSearchChange?: (v: string) => void;

  onFilterClick?: () => void;
};

export default function QuotationFormHeader({
  invoiceChecked = false,
  onInvoiceChange,
  searchValue = "",
  onSearchChange,
  onFilterClick,
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

      {/* search */}
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
              className="h-10 w-full rounded-xl border border-gray/15 bg-white pl-10 pr-3 text-xs font-semibold text-gray placeholder:text-gray/35"
            />
          </div>

          <button
            type="button"
            onClick={onFilterClick}
            className="h-10 rounded-xl border border-gray/15 bg-white px-3 text-xs font-extrabold text-gray flex items-center gap-2"
          >
            <SlidersHorizontal size={16} className="text-gray/50" />
            ফিল্টার
          </button>
        </div>

        <p className="mt-2 text-[11px] font-semibold text-gray/45">
          * আপনার পণ্য যুক্ত করতে সার্চ করুন অথবা তালিকা থেকে নির্বাচন করুন
        </p>
      </div>

      {/* table header (only header row for now) */}
      <div className="mt-5 rounded-xl border border-gray/15 bg-white overflow-hidden">
        <div className="grid grid-cols-[1.4fr_0.7fr_0.9fr_0.9fr_0.7fr] gap-2 px-3 py-2 bg-secondary">
          <p className="text-[11px] font-extrabold text-gray/60">পণ্য</p>
          <p className="text-[11px] font-extrabold text-gray/60">পরিমাণ</p>
          <p className="text-[11px] font-extrabold text-gray/60">একক মূল্য</p>
          <p className="text-[11px] font-extrabold text-gray/60">মোট মূল্য</p>
          <p className="text-[11px] font-extrabold text-gray/60 text-right">
            অ্যাকশন
          </p>
        </div>

        {/* rows will come in Component #3 */}
        <div className="px-3 py-6 text-center text-xs font-semibold text-gray/40">
          (Rows will be added in Component #3)
        </div>
      </div>
    </Card>
  );
}
