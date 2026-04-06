// app/(admin)/admin/dashboard/vendors/[vendorId]/_components/inventory/inventory-table.tsx
"use client";

import { Eye, Pencil } from "lucide-react";
import type { InventoryItem } from "../../_types/vendor-inventory";
import StatusBadge from "./ui/status-badge";

type Props = {
  items: InventoryItem[];
  onView: (id: string) => void;
  onEdit: (id: string) => void;
};

export default function InventoryTable({ items, onView, onEdit }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[980px] text-left">
        <thead>
          <tr className="text-xs font-bold text-slate-400">
            <th className="px-6 py-4">পণ্যের ছবি ও নাম</th>
            <th className="px-6 py-4">আইবাস কোড (৭-৯ডিজিট)</th>
            <th className="px-6 py-4 text-right">ইউনিট মূল্য (৳)</th>
            <th className="px-6 py-4 text-center">বর্তমান স্টক</th>
            <th className="px-6 py-4 text-center">অবস্থা</th>
            <th className="px-6 py-4 text-center">অ্যাকশন</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {items.map((it) => (
            <tr key={it.id} className="bg-white">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-slate-50">
                    <span className="text-[10px] font-bold text-slate-400">
                      IMG
                    </span>
                  </div>

                  <div>
                    <div className="text-sm font-extrabold text-slate-900">
                      {it.title}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {it.subTitle}
                    </div>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-extrabold text-slate-600">
                  {it.ibasCode}
                </span>
              </td>

              <td className="px-6 py-4 text-right text-sm font-extrabold text-slate-800">
                {it.unitPrice.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>

              <td className="px-6 py-4 text-center text-sm font-extrabold">
                <span className={it.stock < 10 ? "text-red-500" : "text-slate-800"}>
                  {toBnDigits(it.stock)} টি
                </span>
              </td>

              <td className="px-6 py-4 text-center">
                <StatusBadge status={it.status} />
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-4 text-slate-500">
                  <button
                    type="button"
                    className="hover:text-primary-color"
                    onClick={() => onView(it.id)}
                    aria-label="view"
                  >
                    <Eye className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    className="hover:text-primary-color"
                    onClick={() => onEdit(it.id)}
                    aria-label="edit"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {items.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-6 py-10 text-center text-sm text-slate-500">
                কোনো পণ্য পাওয়া যায়নি
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

function toBnDigits(n: number) {
  const map: Record<string, string> = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };
  return String(n).replace(/[0-9]/g, (d) => map[d]);
}