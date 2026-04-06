"use client";

import { Eye } from "lucide-react";
import StatusPill from "./pills/status-pill";
import type { HandledOrderRow } from "../_types/agent-profile.types";

export default function HandledOrdersTable({ rows }: { rows: HandledOrderRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[rgba(100,116,139,0.14)]">
      <div className="grid grid-cols-12 gap-3 bg-[var(--color-off-white)] px-5 py-3 text-xs font-semibold text-[var(--color-medium-gray)]">
        <div className="col-span-2">তারিখ</div>
        <div className="col-span-2">অর্ডার আইডি</div>
        <div className="col-span-2">কেন্দ্র</div>
        <div className="col-span-3">এলাকা</div>
        <div className="col-span-2">অবস্থা</div>
        <div className="col-span-1 text-right">অ্যাকশন</div>
      </div>

      <div className="bg-white">
        {rows.map((r) => (
          <div key={r.id} className="grid grid-cols-12 gap-3 px-5 py-4 text-sm">
            <div className="col-span-2 text-[rgba(16,24,25,0.75)]">{r.dateBn}</div>

            <div className="col-span-2 font-bold text-[var(--color-primary-color)]">
              {r.orderCode}
            </div>

            <div className="col-span-2 text-[rgba(16,24,25,0.75)]">{r.centerBn}</div>

            <div className="col-span-3 text-[rgba(16,24,25,0.75)]">{r.areaBn}</div>

            <div className="col-span-2">
              <StatusPill status={r.status} />
            </div>

            <div className="col-span-1 flex justify-end">
              <button
                className="inline-flex items-center gap-2 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white px-3 py-2 text-xs font-bold text-[var(--color-primary-color)]"
                onClick={() => console.log("view", r.id)}
              >
                <Eye className="h-4 w-4" />
                দেখুন
              </button>
            </div>

            <div className="col-span-12 border-t border-[rgba(100,116,139,0.10)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
