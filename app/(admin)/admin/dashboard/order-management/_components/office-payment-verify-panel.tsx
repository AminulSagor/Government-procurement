"use client";

import { useMemo, useState } from "react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import type { RequisitionItem } from "../_types/order-management.type";
import { Lock, FileText, Eye, X } from "lucide-react";

function formatBDT(n: number) {
  return `৳ ${new Intl.NumberFormat("bn-BD").format(n)}`;
}

export default function OfficePaymentVerifyPanel({
  item,
}: {
  item: RequisitionItem;
}) {
  const p = item.payment.office;
  const [open, setOpen] = useState(false);
  const warning = useMemo(() => p.matchStatus === "UNMATCHED", [p.matchStatus]);

  return (
    <Card className="p-0 overflow-hidden">
      {/* header */}
      <div className="px-5 py-4 border-b border-primary-color/10 flex items-start justify-between gap-3">
        <div>
          <div className="text-black font-bold text-lg">পেমেন্ট ভেরিফিকেশন</div>
          <div className="text-light-gray text-sm">
            অফিস কর্তৃক পেমেন্ট ডাটা যাচাই করুন
          </div>
        </div>

        <span className="px-4 py-2 rounded-full text-xs font-semibold border border-yellow/30 bg-yellow/20 text-orange">
          যাচাইকরণ প্রক্রিয়াধীন
        </span>
      </div>

      <div className="p-5 space-y-4">
        {/* fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-light-gray text-xs">অফিস কোড</div>
            <div className="relative rounded-md border border-primary-color/20 bg-white px-3 py-2 text-sm text-black">
              {p.officeCode}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-light-gray">
                <Lock className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-light-gray text-xs">প্রাপকের নাম</div>
            <div className="rounded-md border border-primary-color/20 bg-white px-3 py-2 text-sm text-black">
              {p.payeeName}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-light-gray text-xs">টাকার পরিমাণ</div>
            <div
              className={[
                "rounded-md border px-3 py-2 text-sm font-semibold flex items-center justify-between",
                p.matchStatus === "MATCHED"
                  ? "border-green/20 bg-green/10 text-green"
                  : "border-orange/20 bg-orange/10 text-orange",
              ].join(" ")}
            >
              <span>{formatBDT(p.enteredAmount.amount)}</span>
              <span className="text-xs">{p.matchStatus}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-light-gray text-xs">রেফারেন্স নম্বর</div>
            <div className="rounded-md border border-primary-color/20 bg-white px-3 py-2 text-sm text-black">
              {p.refNo}
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <div className="text-light-gray text-xs">মন্তব্য</div>
            <div className="rounded-md border border-primary-color/20 bg-white px-3 py-3 text-sm text-black">
              {p.notes}
            </div>
          </div>
        </div>

        {/* warning block (screenshot) */}
        {warning && (
          <div className="rounded-lg border border-yellow/30 bg-yellow/20 p-4">
            <div className="text-orange font-bold text-sm">
              সমস্যার নির্দেশনা
            </div>
            <div className="text-black text-sm mt-1">
              ডকুমেন্ট আংশিক এবং টাকার পরিমাণে অসামঞ্জস্য পাওয়া গেছে।
            </div>

            <div className="mt-3 flex flex-col sm:flex-row gap-3 sm:justify-end">
              <SecondaryButton className="px-4 py-2 text-sm border-orange text-orange">
                <span className="inline-flex items-center gap-2">
                  <Eye className="h-4 w-4" /> নোটিফাই করুন
                </span>
              </SecondaryButton>
              <PrimaryButton className="px-4 py-2 text-sm">
                <span className="inline-flex items-center gap-2">
                  রিসাবমিট পাঠান
                </span>
              </PrimaryButton>
            </div>
          </div>
        )}

        {/* evidence row */}
        <div className="text-light-gray text-xs">প্রমাণপত্র যাচাই</div>

        <div className="rounded-xl border border-primary-color/10 bg-white p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center text-red">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <div className="text-black font-semibold">{p.invoice.name}</div>
              <div className="text-light-gray text-xs">
                SIZE: {p.invoice.sizeText} | UPLOADED ON: {p.invoice.uploadedOn}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-end">
            <button
              className="px-3 py-2 text-sm flex items-center gap-2 bg-primary-color/10 text-primary-color border border-primary-color rounded-md"
              onClick={() => setOpen(true)}
            >
              <Eye size={18} />
              ভিউয়ারে দেখুন
            </button>

            <SecondaryButton className="px-3 py-2 text-sm border-red text-red">
              <span className="inline-flex items-center gap-2">
                <X className="h-4 w-4" /> প্রত্যাখ্যান করুন
              </span>
            </SecondaryButton>

            <PrimaryButton className="px-3 py-2 text-sm">
              ভেরিফাই ও অনুমোদন করুন
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
