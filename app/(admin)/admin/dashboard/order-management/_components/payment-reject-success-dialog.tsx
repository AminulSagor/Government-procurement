"use client";

import { CheckCircle2, Eye, FileText, X } from "lucide-react";
import Dialog from "@/components/dialog/dialog";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";

export default function PaymentRejectSuccessDialog({
  open,
  onOpenChange,
  reqId,
  officeName,
  reason,
  onGoChallanList,
  onGoDetails,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;

  reqId: string;
  officeName: string;
  reason: string;

  onGoChallanList?: () => void;
  onGoDetails?: () => void;
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      size="lg"
      position="center"
      className="border border-primary-color/15 rounded-2xl"
      hideClose
    >
      <div className="relative">
        {/* Close (top-right like screenshot page overlay) */}
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute top-0 right-0 h-9 w-9 rounded-md border border-primary-color/20 bg-white flex items-center justify-center text-light-gray hover:text-black"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center text-center pt-2">
          <div className="h-20 w-20 rounded-full bg-primary-color/10 border border-primary-color/20 flex items-center justify-center">
            <div className="h-14 w-14 rounded-full bg-primary-color flex items-center justify-center text-white">
              <CheckCircle2 className="h-7 w-7" />
            </div>
          </div>

          <div className="mt-4 text-black font-bold text-xl leading-snug">
            প্রত্যাখ্যান ও সংশোধন অনুরোধ
            <br />
            সফলভাবে পাঠানো হয়েছে
          </div>

          <div className="mt-2 text-sm text-light-gray max-w-md">
            সংশ্লিষ্ট অফিসকে তাদের পেমেন্ট তথ্য সংশোধনের জন্য অবহিত করা হয়েছে।
          </div>
        </div>

        <Card className="mt-5 p-0 overflow-hidden">
          <div className="px-5 py-4 border-b border-primary-color/10 bg-off-white">
            <div className="text-sm text-light-gray font-semibold">
              আবেদন সংক্ষেপ
            </div>
          </div>

          <div className="px-5 py-4 space-y-3 text-sm">
            <div className="flex items-center justify-between gap-4">
              <div className="text-light-gray">অর্ডার আইডি:</div>
              <div className="text-black font-semibold">#{reqId}</div>
            </div>

            <div className="h-px bg-primary-color/10" />

            <div className="flex items-center justify-between gap-4">
              <div className="text-light-gray">দপ্তরের নাম:</div>
              <div className="text-black font-semibold">{officeName}</div>
            </div>

            <div className="h-px bg-primary-color/10" />

            <div className="text-light-gray">প্রত্যাখ্যানের কারণ:</div>
            <div className="rounded-xl border border-primary-color/10 bg-white px-4 py-3 text-black">
              {reason || "—"}
            </div>
          </div>
        </Card>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <PrimaryButton
            onClick={onGoChallanList}
            className="w-full py-3 flex items-center justify-center gap-2"
          >
            <FileText className="h-4 w-4" />
            চালানপত্র তালিকায় ফিরে যান
          </PrimaryButton>

          <button
            type="button"
            onClick={onGoDetails}
            className={[
              "w-full py-3 rounded-md",
              "bg-white text-black border border-medium-gray",
              "transition-all duration-150 ease-out",
              "active:scale-[0.97] active:translate-y-px",
              "inline-flex items-center justify-center gap-2",
            ].join(" ")}
          >
            <Eye className="h-4 w-4" />
            ডিটেইলস ভিউতে ফিরে যান
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-light-gray">
          © ২০২৪ IBAS+ পেমেন্ট ভেরিফিকেশন সিস্টেম। সকল তথ্য সংরক্ষিত।
        </div>
      </div>
    </Dialog>
  );
}
