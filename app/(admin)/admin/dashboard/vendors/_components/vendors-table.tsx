"use client";

import { Card } from "@/components/ui/card";
import type { VendorRow } from "../_types/vendors.types";
import VendorStatusPill from "./vendor-status-pill";
import VendorActions from "./vendor-actions";
import { bnNumber, bdtBn } from "../_utils/vendors.format";

export default function VendorsTable({
  rows,
  onVerify,
  onEdit,
  onView,
  onDelete,
}: {
  rows: VendorRow[];
  onVerify: (id: string) => void;
  onEdit: (id: string) => void;
  onView: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <Card className="rounded-2xl border border-[rgba(100,116,139,0.18)] bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-[980px] w-full text-left">
          <thead>
            <tr className="bg-[rgba(246,247,248,0.9)]">
              <th className="px-5 py-4 text-xs font-semibold text-[var(--color-medium-gray)]">
                ভেন্ডর নাম
              </th>
              <th className="px-5 py-4 text-xs font-semibold text-[var(--color-medium-gray)]">
                মালিক
              </th>
              <th className="px-5 py-4 text-xs font-semibold text-[var(--color-medium-gray)]">
                লোকেশন
              </th>
              <th className="px-5 py-4 text-xs font-semibold text-[var(--color-medium-gray)]">
                ক্যাটাগরি
              </th>
              <th className="px-5 py-4 text-xs font-semibold text-[var(--color-medium-gray)] text-center">
                মোট আলোচনাকৃত পণ্য
              </th>
              <th className="px-5 py-4 text-xs font-semibold text-[var(--color-medium-gray)] text-center">
                মোট বিক্রয় সংখ্যা
              </th>
              <th className="px-5 py-4 text-xs font-semibold text-[var(--color-medium-gray)] text-center">
                মোট বিক্রয়ের পরিমাণ
              </th>
              <th className="px-5 py-4 text-xs font-semibold text-[var(--color-medium-gray)]">
                স্ট্যাটাস
              </th>
              <th className="px-5 py-4 text-xs font-semibold text-[var(--color-medium-gray)] text-right">
                অ্যাকশন
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr
                key={r.id}
                className={`border-t border-[rgba(100,116,139,0.12)] ${
                  r.status === "pending" ? "bg-[rgba(234,88,12,0.06)]" : "bg-white"
                }`}
              >
                <td className="px-5 py-4">
                  <div className="font-semibold text-[var(--color-black)]">{r.vendorName}</div>
                  <div className="text-xs text-[var(--color-medium-gray)]">ID: {r.vendorId}</div>
                </td>

                <td className="px-5 py-4 text-sm text-[var(--color-black)]">{r.ownerName}</td>
                <td className="px-5 py-4 text-sm text-[var(--color-black)]">{r.location}</td>

                <td className="px-5 py-4 text-sm text-[var(--color-black)]">{r.category}</td>

                <td className="px-5 py-4 text-center text-sm font-semibold text-[var(--color-black)]">
                  {bnNumber(r.totalNegotiatedItems)}
                </td>

                <td className="px-5 py-4 text-center text-sm font-semibold text-[var(--color-black)]">
                  {bnNumber(r.totalSalesCount)}
                </td>

                <td className="px-5 py-4 text-center text-sm font-semibold text-[var(--color-blue)]">
                  {r.totalSalesAmount === 0 ? bnNumber(0) : bdtBn(r.totalSalesAmount)}
                </td>

                <td className="px-5 py-4">
                  <VendorStatusPill status={r.status} />
                </td>

                <td className="px-5 py-4">
                  <VendorActions
                    row={r}
                    onVerify={onVerify}
                    onEdit={onEdit}
                    onView={onView}
                    onDelete={onDelete}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* footer note (like screenshot) */}
      <div className="flex items-center justify-between gap-3 px-5 py-4 text-xs text-[var(--color-medium-gray)]">
        <div>১-৪ দেখানো হচ্ছে (মোট {rows.length} জন ভেন্ডরের মধ্যে)</div>
        <div />
      </div>
    </Card>
  );
}
