"use client";

import { X, FileText, Printer, Settings } from "lucide-react";
import { ProductDetailsDialogItem } from "../_types/negotiation-assign.types";




export default function ProductDetailsDialog({
  open,
  onClose,
  item,
}: {
  open: boolean;
  onClose: () => void;
  item: ProductDetailsDialogItem;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* modal */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-[980px] rounded-3xl bg-white shadow-2xl border border-black/10 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 flex items-center justify-between border-b border-black/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-[var(--color-off-white)] border border-black/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-[var(--color-primary-color)]" />
              </div>
              <div className="text-[16px] font-extrabold text-[var(--color-black)]">
                পণ্যের বিস্তারিত তথ্য
              </div>
            </div>

            <button
              onClick={onClose}
              className="h-10 w-10 rounded-2xl border border-black/10 bg-white flex items-center justify-center text-[var(--color-light-gray)] hover:bg-[var(--color-off-white)]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            {/* Title area */}
            <div className="text-[28px] font-extrabold text-[var(--color-black)]">
              {item.nameBn}{" "}
              <span className="text-[16px] font-bold text-[var(--color-light-gray)]">
                — {item.qtyBn} {item.unitBn}
              </span>
            </div>

            <div className="mt-1 text-[13px] text-[var(--color-light-gray)]">
              আইটেম কোড: <span className="font-bold">#{item.code}</span>
            </div>

            {/* Two columns */}
            <div className="mt-5 grid grid-cols-12 gap-6">
              {/* LEFT: spec box */}
              <div className="col-span-7">
                <div className="flex items-center gap-2 text-[14px] font-extrabold text-[var(--color-primary-color)]">
                  <Settings className="h-4 w-4" />
                  অফিস কর্তৃক প্রদত্ত টেকনিক্যাল স্পেসিফিকেশন
                </div>

                <div className="mt-3 rounded-3xl border border-black/10 bg-white p-5 min-h-[320px]">
                  <p className="text-[14px] leading-7 text-[var(--color-black)]">
                    {item.specTextBn}
                  </p>
                </div>
              </div>

              {/* RIGHT: budget card */}
              <div className="col-span-5">
                <div className="rounded-3xl border border-black/10 overflow-hidden shadow-sm">
                  <div className="px-5 py-4 bg-[var(--color-primary-color)] text-white flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <div className="text-[14px] font-extrabold">
                      অফিসের বাজেট বিশ্লেষণ
                    </div>
                  </div>

                  <div className="px-5 py-4 bg-white">
                    <Row label="একক দর" value={item.budget.baseBn} />
                    <Row label="ভ্যাট (৫%)" value={item.budget.vatBn} tone="orange" />
                    <Row label="আইটি (০%)" value={item.budget.aitBn} tone="orange" />
                    <Row label="অতিরিক্ত ভ্যাট (১%)" value={item.budget.advanceVatBn} tone="orange" />

                    <div className="mt-4 pt-4 border-t border-black/10 flex items-center justify-between">
                      <div className="text-[13px] font-extrabold text-[var(--color-black)]">
                        সর্বমোট একক দর
                      </div>
                      <div className="text-[14px] font-extrabold text-[var(--color-primary-color)]">
                        {item.budget.finalUnitBn}
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl bg-[var(--color-off-white)] border border-black/10 px-4 py-4 text-center">
                      <div className="text-[12px] font-bold text-[var(--color-light-gray)]">
                        মোট আইটেমের বাজেট
                      </div>
                      <div className="mt-1 text-[20px] font-extrabold text-[var(--color-primary-color)]">
                        {item.budget.totalBudgetBn}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-black/10 flex items-center justify-end gap-6">
            <button
              onClick={onClose}
              className="text-[13px] font-extrabold text-[var(--color-light-gray)] hover:opacity-90"
            >
              বন্ধ করুন
            </button>

            <button className="h-11 rounded-2xl bg-[var(--color-primary-color)] px-6 text-[13px] font-extrabold text-white inline-flex items-center gap-2">
              <Printer className="h-5 w-5" />
              প্রিন্ট করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "orange";
}) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="text-[13px] text-[var(--color-light-gray)]">{label}</div>
      <div
        className={[
          "text-[13px] font-bold",
          tone === "orange" ? "text-[var(--color-orange)]" : "text-[var(--color-black)]",
        ].join(" ")}
      >
        {value}
      </div>
    </div>
  );
}
