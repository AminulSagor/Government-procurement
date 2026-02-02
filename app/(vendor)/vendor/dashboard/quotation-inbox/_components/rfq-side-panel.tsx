"use client";

import React from "react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import Link from "next/link";
import { ArrowLeft, ClipboardList, Clock3 } from "lucide-react";

type Props = {
  backHref?: string;

  productTitle?: string;
  qtyText?: string;

  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;

  totalLabel?: string; // e.g. "৳ ৮,৫০,০০০"
  onSubmit?: () => void;
};

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-gray/15 bg-white px-3 py-2">
      <p className="text-sm font-extrabold text-gray">{value}</p>
      <p className="text-[10px] font-semibold text-gray/50 uppercase">{label}</p>
    </div>
  );
}

export default function RfqSidePanel({
  backHref = "/vendor/dashboard/quotation-inbox",
  productTitle = "HP LaserJet Pro P1102 Toner (Original)",
  qtyText = "Quantity (5 Units)",
  days = 2,
  hours = 18,
  minutes = 0,
  seconds = 8,
  totalLabel = "৳ ৮,৫০,০০০",
  onSubmit,
}: Props) {
  return (
    <div className="space-y-4">
      {/* back */}
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-xs font-bold text-gray/60 hover:text-gray"
      >
        <ArrowLeft size={16} />
        ফিরে যান
      </Link>

      {/* time remaining */}
      <Card className="rounded-2xl border border-gray/15 bg-white p-4">
        <div className="flex items-center gap-2">
          <span className="text-primary-color">
            <Clock3 size={16} />
          </span>
          <p className="text-xs font-extrabold text-gray">সময় বাকি (TIME REMAINING)</p>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2">
          <TimeBox value={String(days).padStart(2, "0")} label="days" />
          <TimeBox value={String(hours).padStart(2, "0")} label="hours" />
          <TimeBox value={String(minutes).padStart(2, "0")} label="minutes" />
          <TimeBox value={String(seconds).padStart(2, "0")} label="seconds" />
        </div>
      </Card>

      {/* requirements */}
      <Card className="rounded-2xl border border-gray/15 bg-white p-4">
        <div className="flex items-center gap-2">
          <span className="text-primary-color">
            <ClipboardList size={16} />
          </span>
          <p className="text-xs font-extrabold text-gray">রিকোয়ারমেন্ট ডিটেইলস</p>
        </div>

        <p className="mt-3 text-sm font-extrabold text-gray leading-5">
          {productTitle}
        </p>

        <p className="mt-1 text-xs font-semibold text-gray/50">{qtyText}</p>

        <div className="mt-3 rounded-xl bg-secondary p-3 text-xs font-semibold text-gray/60 leading-5">
          <p className="font-extrabold text-gray">Requirements:</p>
          <ul className="mt-2 list-disc pl-4 space-y-1">
            <li>Original / Genuine product</li>
            <li>Warranty must be included</li>
            <li>Delivery within timeline</li>
          </ul>
        </div>
      </Card>

      {/* question/note (optional small card like screenshot) */}
      <Card className="rounded-2xl border border-gray/15 bg-white p-4">
        <p className="text-xs font-extrabold text-gray">বিশেষ নির্দেশনা</p>

        <div className="mt-3 rounded-xl bg-secondary p-3 text-xs font-semibold text-gray/60 leading-5">
          আপনার কোটেশনে ট্যাক্স/ভ্যাট, ডেলিভারি টাইম ও ওয়ারেন্টি স্পষ্টভাবে উল্লেখ করুন।
        </div>
      </Card>

      {/* bottom summary */}
      <Card className="rounded-2xl border border-gray/15 bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-gray/50">মোট আনুমানিক মূল্য</p>
          <p className="text-sm font-extrabold text-gray">{totalLabel}</p>
        </div>

        <PrimaryButton
          className="mt-3 w-full py-2.5 text-xs font-extrabold"
          onClick={onSubmit}
        >
          কোটেশন সাবমিট করুন
        </PrimaryButton>
      </Card>
    </div>
  );
}
