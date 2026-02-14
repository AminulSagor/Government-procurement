"use client";

import type { IbasReportRow } from "../_types/ibas-report.types";
import SystemDataTable from "./system-data-table";
import MatchCard from "./match-card";

import { formatBDT } from "../_data/ibas-report-demo-data";
import MismatchCard from "./mismatch-card";

export default function SystemDataPanel({
  titleBn,
  rows,
  total,
  editMode,
  mismatch,
  onToggleEdit,
  onChangeRow,
}: {
  titleBn: string;
  rows: IbasReportRow[];
  total: number;
  editMode: boolean;
  mismatch: boolean;
  onToggleEdit: () => void;
  onChangeRow: (id: string, patch: Partial<IbasReportRow>) => void;
}) {
  return (
    <div className="space-y-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-black)]">
          <span className="text-[var(--color-primary-color)]">▦</span>
          {titleBn}
        </div>

        <button
          type="button"
          onClick={onToggleEdit}
          className={[
            "inline-flex h-9 items-center gap-2 rounded-lg border px-3 text-sm font-medium",
            editMode
              ? "border-[var(--color-border)] bg-white text-[var(--color-light-gray)] hover:bg-[var(--color-off-white)]"
              : "border-transparent bg-[var(--color-primary-color)] text-white hover:opacity-95",
          ].join(" ")}
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/20">
            ✎
          </span>
          Edit Mode
        </button>
      </div>

      {/* table + total */}
      <div className="rounded-xl border border-[var(--color-border)] bg-white p-4">
        <SystemDataTable rows={rows} editMode={editMode} mismatch={mismatch} onChangeRow={onChangeRow} />

        <div className="mt-3 flex items-center justify-center gap-2 border-t border-[var(--color-border)] pt-3">
          <div className="text-sm font-semibold text-[var(--color-black)]">মোট পরিমাণ (Total):</div>
          <div
            className={[
              "text-sm font-bold",
              mismatch ? "text-[var(--color-red)]" : "text-[var(--color-primary-color)]",
            ].join(" ")}
          >
            {formatBDT(total)}
          </div>

          {mismatch && (
            <span className="ml-2 rounded-full bg-[var(--color-red)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-red)]">
              অমিল পাওয়া গেছে
            </span>
          )}
        </div>
      </div>

      {/* match / mismatch card */}
      {mismatch ? (
        <MismatchCard />
      ) : (
        <MatchCard
          percent={100}
          textBn="Total calculated automatically matches OCR results from the attached PDF document."
        />
      )}
    </div>
  );
}
