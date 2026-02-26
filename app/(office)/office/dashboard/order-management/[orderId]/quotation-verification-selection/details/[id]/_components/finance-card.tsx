"use client";

import Card from "@/components/cards/card";
import { formatMoney } from "./utils";
import {
  FinancialBreakdown,
  TaxLine,
} from "@/app/(office)/office/types/quotation-verification-details-types";
import Link from "next/link";

function Dot({ color }: { color: TaxLine["dot"] }) {
  const cls =
    color === "blue" ? "bg-blue" : color === "orange" ? "bg-orange" : "bg-red";
  return <span className={`inline-block h-2 w-2 rounded-full ${cls}`} />;
}

export default function FinanceCard({
  finance,
}: {
  finance: FinancialBreakdown;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-color/25">
            <span className="text-primary-color font-semibold">🧾</span>
          </div>
          <div>
            <h3 className="text-base font-semibold text-black">
              আর্থিক প্রস্তাবনা ও টার্ম ব্রেকডাউন
            </h3>
          </div>
        </div>

        <p className="text-sm text-medium-gray">
          বাজেট কোড:{" "}
          <span className="font-semibold text-black">{finance.budgetCode}</span>
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3 text-sm">
          <span className="text-medium-gray">অর্ডার প্রতি একক মূল্য:</span>
          <span className="font-semibold text-black">
            {formatMoney(finance.unitPrice)}
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm sm:justify-end">
          <span className="text-medium-gray">অর্ডারের মোট মূল্য:</span>
          <span className="font-semibold text-black">
            {formatMoney(finance.totalPrice)}
          </span>
        </div>
      </div>

      <div className="mt-5 border-t border-medium-gray/15 pt-5 space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-medium-gray">উদ্ধৃত একক দর (প্রতি আইটেম)</span>
          <span className="font-semibold text-black">
            {formatMoney(finance.proposalUnitPrice)}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-medium-gray">উপ-মোট (Sub-total)</span>
          <span className="font-semibold text-black">
            {formatMoney(finance.subTotal)}
          </span>
        </div>

        <div className="rounded-lg border border-medium-gray/15 bg-off-white p-4">
          <div className="space-y-3">
            {finance.taxes.map((t) => (
              <div
                key={t.key}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-3">
                  <Dot color={t.dot} />
                  <span className="text-black">
                    {t.label} - {t.percent}%
                  </span>
                </div>
                <span className="font-semibold text-black">
                  {formatMoney(t.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-primary-color p-5 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm opacity-90">
                সর্বমোট প্রস্তাবিত মূল্য (ট্যাক্স সহ)
              </p>
              <p className="mt-2 text-3xl font-bold">
                {formatMoney(finance.grandTotal)}
              </p>
            </div>

            <div className="text-right">
              <span className="inline-flex items-center rounded-md border border-white/25 bg-white/10 px-3 py-2 text-xs">
                {finance.paymentTypeLabel}
              </span>
              <p className="mt-2 text-xs opacity-85">{finance.budgetNote}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-green p-5 text-white shadow-sm">
          <Link href={`/office/dashboard/order-management/1/quotation-verification-selection/details/1/advance-payment-entry`} className="block">
            <p className="text-sm opacity-90">অগ্রিম পেমেন্ট (ট্যাক্স সহ)</p>
            <p className="mt-2 text-3xl font-bold">
              {formatMoney(finance.advanceTotal)}
            </p>
          </Link>
        </div>
      </div>
    </Card>
  );
}
