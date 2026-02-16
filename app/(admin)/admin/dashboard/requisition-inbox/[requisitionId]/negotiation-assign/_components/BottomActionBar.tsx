"use client";

import { AlertTriangle, CheckCircle2, Clock3 } from "lucide-react";

export default function BottomActionBar() {
  return (
    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden">
      {/* Warning strip */}
      <div className="px-6 py-3 bg-[#FFF7E6] border-b border-black/10 flex items-center gap-2">
        <AlertTriangle className="h-5 w-5 text-[var(--color-orange)]" />
        <div className="text-[13px] font-bold text-[var(--color-orange)]">
          যাচাই করুন: এডমিন বাজেট কি অফিসের মোট বাজেটের মধ্যে রয়েছে?
        </div>
      </div>

      {/* Main row */}
      <div className="px-6 py-4 flex items-end justify-between gap-6">
        {/* Left: title + inputs */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-[13px] font-extrabold text-[var(--color-black)]">
            <Clock3 className="h-5 w-5 text-[var(--color-primary-color)]" />
            দরপত্রের সময়সীমা নির্ধারণ করুন
          </div>

          <div className="mt-3 flex items-center gap-3">
            <TimeField labelBn="দিন" />
            <TimeField labelBn="ঘন্টা" />
          </div>

          <div className="mt-2 text-[11px] text-[var(--color-light-gray)]">
            ভেন্ডর নির্ধারিত সময়ের মধ্যে কোটেশন সাবমিট না করলে অটোমেটিকভাবে বাতিল হয়ে যাবে।
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3">
          <button className="h-11 rounded-2xl border border-black/10 bg-white px-7 text-[13px] font-extrabold text-[var(--color-black)]">
            রিসেট করুন
          </button>

          <button className="h-11 rounded-2xl bg-[var(--color-primary-color)] px-7 text-[13px] font-extrabold text-white inline-flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            নেগোসিয়েশন চূড়ান্ত করুন
          </button>
        </div>
      </div>
    </div>
  );
}

function TimeField({ labelBn }: { labelBn: string }) {
  return (
    <div className="flex items-center rounded-2xl border border-black/10 overflow-hidden bg-white">
      <input
        defaultValue="০"
        className="h-11 w-[140px] px-4 text-[14px] font-extrabold text-[var(--color-black)] outline-none"
      />
      <div className="h-11 px-5 bg-[var(--color-off-white)] border-l border-black/10 flex items-center text-[13px] font-extrabold text-[var(--color-light-gray)]">
        {labelBn}
      </div>
    </div>
  );
}
