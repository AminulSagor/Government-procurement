"use client";

import QuotationSuccessCard from "../_components/quotation-success-card";

export default function Page() {
  return (
    <div className="min-h-screen bg-secondary/30 px-4 py-10">
      <QuotationSuccessCard
        rfqId="RFQ-2024-DHAKA-05"
        total="৳ ২৫,০০,০০০"
        submittedAt="০৫ মে ২০২৪"
        onDownload={() => console.log("download")}
      />
    </div>
  );
}
