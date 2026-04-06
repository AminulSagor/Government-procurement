"use client";

import { useState } from "react";
import SendForCorrectionDialog from "./send-for-correction/SendForCorrectionDialog";
import ViewProductDetailsDialog from "./view-product-details/ViewProductDetailsDialog";
import { demoProductDetails } from "./_data/requisition-popups.demo";

export default function PopupsController() {
  const [openCorrection, setOpenCorrection] = useState(false);
  const [openProductDetails, setOpenProductDetails] = useState(false);

  return (
    <>
      {/* Example triggers (replace with your real buttons) */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setOpenCorrection(true)}
          className="px-4 h-10 rounded-lg bg-[var(--color-primary-color)] text-white"
        >
          Send For Correction
        </button>

        <button
          type="button"
          onClick={() => setOpenProductDetails(true)}
          className="px-4 h-10 rounded-lg border border-[rgba(0,0,0,0.12)] bg-white"
        >
          View Product Details
        </button>
      </div>

      {/* Dialog 1 */}
      <SendForCorrectionDialog
        open={openCorrection}
        onOpenChange={setOpenCorrection}
        onSubmit={async (payload) => {
          // ✅ API call goes here
          // await sendForCorrection(payload)
          console.log("SendForCorrection payload:", payload);
        }}
      />

      {/* Dialog 2 */}
      <ViewProductDetailsDialog
        open={openProductDetails}
        onOpenChange={setOpenProductDetails}
        data={demoProductDetails}
        onViewSpecPdf={(attachmentId) => {
          // ✅ open PDF viewer modal/route OR new tab
          console.log("View spec PDF:", attachmentId);
        }}
      />
    </>
  );
}
