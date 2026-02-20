"use client";

import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";

export default function BottomBar() {
  return (
    <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-medium-gray/15 pt-4 sm:flex-row sm:items-center">
      <div className="text-sm text-medium-gray">
        ℹ সতর্কতা: সকল ট্যাক্স গণনার পর উদ্ধৃত মূল্যটি যাচাই করে নেওয়া হয়েছে।
      </div>

      <div className="flex items-center gap-3">
        <SecondaryButton className="px-5 py-2">বাতিল করুন</SecondaryButton>
        <PrimaryButton className="px-5 py-2">উদ্ধৃতি অনুমোদন করুন এবং অর্ডারটি তৈরি করুন</PrimaryButton>
      </div>
    </div>
  );
}
