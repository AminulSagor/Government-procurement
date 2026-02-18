"use client";

import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import { FileDown, Pencil } from "lucide-react";

export default function ActionRow({
  onViewPdf,
  onSave,
}: {
  onViewPdf: () => void;
  onSave: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
      <SecondaryButton className="h-10 px-5 flex items-center gap-2" onClick={onViewPdf}>
        <FileDown className="h-4 w-4 text-red" />
        পিডিএফ ডকুমেন্ট দেখুন
      </SecondaryButton>

      <PrimaryButton className="h-10 px-6 flex items-center gap-2" onClick={onSave}>
        <Pencil className="h-4 w-4" />
        সংরক্ষণ করুন
      </PrimaryButton>
    </div>
  );
}
