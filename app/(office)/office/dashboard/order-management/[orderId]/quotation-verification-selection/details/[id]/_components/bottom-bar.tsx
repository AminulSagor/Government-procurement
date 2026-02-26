"use client";

import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function BottomBar() {
  return (
    <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-medium-gray/15 pt-4 sm:flex-row sm:items-center">
      <div className="text-sm text-medium-gray">
        ℹ সতর্কতা: সকল ট্যাক্স গণনার পর উদ্ধৃত মূল্যটি যাচাই করে নেওয়া হয়েছে।
      </div>

      <div className="flex items-center gap-3">
        <SecondaryButton className="px-5 py-2">বাতিল করুন</SecondaryButton>
        <Link
          href={
            "/office/dashboard/order-management/p1/quotation-verification-selection/details/v1/voucher-create"
          }
        >
          <PrimaryButton className="px-5 py-2 flex items-center gap-2">
            <CirclePlus size={18} />
            উদ্ধৃতি অনুমোদন করুন এবং ভাউচার তৈরি করুন
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
