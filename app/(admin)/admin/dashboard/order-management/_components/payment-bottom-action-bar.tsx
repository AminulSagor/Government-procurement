"use client";

import React from "react";
import { X, ShieldCheck } from "lucide-react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";

export default function PaymentBottomActionBar({
  message = "অফিস কর্তৃক পেমেন্ট ডাটা সাবমিট করা হয়েছে।",
  note = "অনুগ্রহ করে যাচাই-বাছাই করুন। ভুল থাকলে কারণ উল্লেখসহ প্রদান করুন।",
  onReject,
  onVerify,
  disabledReject,
  disabledVerify,
}: {
  message?: string;
  note?: string;
  onReject?: () => void;
  onVerify?: () => void;
  disabledReject?: boolean;
  disabledVerify?: boolean;
}) {
  return (
    <Card className="p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* left */}
        <div className="min-w-0 flex items-start gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-primary-color shrink-0" />
          <div className="min-w-0">
            <div className="text-black font-semibold">{message}</div>
            <div className="mt-1 text-sm text-light-gray">{note}</div>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0 lg:justify-end">
          <button
            type="button"
            onClick={onReject}
            disabled={disabledReject}
            className={[
              "inline-flex items-center justify-center gap-2",
              "px-5 py-2 rounded-md font-semibold",
              "bg-white text-red border border-red/40",
              "transition-all duration-150 ease-out",
              "hover:brightness-105 active:scale-[0.97] active:translate-y-px",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
            ].join(" ")}
          >
            <X className="h-4 w-4" />
            প্রত্যাখ্যান করুন
          </button>

          <PrimaryButton
            onClick={onVerify}
            className={[
              "px-5 py-2",
              "inline-flex items-center justify-center gap-2",
              disabledVerify ? "opacity-50 pointer-events-none" : "",
            ].join(" ")}
          >
            <ShieldCheck className="h-4 w-4" />
            ভেরিফাই ও অনুমোদন করুন
          </PrimaryButton>
        </div>
      </div>
    </Card>
  );
}
