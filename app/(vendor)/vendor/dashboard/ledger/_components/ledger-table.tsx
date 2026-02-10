"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LedgerRow } from "../_types/payment-ledger.types";
import StatusPill from "./status-pill";

function formatBDT(n: number) {
  return `৳ ${n.toLocaleString("bn-BD")}`;
}

export default function LedgerTable({ rows }: { rows: LedgerRow[] }) {
  return (
    <div className="w-full overflow-hidden border border-gray/10 bg-white">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[980px] border-separate border-spacing-0">
          {/* header */}
          <thead>
            <tr className="bg-secondary/40 text-left">
              <th className="px-6 py-4 text-xs font-semibold text-light-gray">
                তারিখ
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-light-gray">
                ট্রানজ্যাকশন আইডি
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-light-gray">
                বিবরণ
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-light-gray">
                বিলের পরিমাণ
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-light-gray">
                ভ্যাট/ট্যাক্স
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-light-gray">
                মোট প্রাপ্তি
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-light-gray">
                স্ট্যাটাস
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-light-gray">
                ডকুমেন্ট
              </th>
            </tr>
          </thead>

          {/* body */}
          <tbody>
            {rows.map((r, idx) => {
              const vat = r.vatOrTax ?? 0;

              return (
                <tr
                  key={r.id}
                  className={cn(
                    "border-t border-gray/10",
                    "hover:bg-secondary/30"
                  )}
                >
                  {/* date */}
                  <td className="px-6 py-5 text-sm font-medium text-gray">
                    {r.dateText}
                  </td>

                  {/* txn id (smaller + muted like screenshot) */}
                  <td className="px-6 py-5">
                    <p className="text-xs font-medium text-light-gray">
                      {r.transactionId}
                    </p>
                  </td>

                  {/* description (title + invoice line) */}
                  <td className="px-6 py-5">
                    <p className="text-sm font-semibold text-gray">{r.title}</p>
                    <p className="mt-1 text-xs font-medium text-light-gray">
                      {r.invoiceText}
                    </p>
                  </td>

                  {/* bill amount */}
                  <td className="px-6 py-5 text-sm font-semibold text-gray">
                    {formatBDT(r.billAmount)}
                  </td>

                  {/* vat/tax */}
                  <td className="px-6 py-5 text-sm font-semibold">
                    {vat === 0 ? (
                      <span className="text-light-gray">-</span>
                    ) : vat < 0 ? (
                      <span className="text-[#EF4444]">
                        - {formatBDT(Math.abs(vat))}
                      </span>
                    ) : (
                      <span className="text-green">+ {formatBDT(vat)}</span>
                    )}
                  </td>

                  {/* total received */}
                  <td className="px-6 py-5 text-sm font-semibold text-green">
                    + {formatBDT(r.totalPaid)}
                  </td>

                  {/* status */}
                  <td className="px-6 py-5">
                    <StatusPill status={r.status} />
                  </td>

                  {/* document (PDF icon like screenshot) */}
                  <td className="px-6 py-5">
                    <button
                      type="button"
                      onClick={() => null}
                      className={cn(
                        "grid h-8 w-8 place-items-center rounded-md",
                        "text-[#EF4444] hover:opacity-80"
                      )}
                      aria-label="Document"
                      title="Document"
                    >
                      {/* simple pdf icon */}
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 2h7l5 5v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 2v6h6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 14h8"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 17h6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 12h6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
