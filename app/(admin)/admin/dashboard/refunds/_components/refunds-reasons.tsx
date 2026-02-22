"use client";

import React, { useMemo } from "react";
import { BarChart3 } from "lucide-react";

import { REFUNDS_REASONS_DATA } from "../_data/refunds-reasons-data";
import Card from "@/components/cards/card";
import SecondaryButton from "@/components/buttons/secondary-button";

function formatBn(n: number) {
  return new Intl.NumberFormat("bn-BD").format(n);
}

export default function RefundsReasons() {
  const rows = REFUNDS_REASONS_DATA;

  const maxCases = useMemo(() => {
    return rows.reduce((m, r) => (r.cases > m ? r.cases : m), 0) || 1;
  }, [rows]);

  const fills = [
    "bg-primary-color",
    "bg-primary-color/70",
    "bg-secondary-color",
  ] as const;

  return (
    <Card className="p-6">
      {/* header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <BarChart3 className="h-5 w-5 text-primary-color" />
          <h3 className="text-base font-semibold text-black">
            রিফান্ডের কারণসমূহ
          </h3>
        </div>

        <SecondaryButton className="px-4 py-1 text-sm">এই মাস</SecondaryButton>
      </div>

      {/* list */}
      <div className="mt-6 space-y-7">
        {rows.map((r, idx) => {
          const pct = Math.max(0, Math.min(100, (r.cases / maxCases) * 100));
          const fill = fills[Math.min(idx, fills.length - 1)];

          return (
            <div key={r.id} className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-black">{r.labelBn}</p>
                <p className="text-sm font-medium text-black">
                  {formatBn(r.cases)}টি কেস
                </p>
              </div>

              <div className="h-3 w-full rounded-full bg-off-white overflow-hidden">
                <div
                  className={`h-full rounded-full ${fill}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
