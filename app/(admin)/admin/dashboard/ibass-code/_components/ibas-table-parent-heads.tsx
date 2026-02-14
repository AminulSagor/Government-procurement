"use client";

import { Eye, Pencil } from "lucide-react";
import { ParentHeadItem } from "../_types/ibas-codes.types";
import Pill from "./pill";
import StatusToggle from "./status-toggle";


export default function ParentHeadsTable({ rows }: { rows: ParentHeadItem[] }) {
  return (
    <div className="rounded-xl border border-border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="bg-[var(--color-off-white)]">
              <th className="px-5 py-4 text-left text-xs font-bold text-[var(--color-medium-gray)]">কোড (৪-ডিজিট)</th>
              <th className="px-5 py-4 text-left text-xs font-bold text-[var(--color-medium-gray)]">বিবরণ (বাংলা)</th>
              <th className="px-5 py-4 text-left text-xs font-bold text-[var(--color-medium-gray)]">বিবরণ (ইংরেজি)</th>
              <th className="px-5 py-4 text-center text-xs font-bold text-[var(--color-medium-gray)]">মোট ম্যাপ-করার কোড সংখ্যা</th>
              <th className="px-5 py-4 text-center text-xs font-bold text-[var(--color-medium-gray)]">অবস্থা</th>
              <th className="px-5 py-4 text-center text-xs font-bold text-[var(--color-medium-gray)]">অ্যাকশন</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-border">
                <td className="px-5 py-4">
                  <Pill>{r.parentCode4}</Pill>
                </td>

                <td className="px-5 py-4 text-sm font-semibold text-black">{r.expenseCategoryBn}</td>
                <td className="px-5 py-4 text-sm text-[var(--color-medium-gray)]">{r.expenseCategoryEnglish}</td>

                <td className="px-5 py-4 text-center">
                  <Pill>{r.totalMappedEconomicCodes}</Pill>
                </td>

                <td className="px-5 py-4 text-center">
                  <StatusToggle checked={r.status === "active"} />
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center justify-center gap-4 text-[var(--color-medium-gray)]">
                    <button className="hover:text-black" type="button" aria-label="edit">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button className="hover:text-black" type="button" aria-label="view">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td className="px-5 py-10 text-center text-sm text-[var(--color-medium-gray)]" colSpan={6}>
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
