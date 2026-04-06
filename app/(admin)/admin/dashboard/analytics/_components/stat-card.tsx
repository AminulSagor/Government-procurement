"use client";

import type { StatCard as StatCardType } from "../_types/analytics.types";

export default function StatCard({ item }: { item: StatCardType }) {
  return (
    <div
      className={[
        "rounded-2xl border bg-white px-5 py-4",
        item.active
          ? "border-[rgba(31,110,128,0.45)] shadow-[0_8px_24px_rgba(31,110,128,0.10)]"
          : "border-[rgba(100,116,139,0.16)]",
      ].join(" ")}
    >
      <div className="text-sm font-semibold text-[var(--color-light-gray)]">{item.titleBn}</div>

      <div className="mt-2 text-2xl font-extrabold text-[var(--color-primary-color)]">
        {item.valueBn}
      </div>

      {item.trend ? (
        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-md bg-[rgba(7,136,52,0.08)] px-2 py-[2px] text-xs font-semibold text-[var(--color-green)]">
            {item.trend.valueBn}
          </span>
          <span className="text-xs text-[var(--color-light-gray)]">{item.trend.labelBn}</span>
        </div>
      ) : null}
    </div>
  );
}
