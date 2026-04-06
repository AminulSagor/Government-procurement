"use client";

import { useMemo, useState } from "react";
import DialogShell from "./DialogShell";

import type {
  EconomicCode,
  EconomicCodeType,
  ParentCategory,
} from "../_types/new-code.types";
import { clampDigits, isExactDigits } from "../_utils/new-code.utils";
import { Button } from "@/components/ui/button";

function TypeCard({
  active,
  titleBn,
  titleEn,
  onClick,
}: {
  active: boolean;
  titleBn: string;
  titleEn: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full rounded-xl border bg-white px-5 py-4 text-left transition",
        active
          ? "border-[var(--color-primary-color)] bg-[rgba(31,110,128,0.06)]"
          : "border-gray/15 hover:bg-[var(--color-off-white)]",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <div
          className={[
            "mt-1.5 h-4 w-4 rounded-full border flex items-center justify-center",
            active
              ? "border-[var(--color-primary-color)]"
              : "border-gray/20",
          ].join(" ")}
        >
          {active ? (
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary-color)]" />
          ) : null}
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--color-black)]">
            {titleBn}
          </p>
          <p className="mt-1 text-xs text-[var(--color-light-gray)]">
            {titleEn}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function EconomicCodeFormDialog({
  open,
  onClose,
  onSubmit,
  parentOptions,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (v: EconomicCode) => void;
  parentOptions: ParentCategory[];
}) {
  const [economicCode7, setEconomicCode7] = useState("");
  const [nameBn, setNameBn] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [parentCode4, setParentCode4] = useState("");
  const [econType, setEconType] = useState<EconomicCodeType>("PRODUCT");
  const [desc, setDesc] = useState("");

  const canSubmit = useMemo(() => {
    return (
      isExactDigits(economicCode7, 7) &&
      nameBn.trim().length > 0 &&
      nameEn.trim().length > 0 &&
      isExactDigits(parentCode4, 4)
    );
  }, [economicCode7, nameBn, nameEn, parentCode4]);

  return (
    <DialogShell
      open={open}
      onClose={onClose}
      title="নতুন অর্থনৈতিক কোড যুক্ত করুন"
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
                economicCode7: clampDigits(economicCode7, 7),
                codeNameBangla: nameBn.trim(),
                codeNameEnglish: nameEn.trim(),
                parentCode4: clampDigits(parentCode4, 4),
                econType,
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
        {/* Economic code */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--color-black)]">
            অর্থনৈতিক কোড <span className="text-[var(--color-red)]">*</span>
          </label>

          <div className="relative">
            <input
              value={economicCode7}
              onChange={(e) =>
                setEconomicCode7(clampDigits(e.target.value, 7))
              }
              placeholder="e.g. 3255101"
              className={[
                "h-12 w-full rounded-xl bg-white px-4 text-sm outline-none",
                "border border-gray/15",
                "focus:border-[var(--color-primary-color)]",
              ].join(" ")}
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--color-light-gray)]">
              7 Digits
            </span>
          </div>

          <p className="text-xs text-[var(--color-light-gray)]">
            ১০ সংখ্যার কোডের শেষ ৩ সংখ্যা (অপারেশনাল কোড)
          </p>
        </div>

        {/* Name fields */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--color-black)]">
              কোড এর নাম (বাংলা){" "}
              <span className="text-[var(--color-red)]">*</span>
            </label>
            <input
              value={nameBn}
              onChange={(e) => setNameBn(e.target.value)}
              placeholder="যেমন: কম্পিউটার সামগ্রী"
              className={[
                "h-12 w-full rounded-xl bg-white px-4 text-sm outline-none",
                "border border-gray/15",
                "focus:border-[var(--color-primary-color)]",
              ].join(" ")}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--color-black)]">
              কোড এর নাম (ইংরেজি){" "}
              <span className="text-[var(--color-red)]">*</span>
            </label>
            <input
              value={nameEn}
              onChange={(e) => setNameEn(e.target.value)}
              placeholder="e.g. Computer Accessories"
              className={[
                "h-12 w-full rounded-xl bg-white px-4 text-sm outline-none",
                "border border-gray/15",
                "focus:border-[var(--color-primary-color)]",
              ].join(" ")}
            />
          </div>
        </div>

        {/* Parent select */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--color-black)]">
            প্যারেন্ট কোড নির্বাচন করুন{" "}
            <span className="text-[var(--color-red)]">*</span>
          </label>

          <div className="relative">
            <select
              value={parentCode4}
              onChange={(e) => setParentCode4(e.target.value)}
              className={[
                "h-12 w-full appearance-none rounded-xl bg-white px-4 pr-10 text-sm outline-none",
                "border border-gray/15",
                "focus:border-[var(--color-primary-color)]",
              ].join(" ")}
            >
              <option value="">নির্বাচন করুন...</option>
              {parentOptions.map((p) => (
                <option key={p.parentCode4} value={p.parentCode4}>
                  {p.parentCode4} - {p.expenseCategoryBangla}
                </option>
              ))}
            </select>

            {/* chevron */}
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-light-gray)]">
              ▼
            </span>
          </div>
        </div>

        {/* Type */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-[var(--color-black)]">
            কোড এর ধরন <span className="text-[var(--color-red)]">*</span>
          </label>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <TypeCard
              active={econType === "PRODUCT"}
              titleBn="ক্রয় আইটেম (পণ্য)"
              titleEn="Procurement Item – Product"
              onClick={() => setEconType("PRODUCT")}
            />
            <TypeCard
              active={econType === "SERVICE"}
              titleBn="ক্রয় আইটেম (সেবা)"
              titleEn="Procurement Item – Service"
              onClick={() => setEconType("SERVICE")}
            />
            <TypeCard
              active={econType === "NON_PROCUREMENT"}
              titleBn="অ-ক্রয়/বেতন-ভাতা"
              titleEn="Non-Procurement/Salary"
              onClick={() => setEconType("NON_PROCUREMENT")}
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
            placeholder="এই কোড সম্পর্কে অতিরিক্ত নোট বা বিবরণ লিখুন..."
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
