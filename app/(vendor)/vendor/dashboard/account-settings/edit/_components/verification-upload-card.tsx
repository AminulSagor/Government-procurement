"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


function UploadBox({
  icon,
  title,
  fileName,
  onPick,
}: {
  icon: React.ReactNode;
  title: string;
  fileName?: string;
  onPick: () => void;
}) {
  return (
    <div className="rounded-lg border border-gray/10 bg-secondary px-4 py-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 text-primary">{icon}</div>
          <div>
            <p className="text-xs font-semibold text-gray">{title}</p>
            <p className="mt-1 text-[11px] text-gray">
              {fileName ? `Selected: ${fileName}` : "কোন ফাইল নির্বাচন করা নেই"}
            </p>
          </div>
        </div>

        <Button onClick={onPick} className="h-8 px-3 text-xs">
          ফাইল আপলোড করুন
        </Button>
      </div>
    </div>
  );
}

export default function VerificationUploadCard({
  tradeLicenseFileName,
  tinFileName,
  binFileName,
  onPickTradeLicense,
  onPickTin,
  onPickBin,
}: {
  tradeLicenseFileName?: string;
  tinFileName?: string;
  binFileName?: string;
  onPickTradeLicense: () => void;
  onPickTin: () => void;
  onPickBin: () => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-primary">⌁</span>
        <p className="text-sm font-semibold text-gray">তথ্য যাচাই</p>
      </div>

      <div className="mt-4 space-y-3">
        <UploadBox
          icon={<span>🧾</span>}
          title="ট্রেড লাইসেন্স"
          fileName={tradeLicenseFileName}
          onPick={onPickTradeLicense}
        />
        <UploadBox
          icon={<span>🪪</span>}
          title="ই-টিন সার্টিফিকেট"
          fileName={tinFileName}
          onPick={onPickTin}
        />
        <UploadBox
          icon={<span>#</span>}
          title="ভ্যাট রেজিস্ট্রেশন (BIN)"
          fileName={binFileName}
          onPick={onPickBin}
        />
      </div>
    </div>
  );
}
