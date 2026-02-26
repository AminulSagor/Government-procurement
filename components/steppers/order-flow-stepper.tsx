"use client";

import React from "react";
import Card from "@/components/cards/card";
import {
  Check,
  FileText,
  MessageSquareText,
  Building2,
  BadgeDollarSign,
  Truck,
  HandCoins,
} from "lucide-react";

type FlowStepKey =
  | "requisition"
  | "discussion"
  | "office_confirmation"
  | "payment_verify"
  | "shipment"
  | "final_settlement";

const labelMap: Record<FlowStepKey, string> = {
  requisition: "রিকুইজিশন",
  discussion: "আলোচনা",
  office_confirmation: "অফিস কনফার্মেশন",
  payment_verify: "পেমেন্ট ভেরিফাই",
  shipment: "শিপমেন্ট",
  final_settlement: "ফাইনাল সেটেলমেন্ট",
};

const iconMap: Record<FlowStepKey, React.ElementType> = {
  requisition: FileText,
  discussion: MessageSquareText,
  office_confirmation: Building2,
  payment_verify: BadgeDollarSign,
  shipment: Truck,
  final_settlement: HandCoins,
};

export default function OrderFlowStepper({
  steps,
  activeStep,
}: {
  steps: Array<{ key: FlowStepKey; label?: string; done: boolean }>;
  activeStep: FlowStepKey;
}) {
  return (
    <Card className="p-4 rounded-xl overflow-x-auto">
      <div className="flex items-center min-w-200">
        {steps.map((s, idx) => {
          const isActive = s.key === activeStep;
          const isDone = s.done;

          const Icon = iconMap[s.key];
          const label = s.label ?? labelMap[s.key];

          let circleClass = "bg-off-white text-medium-gray";
          if (isDone) {
            circleClass = "bg-green text-white";
          } else if (isActive) {
            circleClass = "bg-primary-color text-white";
          }

          let labelClass = "text-light-gray";
          if (isDone) {
            labelClass = "text-green font-medium";
          } else if (isActive) {
            labelClass = "text-primary-color font-semibold";
          }

          const showConnector = idx !== steps.length - 1;
          let connectorClass = "bg-primary-color/15";
          if (isDone) {
            connectorClass = "bg-green";
          } else if (isActive) {
            connectorClass = "bg-primary-color";
          }

          return (
            <React.Fragment key={s.key}>
              <div className="group flex flex-col items-center gap-2 px-2 py-2">
                <div
                  className={[
                    "flex h-12 w-12 items-center justify-center rounded-full",
                    "border border-primary-color/10",
                    circleClass,
                  ].join(" ")}
                >
                  {isDone ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </div>

                <div className={["text-xs", labelClass].join(" ")}>{label}</div>
              </div>

              {showConnector && (
                <div className="flex-1 px-2">
                  <div
                    className={[
                      "h-0.5 w-full rounded-full",
                      connectorClass,
                    ].join(" ")}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </Card>
  );
}
