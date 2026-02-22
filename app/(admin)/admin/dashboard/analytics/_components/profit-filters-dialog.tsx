"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { AnalyticsFilters } from "../_types/analytics.types";
import { useEffect, useState } from "react";

export default function ProfitFiltersDialog({
  open,
  onOpenChange,
  value,
  onApply,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  value: AnalyticsFilters;
  onApply: (v: AnalyticsFilters) => void;
}) {
  const [draft, setDraft] = useState<AnalyticsFilters>(value);

  useEffect(() => setDraft(value), [value]);

  const reset = () =>
    setDraft({
      startDate: value.startDate,
      endDate: value.endDate,
      vendorId: "all",
      officeId: "all",
      minProfit: "",
      maxProfit: "",
    });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[720px] rounded-3xl border border-[rgba(100,116,139,0.16)] bg-white p-8">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-[var(--color-black)]">
            তারিখের পরিসীমা
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field label="শুরু">
            <input
              value={draft.startDate}
              onChange={(e) => setDraft((p) => ({ ...p, startDate: e.target.value }))}
              className="h-12 w-full rounded-xl border border-[rgba(100,116,139,0.18)] bg-white px-4 text-sm text-[var(--color-black)] outline-none"
            />
          </Field>

          <Field label="শেষ">
            <input
              value={draft.endDate}
              onChange={(e) => setDraft((p) => ({ ...p, endDate: e.target.value }))}
              className="h-12 w-full rounded-xl border border-[rgba(100,116,139,0.18)] bg-white px-4 text-sm text-[var(--color-black)] outline-none"
            />
          </Field>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5">
          <Field label="ভেন্ডর">
            <select
              value={draft.vendorId}
              onChange={(e) => setDraft((p) => ({ ...p, vendorId: e.target.value }))}
              className="h-12 w-full rounded-xl border border-[rgba(100,116,139,0.18)] bg-white px-4 text-sm text-[var(--color-black)] outline-none"
            >
              <option value="all">সকল ভেন্ডর</option>
              <option value="v1">ভেন্ডর - ১</option>
              <option value="v2">ভেন্ডর - ২</option>
            </select>
          </Field>

          <Field label="দপ্তর">
            <select
              value={draft.officeId}
              onChange={(e) => setDraft((p) => ({ ...p, officeId: e.target.value }))}
              className="h-12 w-full rounded-xl border border-[rgba(100,116,139,0.18)] bg-white px-4 text-sm text-[var(--color-black)] outline-none"
            >
              <option value="all">সকল দপ্তর</option>
              <option value="o1">দপ্তর - ১</option>
              <option value="o2">দপ্তর - ২</option>
            </select>
          </Field>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field label="প্রফিট সীমা (৳)">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-2 text-xs text-[var(--color-light-gray)]">সর্বনিম্ন</div>
                <input
                  value={draft.minProfit}
                  onChange={(e) => setDraft((p) => ({ ...p, minProfit: e.target.value }))}
                  className="h-12 w-full rounded-xl border border-[rgba(100,116,139,0.18)] bg-white px-4 text-sm text-[var(--color-black)] outline-none"
                  placeholder="0"
                />
              </div>

              <div>
                <div className="mb-2 text-xs text-[var(--color-light-gray)]">সর্বোচ্চ</div>
                <input
                  value={draft.maxProfit}
                  onChange={(e) => setDraft((p) => ({ ...p, maxProfit: e.target.value }))}
                  className="h-12 w-full rounded-xl border border-[rgba(100,116,139,0.18)] bg-white px-4 text-sm text-[var(--color-black)] outline-none"
                  placeholder="1,000,000"
                />
              </div>
            </div>
          </Field>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={reset}
            className="h-12 rounded-xl border border-[rgba(100,116,139,0.18)] bg-white px-8 text-sm font-semibold text-[var(--color-light-gray)]"
          >
            রিসেট করুন
          </button>

          <button
            onClick={() => {
              onApply(draft);
              onOpenChange(false);
            }}
            className="h-12 rounded-xl bg-[var(--color-primary-color)] px-8 text-sm font-semibold text-white"
          >
            ফিল্টার প্রয়োগ করুন
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 text-sm font-bold text-[var(--color-black)]">{label}</div>
      {children}
    </div>
  );
}
