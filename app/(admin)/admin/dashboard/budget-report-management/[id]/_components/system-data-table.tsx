"use client";

import type { IbasReportRow } from "../_types/ibas-report.types";
import { formatBDT } from "../_data/ibas-report-demo-data";

export default function SystemDataTable({
  rows,
  editMode,
  mismatch,
  onChangeRow,
}: {
  rows: IbasReportRow[];
  editMode: boolean;
  mismatch: boolean;
  onChangeRow: (id: string, patch: Partial<IbasReportRow>) => void;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--color-border)]">
      {/* header */}
      <div className="grid grid-cols-12 bg-[var(--color-off-white)] px-3 py-2 text-xs font-semibold text-[var(--color-light-gray)]">
        <div className="col-span-1">#</div>
        <div className="col-span-3">কোড (CODE)</div>
        <div className="col-span-5">খাত (HEAD)</div>
        <div className="col-span-2 text-right">পরিমাণ (টাকা)</div>
        <div className="col-span-1 text-right">STATUS</div>
      </div>

      <div className="divide-y divide-[var(--color-border)] bg-white">
        {rows.map((r, idx) => {
          const rowMismatch = mismatch && idx === 0; // just like screenshot (first row red)
          return (
            <div key={r.id} className="grid grid-cols-12 px-3 py-3 text-sm items-center">
              <div className="col-span-1 text-[var(--color-light-gray)]">{idx + 1}</div>

              {/* code */}
              <div className="col-span-3">
                {editMode ? (
                  <input
                    value={r.code}
                    onChange={(e) => onChangeRow(r.id, { code: e.target.value })}
                    className="h-9 w-full rounded-md border border-[var(--color-border)] bg-white px-2 text-sm text-[var(--color-black)] outline-none focus:border-[var(--color-primary-color)]"
                  />
                ) : (
                  <span className="font-medium text-[var(--color-black)]">{r.code}</span>
                )}
              </div>

              {/* head */}
              <div className="col-span-5">
                {editMode ? (
                  <input
                    value={r.headBn}
                    onChange={(e) => onChangeRow(r.id, { headBn: e.target.value })}
                    className="h-9 w-full rounded-md border border-[var(--color-border)] bg-white px-2 text-sm text-[var(--color-black)] outline-none focus:border-[var(--color-primary-color)]"
                  />
                ) : (
                  <span className="text-[var(--color-black)]">{r.headBn}</span>
                )}
              </div>

              {/* amount */}
              <div className="col-span-2 text-right">
                {editMode ? (
                  <input
                    value={String(r.amount)}
                    onChange={(e) => onChangeRow(r.id, { amount: Number(e.target.value || 0) })}
                    className={[
                      "h-9 w-full rounded-md border bg-white px-2 text-right text-sm font-semibold outline-none",
                      rowMismatch
                        ? "border-[var(--color-red)]/40 text-[var(--color-red)] bg-[var(--color-red)]/5"
                        : "border-[var(--color-border)] text-[var(--color-black)] focus:border-[var(--color-primary-color)]",
                    ].join(" ")}
                  />
                ) : (
                  <span className="font-semibold text-[var(--color-black)]">{formatBDT(r.amount)}</span>
                )}
              </div>

              {/* status */}
              <div className="col-span-1 flex justify-end">
                <span
                  className={[
                    "inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs",
                    rowMismatch
                      ? "border-[var(--color-red)]/25 bg-[var(--color-red)]/10 text-[var(--color-red)]"
                      : "border-[var(--color-green)]/25 bg-[var(--color-green)]/10 text-[var(--color-green)]",
                  ].join(" ")}
                >
                  {rowMismatch ? "!" : "✓"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* empty space rows like screenshot */}
      <div className="h-10 bg-white border-t border-[var(--color-border)]" />
    </div>
  );
}
