"use client";

import React from "react";
import Card from "@/components/cards/card";
import { CheckCircle2 } from "lucide-react";
import QuotationSuccessInfo from "./quotation-success-info";
import QuotationSuccessActions from "./quotation-success-actions";

type Props = {
  rfqId: string;
  total: string;
  submittedAt: string;
  onDownload?: () => void;
};

export default function QuotationSuccessCard({
  rfqId,
  total,
  submittedAt,
  onDownload,
}: Props) {
  const rows = [
    { label: "RFQ আইডি", value: rfqId },
    { label: "অফারকৃত মোট দর", value: total },
    { label: "জমা তারিখ", value: submittedAt },
  ];

  return (
    <div className="mx-auto w-full max-w-[620px]">
      <Card className="relative overflow-hidden rounded-2xl border border-gray/10 bg-white p-0 shadow-lg">
        {/* top teal line */}
        <div className="h-1 w-full bg-primary-color" />

        <div className="px-8 py-10">
          {/* icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green/10">
            <CheckCircle2 className="text-green" size={34} />
          </div>

          {/* title */}
          <h1 className="mt-5 text-center text-lg font-extrabold text-gray">
            দরপত্র সফলভাবে জমা দেওয়া হয়েছে!
          </h1>
          <p className="mt-1 text-center text-xs font-semibold text-gray/50">
            Quotation Submitted Successfully!
          </p>

          {/* info */}
          <QuotationSuccessInfo rows={rows} />

          {/* actions */}
          <QuotationSuccessActions onDownload={onDownload} />
        </div>
      </Card>
    </div>
  );
}
