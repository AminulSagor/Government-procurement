"use client";

import { cn } from "@/lib/utils";
import type { BudgetRow } from "@/app/(office)/office/types/budget-entry.types";

export default function BudgetEntryTable({
  rows,
  subtotal,
  mode,
}: {
  rows: BudgetRow[];
  subtotal: any;
  mode: "edit" | "view";
}) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[1200px] w-full border-collapse">
        <thead>
          {/* group header row */}
          <tr className="bg-[rgba(120,185,181,0.12)]">
            <th rowSpan={2} className={thLeft()}>
              কোড
            </th>
            <th rowSpan={2} className={thLeft()}>
              বিবরণ
            </th>

            <th colSpan={8} className={thCenter()}>
              অনুমোদিত
            </th>

            <th rowSpan={2} className={thCenter()}>
              বিভাজ্যকৃত অর্থ ব্যয়ের হার (%)
            </th>

            <th colSpan={2} className={thCenter()}>
              অননুমোদিত
            </th>
          </tr>

          {/* columns row (DO NOT SKIP) */}
          <tr className="bg-[rgba(120,185,181,0.12)]">
            <th className={thCenterSmall()}>বাজেট</th>
            <th className={thCenterSmall()}>সংশোধিত</th>
            <th className={thCenterSmall("border-x border-secondary-color/60")}>
              বিভাজন
            </th>
            <th className={thCenterSmall()}>প্রত্যাশার</th>
            <th className={thCenterSmall()}>মোট</th>
            <th className={thCenterSmall()}>ব্যয় (প্রকৃতপক্ষে)</th>
            <th className={thCenterSmall("border-x border-secondary-color/60")}>
              প্রকৃত ব্যয়
            </th>
            <th className={thCenterSmall()}>অবশিষ্ট</th>

            <th className={thCenterSmall()}>বিভাজন</th>
            <th className={thCenterSmall()}>প্রত্যাশার</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r, idx) => (
            <tr
              key={`${r.code}-${r.itemCode}-${idx}`}
              className="border-t border-primary-color/10"
            >
              <td className={tdCenter()}>{r.code}</td>

              <td className={tdLeft()}>
                <div className="flex items-center gap-3">
                  <div className="min-w-[56px] rounded-md border border-primary-color/15 bg-white px-3 py-2 text-center text-sm font-semibold text-black">
                    {r.itemCode}
                  </div>
                  <div className="text-sm text-black">{r.description}</div>
                </div>
              </td>

              {/* Approved */}
              <td className={tdCenter()}>{cell(mode, r.approvedBudget)}</td>
              <td className={tdCenter()}>{cell(mode, r.approvedRevised)}</td>
              <td className={tdCenter("border-x border-secondary-color/60")}>
                {cell(mode, r.approvedDivision)}
              </td>
              <td className={tdCenter()}>{cell(mode, r.approvedExpected)}</td>
              <td className={tdCenter()}>{r.approvedTotal}</td>
              <td className={tdCenter()}>{cell(mode, r.approvedExpense)}</td>
              <td className={tdCenter("border-x border-secondary-color/60")}>
                {cell(mode, r.actualExpense)}
              </td>
              <td className={tdCenter()}>{r.remaining}</td>

              {/* Rate */}
              <td className={tdCenter()}>
                <span
                  className={cn(
                    "text-xs font-semibold",
                    r.usageRatePct === "০%" ? "text-orange" : "text-green"
                  )}
                >
                  {r.usageRatePct}
                </span>
              </td>

              {/* Unapproved */}
              <td className={tdCenter()}>{cell(mode, r.unapprovedDivision)}</td>
              <td className={tdCenter()}>{cell(mode, r.unapprovedExpected)}</td>
            </tr>
          ))}

          {/* subtotal row */}
          <tr className="border-t border-primary-color/20 bg-[rgba(120,185,181,0.08)]">
            <td className={tdLeft()} colSpan={2}>
              <div className="px-2 py-3 text-primary-color font-semibold">
                উপমোট - {rows?.[0]?.code ? "মুদ্রণ ও মনিহারি" : "ব্যয়ের খাত"}:
              </div>
            </td>

            <td className={tdCenter()}>{subtotal.approvedBudget}</td>
            <td className={tdCenter()}>{subtotal.approvedRevised}</td>
            <td className={tdCenter("border-x border-secondary-color/60")}>
              {subtotal.approvedDivision}
            </td>
            <td className={tdCenter()}>{subtotal.approvedExpected}</td>
            <td className={tdCenter()}>{subtotal.approvedTotal}</td>
            <td className={tdCenter()}>{subtotal.approvedExpense}</td>
            <td className={tdCenter("border-x border-secondary-color/60")}>
              {subtotal.actualExpense}
            </td>
            <td className={tdCenter()}>{subtotal.remaining}</td>

            <td className={tdCenter()} />
            <td className={tdCenter()}>{subtotal.unapprovedDivision}</td>
            <td className={tdCenter()}>{subtotal.unapprovedExpected}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* helpers */
function cell(mode: "edit" | "view", value: string) {
  if (mode === "view") return <span className="text-sm text-black">{value}</span>;

  return (
    <input
      defaultValue={value}
      className={cn(
        "h-9 w-14 rounded-md border border-primary-color/15 bg-white text-center text-sm text-black outline-none",
        "focus:border-primary-color/40"
      )}
      inputMode="numeric"
    />
  );
}

function thLeft() {
  return cn(
    "px-4 py-3 text-left text-sm font-semibold text-primary-color",
    "border-b border-primary-color/15"
  );
}
function thCenter() {
  return cn(
    "px-3 py-3 text-center text-sm font-semibold text-primary-color",
    "border-b border-primary-color/15"
  );
}
function thCenterSmall(extra = "") {
  return cn(
    "px-2 py-2 text-center text-xs font-semibold text-medium-gray",
    "border-b border-primary-color/15",
    extra
  );
}
function tdLeft() {
  return cn("px-4 py-3 text-left");
}
function tdCenter(extra = "") {
  return cn("px-2 py-3 text-center text-sm text-black", extra);
}
