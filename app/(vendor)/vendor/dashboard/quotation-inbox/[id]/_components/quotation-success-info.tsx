"use client";

import React from "react";

type Row = { label: string; value: string };

export default function QuotationSuccessInfo({
  rows,
}: {
  rows: Row[];
}) {
  return (
    <div className="mt-7 rounded-2xl border border-gray/10 bg-secondary/40 p-5">
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-6">
            <p className="text-xs font-semibold text-gray/55">{r.label}</p>
            <p className="text-xs font-extrabold text-gray">{r.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
