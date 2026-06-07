"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import CodeTypeSelectDialog from "./_components/CodeTypeSelectDialog";
import ParentCodeFormDialog from "./_components/ParentCodeFormDialog";
import EconomicCodeFormDialog from "./_components/EconomicCodeFormDialog";
import SuccessDialog from "./_components/SuccessDialog";
import ParentCodeDetailsDialog from "./_components/ParentCodeDetailsDialog";
import EconomicCodeDetailsDialog from "./_components/EconomicCodeDetailsDialog";

import type {
  CodeCreateFlowStep,
  CodeKind,
  EconomicCode,
  ParentCategory,
} from "./_types/new-code.types";


import {
  createOperationalCode,
  createParentCode,
  getParentCodes,
} from "@/service/admin/code.service";

import {
  validateOperationalCodeForm,
  validateParentCodeForm,
} from "@/schema/admin/code.schema";

import type {
  OperationalCodeType,
  OperationalCodeFormValues,
  ParentCodeFormValues,
} from "@/types/admin/code.types";
import { getApiErrorMessage } from "@/utils/api-error.message";

const operationalTypeMap: Record<
  OperationalCodeFormValues["econType"],
  OperationalCodeType
> = {
  PRODUCT: "product",
  SERVICE: "service",
  NON_PROCUREMENT: "salary",
};

export default function NewCodeDialogController({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<CodeCreateFlowStep>("select");
  const [parents, setParents] = useState<ParentCategory[]>([]);
  const [createdParent, setCreatedParent] = useState<ParentCategory | null>(null);
  const [createdEcon, setCreatedEcon] = useState<EconomicCode | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  async function loadParentCodes(search?: string) {
    try {
      const parentList = await getParentCodes({
        status: true,
        page: 1,
        limit: 20,
        search,
      });

      const mappedParents: ParentCategory[] = parentList.map((item) => ({
        parentCode4: item.code,
        expenseCategoryBangla: item.expenseCategoryBangla,
        expenseCategoryEnglish: item.expenseCategoryEnglish,
        description: item.details,
        isActive: item.status,
      }));

      setParents(mappedParents);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Failed to load parent codes"));
    }
  }

  function pickKind(k: CodeKind) {
    if (k === "PARENT") {
      setStep("parent_form");
      return;
    }

    void loadParentCodes();
    setStep("econ_form");
  }

  async function handleCreateParentCode(values: ParentCategory) {
    const formValues: ParentCodeFormValues = {
      parentCode4: values.parentCode4,
      expenseCategoryBangla: values.expenseCategoryBangla,
      expenseCategoryEnglish: values.expenseCategoryEnglish,
      details: values.description ?? "",
    };

    const validation = validateParentCodeForm(formValues);

    if (!validation.isValid) {
      toast.error(validation.message ?? "Invalid input");
      return;
    }

    try {
      setIsSubmitting(true);

      await createParentCode({
        code: formValues.parentCode4,
        codeType: "parent",
        expenseCategoryBangla: formValues.expenseCategoryBangla.trim(),
        expenseCategoryEnglish: formValues.expenseCategoryEnglish.trim(),
        details: formValues.details.trim(),
      });

      setParents((prev) => [values, ...prev]);
      setCreatedParent(values);
      setStep("success_parent");
      toast.success("Parent code created successfully");
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Failed to create operational code"));
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleCreateOperationalCode(values: EconomicCode) {
    const formValues: OperationalCodeFormValues = {
      economicCode7: values.economicCode7,
      codeNameBangla: values.codeNameBangla,
      codeNameEnglish: values.codeNameEnglish,
      parentCode4: values.parentCode4,
      econType: values.econType,
      details: values.description ?? "",
    };

    const validation = validateOperationalCodeForm(formValues);

    if (!validation.isValid) {
      toast.error(validation.message ?? "Invalid input");
      return;
    }

    try {
      setIsSubmitting(true);

      await createOperationalCode({
        code: formValues.economicCode7,
        codeType: "operational",
        codeNameBangla: formValues.codeNameBangla.trim(),
        codeNameEnglish: formValues.codeNameEnglish.trim(),
        operationalCodeType: operationalTypeMap[formValues.econType],
        details: formValues.details.trim(),
      });

      setCreatedEcon(values);
      setStep("success_econ");
      toast.success("Operational code created successfully");
    } catch (error) {
      if (error && typeof error === "object" && "response" in error) {
        console.log("Backend error body:", error.response);
      }

      toast.error(
        getApiErrorMessage(error, "Failed to create operational code"),
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!open) return null;

  switch (step) {
    case "select":
      return <CodeTypeSelectDialog open onClose={closeAll} onPick={pickKind} />;

    case "parent_form":
      return (
        <ParentCodeFormDialog
          open
          onClose={() => setStep("select")}
          onSubmit={handleCreateParentCode}
        />
      );

    case "econ_form":
      return (
        <EconomicCodeFormDialog
          open
          onClose={() => setStep("select")}
          parentOptions={parents}
          onSearchParent={loadParentCodes}
          onSubmit={handleCreateOperationalCode}
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