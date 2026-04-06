"use client";

import React from "react";
import Card from "@/components/cards/card";
import { Download, PencilLine } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  onDownloadDueInvoice?: () => void;
  onGiveFeedback?: () => void;
  className?: string;
};

export default function RequiredActionsReceivedCard({
  onDownloadDueInvoice,
  onGiveFeedback,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "rounded-lg border border-primary-color/20 bg-secondary-color/10 p-6",
        className,
      )}
    >
      <h3 className="text-base font-extrabold text-black">
        প্রয়োজনীয় পদক্ষেপ
      </h3>
      <p className="mt-2 text-sm font-semibold text-light-gray">
        অর্ডারটি সফলভাবে গৃহীত হয়েছে। আপনার বকেয়া প্রদান করুন
      </p>

      <div className="mt-5 space-y-4">
        <Link
          href={
            "/office/dashboard/order-management/4922/order-details/due-payment-entry"
          }
          className="flex w-full items-center justify-center gap-3 rounded-md bg-primary-color px-4 py-4 text-sm font-extrabold text-white hover:opacity-90 active:scale-[0.99]"
        >
          <Download className="h-5 w-5" />
          বকেয়া পেমেন্ট কনফার্ম
        </Link>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-md border border-primary-color/15 bg-white px-4 py-4 text-sm font-extrabold text-black hover:bg-off-white active:scale-[0.99]"
          onClick={onGiveFeedback}
        >
          <PencilLine className="h-5 w-5 text-light-gray" />
          মতামত দিন
        </button>
      </div>
    </Card>
  );
}
