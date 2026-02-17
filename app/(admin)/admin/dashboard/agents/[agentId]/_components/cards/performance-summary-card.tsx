"use client";

import { LayoutGrid } from "lucide-react";
import type { PerformanceSummary } from "../../_types/agent-profile.types";

function Tile({ labelBn, valueBn }: { labelBn: string; valueBn: string }) {
  return (
    <div className="rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.08)] p-5">
      <div className="text-xs font-semibold text-[rgba(255,255,255,0.70)]">
        {labelBn}
      </div>
      <div className="mt-3 text-3xl font-extrabold tracking-tight text-white">
        {valueBn}
      </div>
    </div>
  );
}

export default function PerformanceSummaryCard({
  data,
}: {
  data: PerformanceSummary;
}) {
  return (
    <div className="rounded-2xl border border-[rgba(100,116,139,0.14)] bg-[var(--color-primary-color)] px-6 py-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.10)]">
          <LayoutGrid className="h-5 w-5 text-white" />
        </span>
        <div className="text-base font-extrabold text-white">
          পারফরম্যান্স সারাংশ
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <Tile labelBn="মোট অর্ডার" valueBn={data.totalOrders.toLocaleString("bn-BD")} />
        <Tile labelBn="মোট ডেলিভারি" valueBn={data.totalDeliveries.toLocaleString("bn-BD")} />
        <Tile labelBn="সফলতা হার" valueBn={`${data.successRatePct.toLocaleString("bn-BD")}%`} />
        <Tile labelBn="অ্যাকটিভ দিন" valueBn={data.activeDays.toLocaleString("bn-BD")} />
      </div>
    </div>
  );
}
