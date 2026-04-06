"use client";

import { useMemo, useState } from "react";
import PdfPreviewPanel from "./pdf-preview-panel";
import SystemDataPanel from "./system-data-panel";
import { demoIbasReport } from "../_data/ibas-report-demo-data";
import type { IbasReportRow } from "../_types/ibas-report.types";

export default function IbasReportPage() {
  const [editMode, setEditMode] = useState(false);
  const [rows, setRows] = useState<IbasReportRow[]>(demoIbasReport.rows);

  const total = useMemo(() => rows.reduce((s, r) => s + (Number(r.amount) || 0), 0), [rows]);

  // 🔸 mismatch rule (you can replace later with OCR compare)
  const isMismatch = useMemo(() => rows.some((r) => Number(r.amount) === 0), [rows]);

  return (
    <div className="min-h-[calc(100vh-56px)] bg-[var(--color-off-white)]">
      <div className="p-4">
        <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-4">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-7">
            <PdfPreviewPanel titleBn={demoIbasReport.pdf.titleBn} pdfUrl={demoIbasReport.pdf.url} />
          </div>

          {/* RIGHT */}
          <div className="col-span-12 lg:col-span-5">
            <SystemDataPanel
              titleBn={demoIbasReport.system.titleBn}
              rows={rows}
              total={total}
              editMode={editMode}
              mismatch={isMismatch}
              onToggleEdit={() => setEditMode((p) => !p)}
              onChangeRow={(id, patch) =>
                setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)))
              }
            />
          </div>
        </div>
      </div>

      {/* ✅ Bottom bar like screenshot */}
      <div className="sticky bottom-0 w-full border-t border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-3 flex items-center justify-between">
          <div
            className={[
              "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
              isMismatch
                ? "bg-[var(--color-red)]/10 text-[var(--color-red)]"
                : "bg-[var(--color-green)]/10 text-[var(--color-green)]",
            ].join(" ")}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
            {isMismatch ? "তথ্য অমিল (Data Mismatch)" : "তথ্য নথির সাথে মিলেছে"}
          </div>

          <button
            type="button"
            disabled={isMismatch}
            className={[
              "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold",
              isMismatch
                ? "bg-[var(--color-off-white)] text-[var(--color-light-gray)] cursor-not-allowed"
                : "bg-[var(--color-primary-color)] text-white hover:opacity-95",
            ].join(" ")}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              ✓
            </span>
            অনুমোদন করুন
          </button>
        </div>
      </div>
    </div>
  );
}
