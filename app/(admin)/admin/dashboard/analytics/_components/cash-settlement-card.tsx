"use client";

import type { CashSettlement } from "../_types/analytics.types";
import { Landmark, CreditCard } from "lucide-react";

export default function CashSettlementCard({ data }: { data: CashSettlement }) {
  return (
    <div className="rounded-2xl border border-[rgba(100,116,139,0.16)] bg-white p-5">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[rgba(31,110,128,0.10)]">
          <Landmark className="h-5 w-5 text-[var(--color-primary-color)]" />
        </div>

        <div>
          <div className="text-sm font-bold text-[var(--color-black)]">{data.titleBn}</div>
          <div className="mt-1 text-xs text-[var(--color-light-gray)]">{data.subtitleBn}</div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-[rgba(100,116,139,0.12)] bg-[rgba(246,247,248,0.60)] p-4">
        <div className="text-xs text-[var(--color-light-gray)]">{data.amountTitleBn}</div>
        <div className="mt-2 text-2xl font-extrabold text-[var(--color-primary-color)]">
          {data.amountBn}
        </div>
      </div>

      <button className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary-color)] text-sm font-semibold text-white">
        <CreditCard className="h-4 w-4" />
        {data.ctaBn}
      </button>

      <div className="mt-4 rounded-xl border border-[rgba(100,116,139,0.12)] bg-white px-4 py-3 text-xs text-[var(--color-light-gray)]">
        {data.noteBn}
      </div>
    </div>
  );
}
