"use client";

import DialogShell from "./DialogShell";

import type { ParentCategory } from "../_types/new-code.types";
import { Eye, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ParentCodeDetailsDialog({
  open,
  onClose,
  data,
  onEdit,
}: {
  open: boolean;
  onClose: () => void;
  data: ParentCategory | null;
  onEdit: () => void;
}) {
  if (!data) return null;

  return (
    <DialogShell
      open={open}
      onClose={onClose}
      title="প্যারেন্ট কোডের বিস্তারিত তথ্য"
      icon={<Eye className="h-5 w-5" />}
      footer={
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="h-11 rounded-xl border border-gray/15 bg-white px-8 text-sm font-medium text-[var(--color-black)] hover:bg-[var(--color-off-white)]"
          >
            বন্ধ করুন
          </button>

          <Button className="h-11 px-8" onClick={onEdit}>
            <Pencil className="mr-2 h-4 w-4" />
            তথ্য সম্পাদনা করুন
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <p className="text-xs text-[var(--color-light-gray)]">প্যারেন্ট কোড (৪-ডিজিট)</p>
          <div className="mt-2 inline-flex rounded-xl bg-[var(--color-off-white)] px-4 py-2 text-[18px] font-semibold">
            {data.parentCode4}
          </div>
        </div>

        <div>
          <p className="text-xs text-[var(--color-light-gray)]">বর্তমান স্থিতি</p>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-[rgba(7,136,52,0.10)] px-4 py-2 text-sm font-semibold text-[var(--color-green)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-green)]" />
            সক্রিয়
          </div>
        </div>

        <div>
          <p className="text-xs text-[var(--color-light-gray)]">ব্যয়ের খাত (বাংলা)</p>
          <p className="mt-2 text-[18px] font-semibold text-[var(--color-black)]">
            {data.expenseCategoryBangla}
          </p>
        </div>

        <div>
          <p className="text-xs text-[var(--color-light-gray)]">ব্যয়ের খাত (ইংরেজি)</p>
          <p className="mt-2 text-[18px] font-semibold text-[var(--color-black)]">
            {data.expenseCategoryEnglish}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-gray/10 bg-[var(--color-off-white)] p-5">
        <p className="text-sm font-semibold text-[var(--color-black)] mb-2">বিবরণ</p>
        <p className="text-sm text-[var(--color-light-gray)] leading-6">
          {data.description || "—"}
        </p>
      </div>
    </DialogShell>
  );
}
