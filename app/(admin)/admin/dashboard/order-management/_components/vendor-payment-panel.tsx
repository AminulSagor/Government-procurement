"use client";

import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import type { RequisitionItem } from "../_types/order-management.type";
import { Landmark, Download } from "lucide-react";

function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <div className="text-light-gray text-xs">{label}</div>
      <div className="rounded-md border border-primary-color/20 bg-white px-3 py-3 text-sm text-black">
        {value}
      </div>
    </div>
  );
}

function BigBar({
  title,
  amount,
  totalBill,
  tone,
}: {
  title: string;
  amount: number;
  totalBill: number;
  tone: "green" | "neutral" | "yellow";
}) {
  const cls =
    tone === "green"
      ? "bg-green/10 border-green/20"
      : tone === "yellow"
        ? "bg-yellow/20 border-yellow/30"
        : "bg-off-white border-primary-color/10";

  return (
    <div className={["relative rounded-xl border p-5", cls].join(" ")}>
      <div className="text-light-gray text-xs">{title}</div>
      <div
        className={[
          "mt-2 text-2xl font-extrabold",
          tone === "green"
            ? "text-black"
            : tone === "yellow"
              ? "text-orange"
              : "text-black",
        ].join(" ")}
      >
        {formatBDT(amount)}
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-primary-color/10 bg-white px-4 py-3">
        <div className="text-light-gray text-xs">মোট বিল</div>
        <div className="text-black font-bold">{formatBDT(totalBill)}</div>
      </div>
    </div>
  );
}

export default function VendorPaymentPanel({
  item,
}: {
  item: RequisitionItem;
}) {
  const v = item.payment.vendor;

  return (
    <Card className="p-0 overflow-hidden">
      <div className="px-5 py-4 border-b border-primary-color/10">
        <div className="text-black font-bold text-lg">পেমেন্ট ওয়ার্কস্পেস</div>
      </div>

      <div className="p-5 space-y-5">
        {/* big bars (screenshot) */}
        <div className="space-y-4">
          <BigBar
            title={`অফিস অগ্রিম পেমেন্ট (${v.officeAdvancePercent}%)`}
            amount={v.officeAdvanceAmount.amount}
            totalBill={v.invoiceTotal.amount}
            tone="green"
          />

          <BigBar
            title={`ভেন্ডর দাবিকৃত অর্থ (${v.vendorDuePercent}%)`}
            amount={v.vendorDueAmount.amount}
            totalBill={v.invoiceTotal.amount}
            tone="neutral"
          />

          <BigBar
            title="বকেয়া"
            amount={v.pendingAmount.amount}
            totalBill={v.invoiceTotal.amount}
            tone="yellow"
          />
        </div>

        {/* bank */}
        <div className="flex items-center gap-2 text-black font-semibold">
          <Landmark className="h-4 w-4 text-primary-color" />
          ভেন্ডর ব্যাংক তথ্য
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="ব্যাংকের নাম" value={v.bank.bankName} />
          <Field label="হিসাবের নাম" value={v.bank.accountName} />
          <Field label="হিসাব নম্বর" value={v.bank.accountNo} />
          <Field label="রাউটিং নম্বর" value={v.bank.routingNo} />
          <div className="md:col-span-2">
            <Field label="শাখা" value={v.bank.branchName} />
          </div>
        </div>

        {/* actions */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <SecondaryButton className="px-6 py-3 text-sm w-full md:w-auto">
            <span className="inline-flex items-center gap-2">
              <Download className="h-4 w-4" />
              ডকুমেন্ট ডাউনলোড
            </span>
          </SecondaryButton>

          <PrimaryButton className="px-10 py-3 text-sm w-full md:w-[320px]">
            অফিস পেমেন্ট সম্পন্ন করুন
          </PrimaryButton>

          <div className="text-light-gray text-xs text-center">
            * পেমেন্ট সম্পন্ন করার আগে ব্যাংক তথ্য এবং বাকি টাকা পুনরায় মিলিয়ে
            নিন
          </div>
        </div>
      </div>
    </Card>
  );
}
