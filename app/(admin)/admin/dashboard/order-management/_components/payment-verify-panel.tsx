"use client";

import VendorPaymentPanel from "@/app/(admin)/admin/dashboard/order-management/_components/vendor-payment-panel";
import type {
  PaymentVerifyTab,
  RequisitionItem,
} from "../_types/order-management.type";
import OfficePaymentVerifyPanel from "@/app/(admin)/admin/dashboard/order-management/_components/office-payment-verify-panel";

export default function PaymentVerifyPanel({
  item,
  tab,
}: {
  item: RequisitionItem;
  tab: PaymentVerifyTab;
}) {
  if (tab === "vendor") return <VendorPaymentPanel item={item} />;
  return <OfficePaymentVerifyPanel item={item} />;
}
