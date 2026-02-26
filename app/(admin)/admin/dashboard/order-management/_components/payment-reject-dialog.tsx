"use client";

import React from "react";
import { AlertCircle, X, CheckCircle2, Info } from "lucide-react";
import Card from "@/components/cards/card";
import Dialog from "@/components/dialog/dialog";
import SecondaryButton from "@/components/buttons/secondary-button";

export default function PaymentRejectDialog({
  open,
  onOpenChange,
  reason,
  onReasonChange,
  onConfirm,
  loading,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;

  reason?: string;
  onReasonChange?: (v: string) => void;

  onConfirm: () => void;
  loading?: boolean;
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      size="lg"
      position="center"
      className="border border-primary-color/15 rounded-2xl"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-red/10 border border-red/20 flex items-center justify-center text-red">
            <AlertCircle className="h-5 w-5" />
          </div>
          <div>
            <div className="text-black font-bold text-lg">
              পেমেন্ট প্রত্যাখ্যান করুন
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mt-5 space-y-4">
        <div className="text-black font-semibold">
          প্রত্যাখ্যানের কারণ লিখুন
        </div>

        <textarea
          placeholder="অফিসের অসঙ্গতির জন্য এখানে প্রত্যাখ্যানের বিস্তারিত কারণ লিখুন (যেমন: অসম্পূর্ণ ডকুমেন্ট, টাকার পরিমাপে অমিল ইত্যাদি)..."
          className={[
            "w-full min-h-[150px] resize-none rounded-xl",
            "border border-primary-color/10 bg-white",
            "px-4 py-3 text-sm text-black",
            "placeholder:text-light-gray",
            "focus:outline-none focus:border-primary-color/30",
          ].join(" ")}
        />

        {/* Warning box */}
        <Card className="p-4 bg-red/5 border border-red/15">
          <div className="flex items-start gap-3">
            <div className="h-9 w-9 rounded-md bg-red/10 border border-red/20 flex items-center justify-center text-red shrink-0">
              <Info className="h-4 w-4" />
            </div>
            <div className="text-sm text-red leading-6">
              প্রত্যাখ্যান নিশ্চিত করলে আবেদনটি সংশোধনের জন্য সংশ্লিষ্ট অফিসে
              ফেরত পাঠানো হবে। এই কার্যক্রমটি আর পরিবর্তন করা সম্ভব হবে না।
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-end gap-3">
        <SecondaryButton
          onClick={() => onOpenChange(false)}
          className="px-6 py-2"
        >
          বাতিল করুন
        </SecondaryButton>

        <button
          type="button"
          //   disabled={loading || reason.trim().length === 0}
          onClick={onConfirm}
          className={[
            "px-6 py-2 rounded-md font-semibold text-white",
            "bg-red cursor-pointer",
            "transition-all duration-150 ease-out",
            "hover:brightness-110 active:scale-[0.97] active:translate-y-px",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
            "inline-flex items-center gap-2",
          ].join(" ")}
        >
          <CheckCircle2 className="h-4 w-4" />
          প্রত্যাখ্যান নিশ্চিত করুন
        </button>
      </div>
    </Dialog>
  );
}
