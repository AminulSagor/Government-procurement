"use client";

import React from "react";
import Card from "@/components/cards/card";
import { FilePenLine, Info, Van } from "lucide-react";

type Props = {
  itemCount?: number;
};

const money = (n: number) => {
  try {
    return `৳ ${n.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  } catch {
    return `৳ ${n}`;
  }
};

export default function QuotationItemDetailedTable({ itemCount = 1 }: Props) {
  // demo values (later you can make these props/state)
  const qty = 5;
  const tenderUnit = 3500;
  const offerUnit = 3450;
  const vatPct = 15;

  const subtotal = qty * offerUnit;
  const vat = subtotal * (vatPct / 100);
  const grand = subtotal + vat;

  return (
    <Card className="rounded-2xl border border-gray/10 bg-white p-0 overflow-hidden shadow-sm">
      {/* ===== Header ===== */}
      <div className="flex items-start justify-between px-6 py-5">
        <div>
          <h3 className="text-base font-extrabold text-primary-color">
            আপনার অফার লিখুন
          </h3>
          <p className="mt-1 text-xs font-semibold text-light-gray">
            অফিস বাজেট ও ইনভেন্টরি মূল্য বিবেচনা করে প্রতি আইটেমের দর প্রদান
            করুন
          </p>
        </div>

        {/* item count badge */}
        <div className="rounded-xl border border-gray/10 bg-secondary px-3 py-2 text-right">
          <p className="text-xs text-primary-color font-medium text-start">
            পণ্যের সংখ্যা
          </p>
          <p className="text-xl font-extrabold text-primary-color">
            {String(itemCount).padStart(2, "0")} টি আইটেম
          </p>
        </div>
      </div>

      {/* ===== Table Header ===== */}
      <div className="border-t border-gray/10 bg-off-white">
        <div className="grid grid-cols-2 px-6 py-6 text-xs font-extrabold">
          {/* left half */}
          <div className="flex items-center justify-between pr-6">
            <span className="text-gray/60">পণ্য ও স্পেসিফিকেশন</span>
            <span className="text-gray/60">পরিমাণ</span>
          </div>

          {/* right half */}
          <div className="flex items-center justify-between pl-6 border-l border-gray/10">
            <span className="text-gray/60 text-center">টেন্ডার একক দর (৳)</span>
            <span className="text-gray/60 text-center">
              টেন্ডার একত্রিত ও মোট বাজেট
            </span>
          </div>
        </div>
      </div>

      {/* ===== Table Row ===== */}
      <div className="grid grid-cols-[2fr_0.7fr_1.35fr_1.15fr] px-6 ">
        {/* Column 1: Product info */}
        <div className="p-6">
          <p className="text-sm font-extrabold text-gray">
            HP LaserJet Pro P1102 Toner
          </p>

          <p className="mt-1 text-xs font-semibold text-primary-color">
            আইটেম কোড: ০০১২৩
          </p>

          <p className="mt-1 text-[11px] font-semibold text-gray/45">
            MODEL ID: HP-TRN-1102-STD
          </p>

          <div className="mt-4">
            <p className="text-xs font-semibold text-light-gray flex items-center gap-2">
              <FilePenLine size={16} className="text-light-gray" />
              বিস্তারিত বিবরণ
            </p>

            <textarea
              className="mt-2 min-h-[88px] w-full rounded-xl border border-gray/12 bg-white p-3 text-xs font-semibold text-gray placeholder:text-gray/35 focus:outline-none"
              placeholder="আপনার সরবরাহকৃত পণ্যের বিস্তারিত বিবরণ দিন..."
            />
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold text-light-gray flex items-center gap-2">
              <Van size={16} className="text-light-gray" />
              ডেলিভারি সময়
            </p>
            <input
              className="mt-2 h-10 w-full rounded-xl border border-gray/12 bg-white px-3 text-xs font-semibold text-gray placeholder:text-gray/35"
              defaultValue="৭ দিন"
            />
          </div>
        </div>

        {/* Column 2: Qty */}
        <div className="px-6 border-l border-gray/10 flex items-start">
          <div className="mt-8 inline-flex h-12 min-w-[56px] items-center justify-center rounded-2xl border border-gray/12 bg-[#EEF5F7] text-sm font-extrabold text-gray">
            {String(qty).padStart(2, "0")}
          </div>
        </div>

        {/* Column 3: Unit pricing (FULL COLUMN tinted like screenshot) */}
        <div className="px-6 border-l border-gray/10 bg-off-white">
          {/* top two blocks with left border bars */}
          <div className="pt-6 space-y-6">
            <div className="border-l-2 border-primary-color/25 pl-4">
              <p className="text-xs font-semibold text-gray/55">অফিসের বাজেট</p>
              <p className="mt-2 text-sm font-extrabold text-gray">
                {money(tenderUnit)}
              </p>
            </div>

            <div className="border-l-2 border-primary-color/25 pl-4">
              <p className="text-xs font-semibold text-gray/55">
                ইস্টিমেটেড মূল্য
              </p>
              <p className="mt-2 text-sm font-extrabold text-gray">
                {money(tenderUnit)}
              </p>
            </div>

            {/* offer input */}
            <div className="pt-2">
              <p className="text-xs font-extrabold text-primary-color flex items-center gap-2">
                <Info size={14} /> আপনার অফার (একক)
              </p>

              <div className="mt-2 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-color font-extrabold">
                  ৳
                </span>
                <input
                  className="h-12 w-full rounded-xl border border-primary-color/35 bg-white pl-8 pr-4 text-right text-sm font-extrabold text-primary-color shadow-sm focus:outline-none"
                  defaultValue={String(offerUnit)}
                />
              </div>

              <p className="mt-2 text-[11px] font-semibold text-gray/45">
                * টেন্ডার মূল্য নির্ধারিত
              </p>
            </div>
          </div>
        </div>

        {/* Column 4: Totals */}
        <div className="pl-6 border-l border-gray/10 text-right">
          <div className="pt-6 space-y-6">
            {/* VAT */}
            <div>
              <p className="text-xs font-semibold text-gray/55">
                ভ্যাট (VAT) {vatPct}%
              </p>
              <p className="mt-2 text-sm font-extrabold text-gray">
                {money(vat)}
              </p>
              <p className="mt-1 text-[11px] font-semibold text-gray/40">
                (মূল্য একত্রিত)
              </p>
            </div>

            {/* IT */}
            <div>
              <p className="text-xs font-semibold text-gray/55">আইটি (IT) 1%</p>
              <p className="mt-2 text-sm font-extrabold text-gray">
                {money(449)}
              </p>
              <p className="mt-1 text-[11px] font-semibold text-gray/40">
                (মূল্য একত্রিত)
              </p>
            </div>

            {/* Other */}
            <div>
              <p className="text-xs font-semibold text-gray/55">
                অতিরিক্ত ভ্যাট 0.5%
              </p>
              <p className="mt-2 text-sm font-extrabold text-gray">
                {money(105)}
              </p>
              <p className="mt-1 text-[11px] font-semibold text-gray/40">
                (মূল্য একত্রিত)
              </p>
            </div>

            {/* Final budget */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-gray/55">
                মোট আইটেম বাজেট
              </p>
              <p className="mt-2 text-xl font-extrabold text-primary-color">
                {money(grand)}
              </p>
              <p className="mt-1 text-[11px] font-semibold text-gray/40">
                {String(itemCount).padStart(2, "0")} টি আইটেম মোট মূল্য
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom Floating Total Bar ===== */}
      <div className="relative h-28 border-t border-gray/10 bg-white">
        <div className="absolute right-6 top-6 w-[440px] rounded-2xl bg-primary-color px-6 py-5 text-white shadow-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-white/80">
                সর্বমোট অফার মূল্য
              </p>
              <p className="mt-1 text-[11px] font-semibold text-white/70">
                Grand Total Offer Value
              </p>
            </div>

            <p className="text-2xl font-extrabold">{money(grand)}</p>
          </div>

          <p className="mt-2 text-[11px] font-semibold text-white/70">
            ভ্যাটসহ, সকল চার্জ যুক্ত করে মোট মূল্য
          </p>
        </div>
      </div>
    </Card>
  );
}
