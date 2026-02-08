"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LedgerRow } from "../_types/payment-ledger.types";
import StatusPill from "./status-pill";
import { FileText } from "lucide-react";

function formatBDT(n: number) {
  return `৳ ${n.toLocaleString("en-US")}`;
}

export default function LedgerTable({ rows }: { rows: LedgerRow[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[920px] border-separate border-spacing-0">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-3 text-xs font-semibold text-gray">তারিখ</th>
            <th className="px-4 py-3 text-xs font-semibold text-gray">
              ট্রানজ্যাকশন আইডি
            </th>
            <th className="px-4 py-3 text-xs font-semibold text-gray">বিবরণ</th>
            <th className="px-4 py-3 text-xs font-semibold text-gray">
              বিলের পরিমাণ
            </th>
            <th className="px-4 py-3 text-xs font-semibold text-gray">
              ভ্যাট/ট্যাক্স
            </th>
            <th className="px-4 py-3 text-xs font-semibold text-gray">
              মোট প্রাপ্তি
            </th>
            <th className="px-4 py-3 text-xs font-semibold text-gray">
              স্ট্যাটাস
            </th>
            <th className="px-4 py-3 text-xs font-semibold text-gray">
              ডকুমেন্ট
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => {
            const vat = r.vatOrTax ?? 0;

            return (
              <tr
                key={r.id}
                className="border-t border-gray/10 hover:bg-secondary"
              >
                <td className="px-4 py-4 text-sm text-gray">{r.dateText}</td>

                <td className="px-4 py-4">
                  <p className="text-sm font-semibold text-gray">
                    {r.transactionId}
                  </p>
                </td>

                <td className="px-4 py-4">
                  <p className="text-sm font-semibold text-gray">{r.title}</p>
                  <p className="mt-1 text-xs text-gray">{r.invoiceText}</p>
                </td>

                <td className="px-4 py-4 text-sm font-semibold text-gray">
                  {formatBDT(r.billAmount)}
                </td>

                <td className="px-4 py-4 text-sm font-semibold">
                  {vat === 0 ? (
                    <span className="text-gray">-</span>
                  ) : vat < 0 ? (
                    <span className="text-primary">
                      - {formatBDT(Math.abs(vat))}
                    </span>
                  ) : (
                    <span className="text-green">+ {formatBDT(vat)}</span>
                  )}
                </td>

                <td className="px-4 py-4 text-sm font-semibold text-green">
                  + {formatBDT(r.totalPaid)}
                </td>

                <td className="px-4 py-4">
                  <StatusPill status={r.status} />
                </td>

                <td className="px-4 py-4">
                  <button
                    type="button"
                    onClick={() => null}
                    className={cn(
                      "grid h-8 w-8 place-items-center rounded-md border border-gray/15 bg-white text-primary",
                      "hover:border-primary"
                    )}
                    aria-label="Document"
                    title="Document"
                  >
                    <FileText className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
