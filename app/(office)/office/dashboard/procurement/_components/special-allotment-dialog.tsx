"use client";

import PrimaryButton from "@/components/buttons/primary-button";
import { Info } from "lucide-react";
import Dialog from "@/components/dialog/dialog";
import SecondaryButton from "@/components/buttons/secondary-button";

export type SpecialAllotmentDialogProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  lastUpdatedText?: string;
  lastAddedText?: string;
};

export default function SpecialAllotmentDialog({
  open,
  onOpenChange,

  lastUpdatedText = "সর্বশেষ আপডেট: ১২ আগস্ট ২০২৪, দুপুর ২:৩০ (Last Updated: 12 Aug 2024, 12:30 PM)",
  lastAddedText = "গত বরাদ্দের পরিমাণ: ৳ ১,০০০.০০ (Last Added Amount: ৳ 1,000.00)",
}: SpecialAllotmentDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      size="md"
      className="rounded-2xl"
    >
      <div className="px-1">
        {/* header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black">বিশেষ বাজেট বরাদ্দ</h2>
          <p className="mt-1 text-sm font-semibold text-primary-color">
            (Special Budget Allotment)
          </p>
        </div>

        {/* field */}
        <div className="mt-7">
          <div className="text-sm font-semibold text-[rgba(17,24,39,0.75)]">
            বরাদ্দের পরিমাণ (Allotment Amount)
          </div>

          <div
            className="
              mt-3
              flex items-center gap-3
              h-16 w-full
              rounded-2xl
              border border-[rgba(100,116,139,0.18)]
              bg-white
              px-5
            "
          >
            <span className="text-xl font-bold text-[rgba(17,24,39,0.35)]">
              ৳
            </span>

            <input
              placeholder="0.00"
              inputMode="decimal"
              className="
                h-full w-full bg-transparent
                text-2xl font-bold
                text-[rgba(17,24,39,0.30)]
                outline-none
                placeholder:text-[rgba(17,24,39,0.22)]
              "
            />
          </div>

          {/* meta lines */}
          <div className="mt-4 space-y-2 text-xs text-[rgba(100,116,139,0.85)]">
            <div>{lastUpdatedText}</div>
            <div>{lastAddedText}</div>
          </div>
        </div>

        {/* info box */}
        <div
          className="
            mt-6
            rounded-2xl
            border border-[rgba(100,116,139,0.18)]
            bg-[rgba(15,118,110,0.06)]
            p-5
          "
        >
          <div className="flex gap-4">
            <Info className="h-8 w-8 text-primary-color" />

            <div className="text-sm leading-6 text-[rgba(17,24,39,0.75)]">
              <div className="font-semibold">
                এই বিশেষ বরাদ্দটি চলতি অর্থবছরের যে কোন সময় যুক্ত হতে পারে এবং
                এর জন্য কোনো আইবাস (iBAS) কোডের প্রয়োজন নেই।
              </div>

              <div className="mt-2 text-[rgba(100,116,139,0.85)]">
                (This special allotment can be added at any time during the
                fiscal year and does not require an iBAS code.)
              </div>
            </div>
          </div>
        </div>

        {/* actions */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <SecondaryButton type="button" onClick={() => onOpenChange(false)}>
            বাতিল <span className="font-semibold">(Cancel)</span>
          </SecondaryButton>

          <PrimaryButton className="h-14 rounded-2xl">
            বরাদ্দ সম্পন্ন করুন{" "}
            <span className="font-semibold">(Complete Allotment)</span>
          </PrimaryButton>
        </div>
      </div>
    </Dialog>
  );
}
