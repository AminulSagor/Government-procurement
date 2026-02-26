"use client";

import React from "react";
import Card from "@/components/cards/card";
import { OrderDetails } from "@/app/(office)/office/types/order-details-type";

export default function PaymentSummaryCard({ order }: { order: OrderDetails }) {
  const ps = order.paymentSummary;

  return (
    <Card className="p-0 overflow-hidden">
      <div className="border-b border-primary-color/10 px-5 py-4">
        <h2 className="text-sm font-extrabold text-black">
          পেমেন্ট সারসংক্ষেপ
        </h2>
      </div>

      <div className="px-5 py-5 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold text-light-gray">মোট প্রদেয়:</p>
          <p className="text-sm font-extrabold text-black">
            {ps.totalPaidText}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs font-bold text-light-gray">অগ্রিম পরিশোধিত:</p>
          <div className="text-right">
            <p className="text-sm font-extrabold text-green">
              {ps.alreadyPaidText}
            </p>
            {ps.alreadyPaidHintText ? (
              <p className="text-[11px] font-bold text-green">
                {ps.alreadyPaidHintText}
              </p>
            ) : null}
          </div>
        </div>

        <div className="border-t border-primary-color/10 pt-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-extrabold text-red">বকেয়া পেমেন্ট:</p>
            <p className="text-sm font-extrabold text-red">{ps.dueText}</p>
          </div>

          {ps.dueHintText ? (
            <div className="mt-2 flex justify-end">
              <span className="rounded-full bg-red/10 px-3 py-1 text-[11px] font-extrabold text-red">
                {ps.dueHintText}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
