"use client";

import React from "react";
import { FileText } from "lucide-react";
import Card from "@/components/cards/card";
import { OrderDetails } from "@/app/(office)/office/types/order-details-type";

export default function PaymentHistoryCard({ order }: { order: OrderDetails }) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="border-b border-primary-color/10 px-5 py-4">
        <h2 className="text-sm font-extrabold text-black">পেমেন্ট ট্রানজাকশন হিস্টোরি</h2>
      </div>

      <div className="px-5 py-4">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-left">
            <thead>
              <tr className="text-xs font-extrabold text-light-gray">
                <th className="py-3">তারিখ</th>
                <th className="py-3">ধরণ</th>
                <th className="py-3">পরিমাণ</th>
                <th className="py-3 text-right">নথি</th>
              </tr>
            </thead>

            <tbody>
              {order.paymentHistory.map((p) => (
                <tr key={p.id} className="border-t border-primary-color/10">
                  <td className="py-4 text-xs font-bold text-black">{p.dateText}</td>
                  <td className="py-4 text-xs font-extrabold text-primary-color">{p.typeLabel}</td>
                  <td className="py-4 text-xs font-extrabold text-black">{p.amountText}</td>
                  <td className="py-4 text-right">
                    <button type="button" className="inline-flex items-center gap-2 text-xs font-extrabold text-primary-color hover:underline">
                      <FileText className="h-4 w-4" />
                      {p.docLabel ?? "দেখুন"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-[11px] font-bold text-light-gray">
          * নথি লিংকে ক্লিক করলে পেমেন্ট রসিদ বা চালান প্রিন্ট প্রদর্শিত হবে
        </p>
      </div>
    </Card>
  );
}