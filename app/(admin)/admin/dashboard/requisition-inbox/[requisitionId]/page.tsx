"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import VIHeader from "./_components/vi-header";
import VIStepper from "./_components/vi-stepper";
import VIFooterBar from "./_components/vi-footer-bar";

import { normalizeStep, VIStage } from "./_types/vendor-inventory.types";
import RequisitionStep from "./_components/_steps/requisition-step";
import NegotiationStep from "./_components/_steps/negotiation-step";
import { ArrowLeft } from "lucide-react";

import SendForCorrectionDialog from "./_components/popups/send-for-correction/SendForCorrectionDialog";
import ViewProductDetailsDialog from "./_components/popups/view-product-details/ViewProductDetailsDialog";

// demo data (replace later with API data)
import { demoProductDetails } from "./_components/popups/_data/requisition-popups.demo";

export default function VendorInventoryPage() {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const step = useMemo<VIStage>(() => normalizeStep(sp.get("step")), [sp]);

  const setStep = (next: VIStage) => {
    const params = new URLSearchParams(sp.toString());
    params.set("step", next);
    router.push(`${pathname}?${params.toString()}`);
  };

  const disabled = false;
  const mode = (sp.get("mode") === "view" ? "view" : "edit") as "view" | "edit";

  // dialogs
  const [openCorrection, setOpenCorrection] = useState(false);

  const [openProductDetails, setOpenProductDetails] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // demo mapping (later: use your real API response)
  const productDetailsById: Record<string, typeof demoProductDetails> = {
    // ✅ change ids based on your demo items ids
    item1: demoProductDetails,
    item2: {
      ...demoProductDetails,
      titleBn: "প্রিন্টার",
      titleEn: "(Printer)",
      quantityText: "২টি",
    },
  };

  const selectedDetails =
    (selectedProductId && productDetailsById[selectedProductId]) || demoProductDetails;

  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      <div className="mx-auto max-w-[1180px] px-6 pb-24 pt-5">
        <div className="mb-3 flex items-center gap-2 text-sm text-[var(--color-medium-gray)]">
          <ArrowLeft className="h-4 w-4" strokeWidth={2} />
          <span>পেছনে যান</span>
        </div>

        <VIHeader
          titleEn="VENDOR INVENTORY & OFFER ALLOCATION"
          subtitleBn="অর্ডার নিশ্চিতকরণে ধাপ: ইনভেন্টরি ভেরিফিকেশন ও ভেন্ডর অ্যাসাইনমেন্ট"
          officeBn="নোয়াখালী সদর উপজেলা"
          lotBn="০৩৫৪"
          dateBn="২৫ মে, ২০২৪"
        />

        <VIStepper active={step} />

        <div className="mt-5">
          {step === "requisition" && (
            <RequisitionStep
              onOpenSpecs={(itemId) => {
                setSelectedProductId(itemId);
                setOpenProductDetails(true);
              }}
            />
          )}

          {step === "negotiation" && <NegotiationStep />}
        </div>
      </div>

      <VIFooterBar
        disabled={disabled}
        mode={mode}
        onOpenCorrection={() => setOpenCorrection(true)}
      />

      <SendForCorrectionDialog
        open={openCorrection}
        onOpenChange={setOpenCorrection}
        onSubmit={(payload) => {
          console.log("SendForCorrection:", payload);
        }}
      />

      <ViewProductDetailsDialog
        open={openProductDetails}
        onOpenChange={setOpenProductDetails}
        data={selectedDetails}
        onViewSpecPdf={(attachmentId) => {
          console.log("View spec PDF:", attachmentId);
        }}
      />
    </div>
  );
}
