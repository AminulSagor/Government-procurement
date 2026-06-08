"use client";

import { useMemo, useState } from "react";
import DialogShell from "./DialogShell";

import type {
  EconomicCode,
  EconomicCodeType,
  ParentCategory,
} from "../_types/new-code.types";
import { clampDigits } from "../_utils/new-code.utils";
import { Button } from "@/components/ui/button";
import { validateOperationalCodeForm } from "@/schema/admin/code.schema";
import type { OperationalCodeFormValues } from "@/types/admin/code.types";

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
            "mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border",
            active ? "border-[var(--color-primary-color)]" : "border-gray/20",
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
  onSearchParent,
  initial,
  mode = "create",
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (v: EconomicCode) => void;
  parentOptions: ParentCategory[];
  onSearchParent: (search?: string) => void;
  initial?: Partial<EconomicCode>;
  mode?: "create" | "edit";
}) {
  const isEditMode = mode === "edit";

  const [economicCode7, setEconomicCode7] = useState(
    initial?.economicCode7 ?? "",
  );
  const [nameBn, setNameBn] = useState(initial?.codeNameBangla ?? "");
  const [nameEn, setNameEn] = useState(initial?.codeNameEnglish ?? "");
  const [parentCode4, setParentCode4] = useState(initial?.parentCode4 ?? "");
  const [parentSearch, setParentSearch] = useState(
    initial?.parentCode4 ?? "",
  );
  const [isParentDropdownOpen, setIsParentDropdownOpen] = useState(false);
  const [econType, setEconType] = useState<EconomicCodeType>(
    initial?.econType ?? "PRODUCT",
  );
  const [desc, setDesc] = useState(initial?.description ?? "");
  const [isTouched, setIsTouched] = useState(false);

  const formValues: OperationalCodeFormValues = {
    economicCode7,
    codeNameBangla: nameBn,
    codeNameEnglish: nameEn,
    parentCode4,
    econType,
    details: desc,
  };

  const validation = useMemo(() => {
    return validateOperationalCodeForm(formValues);
  }, [economicCode7, nameBn, nameEn, parentCode4, econType, desc]);

  const canSubmit = validation.isValid;

  const handleSubmit = () => {
    setIsTouched(true);

    if (!validation.isValid) return;

    onSubmit({
      economicCode7: clampDigits(economicCode7, 7),
      codeNameBangla: nameBn.trim(),
      codeNameEnglish: nameEn.trim(),
      parentCode4: clampDigits(parentCode4, 4),
      econType,
      description: desc.trim() || undefined,
      isActive: initial?.isActive ?? true,
    });
  };

  return (
    <DialogShell
      open={open}
      onClose={onClose}
      title={
        isEditMode
          ? "অর্থনৈতিক কোড সম্পাদনা করুন"
          : "নতুন অর্থনৈতিক কোড যুক্ত করুন"
      }
      footer={
        <div className="flex flex-col items-center gap-3">
          {isTouched && validation.message ? (
            <p className="text-sm font-medium text-[var(--color-red)]">
              {validation.message}
            </p>
          ) : null}

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
              onClick={handleSubmit}
            >
              {isEditMode ? "পরিবর্তন সংরক্ষণ করুন" : "কোড সংরক্ষণ করুন"}
            </Button>
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--color-black)]">
            অর্থনৈতিক কোড <span className="text-[var(--color-red)]">*</span>
          </label>

          <div className="relative">
            <input
              value={economicCode7}
              disabled={isEditMode}
              onChange={(e) => {
                setEconomicCode7(clampDigits(e.target.value, 7));
                setIsTouched(true);
              }}
              onBlur={() => setIsTouched(true)}
              placeholder="e.g. 3255101"
              className={[
                "h-12 w-full rounded-xl bg-white px-4 text-sm outline-none",
                "border border-gray/15",
                "focus:border-[var(--color-primary-color)]",
                isEditMode
                  ? "cursor-not-allowed bg-[var(--color-off-white)] text-[var(--color-medium-gray)]"
                  : "",
              ].join(" ")}
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--color-light-gray)]">
              7 Digits
            </span>
          </div>

          <p className="text-xs text-[var(--color-light-gray)]">
            {isEditMode
              ? "অর্থনৈতিক কোড পরিবর্তন করা যাবে না"
              : "১০ সংখ্যার কোডের শেষ ৩ সংখ্যা (অপারেশনাল কোড)"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--color-black)]">
              কোড এর নাম (বাংলা){" "}
              <span className="text-[var(--color-red)]">*</span>
            </label>
            <input
              value={nameBn}
              onChange={(e) => {
                setNameBn(e.target.value);
                setIsTouched(true);
              }}
              onBlur={() => setIsTouched(true)}
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
              onChange={(e) => {
                setNameEn(e.target.value);
                setIsTouched(true);
              }}
              onBlur={() => setIsTouched(true)}
              placeholder="e.g. Computer Accessories"
              className={[
                "h-12 w-full rounded-xl bg-white px-4 text-sm outline-none",
                "border border-gray/15",
                "focus:border-[var(--color-primary-color)]",
              ].join(" ")}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--color-black)]">
            প্যারেন্ট কোড নির্বাচন করুন{" "}
            <span className="text-[var(--color-red)]">*</span>
          </label>

          <div className="relative">
            <input
              value={parentSearch}
              disabled={isEditMode}
              onFocus={() => {
                if (!isEditMode) {
                  setIsParentDropdownOpen(true);
                }
              }}
              onChange={(e) => {
                if (isEditMode) return;

                const value = e.target.value;

                setParentSearch(value);
                setParentCode4("");
                setIsTouched(true);
                setIsParentDropdownOpen(true);
                onSearchParent(value);
              }}
              placeholder="প্যারেন্ট কোড বা নাম লিখুন..."
              className={[
                "h-12 w-full rounded-xl bg-white px-4 pr-10 text-sm outline-none",
                "border border-gray/15",
                "focus:border-[var(--color-primary-color)]",
                isEditMode
                  ? "cursor-not-allowed bg-[var(--color-off-white)] text-[var(--color-medium-gray)]"
                  : "",
              ].join(" ")}
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-light-gray)]">
              ▼
            </span>

            {!isEditMode && isParentDropdownOpen ? (
              <div className="absolute left-0 right-0 top-[52px] z-50 max-h-56 overflow-y-auto rounded-xl border border-gray/15 bg-white shadow-lg">
                {parentOptions.length > 0 ? (
                  parentOptions.map((p) => (
                    <button
                      key={p.parentCode4}
                      type="button"
                      onClick={() => {
                        setParentCode4(p.parentCode4);
                        setParentSearch(
                          `${p.parentCode4} - ${p.expenseCategoryBangla}`,
                        );
                        setIsParentDropdownOpen(false);
                        setIsTouched(true);
                      }}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-[var(--color-off-white)]"
                    >
                      <span className="font-semibold">{p.parentCode4}</span>
                      <span className="ml-2">{p.expenseCategoryBangla}</span>
                    </button>
                  ))
                ) : (
                  <p className="px-4 py-3 text-sm text-[var(--color-medium-gray)]">
                    কোনো প্যারেন্ট কোড পাওয়া যায়নি
                  </p>
                )}
              </div>
            ) : null}
          </div>

          {isEditMode ? (
            <p className="text-xs text-[var(--color-light-gray)]">
              প্যারেন্ট কোড পরিবর্তন করা যাবে না
            </p>
          ) : null}
        </div>

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