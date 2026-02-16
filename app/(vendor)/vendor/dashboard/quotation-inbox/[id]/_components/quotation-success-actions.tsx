"use client";

import React from "react";
import Link from "next/link";
import PrimaryButton from "@/components/buttons/primary-button";
import { Grid2X2, Download } from "lucide-react";

export default function QuotationSuccessActions({
  dashboardHref = "/vendor/dashboard",
  onDownload,
}: {
  dashboardHref?: string;
  onDownload?: () => void;
}) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
      <Link href={dashboardHref} className="w-full sm:w-auto">
        <PrimaryButton className="w-full px-6 py-2.5 text-xs font-extrabold flex items-center justify-center gap-2">
          <Grid2X2 size={16} />
          ড্যাশবোর্ডে ফিরে যান
        </PrimaryButton>
      </Link>

      <button
        type="button"
        onClick={onDownload}
        className="w-full sm:w-auto rounded-xl border border-primary-color/35 bg-white px-6 py-2.5 text-xs font-extrabold text-primary-color flex items-center justify-center gap-2 hover:bg-primary-color/5"
      >
        <Download size={16} />
        অফারকৃত প্রমাণ ডাউনলোড করুন
      </button>
    </div>
  );
}
