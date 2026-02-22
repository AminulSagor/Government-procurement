"use client";

import type { ProfitRow } from "../_types/analytics.types";
import { Eye } from "lucide-react";

function posNegClass(v: string) {
  if (v.trim().startsWith("-")) return "text-[var(--color-red)]";
  if (v.trim().startsWith("+")) return "text-[var(--color-green)]";
  return "text-[var(--color-black)]";
}

export default function ProfitTableRow({ row }: { row: ProfitRow }) {
  return (
    <tr className="border-t border-[rgba(100,116,139,0.10)] text-sm">
      <td className="px-5 py-4 text-[var(--color-light-gray)]">{row.dateBn}</td>

      <td className="px-5 py-4 font-bold text-[var(--color-black)]">{row.requisitionNo}</td>

      <td className="px-5 py-4 text-[var(--color-black)]">{row.officeBudgetBn}</td>

      <td className="px-5 py-4 text-[var(--color-black)]">{row.vendorRateBn}</td>

      <td className={"px-5 py-4 font-semibold " + posNegClass(row.systemSavingBn)}>
        {row.systemSavingBn}
      </td>

      <td className={"px-5 py-4 font-semibold " + posNegClass(row.vatTaxBn)}>{row.vatTaxBn}</td>

      <td className={"px-5 py-4 font-semibold " + posNegClass(row.netProfitBn)}>{row.netProfitBn}</td>

      <td className="px-5 py-4 text-right">
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(100,116,139,0.16)] bg-white"
          aria-label="view"
        >
          <Eye className="h-4 w-4 text-[var(--color-light-gray)]" />
        </button>
      </td>
    </tr>
  );
}
