"use client";

import React from "react";
import Card from "@/components/cards/card";
import { FileText } from "lucide-react";

type PaymentHistoryRow = {
  id: string;
  date: string; // already localized (Bangla)
  type: string; // e.g. "অগ্রিম পেমেন্ট"
  amount: number;
  docLabel?: string; // e.g. "দেখুন"
  onDocClick?: () => void;
};

const formatBDT = (amount: number) =>
  `৳ ${new Intl.NumberFormat("bn-BD").format(amount)}`;

const PaymentHistory = ({
  rows = [
    {
      id: "r1",
      date: "২১ অক্টোবর, ২০২৩",
      type: "অগ্রিম পেমেন্ট",
      amount: 348250,
      docLabel: "দেখুন",
      onDocClick: () => {},
    },
  ],
}: {
  rows?: PaymentHistoryRow[];
}) => {
  return (
    <Card className="bg-white rounded-2xl border border-off-white shadow-sm overflow-hidden px-0 py-5">
      {/* Header */}
      <div className="px-6 py-2">
        <p className="text-base font-extrabold text-black">
          পেমেন্ট ট্রানজ্যাকশন ইতিহাস
        </p>
      </div>
      <div className="mt-3 h-px w-full bg-off-white" />

      {/* Table */}
      <div className="px-6 pt-4">
        <div className="w-full overflow-x-auto">
          <table className="w-full  border-collapse">
            <thead>
              <tr className="text-sm font-bold text-light-gray">
                <th className="py-3 text-left px-3">তারিখ</th>
                <th className="py-3 text-left  px-3">ধরণ</th>
                <th className="py-3 text-center  px-3">পরিমাণ</th>
                <th className="py-3 text-right">নথি</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {rows.map((row) => (
                <tr key={row.id} className="text-sm">
                  <td className="py-4 text-light-gray  whitespace-nowrap">{row.date}</td>

                  <td className="py-4 font-extrabold text-primary-color px-3  whitespace-nowrap">
                    {row.type}
                  </td>

                  <td className="py-4 text-center font-extrabold text-black whitespace-nowrap px-3">
                    {formatBDT(row.amount)}
                  </td>

                  <td className="py-4 text-right px-3">
                    <button
                      type="button"
                      onClick={row.onDocClick}
                      className="inline-flex items-center gap-2 font-extrabold text-primary-color hover:opacity-90"
                    >
                      <FileText className="h-4 w-4" />
                      <span>{row.docLabel ?? "দেখুন"}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <p className="mt-4 text-xs font-semibold text-light-gray">
          * নথি লিংকে ক্লিক করলে পেমেন্ট রসিদ বা চালানের পিডিএফ প্রাপ্তি হবে
        </p>
      </div>
    </Card>
  );
};

export default PaymentHistory;
