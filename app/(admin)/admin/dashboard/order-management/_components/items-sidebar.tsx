"use client";

import React from "react";
import Card from "@/components/cards/card";
import { ClipboardList } from "lucide-react";

import PaymentVerifySidebar, {
  type PaymentSidebarTab,
} from "./payment-verify-sidebar";
import ShipmentSidebar from "./shipment-sidebar";
import SettlementSidebar from "./settlement-sidebar";
import {
  FlowStepKey,
  RequisitionItem,
} from "@/app/(admin)/admin/dashboard/order-management/_types/order-management.type";

export default function ItemsSidebar({
  step,
  items,
  selectedItemId,
  onSelectItem,

  paymentTab,
  onPaymentTabChange,
}: {
  step: FlowStepKey;
  items: RequisitionItem[];
  selectedItemId: string;
  onSelectItem: (id: string) => void;

  paymentTab?: PaymentSidebarTab;
  onPaymentTabChange?: (t: PaymentSidebarTab) => void;
}) {
  const header =
    step === "payment_verify"
      ? { title: "রিকুইজিশন সারাংশ" }
      : step === "shipment"
        ? { title: "শিপমেন্ট তালিকা" }
        : step === "final_settlement"
          ? { title: "রিকুইজিশন সারাংশ" }
          : { title: "রিকুইজিশন সারাংশ" };

  return (
    <Card className="p-0 overflow-hidden py-4">
      {/* header */}
      <div className="p-4 flex items-center gap-2">
        <span className="p-2 bg-secondary-color/20 rounded-sm text-primary-color">
          <ClipboardList size={18} />
        </span>
        <h1 className="text-black font-bold">{header.title}</h1>
      </div>

      {/* body */}
      {step === "payment_verify" ? (
        <PaymentVerifySidebar
          items={items}
          selectedItemId={selectedItemId}
          onSelectItem={onSelectItem}
          tab={paymentTab ?? "office"}
          onTabChange={onPaymentTabChange ?? (() => {})}
        />
      ) : step === "shipment" ? (
        <ShipmentSidebar
          items={items}
          selectedItemId={selectedItemId}
          onSelectItem={onSelectItem}
        />
      ) : step === "final_settlement" ? (
        <SettlementSidebar
          items={items}
          selectedItemId={selectedItemId}
          onSelectItem={onSelectItem}
        />
      ) : (
        <div className="px-4 pb-4 text-light-gray text-sm">
          এই স্টেপে সাইডবার UI এখনো সেট করা হয়নি
        </div>
      )}
    </Card>
  );
}
