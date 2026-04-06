"use client";

import { useMemo, useState } from "react";
import DialogShell from "./DialogShell";

import { clampDigits, isExactDigits } from "../_utils/new-code.utils";
import type { ParentCategory } from "../_types/new-code.types";
import { Button } from "@/components/ui/button";

export default function ParentCodeFormDialog({
  open,
  onClose,
  onSubmit,
  initial,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (v: ParentCategory) => void;
  initial?: Partial<ParentCategory>;
}) {
  const [parentCode4, setParentCode4] = useState(initial?.parentCode4 ?? "");
  const [bn, setBn] = useState(initial?.expenseCategoryBangla ?? "");
  const [en, setEn] = useState(initial?.expenseCategoryEnglish ?? "");
  const [desc, setDesc] = useState(initial?.description ?? "");

  const canSubmit = useMemo(() => {
    return (
      isExactDigits(parentCode4, 4) &&
      bn.trim().length > 0 &&
      en.trim().length > 0
    );
  }, [parentCode4, bn, en]);

  return (
    <DialogShell
      open={open}
      onClose={onClose}
      title="নতুন প্যারেন্ট কোড / ক্যাটাগরি যুক্ত করুন"
      footer={
        <div className="flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={onClose}
            className="h-12 rounded-xl border border-gray/15 bg-white px-10 text-sm font-semibold text-[var(--color-black)] hover:bg-[var(--color-off-white)]"
          >
            বাতিল করুন
          </button>

          <Button
            className="h-12 px-10"
            disabled={!canSubmit}
            onClick={() =>
              onSubmit({
                parentCode4: clampDigits(parentCode4, 4),
                expenseCategoryBangla: bn.trim(),
                expenseCategoryEnglish: en.trim(),
                description: desc.trim() || undefined,
                isActive: true,
              })
            }
          >
            কোড সংরক্ষণ করুন
          </Button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Parent code */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--color-black)]">
            প্যারেন্ট কোড (৪-ডিজিট){" "}
            <span className="text-[var(--color-red)]">*</span>
          </label>

          <div className="relative">
            <input
              value={parentCode4}
              onChange={(e) => setParentCode4(clampDigits(e.target.value, 4))}
              placeholder="e.g. 3255"
              className={[
                "h-12 w-full rounded-xl bg-white px-4 text-sm outline-none",
                "border border-gray/15",
                "focus:border-[var(--color-primary-color)]",
              ].join(" ")}
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--color-light-gray)]">
              4 Digits
            </span>
          </div>

          <p className="text-xs text-[var(--color-light-gray)]">
            ৪ সংখ্যার কোডের প্যারেন্ট লেভেল (Category)
          </p>
        </div>

        {/* Section header line */}
        <div className="pt-2">
          <div className="flex items-center gap-4">
            <p className="text-sm font-bold text-[var(--color-black)]">
              ব্যয়ের খাতের তথ্য
            </p>
            <div className="h-px flex-1 bg-gray/10" />
          </div>
        </div>

        {/* Two inputs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--color-black)]">
              ব্যয়ের খাত (বাংলা){" "}
              <span className="text-[var(--color-red)]">*</span>
            </label>

            <input
              value={bn}
              onChange={(e) => setBn(e.target.value)}
              placeholder="যেমন: মনিহারী"
              className={[
                "h-12 w-full rounded-xl bg-white px-4 text-sm outline-none",
                "border border-gray/15",
                "focus:border-[var(--color-primary-color)]",
              ].join(" ")}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--color-black)]">
              ব্যয়ের খাত (ইংরেজি){" "}
              <span className="text-[var(--color-red)]">*</span>
            </label>

            <input
              value={en}
              onChange={(e) => setEn(e.target.value)}
              placeholder="e.g. Stationery"
              className={[
                "h-12 w-full rounded-xl bg-white px-4 text-sm outline-none",
                "border border-gray/15",
                "focus:border-[var(--color-primary-color)]",
              ].join(" ")}
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--color-black)]">
            বিবরণ
          </label>

          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="এই ক্যাটাগরি সম্পর্কে অতিরিক্ত নোট বা বিবরণ লিখুন..."
            className={[
              "min-h-[120px] w-full rounded-xl bg-white p-4 text-sm outline-none",
              "border border-gray/15",
              "focus:border-[var(--color-primary-color)]",
            ].join(" ")}
          />
        </div>
      </div>
    </DialogShell>
  );
}
