"use client";

import { Eye, Pencil } from "lucide-react";
import { EconomicCodeItem } from "../_types/ibas-codes.types";
import Pill from "./pill";
import StatusToggle from "./status-toggle";


function typeLabel(t: EconomicCodeItem["type"]) {
  if (t === "procurement_product") return "ক্রয় আইটেম";
  if (t === "procurement_service") return "ক্রয় আইটেম";
  return "বেতন/ভাতা";
}

function typeChipClass(t: EconomicCodeItem["type"]) {
  if (t === "salary_allowance") return "bg-[var(--color-off-white)] text-[var(--color-medium-gray)] border-border";
  return "bg-[rgba(120,185,181,0.18)] text-[var(--color-green)] border-[rgba(120,185,181,0.35)]";
}

export default function EconomicCodesTable({
  rows,
  onStatusChange,
  onView,
}: {
  rows: EconomicCodeItem[];
  onStatusChange: (code: string, status: boolean) => void;
  onView: (row: EconomicCodeItem) => void;
}) {
  return (
    <div className="rounded-xl border border-border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="bg-[var(--color-off-white)]">
              <th className="px-5 py-4 text-left text-xs font-bold text-[var(--color-medium-gray)]">কোড</th>
              <th className="px-5 py-4 text-left text-xs font-bold text-[var(--color-medium-gray)]">নাম (বাংলা)</th>
              <th className="px-5 py-4 text-left text-xs font-bold text-[var(--color-medium-gray)]">প্যারেন্ট হেড</th>
              <th className="px-5 py-4 text-center text-xs font-bold text-[var(--color-medium-gray)]">ধরণ</th>
              <th className="px-5 py-4 text-center text-xs font-bold text-[var(--color-medium-gray)]">অবস্থা</th>
              <th className="px-5 py-4 text-center text-xs font-bold text-[var(--color-medium-gray)]">অ্যাকশন</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-border">
                <td className="px-5 py-4">
                  <Pill>{r.economicCode7}</Pill>
                </td>

                <td className="px-5 py-4">
                  <div className="text-sm font-semibold text-black">{r.nameBn}</div>
                  <div className="text-xs text-[var(--color-medium-gray)]">{r.nameEn}</div>
                </td>

                <td className="px-5 py-4 text-sm text-[var(--color-medium-gray)]">
                  ↳ {r.parentCode4} - {r.parentTitleBn}
                </td>

                <td className="px-5 py-4 text-center">
                  <span
                    className={[
                      "inline-flex h-7 items-center rounded-full border px-3 text-xs font-bold",
                      typeChipClass(r.type),
                    ].join(" ")}
                  >
                    {typeLabel(r.type)}
                  </span>
                </td>

                <td className="px-5 py-4 text-center">
                  <StatusToggle
                    checked={r.status === "active"}
                    onChange={(checked) => onStatusChange(r.economicCode7, checked)}
                  />
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center justify-center gap-4 text-[var(--color-medium-gray)]">
                    <button className="hover:text-black" type="button" aria-label="edit">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      className="hover:text-black"
                      type="button"
                      aria-label="view"
                      onClick={() => onView(r)}
                    >
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
