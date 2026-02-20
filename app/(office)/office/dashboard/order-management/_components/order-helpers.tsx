import React from "react";
import { Package, Truck, ClipboardList, FileText } from "lucide-react";
import type { OrderListStatus } from "@/app/(office)/office/types/order-list-type";
import type { OrderStepKey } from "@/app/(office)/office/_components/order-stepper";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function statusAccent(status: OrderListStatus) {
  if (status === "shipped") return "before:bg-blue";
  if (status === "pending_quote") return "before:bg-red";
  if (status === "draft") return "before:bg-green";
  return "before:bg-transparent";
}

export function badgeStyle(status: OrderListStatus) {
  if (status === "active") return "bg-green/10 text-green";
  if (status === "shipped") return "bg-blue/10 text-blue";
  if (status === "pending_quote") return "bg-red/10 text-red";
  if (status === "draft") return "bg-green/10 text-green";
  return "bg-off-white text-light-gray";
}

export function leftIcon(status: OrderListStatus) {
  if (status === "active")
    return <Package className="h-5 w-5 text-primary-color" />;
  if (status === "shipped") return <Truck className="h-5 w-5 text-blue" />;
  if (status === "pending_quote")
    return <ClipboardList className="h-5 w-5 text-red" />;
  if (status === "draft") return <FileText className="h-5 w-5 text-green" />;
  return <Package className="h-5 w-5 text-light-gray" />;
}

export function mapStepper(
  status: OrderListStatus,
  step?: OrderStepKey,
): OrderStepKey {
  if (step) return step;
  if (status === "active") return "processing";
  if (status === "shipped") return "in_transit";
  return "confirmed";
}
