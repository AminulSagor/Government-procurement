"use client";

import React from "react";
import Card from "@/components/cards/card";

type PaymentSummaryProps = {
  totalAmount?: number;
  paidAmount?: number;
  dueAmount?: number;
  paidPercent?: number; // 0-100
  dueNote?: string;
};

const formatBDT = (amount: number) =>
  `৳ ${new Intl.NumberFormat("bn-BD").format(amount)}`;

const PaymentSummary = ({
  totalAmount = 696500,
  paidAmount = 348250,
  dueAmount = 348250,
  paidPercent = 50,
  dueNote = "বকেয়া - পণ্য প্রাপ্তি সাপেক্ষ",
}: PaymentSummaryProps) => {
  return (
    <Card className="px-0 py-5">
      {/* Header */}
      <div className="px-5 border-b pb-2">
        <p className="text-base font-extrabold text-black">পেমেন্ট সারসংক্ষেপ</p>
      </div>

      {/* Body */}
      <div className="px-5 mt-2 space-y-2">
        {/* Total */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-light-gray">মোট প্রদেয়:</p>
          <p className="text-sm font-semibold text-black">
            {formatBDT(totalAmount)}
          </p>
        </div>

        {/* Paid */}
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-medium text-light-gray">
            অগ্রিম পরিশোধিত:
          </p>

          <div className="text-right text-green">
            <p className="text-lg font-extrabold">{formatBDT(paidAmount)}</p>
            <p className="mt-1 text-xs font-semibold ">
              {new Intl.NumberFormat("bn-BD").format(paidPercent)}% সম্পন্ন
            </p>
          </div>
        </div>

        {/* Dashed divider */}
        <div className="border-t border-dashed" />

        {/* Due */}
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-extrabold text-red">বকেয়া পেমেন্ট:</p>

          <div className="text-right">
            <p className="font-extrabold text-red">{formatBDT(dueAmount)}</p>
            <span className="mt-2 inline-flex rounded-full px-3 py-1 text-xs bg-red/10 text-red">
              {dueNote}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PaymentSummary;
