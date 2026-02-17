"use client";

import { Eye, FileText } from "lucide-react";
import { OrderRow } from "../_types/order-management.types";
import OrderStatusPill from "./order-status-pill";

export default function OrderTable({ rows }: { rows: OrderRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white">
      <table className="w-full">
        {/* Header */}
        <thead className="bg-white">
          <tr className="text-left text-xs font-semibold text-[var(--color-light-gray)]">
            <th className="px-6 py-4">অর্ডার আইডি</th>
            <th className="px-6 py-4">তারিখ</th>
            <th className="px-6 py-4">দপ্তরের নাম ও আইডি</th>
            <th className="px-6 py-4">অর্থনৈতিক কোড</th>
            <th className="px-6 py-4">ভেন্ডর</th>
            <th className="px-6 py-4">মোট মূল্য</th>
            <th className="px-6 py-4">অর্ডারের ধাপ</th>
            <th className="px-6 py-4 text-right">অ্যাকশন</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => (
            <tr
              key={r.id}
              className="border-t border-[color-mix(in_oklab,var(--color-light-gray)_10%,transparent)] text-sm"
            >
              {/* order id */}
              <td className="px-6 py-6 font-semibold text-[var(--color-primary-color)]">
                {r.orderId}
              </td>

              {/* date */}
              <td className="px-6 py-6 text-[var(--color-light-gray)]">{r.date}</td>

              {/* office */}
              <td className="px-6 py-6">
                <div className="font-semibold text-[var(--color-black)]">{r.officeNameBn}</div>
                <div className="mt-1 text-xs text-[var(--color-light-gray)]">ID: {r.officeId}</div>
              </td>

              <td className="px-6 py-6 text-[var(--color-light-gray)]">{r.economicCode}</td>
              <td className="px-6 py-6 text-[var(--color-light-gray)]">{r.vendor}</td>

              {/* amount */}
              <td className="px-6 py-6 font-semibold text-[var(--color-black)]">{r.totalAmountBn}</td>

              {/* stage */}
              <td className="px-6 py-6">
                <OrderStatusPill stage={r.stage} />
              </td>

              {/* actions (icon only like screenshot) */}
              <td className="px-6 py-6">
                <div className="flex items-center justify-end gap-6">
                  <button
                    type="button"
                    className="text-[var(--color-primary-color)] hover:opacity-80"
                    title="View"
                    onClick={() => console.log("view", r.id)}
                  >
                    <Eye className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    className="text-[var(--color-light-gray)] hover:text-[var(--color-primary-color)]"
                    title="Report"
                    onClick={() => console.log("report", r.id)}
                  >
                    <FileText className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {rows.length === 0 && (
            <tr>
              <td
                colSpan={8}
                className="border-t border-[color-mix(in_oklab,var(--color-light-gray)_10%,transparent)] px-6 py-14 text-center text-sm text-[var(--color-light-gray)]"
              >
                কোনো অর্ডার পাওয়া যায়নি
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
