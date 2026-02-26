"use client";

import { useMemo, useState } from "react";
import Card from "@/components/cards/card";

import type {
  FlowStepKey,
  RequisitionCase,
  RequisitionItem,
} from "../_types/order-management.type";

import ItemsSidebar, {
  type PaymentSidebarTab,
} from "@/app/(admin)/admin/dashboard/order-management/_components/items-sidebar";

import OfficePaymentVerifyPanel from "@/app/(admin)/admin/dashboard/order-management/_components/office-payment-verify-panel";
import VendorPaymentPanel from "@/app/(admin)/admin/dashboard/order-management/_components/vendor-payment-panel";

import ShipmentPanel from "@/app/(admin)/admin/dashboard/order-management/_components/shipment-panel";
import FinalSettlementPanel from "@/app/(admin)/admin/dashboard/order-management/_components/final-settlement-panel";
import TrackingHeader from "@/app/(admin)/admin/dashboard/order-management/_components/tracking-header";
import { useRouter } from "next/navigation";
import OrderFlowStepper from "@/components/steppers/order-flow-stepper";

export default function FlowShell({ data }: { data: RequisitionCase }) {
  const [activeStep, setActiveStep] = useState<FlowStepKey>(data.currentStep);
  const [selectedItemId, setSelectedItemId] = useState<string>(
    data.items[0]?.itemId ?? "",
  );

  const [paymentTab, setPaymentTab] = useState<PaymentSidebarTab>("office");

  const selectedItem = useMemo<RequisitionItem | undefined>(
    () => data.items.find((i) => i.itemId === selectedItemId),
    [data.items, selectedItemId],
  );

  const router = useRouter();

  return (
    <div className="space-y-4">
      <TrackingHeader
        reqId={data.reqId}
        officeName={data.officeName}
        createdAt={data.createdAt}
        onBack={() => router.back()}
      />

      <OrderFlowStepper steps={data.steps} activeStep={activeStep} />

      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[450px_1fr] gap-4 items-start">
        <ItemsSidebar
          items={data.items}
          selectedItemId={selectedItemId}
          onSelectItem={setSelectedItemId}
          tab={paymentTab}
          onTabChange={setPaymentTab}
        />

        <div className="min-h-130">
          {!selectedItem ? (
            <Card className="p-6 text-light-gray">No item selected</Card>
          ) : activeStep === "payment_verify" ? (
            paymentTab === "office" ? (
              <OfficePaymentVerifyPanel item={selectedItem} />
            ) : (
              <VendorPaymentPanel item={selectedItem} />
            )
          ) : activeStep === "shipment" ? (
            <ShipmentPanel item={selectedItem} />
          ) : activeStep === "final_settlement" ? (
            <FinalSettlementPanel item={selectedItem} />
          ) : (
            <Card className="p-6">
              <div className="text-black font-semibold">
                এই স্টেপটি এখন UI-only placeholder
              </div>
              <div className="text-light-gray text-sm mt-1">
                Step: <span className="text-primary-color">{activeStep}</span>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
