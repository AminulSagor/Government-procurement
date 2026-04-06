"use client";

import React from "react";
import OrderFlowStepper from "@/components/steppers/order-flow-stepper";
import type { ReturnRequestItem } from "../../_types/return-request.types";
import { ArrowLeft } from "lucide-react";

function getActiveStep(status: ReturnRequestItem["status"]) {
  if (status === "accepted" || status === "denied") return "final_settlement";
  return "shipment";
}

export default function ReturnRequestShell({
  active,
  children,
}: {
  active: ReturnRequestItem;
  children: React.ReactNode;
}) {
  const steps = [
    { key: "requisition" as const, done: true },
    { key: "discussion" as const, done: true },
    { key: "office_confirmation" as const, done: true },
    { key: "payment_verify" as const, done: true },
    { key: "shipment" as const, done: active.status !== "pending" },
    {
      key: "final_settlement" as const,
      done: active.status !== "pending" && active.status !== "waiting",
    },
  ];

  return (
    <main className="w-full">
      <div className="mx-auto w-full px-4 py-5 md:px-8 md:py-6">
        {/* ===== Top Header (same-to-same) ===== */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            {/* Back button */}
            <button
              className={[
                "inline-flex h-10 items-center gap-2 rounded-xl",
                "border border-primary-color/10 bg-white px-4",
                "text-sm font-semibold text-gray",
                "hover:bg-off-white",
              ].join(" ")}
            >
              <ArrowLeft className="h-4 w-4" />
              BACK
            </button>

            {/* Title block */}
            <div className="pt-0.5">
              <div className="text-[18px] font-semibold text-black">
                পণ্য ফেরত ট্র্যাকিং: #{active.id}
              </div>
              <div className="mt-0.5 text-xs text-light-gray">
                ভেন্ডর কর্তৃক ফেরত আবেদনের যাচাই ও সমাধান নির্ধারিত
              </div>
            </div>
          </div>

          {/* Office box */}
          <div className="rounded-2xl border border-primary-color/10 bg-white px-5 py-3">
            <div className="text-[11px] font-semibold text-light-gray">
              অফিস
            </div>
            <div className="mt-1 text-sm font-semibold text-black">
              {active.officeName}
            </div>
          </div>
        </div>

        {/* Stepper */}
        <div className="mt-5">
          <OrderFlowStepper
            steps={steps}
            activeStep={getActiveStep(active.status) as any}
          />
        </div>

        {children}
      </div>
    </main>
  );
}