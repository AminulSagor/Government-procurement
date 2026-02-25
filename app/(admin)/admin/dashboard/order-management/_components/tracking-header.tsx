// app/(admin)/admin/(pages)/orders/payment-tracking/_components/tracking-header.tsx
"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import SecondaryButton from "@/components/buttons/secondary-button";

type Props = {
  reqId: string;
  officeName: string;
  createdAt: string;
  sectorCode?: string;
  onBack: () => void;
};

export default function TrackingHeader({
  reqId,
  officeName,
  createdAt,
  sectorCode = "০৩৫৫",
  onBack,
}: Props) {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      {/* left */}
      <div className="flex items-center gap-4">
        <SecondaryButton
          onClick={onBack}
          className="px-3 py-2 text-sm flex items-center gap-2 rounded-lg"
        >
          <ArrowLeft className="h-4 w-4" />
          BACK
        </SecondaryButton>

        <div>
          <div className="text-black text-lg font-bold">
            পেমেন্ট প্রমাণপত্র যাচাইকরণ: #{reqId}
          </div>
          <div className="text-light-gray text-xs">
            অফিস কর্তৃক পেমেন্ট ডাটা ও ইনভয়েস যাচাই করুন
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center gap-3">
        <MetaPill
          label="অফিস"
          value={officeName}
          valueClass="text-primary-color"
        />
        <MetaPill label="সেক্টর" value={sectorCode} valueClass="text-black" />
        <MetaPill label="তারিখ" value={createdAt} valueClass="text-black" />
      </div>
    </div>
  );
}

function MetaPill({
  label,
  value,
  valueClass,
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="px-4 py-2 rounded-lg border border-primary-color/20 bg-white text-sm flex flex-col">
      <span className="text-medium-gray mr-1">{label}</span>
      <span className={`font-semibold ${valueClass ?? "text-black"}`}>
        {value}
      </span>
    </div>
  );
}
