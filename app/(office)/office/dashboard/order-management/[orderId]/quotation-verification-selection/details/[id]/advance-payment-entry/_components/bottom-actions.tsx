"use client";

import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";

export default function BottomActions() {
  return (
    <div className="mt-6 flex items-center justify-end gap-3">
      <SecondaryButton className="px-6 py-2">খসড়া সংরক্ষণ করুন</SecondaryButton>
      <PrimaryButton className="px-6 py-2 flex items-center gap-2">
        পরবর্তী ধাপে যান <span className="text-lg">→</span>
      </PrimaryButton>
    </div>
  );
}
