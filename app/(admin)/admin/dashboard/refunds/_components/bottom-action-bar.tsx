"use client";

import SecondaryButton from "@/components/buttons/secondary-button";
import PrimaryButton from "@/components/buttons/primary-button";
import { Download, Printer } from "lucide-react";

export default function BottomActionBar({
  infoTextBn,
  onPrint,
  onDownload,
}: {
  infoTextBn: string;
  onPrint: () => void;
  onDownload: () => void;
}) {
  return (
    <div className="sticky bottom-0 w-full border-t border-primary-color/15 bg-white">
      <div className="px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-medium-gray">{infoTextBn}</div>

        <div className="flex items-center gap-2">
          <SecondaryButton onClick={onPrint} className="px-4 py-2 text-sm inline-flex items-center gap-2">
            <Printer className="h-4 w-4" />
            প্রিন্ট
          </SecondaryButton>

          <PrimaryButton onClick={onDownload} className="px-5 py-2 text-sm inline-flex items-center gap-2">
            <Download className="h-4 w-4" />
            সমন্বিত অডিট রিপোর্ট ডাউনলোড
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}