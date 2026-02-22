"use client";

import { useEffect, useMemo, useState } from "react";

import CodeTypeSelectDialog from "./_components/CodeTypeSelectDialog";
import ParentCodeFormDialog from "./_components/ParentCodeFormDialog";
import EconomicCodeFormDialog from "./_components/EconomicCodeFormDialog";
import SuccessDialog from "./_components/SuccessDialog";


import type {
  CodeCreateFlowStep,
  CodeKind,
  EconomicCode,
  ParentCategory,
} from "./_types/new-code.types";

import { demoParentOptions } from "./_data/new-code.demo";
import ParentCodeDetailsDialog from "./_components/ParentCodeDetailsDialog";
import EconomicCodeDetailsDialog from "./_components/EconomicCodeDetailsDialog";

export default function NewCodeDialogController({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<CodeCreateFlowStep>("select");

  const [parents, setParents] = useState<ParentCategory[]>(demoParentOptions);
  const [createdParent, setCreatedParent] = useState<ParentCategory | null>(null);
  const [createdEcon, setCreatedEcon] = useState<EconomicCode | null>(null);

  // ✅ whenever dialog opens, always start from first step
  useEffect(() => {
    if (open) setStep("select");
  }, [open]);

  const pickedParent = useMemo(() => {
    if (!createdEcon) return null;
    return parents.find((p) => p.parentCode4 === createdEcon.parentCode4) || null;
  }, [createdEcon, parents]);

  function closeAll() {
    onClose();
    setStep("select");
    setCreatedParent(null);
    setCreatedEcon(null);
  }

  function pickKind(k: CodeKind) {
    setStep(k === "PARENT" ? "parent_form" : "econ_form");
  }

  // ✅ IMPORTANT: mount ONLY one dialog at a time
  if (!open) return null;

  switch (step) {
    case "select":
      return (
        <CodeTypeSelectDialog open onClose={closeAll} onPick={pickKind} />
      );

    case "parent_form":
      return (
        <ParentCodeFormDialog
          open
          onClose={() => setStep("select")}
          onSubmit={(v: ParentCategory) => {
            setParents((prev) => [v, ...prev]);
            setCreatedParent(v);
            setStep("success_parent");
          }}
        />
      );

    case "econ_form":
      return (
        <EconomicCodeFormDialog
          open
          onClose={() => setStep("select")}
          parentOptions={parents}
          onSubmit={(v: EconomicCode) => {
            setCreatedEcon(v);
            setStep("success_econ");
          }}
        />
      );

    case "success_parent":
      return (
        <SuccessDialog
          open
          onClose={closeAll}
          title="প্যারেন্ট কোড সফলভাবে সংরক্ষিত হয়েছে!"
          lines={
            createdParent
              ? [
                  { label: "প্যারেন্ট কোড:", value: createdParent.parentCode4 },
                  {
                    label: "ব্যয়ের খাত:",
                    value: `${createdParent.expenseCategoryBangla} (${createdParent.expenseCategoryEnglish})`,
                  },
                ]
              : []
          }
          primaryText="ক্যাটাগরি তালিকা দেখুন"
          secondaryText="আরেকটি প্যারেন্ট কোড যুক্ত করুন"
          onPrimary={() => setStep("parent_details")}
          onSecondary={() => {
            setCreatedParent(null);
            setStep("parent_form");
          }}
        />
      );

    case "success_econ":
      return (
        <SuccessDialog
          open
          onClose={closeAll}
          title="অর্থনৈতিক কোড সফলভাবে সংরক্ষিত হয়েছে!"
          lines={
            createdEcon
              ? [
                  { label: "কোড:", value: createdEcon.economicCode7 },
                  { label: "খাতের নাম:", value: createdEcon.codeNameBangla },
                  {
                    label: "ধরণ:",
                    value:
                      createdEcon.econType === "PRODUCT"
                        ? "ক্রয় আইটেম (পণ্য)"
                        : createdEcon.econType === "SERVICE"
                        ? "ক্রয় আইটেম (সেবা)"
                        : "অ-ক্রয়/বেতন-ভাতা",
                  },
                ]
              : []
          }
          primaryText="কোড তালিকা দেখুন"
          secondaryText="আরেকটি নতুন কোড যুক্ত করুন"
          onPrimary={() => setStep("econ_details")}
          onSecondary={() => {
            setCreatedEcon(null);
            setStep("econ_form");
          }}
        />
      );

    case "parent_details":
      return (
        <ParentCodeDetailsDialog
          open
          onClose={closeAll}
          data={createdParent}
          onEdit={() => setStep("parent_form")}
        />
      );

    case "econ_details":
      return (
        <EconomicCodeDetailsDialog
          open
          onClose={closeAll}
          data={createdEcon}
          parent={pickedParent}
          onEdit={() => setStep("econ_form")}
        />
      );

    default:
      return null;
  }
}
